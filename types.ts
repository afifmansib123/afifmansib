export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  highlight?: boolean;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  metrics?: string[];
  images: string[];
  link?: string;
  github?: string;
  category: 'Entrepreneurial' | 'Professional' | 'Side Project';
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Award {
  title: string;
  description: string;
  year?: string;
}

export interface JourneySection {
  title: string;
  subtitle: string;
  paragraphs: string[];
  image?: string;
  timeline?: TimelineItem[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  location: string;
  achievement?: string;
  image?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ShanghaiTrip {
  year: string;
  title: string;
  description: string;
  achievement: string;
  duration: string;
  images: GalleryImage[];
  certificate?: string;
}