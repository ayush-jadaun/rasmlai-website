import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Waitlist from "@/models/Waitlist";

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

    return NextResponse.json(
      {
        message: "Successfully added to waitlist",
        data: {
          name: waitlistEntry.name,
          email: waitlistEntry.email,
          joinedAt: waitlistEntry.joinedAt,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Waitlist API Error:", error);

    if (error.code === 11000) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }

    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err: any) => err.message
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
    const skip = (page - 1) * limit;

    const [entries, total] = await Promise.all([
      Waitlist.find({}).sort({ joinedAt: -1 }).skip(skip).limit(limit).lean(),
      Waitlist.countDocuments({}),
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
