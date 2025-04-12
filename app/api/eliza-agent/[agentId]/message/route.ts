import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const url = new URL(request.url);
    const agentId = url.pathname.split("/").pop();

    const body = await request.json();

    const { roomId, text } = body;

    if (!agentId || !roomId || !text) {
      return NextResponse.json(
        { success: false, error: "agentId, roomId, text is required" },
        { status: 400 }
      );
    }

    // 백엔드 API로 요청 전달
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/eliza-agent/${agentId}/message`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          roomId,
          text,
          source: "next",
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
