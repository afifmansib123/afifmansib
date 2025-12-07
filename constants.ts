import { Experience, Project, SkillCategory, Award } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  email: "mailto:afifmansib123@gmail.com",
  website: "https://website.com",
  phone: "0928148796"
};

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages & Frameworks",
    skills: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Express.js", "React Native", "Kotlin"]
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS (EC2, Amplify)", "Docker", "Vercel", "GitHub Actions", "CI/CD"]
  },
  {
    name: "Databases",
    skills: ["MongoDB", "AWS RDS", "SQL", "NoSQL", "PostgreSQL"]
  },
  {
    name: "Specialized",
    skills: ["IoT Platform Development", "Low-code IDEs", "POS System Architecture", "Microservices"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Sunmi Thailand",
    role: "Technical Lead",
    period: "April 2024 – Present",
    location: "Bangkok, Thailand",
    highlight: true,
    description: [
      "Led cross-functional team of 5 engineers to architect and deploy GPOS using Sunmi Max IoT IDE, serving 10,000+ retail locations and processing $50M+ in annual transactions.",
      "Spearheaded development of internal ERP system (admin.sunmith.com) using Next.js, reducing operational overhead by 40% and improving team productivity by 35%.",
      "Collaborated with Shanghai R&D team to create technical documentation and SDK libraries for Max IoT platform, enabling 50+ developers to build scalable IoT applications.",
      "Managed full product lifecycle from requirements gathering to deployment, coordinating between Thailand operations and China R&D teams across 3 time zones.",
      "Developed additional internal tools using Node.js and Express.js for non-POS infrastructure, improving system response time by 60% and reducing server costs by $30K annually."
    ]
  },
  {
    company: "Sunmi (HQ)",
    role: "Software Engineer (Business Visa Training)",
    period: "Dec 2023 – March 2024",
    location: "Shanghai, China",
    description: [
      "Selected as first non-Chinese engineer to complete intensive 3-month Sunmi Max IoT training program in Shanghai headquarters.",
      "Achieved 94% performance rating and earned Alibaba-standard Application Delivery Certificate.",
      "Mastered proprietary JavaScript-based low-code Max IoT IDE platform, building 15+ production-ready modules.",
      "Collaborated with core R&D team to localize platform features, improving Thai market adoption rate by 250%."
    ]
  },
  {
    company: "Sunmi Thailand",
    role: "Software Engineer",
    period: "Jan 2023 – Dec 2023",
    location: "Bangkok, Thailand",
    description: [
      "Developed modular POS components using Max IoT platform and JavaScript, deployed across 500+ retail locations in first 6 months.",
      "Built real-time inventory synchronization system integrating with third-party APIs, reducing stock discrepancies by 85%.",
      "Engineered payment gateway integrations for 5 major Thai banks, processing 100K+ transactions monthly with 99.9% uptime.",
      "Implemented automated testing framework reducing production bugs by 70% and cutting QA time by 50%."
    ]
  },
  {
    company: "Bhalogari",
    role: "Junior Frontend Engineer & Intern",
    period: "Jan 2022 – Dec 2023",
    location: "Remote",
    description: [
      "Architected responsive web application using Next.js, React, TypeScript, and Express.js, serving 50K+ monthly active users.",
      "Developed cross-platform mobile app using React Native, achieving 4.5-star rating with 10K+ downloads in first quarter.",
      "Optimized database queries and API endpoints (AWS RDS), improving page load time by 3.2 seconds (65% faster).",
      "Collaborated with UX team to redesign customer journey, increasing conversion rate by 28% and user engagement by 40%."
    ]
  }
];

export const PROJECTS: Project[] = [
  // Professional Projects
  {
    name: "GPOS (Sunmi Max IoT)",
    category: "Professional",
    description: "Thailand's best-selling POS software serving 10,000+ retail locations. Architected using Sunmi Max IoT IDE (JavaScript-based low-code platform) to handle high-volume transaction processing.",
    tags: ["JavaScript", "IoT", "POS Architecture", "Low-code"],
    metrics: ["$50M+ Annual Transactions", "10,000+ Retail Locations", "Market Leader"],
    images: ["https://picsum.photos/800/600?random=11", "https://picsum.photos/800/600?random=12"],
    link: "https://sunmi.com"
  },
  {
    name: "Sunmi Internal ERP",
    category: "Professional",
    description: "Enterprise Resource Planning system (admin.sunmith.com) developed to streamline operations between Thailand and China teams. Significantly improved internal workflow efficiency.",
    tags: ["Next.js", "React", "Enterprise", "Efficiency"],
    metrics: ["40% Reduced Overhead", "35% Productivity Boost"],
    images: ["https://picsum.photos/800/600?random=13", "https://picsum.photos/800/600?random=14"],
    link: "https://admin.sunmith.com"
  },
  {
    name: "Max IoT SDK & Ecosystem",
    category: "Professional",
    description: "Core infrastructure project involving technical documentation and SDK libraries. Enabled external developers to build scalable IoT applications on the Sunmi platform.",
    tags: ["SDK Design", "Documentation", "DevEx"],
    metrics: ["Used by 50+ Developers", "3 Timezones Managed"],
    images: ["https://picsum.photos/800/600?random=15", "https://picsum.photos/800/600?random=16"],
    link: "https://dev.maxiot.com"
  },
  {
    name: "Real-time Inventory Sync",
    category: "Professional",
    description: "Real-time inventory synchronization system integrating with third-party APIs to prevent stock discrepancies across multiple retail outlets.",
    tags: ["API Integration", "Real-time Systems", "Node.js"],
    metrics: ["85% Less Discrepancies", "High Availability"],
    images: ["https://picsum.photos/800/600?random=17", "https://picsum.photos/800/600?random=18"]
  },

  // Entrepreneurial Projects
  {
    name: "Synova Systems",
    category: "Entrepreneurial",
    description: "Founder & Lead Developer. A software solutions agency focusing on digital transformation and custom software development for businesses.",
    tags: ["Agency", "Leadership", "Full Stack", "Business Dev"],
    metrics: ["Founded in 2023", "Lead Developer"],
    images: ["https://picsum.photos/800/600?random=1", "https://picsum.photos/800/600?random=2"],
    link: "https://example.com"
  },
  {
    name: "PujiGori",
    category: "Entrepreneurial",
    description: "Crowdfunding Platform for Bangladesh. Built full-stack platform using Next.js, Express.js, TypeScript, and MongoDB. Integrated SSLCommerz for payments.",
    tags: ["Next.js", "Express.js", "MongoDB", "FinTech"],
    metrics: ["1,000+ Users", "99.8% Success Rate", "200+ Campaigns"],
    images: ["https://picsum.photos/800/600?random=3", "https://picsum.photos/800/600?random=4"],
    link: "https://pujigori.com",
    github: "https://github.com"
  },
  {
    name: "Vandepoel",
    category: "Entrepreneurial",
    description: "360° Property Management SaaS. Engineered multi-tenant platform serving buyers, tenants, and landlords across Belgium and Thailand. Features fractional ownership tokenization.",
    tags: ["SaaS", "PropTech", "Blockchain", "Node.js"],
    metrics: ["$2M+ Property Listings", "500+ Concurrent Users"],
    images: ["https://picsum.photos/800/600?random=5", "https://picsum.photos/800/600?random=6"],
    link: "https://assetxtoken.com",
    github: "https://github.com"
  },
  {
    name: "Glowetsu",
    category: "Entrepreneurial",
    description: "Japan Travel Booking Platform. Developed full-stack travel platform featuring real-time booking, payment processing, and multi-language support.",
    tags: ["Travel Tech", "Next.js", "i18n", "Payments"],
    metrics: ["Multi-language", "Real-time Booking", "Global Userbase"],
    images: ["https://picsum.photos/800/600?random=7", "https://picsum.photos/800/600?random=8"],
    link: "https://glowetsu.com",
    github: "https://github.com"
  },
  {
    name: "POSitive",
    category: "Entrepreneurial",
    description: "Restaurant Management System. End-to-end POS solution with real-time order management, kitchen display system, and inventory tracking.",
    tags: ["POS", "Microservices", "Vercel", "Testing"],
    metrics: ["95% Code Coverage", "Microservices Backend"],
    images: ["https://picsum.photos/800/600?random=9", "https://picsum.photos/800/600?random=10"],
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    name: "Portfolio V1",
    category: "Entrepreneurial",
    description: "Previous personal portfolio website showcasing early career projects and design evolution.",
    tags: ["React", "Legacy", "Design"],
    metrics: ["Previous Iteration"],
    images: ["https://picsum.photos/800/600?random=19", "https://picsum.photos/800/600?random=20"],
    link: "https://mypersonalportfolio-topaz.vercel.app/"
  }
];

export const AWARDS: Award[] = [
  {
    title: "National Runner-Up",
    description: "Bangladesh Math Olympiad",
    year: "2012"
  },
  {
    title: "National Runner-Up",
    description: "Bangladesh Physics Olympiad",
    year: "2010"
  },
  {
    title: "Application Delivery Certificate",
    description: "Sunmax Alibaba-Standard - Project Management & Engineering (94% Score)"
  },
  {
    title: "Max IoT Training Completion",
    description: "First Non-Chinese Engineer at Sunmi"
  }
];