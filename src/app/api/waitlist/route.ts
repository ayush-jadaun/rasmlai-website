import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Waitlist from "@/models/Waitlist";
import { Resend } from "resend";
import WaitlistEmail from "@/components/email";

interface ValidationError {
  message: string;
}

interface MongoError extends Error {
  code?: number;
  name: string;
  errors?: Record<string, ValidationError>;
}

interface WaitlistEmailParams {
  email: string;
  name: string;
  queueNumber: number;
}

async function sendWaitlistEmail({
  email,
  name,
  queueNumber,
}: WaitlistEmailParams) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data, error } = await resend.emails.send({
      from: "Rasmlai <support@rasmlai.life>", // Use your verified domain
      to: [email],
      subject: `Welcome to Rasmlai! You're #${queueNumber} in line 🌟`,
      html: WaitlistEmail({ name: name, queueNumber: queueNumber }),
      text: `
        Welcome to Rasmlai, ${name}!
        
        Thank you for joining our waitlist. You're #${queueNumber} in line,to begin your emotional wellness journey.
        
        We're building a safe space where you can express anger, sadness, happiness and every emotion in between. Your AI companion is being carefully crafted to listen, understand, and help you process whatever you're feeling.
        What to expect when Rasmlai launches:
        • AI companion trained specifically for emotional support
        • 100% private and secure conversations
        • Guided self-reflection exercises
        • Beautiful, intuitive mobile experience
        • Personalized emotional growth tracking
        
        We'll keep you updated on our progress and notify you as soon as we're ready to launch!
        
        Your emotions matter, Your voice matters with RASMLAI.
        
        Best regards,
        The Rasmlai Team
        
        Questions? Just reply to this email - we'd love to hear from you!
      `,
      headers: {
        "X-Entity-Ref-ID": `waitlist-${Date.now()}`,
      },
      tags: [
        {
          name: "category",
          value: "waitlist_confirmation",
        },
      ],
    });

    if (error) {
      console.error("Error sending email:", error);
      return {
        success: false,
        error:
          typeof error === "object" && error !== null && "message" in error
            ? (error as { message: string }).message
            : String(error),
      };
    }

    console.log("Email sent successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error:
        typeof error === "object" && error !== null && "message" in error
          ? (error as { message: string }).message
          : String(error),
    };
  }
}

// POST - Add to waitlist
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { name, email } = await request.json();

    // Validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await Waitlist.findOne({ email: email.toLowerCase() });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }

    // Create new waitlist entry
    const waitlistEntry = new Waitlist({
      name: name.trim(),
      email: email.toLowerCase().trim(),
    });

    await waitlistEntry.save();

    // Get queue position
    const queueNumber = await Waitlist.countDocuments()+200;

    // Send confirmation email
    const emailResult = await sendWaitlistEmail({
      email: email.toLowerCase().trim(),
      name: name.trim(),
      queueNumber,
    });

    if (emailResult.success) {
      // Update the notified field to true after successful email send
      await Waitlist.findByIdAndUpdate(waitlistEntry._id, { notified: true });

      return NextResponse.json(
        {
          message: "Successfully added to waitlist",
          data: {
            name: waitlistEntry.name,
            email: waitlistEntry.email,
            joinedAt: waitlistEntry.joinedAt,
            notified: true,
          },
        },
        { status: 201 }
      );
    } else {
      // Email failed, so notified remains false
      return NextResponse.json(
        {
          success: false,
          message: "Added to waitlist but failed to send email",
          data: {
            name: waitlistEntry.name,
            email: waitlistEntry.email,
            joinedAt: waitlistEntry.joinedAt,
            notified: false,
          },
        },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error("Waitlist API Error:", error);

    const mongoError = error as MongoError;

    if (mongoError.code === 11000) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }

    if (mongoError.name === "ValidationError") {
      const validationErrors = Object.values(mongoError.errors || {}).map(
        (err: ValidationError) => err.message
      );
      return NextResponse.json(
        { error: validationErrors.join(", ") },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET - Get waitlist entries (admin only)
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "50");
    const search = searchParams.get("search") || "";
    const skip = (page - 1) * limit;

    // Build search query
    let searchQuery = {};
    if (search) {
      searchQuery = {
        $or: [
          { name: { $regex: search, $options: "i" } },
          { email: { $regex: search, $options: "i" } },
        ],
      };
    }

    // Sort by joinedAt in ascending order (oldest first, which is proper waitlist order)
    const [entries, total] = await Promise.all([
      Waitlist.find(searchQuery)
        .sort({ joinedAt: 1 }) // 1 for ascending (oldest first)
        .skip(skip)
        .limit(limit)
        .lean(),
      Waitlist.countDocuments(searchQuery),
    ]);

    return NextResponse.json({
      data: entries,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit),
        hasNext: page * limit < total,
        hasPrev: page > 1,
      },
    });
  } catch (error) {
    console.error("Get waitlist error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
