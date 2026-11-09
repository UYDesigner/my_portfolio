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
    'Learning DSA, Backend Development & System Design.',
    'I design and develop modern interfaces with React, Tailwind, Motion focusing on usability, performance, and delightful interactions.',
    'Currently a 1st-year MCA Student, I enjoy transforming ideas into polished products, exploring new technologies, refining details, and creating intuitive and memorable experiences.',
  ],
  closing: "If you've read this far, you might be interested in what I do.",
  quote: { text: '“As long as I’m alive, there are infinite chances!”', author: 'Monkey D. Luffy' },
};
