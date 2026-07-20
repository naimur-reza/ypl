import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Application from "@/lib/models/application";
import Career from "@/lib/models/career";
import { requireAuth } from "@/lib/api-auth";

export async function GET(req: NextRequest) {
  await connectDB();

  let applications;
  try {
    applications = await Application.find()
      .populate("career", "title")
      .sort({ appliedAt: -1 })
      .lean();
  } catch {
    applications = await Application.find()
      .sort({ appliedAt: -1 })
      .lean();
  }
  return NextResponse.json(applications);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  await connectDB();
  const application = await Application.create(body);
  return NextResponse.json(application, { status: 201 });
}
