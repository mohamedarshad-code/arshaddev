export type PricingPlan = {
  id: number;
  name: string;
  priceRange: string;
  bestFor: string;
  delivery: string;
  revisions: string;
  features: string[];
};

export type Project = {
  name: string;
  category: "Frontend" | "Full-stack" | "Business";
  problem: string;
  solution: string;
  tech: string[];
  demo: string;
  github: string;
  image?: string;
};

export const profile = {
  name: "Mohamed Arshad M",
  role: "Full-Stack Web Developer",
  fullBio: "I am a 19-year-old EEE first-year student and full-stack developer from Coimbatore, Tamil Nadu. I specialize in building modern, practical websites for real-world client needs, focusing on performance, clean design, and affordable solutions. I love turning innovative ideas into reality.",
  shortBio: "Transforming ideas into modern, fast, and responsive websites.",
  tagline: "Affordable website development in Tamil Nadu and across India.",
  location: "Coimbatore, Tamil Nadu, India",
  email: "mohamedarshad1507@gmil.com",
  phone: "+91 9952589394",
  whatsappLink: "https://wa.me/919952589394",
  github: "https://github.com/mohamedarshad-code",
  linkedin: "https://www.linkedin.com/in/mohamed-arshad-3b8269380/",
  instagram: "https://www.instagram.com/mohamed.arshad__/",
};

export const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express"],
  database: ["MongoDB", "PostgreSQL", "Supabase"],
  devops: ["Git", "GitHub", "Vercel", "Netlify"],
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Starter One-Page",
    priceRange: "INR 3,000 - 5,000",
    bestFor: "Students, freelancers, and very small shops",
    delivery: "3-4 days",
    revisions: "Up to 2 rounds",
    features: [
      "Single scrolling page with up to 5 sections",
      "Mobile responsive layout",
      "WhatsApp button or basic contact form",
      "Basic SEO setup",
    ],
  },
  {
    id: 2,
    name: "Essential Business Site",
    priceRange: "INR 7,000 - 10,000",
    bestFor: "Local businesses, tuition centers, clinics, salons",
    delivery: "5-7 days",
    revisions: "Up to 3 rounds",
    features: [
      "Up to 5 pages",
      "Modern brand-aligned UI",
      "Google Maps + WhatsApp click-to-chat",
      "Basic inquiry form",
    ],
  },
  {
    id: 3,
    name: "Portfolio / Personal Brand",
    priceRange: "INR 9,000 - 15,000",
    bestFor: "Creators, designers, mentors, developers",
    delivery: "7-10 days",
    revisions: "Up to 4 rounds",
    features: [
      "5-7 pages with portfolio section",
      "Performance and SEO basics",
      "Simple content update approach",
      "SSL and analytics setup",
    ],
  },
  {
    id: 4,
    name: "Advanced Business Site",
    priceRange: "INR 15,000 - 25,000",
    bestFor: "Growing businesses and agencies",
    delivery: "10-14 days",
    revisions: "Up to 4 rounds",
    features: [
      "7-10 pages",
      "Lead generation forms",
      "Blog or updates section",
      "Open Graph and schema-ready structure",
    ],
  },
  {
    id: 5,
    name: "Web App / Custom Lite",
    priceRange: "INR 20,000 - 35,000+",
    bestFor: "Startups needing custom workflows",
    delivery: "2-4 weeks",
    revisions: "Milestone-based",
    features: [
      "8-10 screens",
      "Basic login and CRUD for 1-2 entities",
      "Database integration",
      "Desktop and tablet responsive layout",
    ],
  },
  {
    id: 6,
    name: "Care and Maintenance",
    priceRange: "INR 800 - 1,500 monthly / 8,000 - 12,000 yearly",
    bestFor: "Any previous client wanting ongoing support",
    delivery: "Retainer model",
    revisions: "Planned monthly changes",
    features: [
      "2-3 small updates each month",
      "Backup and basic security checks",
      "Simple uptime monitoring",
      "Priority support",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Bizou",
    category: "Business",
    problem: "A high-end web experience needed for Bizou Cafe & Grill.",
    solution: "A sophisticated 'Dark Luxury Coffee Noir' aesthetic, optimized for fine dining storytelling and seamless user interaction.",
    tech: ["Next.js", "Tailwind CSS"],
    demo: "#",
    github: "https://github.com/mohamedarshad-code/Bizou",
    image: "/bizou.jpg"
  },
  {
    name: "Fake News Detector",
    category: "Full-stack",
    problem: "Misinformation and biased reporting spread easily.",
    solution: "An AI-powered web app with NLP fallbacks to detect sensationalism.",
    tech: ["Python", "Flask", "React"],
    demo: "#",
    github: "https://github.com/mohamedarshad-code/Fake-News-Detector-with-Source-Verification",
    image: "https://api.dicebear.com/9.x/glass/svg?seed=News"
  },
  {
    name: "Gitify Discovery Tool",
    category: "Frontend",
    problem: "GitHub project discovery relies on simple popularity metrics.",
    solution: "A production-ready web application for analyzing, ranking, and presenting open-source projects.",
    tech: ["React", "API", "Tailwind"],
    demo: "#",
    github: "https://github.com/mohamedarshad-code/Gitify---GitHub-Project-Discovery-Tool",
    image: "https://api.dicebear.com/9.x/glass/svg?seed=Gitify"
  },
  {
    name: "Juice World",
    category: "Frontend",
    problem: "Needed a premium, high-fidelity front-end recreation of a beverage startup website.",
    solution: "Rebuilt with a custom design system, modern typography, and high-end responsive UI.",
    tech: ["Next.js", "Tailwind CSS"],
    demo: "https://juice-world-seven.vercel.app",
    github: "https://github.com/mohamedarshad-code/juice-world",
    image: "https://api.dicebear.com/9.x/glass/svg?seed=Juice"
  },
  {
    name: "Madras Coffee House",
    category: "Business",
    problem: "Local coffee shops needed a way to improve online presence and convert online searches into real walk-in customers.",
    solution: "A modern, mobile-first single-page demo showcasing customer-focused layout optimized for cafés and local food businesses.",
    tech: ["HTML", "CSS", "JS"],
    demo: "https://madrascoffehouse.vercel.app",
    github: "https://github.com/mohamedarshad-code/madrascoffehouse",
    image: "https://api.dicebear.com/9.x/glass/svg?seed=Coffee"
  },
  {
    name: "Gun Hill Fence Co.",
    category: "Business",
    problem: "An outdated online presence for a fencing company.",
    solution: "A premium, fully responsive redesign featuring custom theming, dynamic UI components, and optimal performance.",
    tech: ["Next.js", "React"],
    demo: "#",
    github: "https://github.com/mohamedarshad-code/gunhillfence",
    image: "https://api.dicebear.com/9.x/glass/svg?seed=Fence"
  }
];

export const testimonials = [
  {
    quote: "Professional communication and fast delivery. The website looked modern and worked perfectly on mobile.",
    name: "Client Name",
    role: "Small Business Owner",
  },
  {
    quote: "Very easy to work with. Pricing was clear, and changes were handled quickly.",
    name: "Client Name",
    role: "Freelancer",
  },
];
