import { connectDB } from "../../lib/db";
import Task from "../../models/Task";

// GET all tasks
export async function GET() {
  await connectDB();
  const tasks = await Task.find();
  return Response.json(tasks);
}

// POST create task
export async function POST(request) {
  await connectDB();
  const body = await request.json();
  const task = await Task.create(body);
  return Response.json(task, { status: 201 });
}
