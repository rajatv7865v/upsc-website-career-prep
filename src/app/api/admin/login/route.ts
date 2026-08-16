import { NextResponse } from "next/server";
import { setAdminSession, verifyAdminPassword } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { password } = (await request.json()) as { password?: string };
    if (!password || !verifyAdminPassword(password)) {
      return NextResponse.json({ error: "Invalid password." }, { status: 401 });
    }

    await setAdminSession();
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Admin login failed:", error);
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 },
    );
  }
}
