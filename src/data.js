import bank from './assets/projects/bank.webp';
import hotel from './assets/projects/hotel.webp';
import jobs from './assets/projects/jobs.webp';
import library from './assets/projects/library.webp';
import notes from './assets/projects/notes.webp';
import parts from './assets/projects/parts.webp';

// Content mirrors public/Abel-Kifletsion-Resume.pdf — update both together.

export const profile = {
  name: 'Abel Kifletsion',
  role: 'Lead Full-Stack Software Engineer',
  location: 'Austin, TX',
  email: 'abelfis78@gmail.com',
  github: 'https://github.com/abelfish',
  linkedin: 'https://www.linkedin.com/in/abelfk',
  resume: `${import.meta.env.BASE_URL}Abel-Kifletsion-Resume.pdf`,
  summary:
    'I build payments infrastructure and the products around it. I lead a suite of card, ACH and payout services on Kotlin, .NET and Google Cloud, and I’ve spent 8+ years shipping reliable, observable systems end to end.',
};

export const experience = [
  {
    company: 'PublicSquare (PSQH)',
    role: 'Lead Full-Stack Software Engineer',
    location: 'Austin, TX',
    dates: 'Apr 2024 – Present',
    stack: ['Kotlin', '.NET / C#', 'Next.js', 'PostgreSQL', 'GCP', 'Auth0', 'OpenTelemetry'],
    points: [
      'Technical lead with full ownership of a suite of payments services: Kotlin and .NET/C# on Cloud Run, Pub/Sub and Cloud SQL, with a Next.js frontend.',
      'Designed and built the core gateway flows — card processing, ACH and Payment Transfer Intents — including state machines, settlement and payouts, and idempotent webhook processing. Supported $400M+ across 800K+ transactions at a 98.1% success rate.',
      'Secured payment endpoints with Auth0: M2M auth for service-to-service calls, admin RBAC, custom claims via Actions, and MFA.',
      'Added OpenTelemetry tracing and Pino structured logging across the Cloud Run stack, cutting incident diagnosis time by 26%.',
      'Resolved production-critical concurrency bugs, webhook batch failures and payout-API timeouts in high-throughput PostgreSQL services.',
      'Led a zero-downtime production domain migration (DNS, TLS, webhook allowlists, merchant comms), wrote the developer API docs, and mentored 3 engineers.',
    ],
  },
  {
    company: 'Chewy',
    role: 'Software Engineer (Contract)',
    location: 'Bellevue, WA',
    dates: 'Sep 2023 – Feb 2024',
    stack: ['Java', 'Spring Boot', 'Kafka', 'Microservices'],
    points: [
      'Designed, built, tested and documented features for the loyalty program.',
      'Implemented loyalty promotion evaluation inside the core promotions engine.',
      'Cached loyalty customer data from a Kafka topic to speed up downstream lookups.',
    ],
  },
  {
    company: 'ADE Software Solutions',
    role: 'Full-Stack Software Engineer',
    location: 'Nairobi, Kenya',
    dates: 'Jul 2019 – Aug 2022',
    stack: ['Java', 'Spring Boot', 'React', 'Angular', 'MongoDB', 'Redis', 'Elasticsearch'],
    points: [
      'Built web applications for finance and healthcare clients with Spring Boot, React, Angular and MongoDB.',
      'Led the migration of 5+ monoliths to cloud-hosted Spring Boot microservices.',
      'Introduced test-driven development, cutting development and testing time by 48% and long-term costs by 60%+.',
    ],
  },
  {
    company: 'Asmara Import & Export',
    role: 'Java Developer',
    location: 'Asmara, Eritrea',
    dates: 'Sep 2015 – Jul 2019',
    stack: ['Java'],
    points: [
      'Built an application for shipments, inventory and customs clearance that opened new business lines.',
      'Delivered concurrent projects that grew marginal profit roughly 24% year over year.',
      'Mentored 21 new hires over three years.',
    ],
  },
];

export const skills = [
  { group: 'Payments', items: ['Card processing', 'ACH', 'RTP', '3DS', 'PCI-DSS', 'Settlement & payouts', 'Webhooks', 'Idempotency'] },
  { group: 'Languages', items: ['Kotlin', 'Java', 'C# / .NET', 'TypeScript', 'JavaScript', 'Scala', 'SQL'] },
  { group: 'Frameworks', items: ['Spring Boot', 'ASP.NET Core', 'Next.js', 'React', 'Node.js', 'Kafka', 'Pub/Sub'] },
  { group: 'Cloud & infra', items: ['Google Cloud', 'AWS', 'Azure', 'Docker', 'Terraform', 'GitHub Actions', 'Jenkins'] },
  { group: 'Data', items: ['PostgreSQL', 'Cloud SQL', 'MySQL', 'MongoDB', 'Redis'] },
  { group: 'Quality & ops', items: ['OpenTelemetry', 'JUnit', 'Kotest', 'Cucumber', 'JMeter', 'SonarQube', 'Auth0 / OIDC'] },
];

export const projects = [
  {
    title: 'Banking app',
    blurb: 'Accounts and transactions with a Spring Boot API and an Angular client.',
    tech: ['Java', 'Spring Boot', 'Angular'],
    image: bank,
    href: 'https://github.com/abelfish/Natna-Bank-Project',
  },
  {
    title: 'Student job board',
    blurb: 'Alumni and students post and apply for jobs; built as a team project.',
    tech: ['Java', 'Spring', 'JavaScript'],
    image: jobs,
    href: 'https://github.com/abelfish/alumni-management',
  },
  {
    title: 'Note-taking app',
    blurb: 'A small full-stack notes app with a TypeScript front end.',
    tech: ['TypeScript', 'Node.js'],
    image: notes,
    href: 'https://github.com/abelfish/Simple-Note-Taking-App-public',
  },
  {
    title: 'Library management',
    blurb: 'Catalogue, members and loans for a library.',
    tech: ['Java'],
    image: library,
  },
  {
    title: 'Auto parts catalogue',
    blurb: 'Searchable parts inventory and catalogue.',
    tech: ['Java'],
    image: parts,
  },
  {
    title: 'Hotel management',
    blurb: 'Rooms, bookings and guests for a small hotel.',
    tech: ['Java'],
    image: hotel,
  },
];

export const education = [
  {
    degree: 'M.S. Computer Science',
    school: 'Maharishi International University',
    location: 'Fairfield, IA',
    dates: '2022 – 2023',
    detail: 'GPA 4.00',
  },
  {
    degree: 'B.S. Computer Science',
    school: 'Eritrea Institute of Technology',
    location: 'Asmara, Eritrea',
    dates: '2011 – 2016',
    detail: 'GPA 3.7',
  },
];
