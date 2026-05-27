import { Module } from '../types';

export const productivityTools: Module = {
  id: 'productivity-tools',
  title: 'Productivity Tools',
  description: 'Master documents, spreadsheets, cloud storage, and collaboration platforms.',
  icon: '⚡',
  difficulty: 'beginner',
  sections: [
    {
      title: 'Cloud Documents',
      content: `Cloud-based document editors like Google Docs, Microsoft 365, and Notion allow you to create,
      edit, and share documents from any device. Your work is automatically saved and backed up. Multiple
      people can edit the same document simultaneously, making collaboration seamless.`,
    },
    {
      title: 'Spreadsheet Essentials',
      content: `Spreadsheets organize data in rows and columns. Key concepts include cells (the intersection
      of a row and column), formulas (like =SUM(A1:A10) to add numbers), and formatting. Spreadsheets are
      invaluable for budgeting, data analysis, and organizing lists. Google Sheets and Excel are the most
      widely used tools.`,
    },
    {
      title: 'Cloud Storage',
      content: `Cloud storage services like Google Drive, Dropbox, and OneDrive let you store files online
      and access them from any device. Most offer 5-15 GB free. Best practices: organize files into folders,
      use descriptive filenames, and share files with specific people rather than making them public.`,
    },
    {
      title: 'Collaboration Platforms',
      content: `Modern teams use platforms like Slack, Microsoft Teams, and Discord for real-time communication.
      These tools offer channels for organizing conversations by topic, direct messaging, file sharing,
      and video calls. Learning to use these effectively — including setting notification preferences and
      using threads — is essential for remote work.`,
    },
  ],
  quiz: [
    {
      text: 'What is a key advantage of cloud-based documents?',
      options: [
        'They only work offline',
        'Multiple people can edit simultaneously',
        'They require special software',
        'They cannot be shared',
      ],
      correctIndex: 1,
    },
    {
      text: 'In a spreadsheet, what does =SUM(A1:A10) do?',
      options: ['Counts cells', 'Adds the values in cells A1 through A10', 'Sorts the data', 'Deletes the cells'],
      correctIndex: 1,
    },
    {
      text: 'Which is NOT a cloud storage service?',
      options: ['Google Drive', 'Dropbox', 'Notepad', 'OneDrive'],
      correctIndex: 2,
    },
  ],
};
