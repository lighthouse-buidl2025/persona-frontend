import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // 백엔드 API로 요청 전달
    const response = await fetch(
      `http://localhost:8000/api/eliza-agent/agents`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Persona data fetch error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
