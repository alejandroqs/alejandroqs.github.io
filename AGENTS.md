# Agent Guidelines & Architecture Standards

> **Critical Directive**: All code, comments, documentation, and commit messages must be in **English**.

This document outlines the architectural principles, coding standards, and operational protocols for AI agents working on "The Engineering Switch" portfolio. Follow these guidelines to ensure consistency, scalability, and performance.

## 1. Core Architecture Philosophy

### The "Global Toggle" Paradigm
This application is not just a theme switcher. It is a **dual-content engine**.
-   **Rule #1**: Never hardcode text in components. All text must come from `src/data/content.ts`.
-   **Rule #2**: Components must be reactive to the `mode` ('corporate' | 'disruptor') from `EngineeringContext`.
-   **Rule #3**: Transitions must be fluid. Use `Framer Motion`'s `layout` prop for structural changes and CSS transitions for colors.

### Segregation of Concerns
-   **Data Layer (`src/data/`)**: Pure TypeScript objects defining the content.
-   **Logic Layer (`src/context/`)**: State management for the toggle.
-   **Presentation Layer (`src/components/`)**: Functional components that consume data and state.

## 2. Technical Standards

### TypeScript
-   **Strict Mode**: Enabled. No `any`. Define interfaces for all props and data structures.
-   **Types**: Centralize shared types in `src/types/` or export them adjacent to their data source if tightly coupled (e.g., `content.ts`).

### Tailwind CSS & Styling
-   **Utility First**: Use standard Tailwind classes.
-   **Dynamic Classes**: Use `clsx` or `tailwind-merge` (via `cn` utility) for conditional styling.
    -   *Good*: `className={cn("p-4 transition-colors", mode === 'corporate' ? "bg-white" : "bg-black")}`
    -   *Bad*: Template literals without merging logic.
-   **Theme Tokens**: Use the custom colors defined in `tailwind.config.ts` (e.g., `neon-purple`, `slate-950`).

### Animations (Framer Motion)
-   **Performance**: Prefer animating `opacity` and `transform`. Use `layout` for expensive layout shifts only when necessary.
-   **Consistency**: Use standard durations (e.g., `duration-500`) to match CSS transitions.

## 3. Workflow for Agents

When implementing a new feature or fixing a bug:

1.  **Analyze `content.ts`**: Does the new feature require new text? Update the data structure first.
2.  **Define Types**: Ensure the new data has a corresponding interface.
3.  **Implement Logic**: Add necessary state or hooks.
4.  **Build UI**: Create the component using the `mode` to condition styles/layout.
    -   *Check*: Does it look good in Corporate mode?
    -   *Check*: Does it look good in Disruptor mode?
5.  **Review**: Ensure no hardcoded strings exist.

## 4. Specific Component Behaviors

-   **Hero Section**: Intro text changes completely between modes.
-   **Skills Section**:
    -   **Left Column**: Always "Enterprise/Web2" skills.
    -   **Right Column**: Always "Web3/Crypto" skills.
    -   *Styling*: Corporate uses cards/shadows. Disruptor uses glow/neon/transparency.
-   **Projects**:
    -   Order of projects can change based on importance in the current mode.
    -   "Highlight" flags in `content.ts` determine visual emphasis.

## 5. Tone & Persona

-   **Corporate Agent Identity**: Precision, Reliability, Scalability.
-   **Disruptor Agent Identity**: Innovation, Decentralization, Cryptographic Truth.
-   **Your Role**: You are the bridge. You write clean, solid code that powers this duality.

## 6. Agent Skills

This project is equipped with specialized skills located in `.agent/skills`. Agents MUST refer to the `SKILL.md` within these directories to understand how and when to use them.

### a. Next.js Best Practices (`next-best-practices`)
- **Location**: `.agent/skills/next-best-practices/SKILL.md`
- **Description**: Comprehensive detailed guide on Next.js best practices, covering file conventions, RSC boundaries, data patterns, async APIs, metadata, error handling, route handlers, image/font optimization, and bundling.
- **When to Use**: ALWAYS consult this skill when writing or reviewing Next.js code to ensure adherence to modern standards and avoid common pitfalls.

### b. Next.js Cache Components (`next-cache-components`)
- **Location**: `.agent/skills/next-cache-components/SKILL.md`
- **Description**: Deep dive into Next.js 16+ caching mechanisms, including Partial Prerendering (PPR), `use cache` directive, `cacheLife`, `cacheTag`, and `updateTag`.
- **When to Use**: When implementing data fetching, caching strategies, or optimizing performance using Next.js 16+ features.

### c. Next.js Upgrade Assistant (`next-upgrade`)
- **Location**: `.agent/skills/next-upgrade/SKILL.md`
- **Description**: A systematic guide for upgrading Next.js versions, including using official codemods, handling breaking changes, and updating dependencies.
- **When to Use**: When the user requests to upgrade the Next.js version or related dependencies.

### d. UI/UX Pro Max (`ui-ux-pro-max`)
- **Location**: `.agent/skills/ui-ux-pro-max/SKILL.md`
- **Description**: A powerful design intelligence engine providing styles, color palettes, font pairings, chart types, and UX guidelines. It includes a Python script to generate design systems based on user requirements.
- **When to Use**: When the user requests UI/UX design, implementation, or improvements. Follow the workflow defined in the skill to generate a consistent design system before coding.
