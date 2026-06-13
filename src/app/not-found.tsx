import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24">
      <h1 className="font-display text-7xl font-bold text-gold">404</h1>
      <p className="mt-4 text-lg text-white/60">Page not found</p>
      <Link href="/" className="mt-8">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </main>
  );
}
