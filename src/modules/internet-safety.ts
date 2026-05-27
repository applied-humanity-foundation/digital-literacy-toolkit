import { Module } from '../types';

export const internetSafety: Module = {
  id: 'internet-safety',
  title: 'Internet Safety',
  description: 'Protect yourself online with strong passwords, phishing awareness, and privacy practices.',
  icon: '🛡️',
  difficulty: 'beginner',
  sections: [
    {
      title: 'Creating Strong Passwords',
      content: `A strong password is your first line of defense. Use at least 12 characters combining uppercase
      and lowercase letters, numbers, and symbols. Avoid using personal information like birthdays or pet names.
      Consider using a password manager like Bitwarden or 1Password to generate and store unique passwords
      for each account.`,
    },
    {
      title: 'Recognizing Phishing',
      content: `Phishing attacks trick you into revealing personal information through fake emails, websites,
      or messages. Warning signs include urgent language ("Your account will be closed!"), misspelled URLs,
      requests for passwords or credit card numbers, and suspicious sender addresses. Always verify the
      sender before clicking links or downloading attachments.`,
    },
    {
      title: 'Safe Browsing Habits',
      content: `Look for HTTPS (the padlock icon) in your browser's address bar when entering sensitive
      information. Keep your browser updated, use an ad blocker to reduce malicious ads, and be cautious
      when downloading files. Avoid using public Wi-Fi for banking or shopping — use a VPN if you must.`,
    },
    {
      title: 'Two-Factor Authentication',
      content: `Two-factor authentication (2FA) adds a second layer of security beyond your password. After
      entering your password, you verify your identity with a code from an app (like Google Authenticator),
      a text message, or a physical security key. Enable 2FA on all important accounts — email, banking,
      and social media.`,
    },
  ],
  quiz: [
    {
      text: 'Which is the strongest password?',
      options: ['password123', 'MyDog2024', 'j#K9$mP2!xLq', 'qwerty'],
      correctIndex: 2,
    },
    {
      text: 'What is a common sign of a phishing email?',
      options: [
        'It comes from a known contact',
        'It uses urgent language and asks for personal info',
        'It has no attachments',
        'It is written in proper grammar',
      ],
      correctIndex: 1,
    },
    {
      text: 'What does 2FA stand for?',
      options: ['Two-File Authentication', 'Two-Factor Authentication', 'Two-Form Authorization', 'Two-Fast Access'],
      correctIndex: 1,
    },
  ],
};
