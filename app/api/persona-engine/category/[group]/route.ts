import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const limit = searchParams.get("limit") ?? "3";

    // group 추출: pathname 예) /api/persona-engine/category/Whale_Degen
    const segments = url.pathname.split("/");
    const group = segments[segments.length - 1];

    if (!group) {
      return NextResponse.json(
        { success: false, error: "Group parameter is required." },
        { status: 400 }
      );
    }

    const response = await fetch(
      `http://localhost:8000/api/persona-engine/category/${group}?limit=${limit}`,
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
    console.error("Error fetching persona engine category data:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
