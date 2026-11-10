type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type MappableItems<T> = {
  readonly length: number;
  map<U>(callback: (item: T, index: number) => U): U[];
};

export type SocialNavItem = NavItem & {
  icon: string;
};

export type NavConfig = {
  mainNav: MainNavItem[];
  socialNav: SocialNavItem[];
};

export type Project = {
  id: number;
  title: string;
  desc: string;
  stack: string[];
  link: string;
  ext?: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  links: {
    twitter: string;
    repository: string;
  };
};
