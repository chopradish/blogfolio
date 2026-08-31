"use client";

import personal from "../content/personal.json";
import { cn } from "../lib/utils";
import { Icons } from "./Icons";

type SiteFooterProps = {
  className?: string;
  currentPath?: string;
};

export const SiteFooter = ({
  className,
  currentPath = "",
}: SiteFooterProps) => {
  const segment = currentPath.split("/").filter(Boolean)[0] || "";

  return (
    <footer
      className={cn(
        "border-primary-300 container mt-24 grid grid-cols-1 gap-6 border-t px-5 py-10 md:grid-cols-2",
        className,
      )}
    >
      {/* Nav */}
      <nav className="col-span-1 flex flex-col items-center gap-y-2 md:items-start">
        {personal.navigation.main.map((item) => (
          <a
            key={item.title}
            href={item.disabled ? "#" : item.href}
            className={cn(
              "flex items-center text-lg font-medium transition-colors hover:text-foreground/80",
              item.href.startsWith(`/${segment}`)
                ? "text-foreground"
                : "text-foreground/60",
              item.disabled && "cursor-not-allowed opacity-80",
            )}
          >
            {item.title}
          </a>
        ))}
      </nav>
      {/* Socials */}
      <div className="col-span-1 flex justify-center gap-x-4 md:items-start">
        {personal.navigation.social.map((value) => {
          const IconComponent = Icons[value.icon as keyof typeof Icons];
          return (
            <a
              key={value.href}
              href={value.href}
              className="text-primary-200 hover:text-primary-100"
            >
              {typeof IconComponent === "function" && (
                <IconComponent className="h-6 w-6" />
              )}
            </a>
          );
        })}
      </div>
      <div className="col-span-full">
        <p className="text-center text-sm leading-loose md:text-left">
          Built by{" "}
          <a
            href={personal.site.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            chopradish
          </a>{" "}
          &bull; Hosted on{" "}
          <a
            href="https://pages.cloudflare.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Cloudflare Pages
          </a>{" "}
          &bull; Source Code on{" "}
          <a
            href={personal.site.links.repository}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};
