import connectDB from "@/lib/db";
import Task from "@/models/Task";

export async function GET() {
  await connectDB();
  const tasks = await Task.find().sort({ createdAt: -1 });
  return Response.json(tasks);
}

export async function POST(req) {
  await connectDB();
  const { title } = await req.json();

  if (!title) {
    return Response.json({ error: "Title required" }, { status: 400 });
  }

  const task = await Task.create({ title });
  return Response.json(task, { status: 201 });
}

export async function PUT(req) {
  await connectDB();
  const { id, completed } = await req.json();

  const task = await Task.findByIdAndUpdate(
    id,
    { completed },
    { new: true }
  );

  return Response.json(task);
}

export async function DELETE(req) {
  await connectDB();
  const { id } = await req.json();

  await Task.findByIdAndDelete(id);
  return Response.json({ message: "Task deleted" });
}
