import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Waitlist from "@/models/Waitlist";

interface ValidationError {
  message: string;
}

interface MongoError extends Error {
  code?: number;
  name: string;
  errors?: Record<string, ValidationError>;
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
