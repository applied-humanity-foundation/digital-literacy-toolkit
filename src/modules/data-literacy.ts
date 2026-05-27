import { Module } from '../types';

export const dataLiteracy: Module = {
  id: 'data-literacy',
  title: 'Data Literacy',
  description: 'Read charts, understand basic statistics, and spot misleading data visualizations.',
  icon: '📊',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'Reading Charts and Graphs',
      content: `Charts transform numbers into visual stories. Bar charts compare quantities across categories.
      Line charts show trends over time. Pie charts display parts of a whole. Always check the axes labels,
      scale, and title before interpreting a chart. A truncated Y-axis or inconsistent intervals can make
      small differences look dramatic.`,
    },
    {
      title: 'Averages and Distributions',
      content: `The mean (average) is the sum divided by the count. The median is the middle value when sorted.
      The mode is the most frequent value. In skewed data (like income distributions), the median often gives
      a better picture than the mean. Understanding the difference helps you evaluate claims like "the average
      salary is $75,000" — a few very high earners can pull the mean far above what most people actually earn.`,
    },
    {
      title: 'Correlation vs. Causation',
      content: `Just because two things change together doesn't mean one causes the other. Ice cream sales
      and drowning rates both increase in summer — but ice cream doesn't cause drowning. The hidden variable
      is hot weather. When you see a claimed connection between two trends, ask: Is there a plausible mechanism?
      Could a third factor explain both?`,
    },
    {
      title: 'Spotting Misleading Visualizations',
      content: `Common tricks include: truncating the Y-axis to exaggerate differences, using 3D effects that
      distort proportions, cherry-picking time ranges, and using different scales on dual-axis charts.
      Always look at the actual numbers, check if the scale starts at zero, and consider whether the full
      context is being shown.`,
    },
  ],
  quiz: [
    {
      text: 'Why can a truncated Y-axis be misleading?',
      options: [
        'It makes the chart load faster',
        'It makes small differences look much larger',
        'It adds more data points',
        'It changes the data values',
      ],
      correctIndex: 1,
    },
    {
      text: 'When is the median more useful than the mean?',
      options: [
        'When all values are identical',
        'When the data has extreme outliers',
        'When there are very few data points',
        'When making pie charts',
      ],
      correctIndex: 1,
    },
    {
      text: 'What does "correlation does not imply causation" mean?',
      options: [
        'Data is always wrong',
        'Two things changing together doesn\'t prove one caused the other',
        'Charts cannot show relationships',
        'Statistics are unreliable',
      ],
      correctIndex: 1,
    },
  ],
};
