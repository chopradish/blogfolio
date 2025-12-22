"use client";

import { useEffect, useState } from "react";
import { Icons } from "./Icons";

export function ModeToggle() {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    // Ensure the class is applied on mount
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!theme) {
    return (
      <button className="h-8 w-8 px-0 opacity-50" disabled>
        <Icons.sun className="h-4 w-4" />
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-8 w-8 px-0"
        onClick={() => {
          const nextTheme = theme === "light" ? "dark" : "light";
          handleThemeChange(nextTheme);
        }}
        aria-label="Toggle theme"
      >
        <Icons.sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icons.moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  );
}
