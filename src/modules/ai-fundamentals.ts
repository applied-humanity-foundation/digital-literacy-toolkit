import { Module } from '../types';

export const aiFundamentals: Module = {
  id: 'ai-fundamentals',
  title: 'AI Fundamentals',
  description: 'Understand what AI is, how large language models work, and how to use AI responsibly.',
  icon: '🧠',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Artificial Intelligence?',
      content: `Artificial Intelligence (AI) refers to computer systems designed to perform tasks that typically
      require human intelligence — such as understanding language, recognizing images, making decisions, and
      generating content. AI is not a single technology but a broad field that includes machine learning,
      natural language processing, computer vision, and robotics.`,
    },
    {
      title: 'How AI Learns',
      content: `Most modern AI systems learn from data through a process called machine learning. The system
      is shown millions of examples and gradually adjusts its internal parameters to recognize patterns.
      Deep learning, a subset of machine learning, uses neural networks with many layers to learn complex
      representations. The quality and diversity of training data directly affects AI performance and fairness.`,
    },
    {
      title: 'Large Language Models',
      content: `Large Language Models (LLMs) like GPT and Claude are trained on vast amounts of text to predict
      the next word in a sequence. This simple objective, scaled up with enormous datasets and computing power,
      produces systems that can write essays, answer questions, translate languages, and write code. However,
      LLMs can also generate plausible-sounding but incorrect information — a phenomenon called "hallucination."`,
    },
    {
      title: 'Prompt Engineering Basics',
      content: `Prompt engineering is the practice of crafting effective instructions for AI systems. Key
      techniques include: being specific about what you want, providing context and examples, breaking complex
      tasks into steps, and asking the AI to explain its reasoning. A well-crafted prompt can dramatically
      improve the quality of AI-generated output.`,
    },
  ],
  quiz: [
    {
      text: 'What is "hallucination" in AI?',
      options: [
        'When AI becomes conscious',
        'When AI generates plausible but incorrect information',
        'When AI crashes',
        'When AI refuses to answer',
      ],
      correctIndex: 1,
    },
    {
      text: 'How do most modern AI systems learn?',
      options: [
        'By being manually programmed with rules',
        'By learning patterns from large amounts of data',
        'By copying human brains',
        'By connecting to the internet in real-time',
      ],
      correctIndex: 1,
    },
    {
      text: 'Which is a good prompt engineering practice?',
      options: [
        'Being as vague as possible',
        'Writing very short prompts',
        'Providing specific context and examples',
        'Using only single-word instructions',
      ],
      correctIndex: 2,
    },
  ],
};
