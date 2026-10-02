export interface SkillGroup {
  name: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Languages',
    items: ['Python', 'C++', 'Java', 'C#', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Vite'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Express', '.NET Core', 'Flask', 'REST APIs', 'Microservices', 'Socket.io'],
  },
  {
    name: 'Data',
    items: ['MongoDB', 'PostgreSQL', 'SQL Server'],
  },
  {
    name: 'Infrastructure & delivery',
    items: ['Docker', 'Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'Postman'],
  },
  {
    name: 'Engineering',
    items: ['DSA', 'System design', 'OOP', 'Testing', 'NLP', 'Agile / Scrum'],
  },
];

export interface EngineeringFocus {
  title: string;
  description: string;
}

export const engineeringFocus: EngineeringFocus[] = [
  {
    title: 'Scalable systems',
    description: 'Break application problems into clear service boundaries and dependable data flows.',
  },
  {
    title: 'Real-time applications',
    description: 'Design responsive event flows for clients that need to stay in sync.',
  },
  {
    title: 'API design',
    description: 'Keep service interfaces explicit, validated, and straightforward to integrate.',
  },
  {
    title: 'Performance',
    description: 'Measure response paths and rendering work; focus improvements where they matter.',
  },
  {
    title: 'Testing & CI/CD',
    description: 'Use automated tests and delivery checks to make changes safer to ship.',
  },
  {
    title: 'Applied AI',
    description: 'Apply NLP techniques to unstructured text and evaluate model results against real tasks.',
  },
];
