export const skillCategories = [
  'Frontend',
  'Backend',
  'AI/ML',
  'Tools',
];

export const skills = [
  // FRONTEND
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Redux Toolkit', category: 'Frontend' },
  // { name: 'Vite', category: 'Frontend' },
  { name: 'Framer Motion', category: 'Frontend' },
  { name: 'Three.js', category: 'Frontend' },

  // BACKEND
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'MongoDB', category: 'Backend' },
  { name: 'MySQL', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'OAuth 2.0', category: 'Backend' },
  { name: 'JWT', category: 'Backend' },
  { name: 'API Gateway', category: 'Backend' },
  // { name: 'Firebase', category: 'Backend' },
  // { name: 'Appwrite', category: 'Backend' },
  // { name: 'Cloudinary', category: 'Backend' },

  // AI / ML
  { name: 'Python', category: 'AI/ML' },
  // { name: 'NumPy', category: 'AI/ML' },
  // { name: 'Pandas', category: 'AI/ML' },
  // { name: 'Scikit-learn', category: 'AI/ML' },
  // { name: 'LangChain', category: 'AI/ML' },
  { name: 'Generative AI', category: 'AI/ML' },

  // TOOLS
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Postman', category: 'Tools' },
  // { name: 'Render', category: 'Tools' },
  // { name: 'Regular Expressions', category: 'Tools' },
  { name: 'Debugging', category: 'Tools' },
  { name: 'Problem Solving', category: 'Tools' },
];

export const groupedSkills = skillCategories.map((category) => ({
  category,
  items: skills
    .filter((skill) => skill.category === category)
    .map((skill) => skill.name),
}));