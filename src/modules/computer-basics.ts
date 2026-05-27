import { Module } from '../types';

export const computerBasics: Module = {
  id: 'computer-basics',
  title: 'Computer Basics',
  description: 'Learn file management, OS navigation, and essential keyboard shortcuts.',
  icon: '🖥️',
  difficulty: 'beginner',
  sections: [
    {
      title: 'Understanding Your Computer',
      content: `A computer is a machine that processes information. Whether you use a desktop, laptop, or tablet,
      the basic concepts remain the same. The operating system (like Windows, macOS, or Linux) is the software
      that manages your computer's hardware and provides a user interface for you to interact with.`,
    },
    {
      title: 'The Desktop Environment',
      content: `Your desktop is the main screen you see after logging in. It contains icons for applications,
      a taskbar or dock for quick access to programs, and a system tray showing the time, network status,
      and notifications. You can customize your desktop by changing the wallpaper, rearranging icons,
      and pinning frequently used applications.`,
    },
    {
      title: 'File Management',
      content: `Files are organized in folders (also called directories). Think of it like a filing cabinet —
      folders contain files and can also contain other folders. Common file types include documents (.docx, .pdf),
      images (.jpg, .png), and videos (.mp4). Learning to organize your files into a logical folder structure
      will save you significant time.`,
    },
    {
      title: 'Keyboard Shortcuts',
      content: `Keyboard shortcuts let you perform actions quickly without using the mouse. Essential shortcuts
      include Ctrl+C (copy), Ctrl+V (paste), Ctrl+Z (undo), Ctrl+S (save), and Alt+Tab (switch windows).
      On macOS, use the Command key instead of Ctrl. Mastering these shortcuts can dramatically improve
      your productivity.`,
    },
  ],
  quiz: [
    {
      text: 'What does Ctrl+Z do on most computers?',
      options: ['Copy selected text', 'Undo the last action', 'Close the window', 'Save the file'],
      correctIndex: 1,
    },
    {
      text: 'What is the purpose of an operating system?',
      options: [
        'To browse the internet',
        'To manage hardware and provide a user interface',
        'To create documents',
        'To store photos',
      ],
      correctIndex: 1,
    },
    {
      text: 'Which of these is a common image file extension?',
      options: ['.docx', '.exe', '.jpg', '.mp3'],
      correctIndex: 2,
    },
  ],
};
