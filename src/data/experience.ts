export interface TimelineEntry {
  period: string;
  title: string;
  organization: string;
  description: string;
  kind: 'employment' | 'learning' | 'project';
  focus?: string[];
  impact?: string[];
}

export const experience: TimelineEntry[] = [
  {
    period: 'March 2025 — Present',
    title: 'Software Development Engineer',
    organization: 'Qapita · Hyderabad, India',
    description:
      'Working across services, data pipelines, testing, and application performance, with attention to reliability and the experience at the interface.',
    kind: 'employment',
    focus: ['Data-pipeline reliability', 'Automated testing', 'Interface performance'],
    impact: [
      'Improved data-pipeline execution reliability by 30%.',
      'Maintained 90%+ unit-test coverage.',
      'Improved UI rendering performance by 25%.',
    ],
  },
];

export const education: TimelineEntry[] = [
  {
    period: '2025',
    title: 'Sreenidhi Institute of Science and Technology',
    organization: 'Education',
    description: 'Institution listed in the original portfolio.',
    kind: 'learning',
  },
  {
    period: '2021',
    title: 'Sri Chaitanya Junior College',
    organization: 'Education',
    description: 'Institution listed in the original portfolio.',
    kind: 'learning',
  },
  {
    period: '2019',
    title: 'Gouthama High School',
    organization: 'Education',
    description: 'Institution listed in the original portfolio.',
    kind: 'learning',
  },
];
