// KPI data from Solution Presentation (Slide 2, Appendix A1-A5) and Research Dossier
// Labels: 'verified' = from research dossier/case study, 'proposed' = solution target, 'illustrative' = sample

export interface KPI {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  type: 'verified' | 'proposed' | 'illustrative';
  numericTarget?: number;
  suffix?: string;
  prefix?: string;
}

export const baselineKPIs: KPI[] = [
  {
    id: 'brand-recall',
    value: '<15',
    label: 'Farmer Brand Recall',
    sublabel: 'Current baseline — source-reported case figure',
    type: 'verified',
    numericTarget: 15,
    suffix: '%',
  },
  {
    id: 'dealer-influence',
    value: '72',
    label: 'Dealer-Led Purchase Influence',
    sublabel: 'Farmers purchase based on dealer recommendation — case figure',
    type: 'verified',
    numericTarget: 72,
    suffix: '%',
  },
  {
    id: 'whatsapp-opens',
    value: '92',
    label: 'WhatsApp Open Rate (2 hrs)',
    sublabel: 'Stated in solution presentation — rural WhatsApp engagement figure',
    type: 'verified',
    numericTarget: 92,
    suffix: '%',
  },
  {
    id: 'demo-conversion',
    value: '25–35',
    label: 'Target Demo-to-Buy Conversion',
    sublabel: 'Proposed target from solution — not yet validated in live pilots',
    type: 'proposed',
    numericTarget: 30,
    suffix: '%',
  },
];

export const targetMilestones = [
  {
    phase: 'Baseline (FY25)',
    recall: '<15%',
    plots: '0',
    reach: '—',
    color: '#79543A',
  },
  {
    phase: 'Month 6',
    recall: '18%',
    plots: '150',
    reach: '6,000 farmers',
    color: '#82B95B',
  },
  {
    phase: 'Month 12',
    recall: '25%',
    plots: '2,500',
    reach: '100,000 (conversion milestone)',
    color: '#237A48',
  },
  {
    phase: 'Month 24',
    recall: '35%+',
    plots: '10,000',
    reach: '50,000+ verified CRM records',
    color: '#123B2A',
  },
];
