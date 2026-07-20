import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Application from "@/lib/models/application";
import Career from "@/lib/models/career";
import mongoose from "mongoose";

export async function GET(req: NextRequest) {
  await connectDB();

  const applications = await Application.find()
    .sort({ appliedAt: -1 })
    .lean();

  // Manually resolve career IDs to titles
  const careerIds = [
    ...new Set(
      applications
        .map((a) => {
          if (a.career && typeof a.career === "object" && (a.career as any)._id) return String((a.career as any)._id);
          return a.career ? String(a.career) : null;
        })
        .filter(Boolean)
    ),
  ];

  let careerMap: Record<string, string> = {};
  if (careerIds.length) {
    const validIds = careerIds.filter((id) => mongoose.Types.ObjectId.isValid(id));
    if (validIds.length) {
      const careers = await Career.find({ _id: { $in: validIds } }).lean();
      careers.forEach((c) => {
        careerMap[String(c._id)] = c.title;
      });
    }
  }

  const result = applications.map((a) => {
    const careerId = a.career && typeof a.career === "object" && (a.career as any)._id
      ? String((a.career as any)._id)
      : a.career ? String(a.career) : null;
    return {
      ...a,
      career: careerId && careerMap[careerId]
        ? { _id: careerId, title: careerMap[careerId] }
        : a.career,
    };
  });

  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  await connectDB();
  const application = await Application.create(body);
  return NextResponse.json(application, { status: 201 });
}
