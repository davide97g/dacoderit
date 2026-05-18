# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Public marketing website for the "dacoder" project (https://dacoder.it). Pure static/SSG-style Next.js site — no API routes, no database, no auth.

## Commands

Uses Yarn 4 (`packageManager: yarn@4.8.1`, Node >= 20). Do not invoke npm.

- `yarn dev` — dev server with Turbopack (http://localhost:3000)
- `yarn build` — production build
- `yarn start` — serve the production build
- `yarn lint` — `next lint` (ESLint 9, `eslint-config-next`)

No test framework is configured.

## Architecture

- **Next.js 15.2 App Router** with **React 19**. Each top-level route lives in `app/<route>/page.tsx` (`/`, `/youtube`, `/projects`, `/community`, `/roadmap`, `/contact`). The full chrome (header, theme provider, container) is in `app/layout.tsx` — page files render only their own content.
- **Navigation source of truth**: the `links` array in `components/navigation.tsx`. Adding a new route requires both a new `app/<route>/page.tsx` *and* a new entry in that array.
- **Theming**: `next-themes` via `components/theme-provider.tsx` (class strategy, `defaultTheme="system"`, `suppressHydrationWarning` on `<html>`). The toggle is `components/mode-toggle.tsx` (binary light/dark slider, no system option in the UI). Honor the design tokens — `--background`, `--foreground`, `--muted`, `--muted-foreground`, `--rule`, `--accent`, `--paper`, `--ink` — defined in `app/globals.css`. Never hardcode colors; both themes share the same warm-hue family.
- **Styling**: **Tailwind v4** via `@tailwindcss/postcss` with `@import "tailwindcss"` in `app/globals.css`. There is no `tailwind.config.js`; the design tokens live in the `@theme inline { ... }` block in `app/globals.css` and map CSS vars to Tailwind utility classes (e.g. `bg-paper`, `text-ink`, `border-rule`, `text-accent`).
- **Typography**: Two custom fonts loaded via `next/font/google` in `app/layout.tsx`:
  - `Fraunces` — display serif, exposed as `--font-fraunces` / `font-display`. Used for h1–h4 and the `.display-italic` helper (script-y italic for highlights).
  - `Geist` / `Geist_Mono` — body sans + mono, `font-sans` / `font-mono`. Inter is **not** used. Don't reintroduce it.
- **Custom utilities in `globals.css`**: `.link-grow` (underline expands on hover; supports `data-active="true"` for current-route state), `.reveal` (entrance fade-up — set inline `--d` for stagger delay), `.pulse-dot` (in-progress indicator), `.display-italic`, `.text-balance`, `.text-pretty`.
- **shadcn/ui** primitives still live in `components/ui/` (style `new-york`, base color `stone`, RSC enabled, icons from `lucide-react`), but the renovated pages deliberately avoid `Card`/`Badge`/`Button` in favor of editorial list layouts. Keep new primitives consistent with the editorial language (1px rules, mono micro-labels, serif headings) rather than reaching for shadcn cards.
- **Path alias**: `@/*` → repo root (see `tsconfig.json`). Use `@/components`, `@/lib/utils` (`cn` helper), `@/components/ui` consistently.

## Conventions

- `"use client"` is required for anything using hooks, `next-themes`, or interactive state — pages are server components by default. Existing client components: `navigation.tsx`, `mode-toggle.tsx`, `theme-provider.tsx`, `join-discord.tsx`.
- Compose utility classes with `cn()` from `@/lib/utils` (clsx + tailwind-merge) rather than string concatenation, especially when conditionally toggling Tailwind variants.
- Static assets live in `public/` and are referenced with absolute paths (e.g. `/profile-pic.png`).

## Design language (do not deviate without intent)

Editorial Workshop direction. Apply consistently across pages:

- **Container**: `mx-auto w-full max-w-3xl px-6` plus generous vertical padding (`pt-16 pb-24`). No `container` class.
- **Page header pattern**: mono caption (`02 · Index of work`) → large `font-display` h1 with one italicized highlight word via `display-italic` → muted paragraph capped at ~58ch.
- **Content pattern**: lists with `border-y border-rule` dividers, two-column grid `[40px_1fr]` or `[80px_1fr_auto]` where the narrow column carries a mono index/date/label and the wide column carries the serif title + body.
- **Color discipline**: Restrained strategy — neutrals carry 90%+, `--accent` (oxidized green) appears only on the in-progress pulse dot, the selection highlight, and rare emphasis. Don't broaden it.
- **Bans observed**: no card grids, no side-stripe borders >1px, no gradient text, no glassmorphism, no purple, no em dashes in copy.
- **Motion**: stagger entrances with `.reveal` + inline `--d` (typical cadence: 40ms header, then `120ms + i*80ms` for list items). Exponential ease-out (already baked into the keyframe). No bounce.

## Gotchas

- `.env.local` is gitignored but `.env` is checked in — never put secrets in `.env`.
- Apostrophes inside JSX text content trip `react/no-unescaped-entities` and break the build. Use `&apos;` or rewrite the phrase. Apostrophes inside string literals passed via `{expression}` are fine.
- `useTheme()` returns `undefined` on the server. The mode toggle gates its rendering with a `mounted` flag — keep that pattern for any new theme-aware client component.
