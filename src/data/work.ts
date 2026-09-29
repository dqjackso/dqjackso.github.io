/**
 * Work history, education, and skills from Derek's resume.
 * Each bullet is its own entry so one line can be removed on its own.
 * Do not add facts that are not in the resume or that Derek has not confirmed.
 */

export interface Point {
  id: string;
  text: string;
}

export interface PointGroup {
  id: string;
  /** Empty when the role is a single list. */
  label: string;
  lead: Point[];
  rest: Point[];
}

export interface Role {
  id: string;
  dates: string;
  title: string;
  descriptor?: string;
  org: string;
  place?: string;
  former?: boolean;
  groups: PointGroup[];
}

export const experience: Role[] = [
  {
    id: 'sei',
    dates: 'September 2026 – Present',
    title: 'Consultant',
    descriptor: 'Concept-to-Delivery and Security Risk & Compliance',
    org: 'SEI',
    groups: [],
  },
  {
    id: 'cyber-dive',
    dates: '2019 – August 2026',
    title: 'Co-Founder and Chief Operating & Technology Officer',
    org: 'Cyber-Dive Corp',
    place: 'Mesa, AZ',
    former: true,
    groups: [
      {
        id: 'crisis',
        label: 'Crisis leadership and turnaround',
        lead: [
          {
            id: 'burn',
            text: 'Reduced monthly operating burn 48% ($170K to $89K) through an operating-model redesign and vendor renegotiation, while retaining all mission-critical staff and accounts.',
          },
        ],
        rest: [
          {
            id: 'command',
            text: 'Assumed operational leadership during a company crisis and stabilized cash, customer continuity, and operations.',
          },
          {
            id: 'bridge',
            text: 'Secured $1M in bridge financing while managing investor confidence and board communications.',
          },
          {
            id: 'framework',
            text: 'Designed and implemented a post-crisis operating framework from scratch: internal controls, tiered approval workflows, cash governance protocols, and financial reporting standards, and completed full governance remediation.',
          },
        ],
      },
      {
        id: 'product',
        label: 'Product and engineering leadership',
        lead: [
          {
            id: 'product-lifecycle',
            text: 'Led the product from concept through commercial deployment, turning a child-safety idea into a patented AI-driven hardware and software product. Teams across firmware, mobile, backend, and UX delivered 240+ active device deployments in trafficking recovery environments across 39 US states.',
          },
        ],
        rest: [
          {
            id: 'eng-scale',
            text: 'Scaled the engineering organization from the first hire to 15 engineers across full stack, mobile, and backend, including recruiting, hiring, onboarding, and performance management.',
          },
          {
            id: 'figma',
            text: 'Created a clickable Figma prototype of the parent dashboard, covering onboarding, settings, and the core journeys, and validated it in 50 user interviews before a line of code was written. Customer satisfaction improved 30% within the first year.',
          },
          {
            id: 'premortem',
            text: 'Introduced a pre-mortem for large full-stack features, identifying failure modes before the build and materially reducing technical issues in production.',
          },
          {
            id: 'scrum',
            text: 'Owned product backlog prioritization and the Kanban workflow in Jira as acting scrum master, with daily standups and sprint rituals that improved delivery predictability across concurrent workstreams.',
          },
          {
            id: 'mdm',
            text: 'Directed an agentless MDM enrollment process, from the architectural gap through cross-team delivery, to reduce device setup friction for end users.',
          },
          {
            id: 'testing',
            text: 'Set a rotating end-to-end testing cadence across the engineering team, covering frontend, data parser, and mobile APK surfaces before each release.',
          },
          {
            id: 'vendors',
            text: 'Directed integrations across 42Gears (MDM), Stripe (subscription and billing), AWS Rekognition (video analysis), TG5/Telgoo5 (carrier enrollment), and Kwanso (frontend), six external platforms in one product.',
          },
        ],
      },
      {
        id: 'architecture',
        label: 'Architecture and security',
        lead: [
          {
            id: 'microservices',
            text: 'Designed the microservices architecture, with service boundaries across user management, authentication, data transfer, and analysis, and deployed containerized services on AWS Lambda, ECS, Fargate, and Amplify.',
          },
        ],
        rest: [
          {
            id: 'trunk',
            text: 'Led the move from branch-based to trunk-based development and built the DevOps pipeline, including pre- and post-commit hooks, automated security scanning, and real-time Slack alerting. Release cadence went from weekly to hourly.',
          },
          {
            id: 'secure-display',
            text: 'Resolved a critical OS-level screen recording limitation that blocked capture of secure app surfaces. The fix reclassified the recording layer as a SECURE display, enabling capture of disappearing messages and security-flagged applications that standard recording frameworks cannot access.',
          },
          {
            id: 'pentest',
            text: 'Penetration-tested the public-facing architecture and remediated vulnerabilities before deployment, working as both technical lead and security reviewer.',
          },
          {
            id: 'kinesis',
            text: 'Directed the move from an API Gateway payload-limited model to Kinesis Video Stream for real-time device-to-parent video, across Decoder, Pipe, Event Hub, and Alerts, through implementation and testing.',
          },
          {
            id: 'observability',
            text: 'Designed an observability stack in New Relic across the microservices, covering function execution time, CPU usage, cold starts, and error rates, with Slack and email alerting.',
          },
        ],
      },
      {
        id: 'public',
        label: 'Public communication',
        lead: [
          {
            id: 'press',
            text: 'Translated technical and regulatory risk for state and national audiences in USA Today, ABC15, CBS 12News, Fox, and The Epoch Times, on digital safety policy at the state and federal level.',
          },
        ],
        rest: [],
      },
    ],
  },
  {
    id: 'tinfoil',
    dates: '2018 – 2019',
    title: 'Go-to-Market Director',
    org: 'Tinfoil Security',
    place: 'Remote (Mountain View, CA)',
    groups: [
      {
        id: 'gtm',
        label: '',
        lead: [
          {
            id: 'revenue',
            text: 'Drove 200% revenue growth by rebuilding the go-to-market motion: a tighter ideal customer profile, qualification standards, and sales execution, in partnership with the CEO and CTO.',
          },
          {
            id: 'team',
            text: 'Built and led a team of SDRs and account executives that hit annual targets, and introduced data-based performance management and CRM discipline that improved forecast reliability and pipeline visibility.',
          },
        ],
        rest: [],
      },
    ],
  },
  {
    id: 'jsa',
    dates: '2016 – 2018',
    title: 'Founder and Managing Director',
    org: 'JSA IT Services',
    place: 'Olympia, WA',
    groups: [
      {
        id: 'b2g',
        label: '',
        lead: [
          {
            id: 'revenue',
            text: 'Built a business-to-government IT contracting operation from zero, generating $86K+ in first-year revenue by identifying federal bid opportunities and writing compliant proposals.',
          },
          {
            id: 'distribution',
            text: 'Negotiated preferential pricing with Ingram Micro and Tech Data, and built delivery across sourcing, procurement, and fulfillment.',
          },
        ],
        rest: [],
      },
    ],
  },
  {
    id: 'army',
    dates: '2014 – 2018',
    title: 'Military Intelligence Officer',
    org: 'United States Army',
    place: 'Multiple locations',
    groups: [
      {
        id: 'service',
        label: '',
        lead: [
          {
            id: 'syria',
            text: 'Established the first U.S. Army Special Operations headquarters in Syria in 7 days, deploying personnel and $500K in communications infrastructure with zero mission disruption.',
          },
          {
            id: 'unit',
            text: 'Directed threat assessment, pattern-of-life analysis, and adversarial behavior modeling for a 62-person Special Operations intelligence unit.',
          },
        ],
        rest: [
          {
            id: 'xo',
            text: 'Served as executive second-in-command for mission execution and unit readiness, and for $17M in specialized vehicles and technology. Managed three budgets totaling $250K and self-funded two national training rotations without additional capital.',
          },
          {
            id: 'socmint',
            text: 'Designed and launched the task force’s first social media exploitation capability, assembling subject-matter advisors and securing $1M in unanimous funding from a senior budget review board.',
          },
          {
            id: 'biometrics',
            text: 'Executed a $1.5M procurement of 250 biometric devices across 6 units in 3 countries, and delivered 1 week ahead of schedule.',
          },
          {
            id: 'isr',
            text: 'Led an 8-person ISR team executing 48 real-time intelligence missions across 4 Special Forces units and 8,000+ personnel. A 3-week multi-state training program increased unit deployment readiness 80%. The section was recognized as the top intelligence section in the rotation.',
          },
          {
            id: 'audit',
            text: 'Eliminated $1.26M in excess spend through audit and asset transfer of 164 non-essential items, and maintained 100% accountability for $2M in sensitive equipment: the only perfect inspection score among 20 units.',
          },
        ],
      },
    ],
  },
  {
    id: 'asu-adjunct',
    dates: '2020 – 2023',
    title: 'Adjunct Professor, Information Security & Data Science',
    org: 'Arizona State University',
    place: 'Tempe, AZ',
    groups: [
      {
        id: 'teaching',
        label: '',
        lead: [
          {
            id: 'courses',
            text: 'Designed and taught advanced courses in information security, mobile app development, and data-driven application design. Course ratings improved 20% after a project-based curriculum redesign.',
          },
        ],
        rest: [],
      },
    ],
  },
];

export const patent = {
  label: 'Patent inventor',
  number: 'Patent No. 12695827',
};

export const education = [
  {
    dates: 'In progress',
    credential: 'Ph.D., Human Systems Engineering',
    org: 'Arizona State University',
  },
  {
    dates: '',
    credential: 'Master of Business Administration (MBA)',
    org: 'Liberty University',
  },
  {
    dates: '',
    credential: 'Bachelor of Science, Criminology',
    org: 'Arizona State University',
  },
];

export const certifications = [
  { name: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council' },
  { name: 'Security+', issuer: 'CompTIA' },
  { name: 'ITIL v3', issuer: 'AXELOS' },
  { name: 'Data Science Specialization', issuer: 'Johns Hopkins University' },
  { name: 'IRS Relief Specialist', issuer: 'Internal Revenue Service' },
  { name: 'Series 6 & Series 63 (SEC)', issuer: 'FINRA' },
];

export const competencies = [
  'Strategic Planning & Execution',
  'Program & Portfolio Management',
  'Organizational Design & Turnaround',
  'Cross-Functional Leadership',
  'Crisis Operations & Recovery',
  'Federal & Defense Program Execution',
  'Executive & Board Communications',
  'Stakeholder & Investor Relations',
  'Capital Strategy',
];

/** Python is listed once. The resume named it twice. */
export const tools = [
  'Python',
  'R',
  'R Studio',
  'Tableau',
  'Signal Detection Theory',
  'AWS (Lambda, ECS, Fargate, Amplify)',
  'Docker',
  'SonarQube',
  'Figma',
  'React',
  'Node.js',
  'bash',
  'Jira',
  'Confluence',
  'Trello',
  'Slack',
  'Microsoft Suite',
  'Apple/Mac',
];
