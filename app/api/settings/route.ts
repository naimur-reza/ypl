import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Setting from "@/lib/models/setting";
import { requireAuth } from "@/lib/api-auth";

export async function GET(req: NextRequest) {
  await connectDB();
  let setting = await Setting.findOne().lean();
  
  if (!setting) {
    // Upsert first setting if none exists
    setting = await Setting.create({
      siteName: "YPL",
      email: "hr@yespvt.com",
      phone: "+880 1678-000335",
      address: "Dhaka, Bangladesh",
      footerDescription: "Supporting the full talent lifecycle with expert recruitment and career management services.",
      socialLinks: [
        { platform: "Facebook", url: "", icon: "Facebook" },
        { platform: "LinkedIn", url: "", icon: "Linkedin" },
        { platform: "Twitter", url: "", icon: "Twitter" },
        { platform: "Instagram", url: "", icon: "Instagram" },
      ],
    });
  }
  
  return NextResponse.json(setting);
}

export async function POST(req: NextRequest) {
  const auth = await requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  const body = await req.json();
  await connectDB();
  
  const setting = await Setting.findOneAndUpdate({}, body, {
    new: true,
    upsert: true,
  });
  
  return NextResponse.json(setting);
}
