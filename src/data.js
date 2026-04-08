export const navItems = [
  {
    id: "about",
    number: "01",
    title: "Mahek Patel",
    marquee: "MAHEK PATEL",
    description:
      "Information about me, my backend focus, and the kind of engineering work I enjoy most.",
    subcategories: [
      { label: "About", anchor: "about-intro" },
      { label: "Strengths", anchor: "about-strengths" },
    ],
  },
  {
    id: "systems",
    number: "02",
    title: "Systems",
    marquee: "SYSTEMS",
    description:
      "API platforms, event-driven workflows, and observability patterns designed for calm scale.",
    subcategories: [
      { label: "APIs", anchor: "systems-apis" },
      { label: "Events", anchor: "systems-events" },
    ],
  },
  {
    id: "approach",
    number: "03",
    title: "Approach",
    marquee: "APPROACH",
    description:
      "How I think about reliability, documentation, delivery, and staying simple before clever.",
    subcategories: [
      { label: "Principles", anchor: "approach-principles" },
      { label: "Delivery", anchor: "approach-delivery" },
    ],
  },
  {
    id: "connect",
    number: "04",
    title: "Connect",
    marquee: "CONNECT",
    description:
      "Availability, preferred scope, and the cleanest way to turn this concept into a real portfolio.",
    subcategories: [
      { label: "Availability", anchor: "connect-availability" },
      { label: "Links", anchor: "connect-links" },
    ],
  },
];

export const heroMeta = [
  { label: "Availability", value: "Available Today" },
  { label: "Location", value: "India" },
];

export const aboutParagraphs = [
  "I build backend platforms that keep product experiences fast, stable, and understandable. The work I enjoy most sits at the intersection of architecture, API design, async processing, and delivery discipline.",
  "My preference is always for systems with clear edges: services that are easy to reason about, contracts that are explicit, and operational tooling that helps teams understand what is happening without guesswork.",
  "When requirements are messy, I like turning them into backend flows that feel calmer on the other side. That usually means cleaner boundaries, stronger data ownership, and better visibility into how the system behaves in production.",
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
    anchor: "systems-apis",
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
    anchor: "systems-events",
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
    anchor: "systems-observability",
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

export const contactDetails = [
  { label: "Role", value: "Backend Engineer" },
  { label: "Availability", value: "Open to backend-focused freelance and full-time work" },
  { label: "Timezone", value: "IST (UTC+5:30)" },
  { label: "Best Fit", value: "APIs, data flows, platform reliability, delivery cleanup" },
];

export const contactLinks = [
  {
    label: "Email",
    value: "Add your email",
    href: "#connect-links",
    placeholder: true,
  },
  {
    label: "LinkedIn",
    value: "Add your LinkedIn",
    href: "#connect-links",
    placeholder: true,
  },
  {
    label: "GitHub",
    value: "Add your GitHub",
    href: "#connect-links",
    placeholder: true,
  },
  {
    label: "Resume",
    value: "Add your resume link",
    href: "#connect-links",
    placeholder: true,
  },
];

export const footerContactLinks = [
  { title: "Email", subtitle: "Add your email", href: "#connect-links" },
  { title: "LinkedIn", subtitle: "Add your profile", href: "#connect-links" },
  { title: "GitHub", subtitle: "Add your repositories", href: "#connect-links" },
  { title: "Resume", subtitle: "Add your resume link", href: "#connect-links" },
];

export const footerNavigationLinks = [
  { title: "Mahek Patel", subtitle: "About and strengths", pageId: "about" },
  { title: "Systems", subtitle: "Backend capabilities", pageId: "systems" },
  { title: "Approach", subtitle: "How I like to work", pageId: "approach" },
  { title: "Connect", subtitle: "Availability and links", pageId: "connect" },
];
