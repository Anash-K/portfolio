"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { ROUTE_ORDER } from "@/constants/navigation";

export type NavigationDirection = "forward" | "backward";

const NavigationContext = createContext<NavigationDirection>("forward");

export function useNavigationDirection() {
  return useContext(NavigationContext);
}

function normalizePath(path: string) {
  if (path.startsWith("/projects/") && path !== "/projects") return "/projects";
  return path;
}

interface NavigationProviderProps {
  children: ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const pathname = usePathname();
  const [direction, setDirection] = useState<NavigationDirection>("forward");
  const prevPathRef = useRef(normalizePath(pathname));
  const isPopStateRef = useRef(false);

  useEffect(() => {
    const handlePopState = () => {
      isPopStateRef.current = true;
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const normalizedPath = normalizePath(pathname);

    if (isPopStateRef.current) {
      setDirection("backward");
      isPopStateRef.current = false;
    } else {
      const prevIndex = ROUTE_ORDER.indexOf(prevPathRef.current);
      const nextIndex = ROUTE_ORDER.indexOf(normalizedPath);

      if (prevIndex !== -1 && nextIndex !== -1 && prevPathRef.current !== normalizedPath) {
        setDirection(nextIndex >= prevIndex ? "forward" : "backward");
      }
    }

    prevPathRef.current = normalizedPath;
  }, [pathname]);

  return (
    <NavigationContext.Provider value={direction}>
      {children}
    </NavigationContext.Provider>
  );
}
