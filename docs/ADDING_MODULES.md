# Adding New Modules

This guide explains how to add a new learning module to the Digital Literacy Toolkit.

## Step 1: Create the Module File

Create a new TypeScript file in `src/modules/`:

```typescript
// src/modules/your-module.ts
import { Module } from '../types';

export const yourModule: Module = {
  id: 'your-module',           // Unique slug
  title: 'Your Module Title',
  description: 'A brief description of what this module covers.',
  icon: '📚',                  // Single emoji
  difficulty: 'beginner',      // 'beginner' or 'intermediate'
  sections: [
    {
      title: 'Section Title',
      content: 'Educational content for this section...',
    },
    // Add 3-5 sections
  ],
  quiz: [
    {
      text: 'Question text?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctIndex: 1,         // 0-based index of correct answer
    },
    // Add at least 3 questions
  ],
};
```

## Step 2: Register the Module

Add your module to `src/modules/index.ts`:

```typescript
import { yourModule } from './your-module';

export const modules: Module[] = [
  // ...existing modules
  yourModule,
];
```

## Step 3: Add Content Files

Create corresponding Markdown files in `content/en/` and `content/zh/`:

- `content/en/your-module.md` — English content
- `content/zh/your-module.md` — Chinese translation

## Step 4: Test

Run the test suite to verify your module meets all requirements:

```bash
npm test
```

The test suite checks that all modules have unique IDs, valid difficulty levels, at least 3 quiz questions, and non-empty content.

## Guidelines

- Keep language accessible for the target difficulty level
- Include real-world examples and practical tips
- Quiz questions should test understanding, not memorization
- Provide 4 options per question with one clearly correct answer
