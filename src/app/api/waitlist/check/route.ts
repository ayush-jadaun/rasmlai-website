import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Waitlist from "@/models/Waitlist";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const existingUser = await Waitlist.findOne({
      email: email.toLowerCase().trim(),
    });

    return NextResponse.json({
      exists: !!existingUser,
      joinedAt: existingUser?.joinedAt || null,
    });
  } catch (error) {
    console.error("Check email error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
