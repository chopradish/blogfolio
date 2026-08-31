# AGENTS.md — Blogfolio Operating Guide

## Purpose and audience

This is Aditya Chopra’s personal technical site. Its priorities, in order, are:

1. A credible research and recruiting portfolio.
2. A technical blog for technically sophisticated readers.
3. A personal digital garden.

The homepage, experience, and projects should help recruiters quickly understand the work and its impact. Blog pages should serve readers who expect technical depth. The site may eventually include a small number of personal posts about experiences at CMU or Databricks, but it is otherwise technical.

## Non-negotiable editorial boundaries

- **Do not write, rewrite, paraphrase, summarize, retitle, or otherwise alter prose** in blog posts, biography copy, project descriptions, career history, or other authored content. Agents work on design and implementation only.
- Do not add content or claims. All public claims must be cited or directly derived from verifiable source material; speculation is not publishable.
- Do not infer, expose, or add personal details, employer information, opinions, or non-technical content.
- If a requested design change needs new copy, content, screenshots, or a public claim, identify the need and wait for the human to provide or approve it.

The intended authorial voice—when evaluating how presentation supports existing content—is rigorous, opinionated, humble, and occasionally playful. Do not replace it with generic marketing language.

## Design philosophy

Build **tastefully minimal brutalism with personality**:

- Prefer a clear information hierarchy, strong typography, generous whitespace, and deliberate, restrained contrast over decorative effects.
- A design element must clarify content, navigation, feedback, or identity. Remove ornament that does none of these.
- Keep pages low-motion. Subtle, brief interaction feedback is acceptable; avoid autoplay, parallax, large entrance sequences, distracting hover choreography, and flashy effects unless specifically requested.
- Preserve a fast, calm, technical reading experience across light and dark themes.
- Do not introduce third-party tracking, analytics, advertising, fingerprinting, or needless external embeds.

## Accessibility and loading behavior

Accessibility is a feature, not a later polish pass. For every UI change:

- Use semantic landmarks, headings, controls, and native elements before ARIA.
- Ensure full keyboard access, a visible focus state, adequate contrast in both themes, descriptive labels, and meaningful image alt text. Decorative images must use empty alt text.
- Respect `prefers-reduced-motion`; animations must not be necessary to understand or operate the interface.
- Check responsive layouts, readable line lengths, zoom/reflow, and touch target sizes.
- When asynchronous UI requires a loading state, prefer a layout-stable skeleton over a spinner. Avoid loading states when static/server-rendered content removes the need for one.

## Architecture and implementation

- This is an Astro 5 static site, deployed to Cloudflare Pages. Use Astro by default.
- Use React only for genuinely interactive, client-side behavior. Avoid hydration for static presentation; every `client:*` directive must have a user-facing justification.
- Prefer server/static rendering, native browser capabilities, and CSS before client JavaScript.
- Blog content lives in `src/content/blog/` as Markdown/MDX, with its schema in `src/content.config.ts`. Do not modify post prose or frontmatter without explicit authorization.
- Shared site metadata/navigation and portfolio data live in `src/config/index.ts`; treat changes to public links, career history, and project copy as editorial changes requiring approval.
- Global styles live in `src/styles/globals.css`. Follow existing Tailwind v4 conventions and use the configured theme rather than introducing ad-hoc global styling.
- Math rendering uses `remark-math` and `rehype-katex`; preserve it when changing blog presentation.
- Use TypeScript and keep component boundaries small and purposeful. Prefer an accessible native HTML control over an icon-only custom control.
- New dependencies are permitted only when they provide a necessary, non-trivial capability that cannot be reasonably implemented with the existing stack. Before adding one, explain its bundle, privacy, maintenance, and accessibility impact and obtain approval when the choice is not clearly necessary.

## Protected configuration and public behavior

Do **not** modify any of the following unless the human explicitly asks:

- `wrangler.jsonc` or Cloudflare deployment settings
- domain, canonical URL, Open Graph, or other SEO configuration
- RSS feed, sitemap, or URL behavior
- analytics/tracking, privacy behavior, or external services
- dependencies or lockfiles outside the dependency process above

When an improvement touches a protected area, propose it with the user impact, risk, and rollback path, then wait for sign-off.

## Validation and delivery

For implementation changes:

1. Run formatting/lint checks appropriate to the changed files (Biome is configured in `biome.json`).
2. Run `pnpm build` before declaring the work complete.
3. Check the affected UI at relevant mobile and desktop widths, in light and dark themes, and by keyboard when applicable.
4. Human visual verification and sign-off are required before the change is considered accepted. Agents can report what needs review but cannot claim that sign-off.

For documentation-only changes, state that no build was run unless one was requested.

## Git workflow

- Deployment and release updates belong on branches named `rel_yyyymmdd`.
- Other development may use normal feature branches. Prefer stacked Git branches when practical.
- Keep changes narrowly scoped. Do not reformat unrelated files, alter lockfiles incidentally, or commit generated output.
- In the final handoff, list changed paths, validation performed, and any required human visual checks or approvals.
