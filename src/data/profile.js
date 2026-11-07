// EDIT ME: everything personal lives in /src/data. Placeholders are in [brackets].
// Empty strings ('') mean "not provided yet". Unfilled links are shown dimmed in
// dev and hidden in production builds.
export const profile = {
  name: 'Urvashi Yadav', // e.g. 'Jane Doe'
  handle: 'Urva', // <yourname /> logo
  role: 'Full-Stack Developer',
  roleFocus: 'Exploring AI/ML Engineering',
  location: 'Delhi, India', // e.g. 'City, Country'
  avatarUrl: '/profile_pic.jfif', // e.g. '/avatar.png' (file in /public)
  bannerUrl: '/banner.gif', // e.g. '/banner.png' (file in /public)
  email: 'urvashiyadav678@gmail.com',
  resumeUrl: '', // e.g. '/resume.pdf'
  socials: [
    { id: 'github', label: 'GitHub', url: 'https://github.com/UYDesigner' }, // also powers the GitHub Activity graph
    { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/urvashi-yadav-56b932286/' },
    { id: 'x', label: 'X', url: 'https://x.com/uruvanshii' },
  ],
  // **double asterisks** render as bold, underlined phrases.
  background: [
    "I'm a **Full-Stack Developer** exploring **AI/ML engineering**.",
    '[Add what you build and the tools you use.]',
    '[Add what you are focused on or learning right now.]',
  ],
  closing: "If you've read this far, you might be interested in what I do.",
  quote: { text: '“As long as I’m alive, there are infinite chances!”', author: 'Monkey D. Luffy' },
};
