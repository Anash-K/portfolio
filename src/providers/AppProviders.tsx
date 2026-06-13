"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { LoadingProvider } from "@/providers/LoadingProvider";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import { NavigationProvider } from "@/providers/NavigationProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress, CursorGlow } from "@/components/effects/CursorGlow";

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <LoadingProvider>
      <SmoothScrollProvider>
        <NavigationProvider>
          <ScrollProgress />
          <CursorGlow />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NavigationProvider>
      </SmoothScrollProvider>
    </LoadingProvider>
  );
}
