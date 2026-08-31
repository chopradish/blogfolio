"use client";

import { useState } from "react";
import personal from "../content/personal.json";
import { cn } from "../lib/utils";
import type { MainNavItem, MappableItems } from "../types";
import { Icons } from "./Icons";
import { MobileNav } from "./MobileNav";
import { ModeToggle } from "./ModeToggle";

type MainNavProps = {
  items?: MappableItems<MainNavItem>;
  children?: React.ReactNode;
};

export const MainNav = ({ items, children }: MainNavProps) => {
  const mobileMenuState = useState<boolean>(false);
  const showMobileMenu = mobileMenuState[0];
  const setShowMobileMenu = mobileMenuState[1];

  return (
    <div className="w-full flex justify-between">
      <div className="hidden sm:flex gap-8">
        <a href="/" className="hidden items-center space-x-2 sm:flex">
          <Icons.logo />
          <span className="hidden font-bold sm:inline-block">
            {personal.site.name}
          </span>
        </a>

        {items?.length ? (
          <nav className="hidden gap-4 sm:flex">
            {items?.map((item) => (
              <a
                key={item.title}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors sm:text-sm",
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
        type="button"
        className="flex items-center space-x-2 sm:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">{personal.site.name}</span>
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
