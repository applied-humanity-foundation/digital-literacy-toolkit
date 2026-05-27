# Architecture

## Overview

The Digital Literacy Toolkit is a client-side web application built with TypeScript and Vite. The production build (`index.html`) is a self-contained single file for maximum portability. The `src/` directory contains the modular development codebase.

## Directory Structure

```
src/
├── main.ts              → App entry point
├── App.ts               → Main application controller
├── components/          → Reusable UI components
│   ├── ModuleCard.ts    → Learning module card
│   ├── QuizModal.ts     → Quiz overlay with scoring
│   ├── ProgressBar.ts   → Animated progress indicator
│   ├── SearchFilter.ts  → Search + difficulty filter
│   ├── LearningPath.ts  → Visual pathway timeline
│   └── ParticleBackground.ts → Canvas particle animation
├── modules/             → Module definitions (content + quiz data)
│   ├── index.ts         → Module registry
│   └── *.ts             → Individual module files
├── utils/               → Shared utilities
│   ├── storage.ts       → localStorage wrapper
│   ├── analytics.ts     → Privacy-first usage tracking
│   └── i18n.ts          → Internationalization
├── styles/              → CSS stylesheets
│   ├── global.css       → Variables, reset, base styles
│   ├── modules.css      → Module card styles
│   ├── quiz.css         → Quiz modal styles
│   └── responsive.css   → Media queries
└── types/
    └── index.ts         → TypeScript interfaces
```

## Data Flow

```
User Action → Component → Storage (localStorage)
                ↓
            Analytics (local-only, no network)
```

## Key Decisions

- **No framework**: Vanilla TypeScript keeps the bundle small and dependency-free
- **localStorage**: No backend required — progress persists in the browser
- **Single-file build**: The production `index.html` works offline and can be distributed easily
- **i18n**: Simple key-value approach supports EN/ZH without a heavy library
