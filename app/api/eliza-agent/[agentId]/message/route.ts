import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const segments = url.pathname.split("/");
    const agentId = segments[segments.indexOf("eliza-agent") + 1]; // [agentId] 추출

    const body = await request.json();
    const { roomId, text, source } = body;

    if (!roomId || !text) {
      return NextResponse.json(
        { success: false, error: "roomId and text are required" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `http://localhost:8000/api/eliza-agent/${agentId}/message`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roomId, text, source }),
      }
    );

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (err) {
    console.error("Error posting message to eliza-agent:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
