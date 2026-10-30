// 90-Day Roadmap and Long-Term Milestones from Solution Presentation (Slides 5-6)
// and Research Dossier (Slide 5)

export interface RoadmapPhase {
  id: string;
  phase: string;
  days: string;
  objective: string;
  activities: string[];
  milestones: string[];
  kpis: string[];
  stakeholders: string[];
  color: string;
  budget?: string;
}

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: 'phase1',
    phase: 'Phase 1 — Setup & Baseline',
    days: 'Days 1–30',
    objective: 'Data collection, dealer selection, pilot design, and preparation of all enablement tools.',
    activities: [
      'Audit 7,000-distributor database using Farmer Influence Score (FIS) criteria',
      'Select top 500 Key Account dealers in Haryana, Punjab, and UP for pilot cohort',
      'Onboard Krishi Mitras (village farmer champions) and brief them on demonstration protocols',
      'Conduct structured agronomic training for participating dealers',
      'Prepare low-cost demonstration kits, crop posters, and QR leaflets',
      'Set up WhatsApp advisory templates (pest alerts, spray charts, crop-stage tips)',
      'Finalize WhatsApp Business API and cloud CRM contract',
      'Establish project governance charter and steering committee',
    ],
    milestones: [
      'Top 500 Dealer Contracts signed',
      'Project steering charter approved',
      'WhatsApp Business API sandbox ready',
      'Krishi Mitra onboarding complete',
    ],
    kpis: [
      'Dealers selected and contracted',
      'Krishi Mitras onboarded',
      'CRM system configured',
      'Training curriculum finalized',
    ],
    stakeholders: ['Marketing team', 'Sales operations', 'Regional branch managers', 'IT/Digital team'],
    color: '#D8A34B',
    budget: 'Part of ₹3.5 Cr proposed pilot budget',
  },
  {
    id: 'phase2',
    phase: 'Phase 2 — Field Execution',
    days: 'Days 31–60',
    objective: 'Deploy 150+ demonstration plots, activate WhatsApp campaigns, and begin converting farmer interest into trial purchases.',
    activities: [
      'Execute 4 regional two-day Krishi Saathi dealer certification bootcamps',
      'Establish 150 split-demo plots for Specialty Plant Nutrition (0.5-acre paired trials)',
      'Install branded signage with 150 village Krishi Mitras',
      'Launch localized WhatsApp advisory campaigns (6 Indic languages)',
      'Execute field events and farmer groups across pilot districts',
      'Track farmer engagement via unique QR codes at dealer level',
      'Review demo progress and conversion weekly',
      'Optimize messaging by crop type and district',
    ],
    milestones: [
      '500 Certified Krishi Saathi dealers',
      '150 Geo-Tagged demonstration plots established',
      'Branded store advisory counters installed at Tier-1 dealers',
      'WhatsApp advisory chatbot live',
    ],
    kpis: [
      'Demonstration plots established (target: 150)',
      'Farmer reach per district',
      'QR scan rate per plot',
      'Weekly demo-to-enquiry conversion',
    ],
    stakeholders: ['Field officer team', 'Dealer network', 'Krishi Mitra champions', 'Marketing analytics'],
    color: '#237A48',
    budget: 'Part of ₹3.5 Cr proposed pilot budget',
  },
  {
    id: 'phase3',
    phase: 'Phase 3 — Measure & Scale',
    days: 'Days 61–90',
    objective: 'Measure pilot outcomes, validate the scale gate, and expand to additional districts based on evidence.',
    activities: [
      'Host 150 village Farmer Field Days at peak vegetative crop stage',
      'Collect and register 6,000+ farmer profiles from demo attendees',
      'Measure demo-to-purchase conversion rate across pilot districts',
      'Compare pilot district performance against pre-pilot baseline',
      'Expand to additional districts based on pilot evidence and FIS rankings',
      'Prioritize high-influence dealers for Tier-1 upgrade',
      'Refine advisory content based on farmer feedback',
      'Develop repeat-purchase programme design for next season',
      'Compile Board Validation Deck with actual pilot results',
    ],
    milestones: [
      '6,000 Farmer Profiles registered in CRM',
      '>20% Demo-to-Purchase Conversion (scale gate)',
      '>75% Dealer Retention Rate (scale gate)',
      'Board Validation Deck submitted',
    ],
    kpis: [
      'Demo-to-buy conversion rate (scale gate: >20%)',
      'Farmer profiles captured',
      'Dealer retention rate (scale gate: >75%)',
      'Same-store sales lift vs baseline',
      'WhatsApp advisory engagement rate',
    ],
    stakeholders: ['Senior management', 'Marketing strategy', 'Regional sales heads', 'Board/Leadership'],
    color: '#123B2A',
    budget: 'Full ₹3.5 Cr committed | Scale to 1,400 dealers unlocked on passing scale gates',
  },
];

export const longTermMilestones = [
  {
    phase: 'Baseline',
    period: 'FY2025',
    recall: '<15%',
    recallNum: 15,
    plots: 0,
    reachNote: 'No structured demo programme',
    crm: 0,
    color: '#79543A',
    isBaseline: true,
  },
  {
    phase: 'Month 6 Target',
    period: '6 months post-launch',
    recall: '18%',
    recallNum: 18,
    plots: 150,
    reachNote: '6,000 farmers reached in pilot districts',
    crm: null,
    color: '#82B95B',
    isBaseline: false,
  },
  {
    phase: 'Month 12 Target',
    period: '12 months post-launch',
    recall: '25%',
    recallNum: 25,
    plots: 2500,
    reachNote: '100,000 conversions milestone (source-cited target; exact definition as stated in solution)',
    crm: null,
    color: '#237A48',
    isBaseline: false,
  },
  {
    phase: 'Month 24 Target',
    period: '24 months post-launch',
    recall: '35%+',
    recallNum: 35,
    plots: 10000,
    reachNote: 'National scale across pilot-validated districts',
    crm: 50000,
    color: '#123B2A',
    isBaseline: false,
  },
];
