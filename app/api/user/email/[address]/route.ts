import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { address: string } }
) {
  try {
    const { address } = params;
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }
    console.log("email received from router.ts", email);
    // 백엔드 API로 요청 전달
    const response = await fetch(
      `http://localhost:8000/api/user/email/${address}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Email update error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
