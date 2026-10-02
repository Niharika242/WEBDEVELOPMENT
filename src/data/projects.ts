export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  visual: 'ride-sharing' | 'feedback-nlp' | 'spatial-ux';
  visualDescription: string;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  engineeringHighlights: string[];
  result: string | null;
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Real-Time Ride-Sharing Architecture',
    category: 'FULL-STACK SYSTEMS · REAL-TIME',
    description:
      'A ride-sharing system concept traced through its client, API, trip services, persistent data, and live updates to connected clients.',
    visual: 'ride-sharing',
    visualDescription: 'Conceptual flow: React client, Express and Node API, trip, driver and pricing services, MongoDB, Socket.io, then live clients.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io'],
    githubUrl: null,
    liveUrl: null,
    engineeringHighlights: ['Service-oriented request flow', 'Persistent trip data', 'Socket-based real-time updates'],
    result: 'Improved initial page-load time by 40%.',
  },
  {
    number: '02',
    title: 'Automated Restaurant Feedback Intelligence',
    category: 'APPLIED AI · NATURAL LANGUAGE PROCESSING',
    description:
      'An NLP workflow for restaurant reviews, from text preprocessing and TF-IDF features through model comparison and sentiment classification.',
    visual: 'feedback-nlp',
    visualDescription: 'Conceptual NLP pipeline: reviews, preprocessing, tokenization, TF-IDF, model comparison, classification, and insights.',
    technologies: ['Python', 'NLP', 'TF-IDF', 'Machine learning'],
    githubUrl: null,
    liveUrl: null,
    engineeringHighlights: ['Text preprocessing and tokenization', 'TF-IDF feature extraction', 'Classification and review insights'],
    result: 'Achieved 88%+ classification accuracy.',
  },
  {
    number: '03',
    title: 'Spatial UX Interface Engine',
    category: 'SPATIAL COMPUTING · INTERACTION DESIGN',
    description:
      'A virtual-reality interface concept focused on making navigation and interaction within 3D environments easier to follow.',
    visual: 'spatial-ux',
    visualDescription: 'Conceptual interaction map connecting a spatial input, interface state, navigation, and user feedback.',
    technologies: ['Figma', 'Virtual reality', 'Interface prototyping'],
    githubUrl: null,
    liveUrl: null,
    engineeringHighlights: ['Spatial navigation flows', 'Interface-state exploration', 'Interaction prototyping'],
    result: null,
  },
];
