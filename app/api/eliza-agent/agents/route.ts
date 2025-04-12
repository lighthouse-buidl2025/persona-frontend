import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/eliza-agent/agents`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("backend url::", process.env.NEXT_PUBLIC_BACKEND_URL);

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Failed to fetch agents:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
