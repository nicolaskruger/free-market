import { registerUser } from "@/server/repository/user/register-user";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const user: User = await request.json();

  try {
    await registerUser(user);
    return NextResponse.json({ msg: "register with success" }, { status: 201 });
  } catch (error) {
    const e = error as Error;
    return NextResponse.json({ msg: e.message }, { status: 409 });
  }
}
