export interface Profile {
  name: string;
  role: string;
  company: string;
  location: string;
  period: string;
  email: string;
  githubUrl: string | null;
  linkedInUrl: string | null;
  resumeUrl: string | null;
  photo: string;
  photoAlt: string;
  introduction: string;
}

export const profile: Profile = {
  name: 'Maneru Niharika',
  role: 'Software Development Engineer',
  company: 'Qapita',
  location: 'Hyderabad, India',
  period: 'March 2025 — Present',
  email: 'maneruniharika@gmail.com',
  githubUrl: 'https://github.com/ManeruNiharika',
  linkedInUrl: 'https://www.linkedin.com/in/maneru-niharika-niha2526',
  resumeUrl: '/images/my%20resume1.pdf',
  photo: '/images/profile/profile.jpg',
  photoAlt: 'Professional portrait of Maneru Niharika',
  introduction:
    'I build scalable software across the stack — from backend services and real-time systems to high-performance interfaces, APIs, automation, and applied AI.',
};

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const;
