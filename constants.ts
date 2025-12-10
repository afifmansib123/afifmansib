import {
  Experience,
  Project,
  SkillCategory,
  Award,
  JourneySection,
  ShanghaiTrip,
} from "./types";

export const SOCIAL_LINKS = {
  github: "https://github.com/afifmansib123",
  linkedin: "https://www.linkedin.com/in/afif-chowdhury-651b00240/",
  email: "mailto:afifmansib123@gmail.com",
  website: "https://website.com",
  phone: "0928148796",
};

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages & Frameworks",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "React Native",
      "Kotlin",
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      "AWS (EC2, Amplify)",
      "Docker",
      "Vercel",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "AWS RDS", "SQL", "NoSQL", "PostgreSQL"],
  },
  {
    name: "Specialized",
    skills: [
      "IoT Platform Development",
      "Low-code IDEs",
      "POS System Architecture",
      "Microservices",
    ],
  },
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
      "Developed additional internal tools using Node.js and Express.js for non-POS infrastructure, improving system response time by 60% and reducing server costs by $30K annually.",
    ],
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
      "Collaborated with core R&D team to localize platform features, improving Thai market adoption rate by 250%.",
      "Returned to Shanghai in 2025 for advanced training, achieving 98% score on Alibaba-standard assessment for project delivery and technical leadership.",
    ],
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
      "Implemented automated testing framework reducing production bugs by 70% and cutting QA time by 50%.",
    ],
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
      "Collaborated with UX team to redesign customer journey, increasing conversion rate by 28% and user engagement by 40%.",
    ],
  },
];

export const PROJECTS: Project[] = [
  // Professional Projects
  {
    name: "Max IoT SDK & Ecosystem",
    category: "Professional",
    description:
      "Core infrastructure project involving technical documentation and SDK libraries. Enabled external developers to build scalable IoT applications on the Sunmi platform.",
    tags: ["SDK Design", "Documentation", "DevEx"],
    metrics: ["Used by 50+ Developers", "3 Timezones Managed"],
    images: ["/1.jpg"],
    link: "https://dev.maxiot.com",
  },
  {
    name: "Sunmi Report Application",
    category: "Professional",
    description:
      "Cross-platform H5 reporting solution for iOS and Android devices, integrated with the main GPOS system for real-time business analytics and insights",
    tags: [
      "API Integration",
      "Real-time Systems",
      "Node.js, H5 , React , Typescript",
    ],
    metrics: ["85% Less Discrepancies", "High Availability"],
    images: ["/2.jpg"],
    link: "https://apps.apple.com/th/app/gpos-manager/id6472784269",
  },
  {
    name: "GPOS (Sunmi Max IoT)",
    category: "Professional",
    description:
      "Thailand's best-selling POS software serving 10,000+ retail locations. Architected using Sunmi Max IoT IDE (JavaScript-based low-code platform) to handle high-volume transaction processing.",
    tags: ["JavaScript", "IoT", "POS Architecture", "Low-code"],
    metrics: [
      "$50M+ Annual Transactions",
      "10,000+ Retail Locations",
      "Market Leader",
    ],
    images: ["/3.jpg"],
    link: "https://gpos.co.th",
  },
  {
    name: "GPOS Desktop, Mobile and web",
    category: "Professional",
    description:
      "3 CodeBaces on 3 platforms , connected with the same Database , deployed on Alibaba cloud, serving 10,000+ retail locations. Architected using Sunmi Max IoT IDE (JavaScript-based low-code platform) to handle high-volume transaction processing.",
    tags: ["JavaScript", "IoT", "POS Architecture", "Low-code"],
    metrics: [
      "$50M+ Annual Transactions",
      "10,000+ Retail Locations",
      "Market Leader",
    ],
    images: ["/4.jpg"],
    link: "https://gpos_web-1pq8t2.th.biot-apps.com/login",
  },
  {
    name: "QR Code Ordering System",
    category: "Professional",
    description:
      "Web-based self-service ordering platform integrated with GPOS. Customers scan table QR codes to access menu, place orders, and complete payments directly from their mobile devices. Orders are instantly transmitted to the main POS system for kitchen and service fulfillment.",
    tags: ["React", "QR Integration", "Real-time Sync", "Mobile-First"],
    metrics: [
      "60% Faster Order Processing",
      "Zero Hardware Cost",
      "Contactless Experience",
    ],
    images: ["/5.jpg"],
    link: "https://qr_order-c1og21.th.biot-apps.com/invalid",
  },
  {
    name: "Sunmi Internal ERP",
    category: "Professional",
    description:
      "Enterprise Resource Planning system (admin.sunmith.com) developed to streamline operations between Thailand and China teams. Significantly improved internal workflow efficiency.",
    tags: ["Next.js", "React", "Enterprise", "Efficiency"],
    metrics: ["40% Reduced Overhead", "35% Productivity Boost"],
    images: ["/6.jpg"],
    link: "https://admin.sunmith.com",
  },

  // Entrepreneurial Projects
  {
    name: "AssetXtoken",
    category: "Entrepreneurial",
    description:
      "360° Property Management SaaS. Engineered multi-tenant platform serving buyers, tenants, and landlords across Belgium and Thailand. Features fractional ownership tokenization.",
    tags: ["SaaS", "PropTech", "Blockchain", "Node.js"],
    metrics: ["Belgium and BKK based", "Tokenization"],
    images: [
      "/e1.jpg",
    ],
    link: "https://assetxtoken.com",
    github: "https://github.com/afifmansib123/vandepoel",
  },
  {
    name: "PujiGori",
    category: "Entrepreneurial",
    description:
      "**Ec2 paused temporaliry** Crowdfunding Platform for Bangladesh. Built full-stack platform using Next.js, Express.js, TypeScript, and MongoDB. Integrated SSLCommerz for payments.",
    tags: ["Next.js", "Express.js", "MongoDB", "FinTech"],
    metrics: ["Bangladesh's First", "99.8% Success Rate", "Payment Gateway"],
    images: [
      "/e2.jpg",
    ],
    link: "https://pujigori.com",
    github: "https://github.com/afifmansib123/ModernApp-2-Pujigori",
  },
  {
    name: "GPOS Retail Store",
    category: "Entrepreneurial",
    description:
      "E-commerce platform for retail business solutions. Customers can request retail software demos, purchase POS hardware, and explore integrated business management tools. Full-stack implementation with modern web technologies.",
    tags: ["Next.js", "E-commerce", "B2B", "Full Stack"],
    metrics: [
      "Hardware & Software Sales",
      "Demo Request System",
      "Multi-language Support",
    ],
    images: [
      "/e3.jpg",
    ],
    link: "https://gposretail.com/th",
    github: "https://github.com/afifmansib123",
  },
  {
    name: "Glowetsu",
    category: "Entrepreneurial",
    description:
      "Japan Travel Booking Platform. Developed full-stack travel platform featuring real-time booking, payment processing, and multi-language support.",
    tags: ["Travel Tech", "Next.js", "i18n", "Payments"],
    metrics: ["Multi-language", "Real-time Booking", "Global Userbase"],
    images: [
      "/e4.jpg",
    ],
    link: "https://glowetsu.com",
    github: "https://github.com/afifmansib123/japanTravel",
  },
  {
    name: "Bhalogari",
    category: "Entrepreneurial",
    description:
      "Automotive marketplace platform for Bangladesh, facilitating the import and sale of both new and used vehicles. Comprehensive listing system with search, filtering, and inquiry management for car buyers and sellers.",
    tags: ["Next.js", "Marketplace", "Automotive", "B2C"],
    metrics: [
      "/e5.png",
    ],
    images: [
      "/e5.png"
    ],
    link: "https://bhalogari.com/",
  },
  {
    name: "POSitive",
    category: "Entrepreneurial",
    description:
      "Restaurant Management System. End-to-end POS solution with real-time order management, kitchen display system, and inventory tracking.",
    tags: ["POS", "Microservices", "Vercel", "Testing"],
    metrics: ["98% Code Coverage", "Microservices Backend"],
    images: [
      "/e6.jpg",
    ],
    link: "https://dedicated-cutomer-positive.vercel.app/",
    github: "https://github.com/afifmansib123/FrontEnd3AppsNamasteAU",
  },
  {
    name: "Synova Systems",
    category: "Entrepreneurial",
    description:
      "**Ec2 paused temporaliry** Founder & Lead Developer. A software solutions agency focusing on digital transformation and custom software development for businesses.",
    tags: ["Agency", "Leadership", "Full Stack", "Business Dev"],
    metrics: ["Founded in 2023", "Lead Developer"],
    images: [
      "https://picsum.photos/800/600?random=1",
      "https://picsum.photos/800/600?random=2",
    ],
    link: "#",
  },
  {
    name: "Portfolio V1",
    category: "Entrepreneurial",
    description:
      "Previous personal portfolio website showcasing early career projects and design evolution.",
    tags: ["React", "Legacy", "Design"],
    metrics: ["Previous Iteration"],
    images: [
      "/e7.jpg",
    ],
    link: "https://mypersonalportfolio-topaz.vercel.app/",
    github: "https://github.com/afifmansib123/afifmansib",
  },
    {
    name: "NFC ID Card Reader",
    category: "Entrepreneurial",
description:
      "Android application built with Kotlin for reading and scanning NFC-enabled identification cards. Implements secure card data extraction and validation for identity verification systems.",
    tags: ["ID Card Recognition","Secure Data Extraction","Native Android"],
    metrics: ["Kotlin", "Android", "NFC", "Security"],
    images: [
      "/e8.jpg",
    ],
    link: "https://github.com/afifmansib123/NFC_TAG",
  },
];

export const AWARDS: Award[] = [
  {
    title: "National Runner-Up",
    description: "Bangladesh Math Olympiad",
    year: "2012",
  },
  {
    title: "National Runner-Up",
    description: "Bangladesh Physics Olympiad",
    year: "2010",
  },
  {
    title: "Application Delivery Certificate",
    description:
      "Sunmax Alibaba-Standard - Project Management & Engineering (94% Score)",
  },
  {
    title: "Max IoT Training Completion",
    description: "First Non-Chinese Engineer at Sunmi",
  },
];

export const JOURNEY: JourneySection = {
  title: "JavaScript - Web And Beyond",
  subtitle: "My Journey",
  paragraphs: [
    "Having been an analytical thinker from my math and physics Olympiad days, I made a conscious choice to pursue a career in computer science. Among the few who studied CS purely out of passion, my journey began in high school.",
    "Throughout my undergraduate years, I explored various CS sectors such as Web, DevOps, Android development, and AI. The web, however, stood out as the most fascinating part of CS for two reasons: it serves as a gateway to the entire CS realm, and the well-structured nature of JavaScript, the language at its core.",
    "My introduction to JavaScript in university sparked a love affair—from the elegance of React and the architectural finesse of Next.js. This journey marks the convergence of my analytical background, passion for CS, and the dynamic world of web development.",
    "Join me as I unravel the layers of my exploration, showcasing the impact of JavaScript on my professional odyssey.",
  ],
  image: "/your/journey-image.jpg", // Replace with actual image path
};

export const SHANGHAI_TRIPS: ShanghaiTrip[] = [
  {
    year: "2023",
    title: "JavaScript & Alibaba Standard Development Training",
    description:
      "Selected as the first non-Chinese engineer to undergo intensive training at Sunmi's Shanghai headquarters. Immersed in Alibaba's engineering standards and the Max IoT platform ecosystem.",
    achievement:
      "Completed comprehensive JavaScript training and earned certification in Alibaba-standard development practices",
    duration: "December 2023 - March 2024",
    images: [
      {
        src: "/img4.jpg",
        alt: "Sunmi Shanghai Office 2023",
        caption: "First day at Sunmi HQ",
      },
      {
        src: "/img2.jpg",
        alt: "Training Session",
        caption: "JavaScript training with the core team",
      },
      { src: "/img3.jpg", alt: "Team Photo", caption: "With fellow engineers" },
    ],
    certificate: "/cer1.jpg",
  },
  {
    year: "2025",
    title: "Sunmi Max Project Delivery & Advanced Development",
    description:
      "Returned to Shanghai headquarters to deliver the completed GPOS project and undergo advanced training. Led technical presentations showcasing Thailand team's achievements and participated in knowledge exchange with R&D team.",
    achievement:
      "Achieved 98% score on Alibaba-standard training assessment. Recognized for exceptional project delivery and technical leadership",
    duration: "January 2025",
    images: [
      {
        src: "/shanghai-2025-1.jpg",
        alt: "Sunmi Office 2025",
        caption: "Second visit to Shanghai HQ",
      },
      {
        src: "/shanghai-2023-1.jpg",
        alt: "Project Presentation",
        caption: "Presenting GPOS achievements",
      },
      {
        src: "/shanghai-2025-2.jpg",
        alt: "With CTO",
        caption: "Recognition from leadership",
      },
      {
        src: "/img5.jpg",
        alt: "Shanghai Skyline",
        caption: "Shanghai Bund with the team",
      },
      {
        src: "/img6.jpg",
        alt: "Team Gathering",
        caption: "Celebrating project success",
      },
      {
        src: "/img7.jpg",
        alt: "Office Tour",
        caption: "Advanced IDE demonstrations",
      },
    ],
    certificate: "/cer2.jpg",
  },
];

export const JOURNEY_MILESTONES = [
  {
    title: "From CS Student To Developer",
    content:
      "During my third university year, I had the privilege of learning enterprise application development under Dr. Chayapol Moemeng, a passionate web enthusiast and my advisor. Renowned for his innovative projects, he was not just an instructor but a mentor, serving as the CTO of www.bhalogari.com—an e-commerce platform utilizing Next.js for car sales from Japan to Bangladesh. Starting as an intern and progressing to a junior developer, I experienced the startup world firsthand, benefiting from the expertise of the best JavaScript teacher. This journey not only enhanced my technical skills but also offered insights into the dynamic landscape of enterprise application development.",
    image: "/bhalogari-team.jpg",
  },
  {
    title: "The Sunmi Max IDE Journey",
    content:
      "A unique facet of the Sunmi Max IDE was its resonance with Alibaba's OpenSumi project, aligning seamlessly with our team of ex-Alibaba engineers. Yet, a hurdle emerged—much of the IDE was in Chinese. As the first foreign engineer, I took on the task of translating code comments and toasts for my own use. Over time, our IDE transformed into a more international tool, culminating in the rapid release of GPOS's first version, a testament to our team's adaptability and collaborative spirit.",
    image: "/max-ide-screenshot.jpg",
  },
  {
    title: "JavaScript Beyond The Browser",
    content:
      "A striking feature of the Sunmi Max IDE lies in its remarkable capability to craft both Android and web applications effortlessly using JavaScript. The real magic unfolds in its automated deployment to various platforms, seamlessly adapting to the mobile and phone versions of Sunmi. I've always believed that associating JavaScript solely with web development is limiting its potential. With tools like Node.js and React Native, we've seen its application in IoT and Android development, but the Max IDE took it a step further. It enabled direct manipulation of IoT devices using vanilla JS. As I delved deeper into this innovative IDE, I discovered that in the new Chinese era of development, local development might not be as popular; instead, this approach is favored for its time-saving benefits.",
    image: "/javascript-devices.jpg",
  },
  {
    title: "Leading The Thailand Team",
    content:
      "As GPOS evolved with added features, my role expanded into training and recruiting foreign engineers in Thailand. Assuming the position of Tech Lead, I spearheaded the software transition for mobile versions. The success of GPOS in the market prompted an invitation from the Shanghai team and CTO, recognizing our accomplishments. During a training program in Shanghai, I led a team of Thai engineers in transforming GPOS from PC to mobile. This transformative experience culminated in a proud moment as I received the certification of being a Max Model Expert and JavaScript Expert. It was an honor to accept this award from our esteemed CTO, a legendary engineer known for shaping Alibaba Cloud—a defining achievement in my professional journey.",
    image: "/certificate-max-expert.jpg",
  },
];
