"use client";

import { useEffect } from "react";
import { siteConfig } from "../config";
import { cn } from "../lib/utils";
import type { MainNavItem } from "../types";
import { Icons } from "./Icons";

type MobileNavProps = {
  items: MainNavItem[];
  children?: React.ReactNode;
  onClose: () => void;
};

export const MobileNav = ({ items, children, onClose }: MobileNavProps) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 top-20 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto pb-24 animate-in slide-in-from-top-10 md:hidden bg-white dark:bg-gray-950 p-4 text-gray-900 dark:text-gray-100 shadow-sm",
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          <a
            href={"/"}
            className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
          >
            Home
          </a>
          {items.map((item, index) => (
            <a
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60",
              )}
            >
              {item.title}
            </a>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
};
