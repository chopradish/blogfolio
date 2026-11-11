# Blogfolio

A static personal site and technical blog built with Astro 7, Tailwind CSS 4,
and Markdown/MDX. Pages are generated at build time for Cloudflare Pages;
static presentation does not require client hydration.

## Requirements

- Node.js 22.23.4 or newer
- pnpm

Install dependencies with `pnpm install`.

## Local commands

| Command               | Purpose                                                      |
| --------------------- | ------------------------------------------------------------ |
| `pnpm dev`            | Start the Astro development server                           |
| `pnpm astro dev stop` | Stop the development server                                  |
| `pnpm preview`        | Preview the production build                                 |
| `pnpm lint`           | Run Biome checks                                             |
| `pnpm typecheck`      | Check Astro templates and TypeScript                         |
| `pnpm test`           | Run focused unit tests                                       |
| `pnpm build`          | Generate the static site in `dist/`                          |
| `pnpm check`          | Run lint, Astro checks, unit tests, and the production build |

Astro may keep its development server running after the start command returns.
Use the stop command when finished.

Validation is local. There is no CI or layout/output-parity test suite.
Biome checks supported script/style files; its unused-symbol rules are disabled
for `.astro` files because they do not account for template references.
Astro's checker handles template-aware unused-symbol and type checks instead.

## Content and implementation

- `src/content/personal.json`: profile data, navigation, and featured projects.
- `src/content/career/*.mdx`: career entries, rendered on the homepage and resume.
- `src/content/blog/*.{md,mdx}`: authored posts and frontmatter.
- `src/content.config.ts`: content schemas.
- `src/components/BlogCard.astro`: shared homepage/blog-index cards.
- `src/components/ThemePortrait.astro`: responsive, theme-aware portrait with a
  no-JavaScript fallback. Only the active theme's image is requested initially.
- `src/styles/globals.css`: global styles and theme tokens.

Career frontmatter includes `order`, `org`, `position`, `time`, `loc`, and `tags`.
Entries sort by descending `order`. Category tags are `databases`, `systems`,
`ML`, and `misc`; the hidden `featured` tag selects the homepage's default set.
The resume includes every entry.

## Markdown and images

Sätteri compiles Markdown and MDX at build time. `src/lib/markdown-math.ts`
pre-renders KaTeX HTML and accessible MathML; the existing KaTeX stylesheet
provides presentation. Existing KaTeX display-line-break syntax is explicitly
supported; other compatibility warnings remain enabled and invalid TeX is
rendered visibly. Typography uses Sätteri’s native defaults. The math adapter
does not add a client-side renderer.

Astro generates responsive image variants. Keep `sizes` in sync with the CSS
column widths when changing card, portrait, or article layouts. Blog diagrams
retain their full-size links and authored alternative text.

## Accessibility and review

Preserve keyboard focus indicators, the skip link, semantic heading levels,
landmarks, contrast in both themes, and reduced-motion behavior. Changes to
notch/safe-area handling still require real iPhone Safari verification.

See `AGENTS.md` for editorial boundaries and implementation guidance. Authored
post, biography, project, and career copy must not be rewritten by agents.

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
