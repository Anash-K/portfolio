"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Mail,
  Trash2,
  Eye,
  EyeOff,
  LogOut,
  RefreshCw,
  Inbox,
  Clock,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface Submission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
}

interface Stats {
  total: number;
  unread: number;
  today: number;
}

export function AdminDashboard() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, unread: 0, today: 0 });
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Submission | null>(null);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/submissions");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      setSubmissions(data.submissions);
      setStats(data.stats);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const toggleRead = async (submission: Submission) => {
    const res = await fetch(`/api/admin/submissions/${submission.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ read: !submission.read }),
    });
    if (res.ok) {
      fetchSubmissions();
      if (selected?.id === submission.id) {
        setSelected({ ...submission, read: !submission.read });
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this submission permanently?")) return;
    const res = await fetch(`/api/admin/submissions/${id}`, { method: "DELETE" });
    if (res.ok) {
      if (selected?.id === id) setSelected(null);
      fetchSubmissions();
    }
  };

  const openSubmission = async (submission: Submission) => {
    setSelected(submission);
    if (!submission.read) {
      await fetch(`/api/admin/submissions/${submission.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: true }),
      });
      fetchSubmissions();
    }
  };

  const filtered = submissions.filter((s) => {
    if (filter === "unread") return !s.read;
    if (filter === "read") return s.read;
    return true;
  });

  const formatDate = (date: string) =>
    new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(date));

  return (
    <div className="min-h-screen bg-black px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-white md:text-3xl">
              Contact Submissions
            </h1>
            <p className="mt-1 text-sm text-white/50">
              View and manage messages from your portfolio contact form
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" onClick={fetchSubmissions}>
              <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
              Refresh
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut size={16} />
              Logout
            </Button>
          </div>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Total Messages", value: stats.total, icon: Inbox },
            { label: "Unread", value: stats.unread, icon: MessageSquare },
            { label: "Today", value: stats.today, icon: Clock },
          ].map((stat) => (
            <Card key={stat.label} className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                <stat.icon size={18} className="text-gold" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/50">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mb-4 flex gap-2">
          {(["all", "unread", "read"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors",
                filter === f
                  ? "bg-gold text-black"
                  : "text-white/50 hover:text-white"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Card className="max-h-[600px] overflow-y-auto p-0">
              {loading ? (
                <p className="p-6 text-center text-white/50">Loading...</p>
              ) : filtered.length === 0 ? (
                <p className="p-6 text-center text-white/50">No submissions yet</p>
              ) : (
                <ul className="divide-y divide-white/5">
                  {filtered.map((submission) => (
                    <li key={submission.id}>
                      <button
                        onClick={() => openSubmission(submission)}
                        className={cn(
                          "w-full px-4 py-4 text-left transition-colors hover:bg-white/[0.03]",
                          selected?.id === submission.id && "bg-gold/5",
                          !submission.read && "border-l-2 border-l-gold"
                        )}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <p className="truncate font-medium text-white">
                              {submission.name}
                            </p>
                            <p className="truncate text-sm text-white/50">
                              {submission.subject}
                            </p>
                          </div>
                          {!submission.read && (
                            <Badge variant="gold" className="shrink-0 text-[10px]">
                              New
                            </Badge>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-white/35">
                          {formatDate(submission.createdAt)}
                        </p>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </div>

          <div className="lg:col-span-3">
            {selected ? (
              <Card>
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-white">{selected.subject}</h2>
                    <p className="mt-1 text-sm text-white/50">
                      {formatDate(selected.createdAt)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => toggleRead(selected)}
                    >
                      {selected.read ? (
                        <>
                          <EyeOff size={14} /> Mark Unread
                        </>
                      ) : (
                        <>
                          <Eye size={14} /> Mark Read
                        </>
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(selected.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 size={14} />
                      Delete
                    </Button>
                  </div>
                </div>

                <div className="mb-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <p className="text-xs text-white/40">Name</p>
                    <p className="mt-1 font-medium text-white">{selected.name}</p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <p className="text-xs text-white/40">Email</p>
                    <a
                      href={`mailto:${selected.email}`}
                      className="mt-1 flex items-center gap-1 font-medium text-gold hover:underline"
                    >
                      <Mail size={14} />
                      {selected.email}
                    </a>
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-white/40">
                    Message
                  </p>
                  <p className="whitespace-pre-wrap leading-relaxed text-white/70">
                    {selected.message}
                  </p>
                </div>
              </Card>
            ) : (
              <Card className="flex h-64 items-center justify-center">
                <p className="text-white/40">Select a submission to view details</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
