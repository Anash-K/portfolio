import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  glass?: boolean;
}

export function Card({ children, className, glass = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/5 p-6",
        glass && "bg-white/[0.03] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
