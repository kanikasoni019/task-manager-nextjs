import connectDB from "@/lib/db";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  await connectDB();
  const tasks = await Task.find().sort({ createdAt: -1 });
  return NextResponse.json(tasks);
}

export async function POST(req) {
  await connectDB();
  const { title } = await req.json();
  const task = await Task.create({ title });
  return NextResponse.json(task);
}
