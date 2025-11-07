import {
  Trophy,
  Star,
  Sparkles,
  FileText,
  Mic,
  Users,
  ShieldCheck,
  Target,
  Crown,
  Heart,
  Globe,
  Cpu,
  MessageCircle,
  Megaphone,
  Medal,
  Rocket,
  ClipboardCheck,
  Flag,
  BookOpen,
  Building2,
  Lightbulb,
  Handshake,
  Award
} from 'lucide-react';

const awards = [
  {
    id: 'best-delegate',
    title: 'Best Delegate',
    description:
      'Awarded for exceptional performance in debate, diplomacy, and leadership throughout the MUN.',
    criteria: [
      'Demonstrates persuasive diplomacy grounded in cyber policy evidence',
      'Builds consensus during moderated, unmoderated, and crisis segments',
      'Maintains decorum while steering the committee towards actionable resolutions'
    ],
    audience: 'Delegates',
    group: 'delegates',
    icon: Trophy,
    spotlight: true
  },
  {
    id: 'high-commendation',
    title: 'High Commendation',
    description: 'Recognizes delegates who demonstrated strong analytical thinking and active participation.',
    criteria: [
      'Substantiates interventions with data, case studies, and stakeholder analysis',
      'Supports blocs with constructive amendments and crisis-ready alternatives',
      'Shows respect, empathy, and collaboration across the committee floor'
    ],
    audience: 'Delegates',
    group: 'delegates',
    icon: Star,
    spotlight: true
  },
  {
    id: 'special-mention',
    title: 'Special Mention',
    description: 'For delegates who showed promising engagement and potential in committee discussions.',
    criteria: [
      'Takes initiative to keep debates inclusive and solutions-oriented',
      'Connects cyber hygiene risks with real-world impact on citizens',
      'Responds to feedback with agility while upholding MUN protocol'
    ],
    audience: 'Delegates',
    group: 'delegates',
    icon: Sparkles,
    spotlight: true
  },
  {
    id: 'best-position-paper',
    title: 'Best Position Paper',
    description: 'Honors the most well-researched, clearly articulated, and policy-driven position paper.',
    criteria: [
      'Maps national stances to cyber hygiene priorities with credible sources',
      'Structures background, problem statements, and proposals for clarity',
      'Aligns solutions with Cyber Hygiene MUN charter and global frameworks'
    ],
    audience: 'Delegates',
    group: 'delegates',
    icon: FileText
  },
  {
    id: 'best-speaker',
    title: 'Best Speaker',
    description: 'Awarded to the most articulate, persuasive, and impactful speaker in the sessions.',
    criteria: [
      'Delivers clear, confident speeches that advance committee objectives',
      'Balances rhetoric with actionable proposals and stakeholder awareness',
      'Exhibits stage presence and adaptive delivery across formats'
    ],
    audience: 'Delegates',
    group: 'delegates',
    icon: Mic
  },
  {
    id: 'best-team-coordination',
    title: 'Best Team Coordination',
    description: 'For the team that exhibited the best collaboration, strategy, and shared representation.',
    criteria: [
      'Operates as a cohesive bloc across committees and crisis briefings',
      'Strategises research, speaking roles, and caucus engagement effectively',
      'Embodies sportsmanship and mutual support throughout the conference'
    ],
    audience: 'Delegates',
    group: 'delegates',
    icon: Users
  },
  {
    id: 'cyber-hygiene-champion',
    title: 'Cyber Hygiene Champion',
    description: 'Recognizes insightful contributions on core cybersecurity and digital ethics themes.',
    criteria: [
      'Prioritises cyber hygiene safeguards in every draft and negotiation',
      'Highlights ethical considerations and citizen impact in debate',
      'Champions responsible technology usage and awareness initiatives'
    ],
    audience: 'Delegates / Teams',
    group: 'delegates',
    icon: ShieldCheck
  },
  {
    id: 'cyber-jury-excellence',
    title: 'Cyber Jury Excellence Award',
    description: 'Honors overall excellence in judging—balanced, fair, insightful, and highly engaged.',
    criteria: [
      'Applies evaluation rubrics consistently across all committees',
      'Provides evidence-based recommendations during deliberations',
      'Maintains presence across sessions and supports chairing teams'
    ],
    audience: 'Jury Members',
    group: 'jury',
    icon: Crown
  },
  {
    id: 'best-mentor-judge',
    title: 'Best Mentor Judge',
    description: 'Recognizes judges who gave constructive, youth-friendly feedback and nurtured delegate growth.',
    criteria: [
      'Shares actionable guidance aligned with cyber hygiene outcomes',
      'Encourages emerging speakers and first-time delegates empathetically',
      'Models mentorship that combines rigor with accessibility'
    ],
    audience: 'Jury Members',
    group: 'jury',
    icon: Heart
  },
  {
    id: 'digital-diplomacy-champion',
    title: 'Digital Diplomacy Champion',
    description: 'For judges who demonstrated deep understanding of MUN structure and linked it to global cyber policy.',
    criteria: [
      'Bridges MUN procedures with real-world diplomatic practices',
      'Evaluates delegates on both substance and procedural mastery',
      'Advocates for cyber norms and responsible governance frameworks'
    ],
    audience: 'Jury Members',
    group: 'jury',
    icon: Globe
  },
  {
    id: 'technical-expertise-award',
    title: 'Technical Expertise Award',
    description: 'Awarded to judges with strong domain knowledge in cybersecurity, AI, or digital governance.',
    criteria: [
      'Offers domain-specific insights that sharpen committee directives',
      'Supports crisis cells with timely technical clarifications',
      'Mentors chairs on blending policy with practical safeguards'
    ],
    audience: 'Jury Members',
    group: 'jury',
    icon: Cpu
  },
  {
    id: 'inclusive-voice-advocate',
    title: 'Inclusive Voice Advocate',
    description: 'Highlights judges who promoted inclusion, accessibility, and diversity in panel discussions.',
    criteria: [
      'Ensures balanced feedback across diverse schools and experience levels',
      'Champions accessible language and inclusive case framing',
      'Collaborates with chairs to spotlight underrepresented voices'
    ],
    audience: 'Jury Members',
    group: 'jury',
    icon: MessageCircle
  },
  {
    id: 'distinguished-jury-contributor',
    title: 'Distinguished Jury Contributor',
    description:
      'For those who actively contributed to award decisions, maintained decorum, and ensured integrity.',
    criteria: [
      'Leads deliberations with transparency and ethical judgement',
      'Documents decisions with clarity for academic and organising teams',
      'Upholds conference values while resolving evaluation conflicts'
    ],
    audience: 'Jury Members',
    group: 'jury',
    icon: Medal
  },
  {
    id: 'best-first-time-judge',
    title: 'Best First-Time Judge',
    description: 'Encourages and honors outstanding performance by a first-time or early-career MUN judge.',
    criteria: [
      'Adapts quickly to Cyber Hygiene MUN protocols and timelines',
      'Supports delegates with fresh perspectives and approachable demeanour',
      'Demonstrates commitment to continuous learning and reflection'
    ],
    audience: 'Jury Members',
    group: 'jury',
    icon: Rocket
  },
  {
    id: 'cyber-mun-impact',
    title: 'Cyber MUN Jury Impact Award',
    description:
      'Special recognition for exceptional impact on the event—selected based on peer and organizer feedback.',
    criteria: [
      'Goes beyond assigned duties to strengthen overall conference quality',
      'Supports knowledge management and outreach for future editions',
      'Earns peer appreciation for collaborative spirit and initiative'
    ],
    audience: 'Jury Members',
    group: 'jury',
    icon: Target
  },
  {
    id: 'best-host-school',
    title: 'Best Host School Award',
    description: 'For exceptional planning, coordination, and hospitality during the event.',
    criteria: [
      'Delivers seamless logistics, delegate support, and venue readiness',
      'Maintains efficient coordination with academic and operations teams',
      'Creates a welcoming environment that reflects Cyber Hygiene values'
    ],
    audience: 'Host Schools',
    group: 'host',
    icon: Building2
  },
  {
    id: 'cyber-awareness-champion-host',
    title: 'Cyber Awareness Champion Host',
    description:
      'For taking proactive steps in community outreach, school-level awareness, and event promotion.',
    criteria: [
      'Runs pre-conference awareness drives on digital safety and ethics',
      'Engages local partners, parents, and media in cyber hygiene initiatives',
      'Shares best practices with the broader education community'
    ],
    audience: 'Host Schools',
    group: 'host',
    icon: Megaphone
  },
  {
    id: 'best-school-delegation',
    title: 'Best Delegation (School-Level)',
    description: 'For outstanding performance by a school team (collective delegate performance).',
    criteria: [
      'Achieves consistent excellence across committees and press corps',
      'Demonstrates unity of research, messaging, and cyber hygiene advocacy',
      'Embodies sportsmanship and cross-committee collaboration'
    ],
    audience: 'Participating Schools',
    group: 'participating',
    icon: Flag
  },
  {
    id: 'cyber-ambassador-school',
    title: 'Cyber Ambassador School Award',
    description: 'For demonstrating high levels of student engagement in spreading digital safety post-MUN.',
    criteria: [
      'Implements Cyber Hygiene follow-up projects within school communities',
      'Mobilises students as peer educators and digital safety advocates',
      'Shares impact stories and resources with wider networks'
    ],
    audience: 'Participating Schools',
    group: 'participating',
    icon: Globe
  },
  {
    id: 'promising-cyber-advocates',
    title: 'Most Promising Cyber Hygiene Advocates (School)',
    description:
      'For presenting strong initiatives or follow-up actions on cyber hygiene in their institution or locality.',
    criteria: [
      'Designs measurable campaigns that reinforce responsible digital citizenship',
      'Collaborates with teachers, parents, and local bodies for impact',
      'Documents outcomes and lessons for future cohorts'
    ],
    audience: 'Participating Schools',
    group: 'participating',
    icon: Lightbulb
  },
  {
    id: 'best-mentor-award',
    title: 'Best Mentor Award – Cyber Hygiene MUN 2025',
    description:
      'For outstanding mentorship and delegate preparation, fostering confidence and clarity among students.',
    criteria: [
      'Guides research plans, mock debates, and crisis readiness sessions',
      'Encourages inclusive participation and continuous improvement',
      'Aligns mentoring with Cyber Hygiene MUN ethos and code of conduct'
    ],
    audience: 'Teachers & Mentors',
    group: 'mentors',
    icon: Handshake
  },
  {
    id: 'cyber-education-facilitator',
    title: 'Cyber Education Facilitator Award',
    description:
      'For actively promoting cyber safety awareness and digital literacy beyond the MUN forum.',
    criteria: [
      'Organises workshops or curricula focused on digital resilience',
      'Collaborates with industry or civic partners for extended outreach',
      'Empowers students to take ownership of cyber hygiene initiatives'
    ],
    audience: 'Teachers & Mentors',
    group: 'mentors',
    icon: BookOpen
  },
  {
    id: 'inspiring-educator',
    title: 'Inspiring Educator in Digital Citizenship',
    description: 'For exemplary guidance in shaping students into responsible and ethical digital citizens.',
    criteria: [
      'Models ethical technology use and inclusive online behaviour',
      'Integrates global cyber policy perspectives into classroom dialogue',
      'Mentors student leaders to drive safe digital cultures'
    ],
    audience: 'Teachers & Mentors',
    group: 'mentors',
    icon: Lightbulb
  },
  {
    id: 'most-supportive-teacher',
    title: 'Most Supportive Teacher Award',
    description: 'For consistent involvement, encouragement, and coordination throughout the event stages.',
    criteria: [
      'Provides logistical, emotional, and academic support to delegations',
      'Acts as liaison between school leadership and organising committees',
      'Ensures student well-being during every conference milestone'
    ],
    audience: 'Teachers & Mentors',
    group: 'mentors',
    icon: ClipboardCheck
  },
  {
    id: 'teacher-leader-advocacy',
    title: 'Teacher Leader in Cyber Hygiene Advocacy',
    description:
      'For initiating school-wide or community outreach efforts linked to cyber hygiene themes.',
    criteria: [
      'Launches campaigns that engage parents, alumni, or civic bodies',
      'Demonstrates measurable community impact and sustainability',
      'Shares resources that inspire other educators to champion cyber wellness'
    ],
    audience: 'Teachers & Mentors',
    group: 'mentors',
    icon: Award
  }
];

export default awards;
