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