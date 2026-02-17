# Alejandro Quesada - Portfolio

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## Project Overview

This portfolio is a high-performance Single Page Application (SPA) portfolio designed to showcase the duality of a modern software architect. The core feature is a **Global Toggle** mechanism that instantly transforms the entire application's content, styling, and tone between two distinct personas:

1.  **Corporate Mode (Web2)**: A clean, minimalist, and professional interface emphasizing enterprise stability, scalability, and traditional full-stack engineering.
2.  **Disruptor Mode (Web3)**: A cyberpunk-inspired, high-contrast interface highlighting blockchain innovation, smart contract security, and decentralized protocols.

## Key Features

-   **Dual-State Architecture**: Powered by a custom React Context (`EngineeringContext`) managing global state for theme and content.
-   **Dynamic Content Engine**: All textual content is segregated in a type-safe `content.ts` file, ensuring instant, glitch-free text swaps without page reloads.
-   **Advanced Animations**: Leveraging **Framer Motion** for complex layout transitions (`layout` prop), localized component reshuffling, and smooth orchestrations.
-   **Theme System**: Custom **Tailwind CSS** configuration using CSS variables and data attributes to handle sophisticated color palette shifts (Slate/White vs. Neon/Dark).

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `src/data/content.ts`: **The Source of Truth**. Contains all text for both modes.
-   `src/context/EngineeringContext.tsx`: Manages the global toggle state.
-   `src/components/sections/`: Major UI blocks (Hero, Skills, Projects, Experience).
-   `tailwind.config.ts`: Defines the custom color palettes and animation utilities.

## Technologies Used

-   **Framework**: Next.js 15+ (App Router)
-   **Language**: TypeScript (Strict Mode)
-   **Styling**: Tailwind CSS, PostCSS
-   **Animation**: Framer Motion
-   **Icons**: Lucide React
