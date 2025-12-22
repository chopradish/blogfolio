"use client";

import { useState } from "react";
import { siteConfig } from "../config";
import { cn } from "../lib/utils";
import type { MainNavItem } from "../types";
import { Icons } from "./Icons";
import { MobileNav } from "./MobileNav";
import { ModeToggle } from "./ModeToggle";

type MainNavProps = {
  items?: MainNavItem[];
  children?: React.ReactNode;
  currentPath?: string;
};

export const MainNav = ({
  items,
  children,
  currentPath = "",
}: MainNavProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-between">
      <div className="hidden sm:flex gap-8">
        <a href="/" className="hidden items-center space-x-2 sm:flex">
          <Icons.logo />
          <span className="hidden font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </a>

        {items?.length ? (
          <nav className="hidden gap-4 sm:flex">
            {items?.map((item, index) => (
              <a
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-color sm:text-sm",
                  item.disabled
                    ? "text-gray-400"
                    : "text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                {item.title}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
      <button
        className="flex items-center space-x-2 sm:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">{siteConfig.name}</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items} onClose={() => setShowMobileMenu(false)}>
          {children}
        </MobileNav>
      )}
      <ModeToggle />
    </div>
  );
};
