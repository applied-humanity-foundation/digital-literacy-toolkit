import { Module } from '../types';

export const digitalCommunication: Module = {
  id: 'digital-communication',
  title: 'Digital Communication',
  description: 'Master professional email, video calls, messaging etiquette, and online collaboration.',
  icon: '💬',
  difficulty: 'beginner',
  sections: [
    {
      title: 'Professional Email Writing',
      content: `A professional email should have a clear subject line, a greeting, a concise body, and a
      closing. Keep paragraphs short. Use "Reply All" sparingly. Proofread before sending. Avoid ALL CAPS
      (it reads as shouting) and excessive exclamation marks. When forwarding, add context about why
      you're sending it.`,
    },
    {
      title: 'Video Call Best Practices',
      content: `Test your audio and video before important calls. Use a neutral background or a virtual
      background. Mute yourself when not speaking to reduce background noise. Look at the camera (not the
      screen) to make eye contact. In group calls, use the "raise hand" feature rather than interrupting.
      Ensure adequate lighting — face a window or use a desk lamp.`,
    },
    {
      title: 'Messaging and Chat Etiquette',
      content: `In workplace messaging (Slack, Teams, Discord), use channels appropriately — don't post
      general questions in specialized channels. Use threads to keep conversations organized. Set your
      status to indicate availability. Respect others' "Do Not Disturb" time. Use @mentions thoughtfully —
      tag specific people rather than @everyone unless truly necessary.`,
    },
    {
      title: 'Managing Digital Notifications',
      content: `Notification overload reduces productivity and increases stress. Audit your notification
      settings: disable non-essential alerts, schedule "Do Not Disturb" periods for focused work, and batch
      check messages at set intervals. Most communication does not require an immediate response. Setting
      boundaries around digital communication is essential for well-being.`,
    },
  ],
  quiz: [
    {
      text: 'When should you use "Reply All" in email?',
      options: [
        'Always, to keep everyone informed',
        'Only when everyone on the thread needs to see your response',
        'Never, it\'s considered rude',
        'Only for the first reply',
      ],
      correctIndex: 1,
    },
    {
      text: 'What should you do when not speaking on a video call?',
      options: ['Leave your microphone on', 'Turn off your camera', 'Mute your microphone', 'Leave the call'],
      correctIndex: 2,
    },
    {
      text: 'What is a benefit of using threads in messaging apps?',
      options: [
        'Messages disappear automatically',
        'Conversations stay organized by topic',
        'Only admins can see them',
        'They send faster',
      ],
      correctIndex: 1,
    },
  ],
};
