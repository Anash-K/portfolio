import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: "desc" },
    });

    const stats = {
      total: submissions.length,
      unread: submissions.filter((s) => !s.read).length,
      today: submissions.filter((s) => {
        const today = new Date();
        const created = new Date(s.createdAt);
        return (
          created.getDate() === today.getDate() &&
          created.getMonth() === today.getMonth() &&
          created.getFullYear() === today.getFullYear()
        );
      }).length,
    };

    return NextResponse.json({ submissions, stats });
  } catch (error) {
    console.error("Fetch submissions error:", error);
    return NextResponse.json({ error: "Failed to fetch submissions" }, { status: 500 });
  }
}
