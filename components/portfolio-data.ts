export const contactEmail = "eden.abebaw@example.com";
export const githubProfileUrl = "https://github.com/edenabebaw";

export const socialLinks = [
  { label: "GitHub", href: githubProfileUrl },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/edenabebaw/" },
  { label: "X", href: "https://x.com/edenabebaw" },
];

export const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces built for clarity and speed.",
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "HTML & CSS"],
  },
  {
    title: "Backend & APIs",
    description: "Reliable services and thoughtful contracts.",
    skills: ["Node.js", "Python", "REST APIs", "Java", "OOP"],
  },
  {
    title: "Databases & Cloud",
    description: "Data models designed to scale with the product.",
    skills: ["PostgreSQL", "SQL", "Cloud fundamentals"],
  },
  {
    title: "Tools & DevOps",
    description: "A disciplined workflow from commit to deploy.",
    skills: ["Git", "Docker", "Linux", "CI/CD"],
  },
];

export const projects = [
  {
    number: "01",
    name: "CourseFlow",
    type: "Learning platform · Full-stack concept",
    role: "Product engineering & architecture",
    problem:
      "Course teams need one clear place to organize lessons, assignments, and learner progress.",
    solution:
      "A responsive course workspace with role-aware views, structured content, and progress summaries.",
    impact: "Design goal · 10k+ learners, with core views under 1.5s LCP",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    preview: "learning",
  },
  {
    number: "02",
    name: "Relay Desk",
    type: "Support operations · Full-stack concept",
    role: "Systems design & interface development",
    problem:
      "Small support teams lose context when requests, ownership, and response times live in different tools.",
    solution:
      "A shared inbox concept with searchable conversations, clear ownership, and lightweight service analytics.",
    impact: "Design goal · 30% fewer hand-off steps across a 5-person team",
    technologies: ["React", "Node.js", "REST API", "Docker"],
    preview: "support",
  },
  {
    number: "03",
    name: "Northstar Spend",
    type: "Personal finance · Full-stack concept",
    role: "Data modeling & end-to-end implementation",
    problem:
      "Monthly spending is hard to understand when transactions are fragmented and categories are inconsistent.",
    solution:
      "A private finance dashboard that brings transaction categorization, monthly trends, and budgets together.",
    impact: "Design goal · 2-click monthly overview with accessible data visualizations",
    technologies: ["TypeScript", "Python", "PostgreSQL", "Charts"],
    preview: "finance",
  },
];

export const experience = [
  {
    period: "2024 — PRESENT",
    title: "Independent Software Engineer",
    organization: "Selected builds & learning",
    achievements: [
      "Designing and building full-stack web experiences from early requirements through deployment.",
      "Applying TypeScript, React, Next.js, and relational data modeling to practical product concepts.",
      "Prioritizing performance, semantic accessibility, and maintainable component boundaries.",
    ],
  },
  {
    period: "2023 — 2024",
    title: "Software Engineering Foundations",
    organization: "Project-based development",
    achievements: [
      "Built a foundation in object-oriented programming, algorithms, Git, and collaborative workflows.",
      "Practiced API design and database fundamentals through iterative, portfolio-scale builds.",
    ],
  },
  {
    period: "2021 — 2025",
    title: "Computer Science Studies",
    organization: "Education",
    achievements: [
      "Developed core foundations in programming, software design, and problem solving.",
      "Applied classroom concepts through independent web and software engineering projects.",
    ],
  },
];
