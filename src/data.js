export const navItems = [
  {
    id: "profile",
    number: "01",
    title: "Profile",
    subcategories: ["Overview", "Strengths"],
  },
  {
    id: "systems",
    number: "02",
    title: "Systems",
    subcategories: ["APIs", "Events"],
  },
  {
    id: "approach",
    number: "03",
    title: "Approach",
    subcategories: ["Reliability", "Delivery"],
  },
  {
    id: "connect",
    number: "04",
    title: "Connect",
    subcategories: ["India", "Availability"],
  },
];

export const heroMeta = [
  { label: "Role", value: "Backend Engineer" },
  { label: "Location", value: "India" },
  { label: "Focus", value: "APIs, Events, Reliability" },
];

export const profileStats = [
  {
    title: "API Design",
    description: "Versioned contracts and service boundaries",
  },
  {
    title: "Data Modeling",
    description: "Practical schemas built for growth and clarity",
  },
  {
    title: "Async Systems",
    description: "Queues, events, retries, and durable workflows",
  },
  {
    title: "Observability",
    description: "Logs, metrics, tracing, and useful dashboards",
  },
];

export const focusAreas = [
  {
    number: "01",
    area: "Backend Architecture",
    outcome: "Clearer services and fewer hidden dependencies",
  },
  {
    number: "02",
    area: "Platform Reliability",
    outcome: "Better monitoring and steadier delivery",
  },
  {
    number: "03",
    area: "Developer Experience",
    outcome: "Faster iteration with cleaner internal tooling",
  },
];

export const systems = [
  {
    number: "01",
    title: "API Platforms",
    kicker: "Contracts / Auth / Scale",
    description:
      "Designing backend interfaces that are explicit, secure, and easy for product teams to build on. The goal is predictable behavior for both internal and external consumers.",
    tags: ["REST", "GraphQL", "Rate Limits", "Auth"],
    visualClassName: "visual-apis",
    visualLabels: ["REQUEST", "GATEWAY", "SERVICE", "RESPONSE"],
  },
  {
    number: "02",
    title: "Event Workflows",
    kicker: "Queues / Retries / Consistency",
    description:
      "Building pipelines for work that should not block the user path: notifications, sync jobs, order flows, and background processing that remains observable and recoverable.",
    tags: ["Kafka", "Retries", "Workers", "Idempotency"],
    visualClassName: "visual-events",
    visualLabels: ["EVENT", "QUEUE", "WORKER", "STATE"],
  },
  {
    number: "03",
    title: "Data and Visibility",
    kicker: "Storage / Metrics / Tracing",
    description:
      "Turning backend behavior into signals teams can act on. Strong schema choices and healthy observability make debugging faster and system confidence much higher.",
    tags: ["PostgreSQL", "Caching", "Tracing", "Dashboards"],
    visualClassName: "visual-data",
    visualLabels: ["DB", "CACHE", "LOGS", "METRICS"],
  },
];

export const approachCards = [
  {
    number: "01",
    title: "Reliable by Default",
    description:
      "I prefer systems that fail clearly, recover intentionally, and make debugging boring instead of dramatic.",
  },
  {
    number: "02",
    title: "Simple Before Clever",
    description:
      "Good architecture should reduce cognitive load. Clear edges beat fashionable complexity every time.",
  },
  {
    number: "03",
    title: "Visible Systems Win",
    description:
      "If the team cannot see what the backend is doing, they cannot trust it. Instrumentation is part of the product.",
  },
  {
    number: "04",
    title: "Built with Teams in Mind",
    description:
      "Documentation, naming, and stable contracts are part of the work, not polish added at the end.",
  },
];

export const playbookItems = [
  {
    label: "Architecture",
    text: "Service boundaries, data ownership, and interfaces that stay understandable.",
  },
  {
    label: "Delivery",
    text: "Incremental releases, safer migrations, and calm rollout patterns.",
  },
  {
    label: "Operations",
    text: "Actionable alerts, debugging context, and metrics that answer real questions.",
  },
  {
    label: "Collaboration",
    text: "Backend decisions that make life easier for product, frontend, and platform teams.",
  },
];

export const contactLinks = [
  { label: "Name", value: "Mahek Patel", href: "#top" },
  { label: "Role", value: "Backend Engineer", href: "#profile" },
  { label: "Location", value: "India", href: "#connect" },
  {
    label: "Contact",
    value: "Add email / LinkedIn / GitHub",
    href: "#connect",
    placeholder: true,
  },
];

export const footerContactLinks = [
  { title: "Profile", subtitle: "Mahek Patel, India", href: "#connect" },
  { title: "Systems", subtitle: "Backend capabilities", href: "#systems" },
  { title: "Approach", subtitle: "How I like to work", href: "#approach" },
  { title: "Connect", subtitle: "Ready for real links", href: "#connect" },
];

export const footerNavigationLinks = [
  { title: "Profile", subtitle: "Overview and strengths", href: "#profile" },
  { title: "Systems", subtitle: "What I build", href: "#systems" },
  { title: "Approach", subtitle: "How I think", href: "#approach" },
  { title: "Connect", subtitle: "Location and contact area", href: "#connect" },
];
