// Strategic alternatives from Solution Presentation, Slide 3 and Research Dossier Slide 2
// Scores are from the solution presentation's prioritization framework

export interface StrategicAlternative {
  id: string;
  title: string;
  score: number;
  status: 'PRIORITY #1' | 'PRIORITY #2' | 'REJECTED';
  statusColor: 'green' | 'amber' | 'red';
  flaw: string;
  rationale: string;
  test: string;
  verdict: string;
}

export const strategicAlternatives: StrategicAlternative[] = [
  {
    id: 'channel-field',
    title: 'Channel Restructuring + Field Expansion',
    score: 4.9,
    status: 'PRIORITY #1',
    statusColor: 'green',
    flaw: 'Requires disciplined execution and capital reallocation discipline.',
    rationale: 'Concentrates capital on high-influence dealers (top 1,400). Pairs store branding with localized farmer demonstration plots. Builds on-soil trust at scale. Captures 72% existing dealer pull while creating independent farmer demand.',
    test: 'Passes Feasibility, ROI & Moat Tests',
    verdict: 'Spreading capital across 7,000 transactional dealers funds competitors\' price wars. The Pareto strategy concentrates marketing on 1,400 high-influence dealers, transforming them into exclusive, high-margin technical advisory clinics.',
  },
  {
    id: 'field-expansion',
    title: 'Field-Marketing Expansion (Standalone)',
    score: 4.8,
    status: 'PRIORITY #2',
    statusColor: 'green',
    flaw: 'Standalone demos without channel reinforcement limit scale and repeat purchase.',
    rationale: 'Village demonstration plots with Krishi Mitras generate visible on-soil proof. Pairs well with channel restructuring but less effective in isolation.',
    test: 'Passes with Channel Pairing',
    verdict: 'Effective as a paired initiative but must be linked to dealer-level conversion tracking for measurable ROI.',
  },
  {
    id: 'diffuse-field-army',
    title: 'Indiscriminate Field Expansion (Diffuse Sales Army)',
    score: 2.6,
    status: 'REJECTED',
    statusColor: 'red',
    flaw: 'Hiring sales reps to service all 7,000 dealers creates unmanageable fixed SG&A overhead. Reps turn into credit collection agents.',
    rationale: 'Undifferentiated deployment fails the capital efficiency test. Marketing costs bloat without proportional farmer conversion.',
    test: 'Fails Capital Efficiency & Scale Test',
    verdict: 'Without Pareto targeting, field reps service low-influence retailers whose customers would switch brands on price anyway.',
  },
  {
    id: 'mobile-app',
    title: 'Standalone Mobile Agri-App',
    score: 2.2,
    status: 'REJECTED',
    statusColor: 'red',
    flaw: 'Rural memory constraints (32GB–64GB phones). 85%+ 30-day uninstall rate (IAMAI–Kantar cited). High CAC (>₹150) with zero active usage.',
    rationale: 'App adoption in rural India faces systemic barriers: storage, connectivity, literacy, and install friction. WhatsApp-native tools outperform standalone apps on all key metrics.',
    test: 'Fails Rural Reality & AI-Wrapper Test',
    verdict: 'When 92% of rural farmers already use WhatsApp, building a separate app that competes for scarce phone storage misallocates development capital.',
  },
  {
    id: 'corporate-rebranding',
    title: 'Corporate Brand Repositioning (Mass Media)',
    score: 1.5,
    status: 'REJECTED',
    statusColor: 'red',
    flaw: 'Mass media (TV/print) creates awareness, not trust. Farmers refuse to risk ₹50,000 crop harvest on billboard slogans. Research evidence (ICAR Punjab Study cited): mass media influences <3% of brand switches.',
    rationale: 'Brand awareness from mass media doesn\'t translate to preference when purchase decisions are dealer-mediated and product-performance-driven.',
    test: 'Fails Causal Link & Substitution Test',
    verdict: 'TV advertising may build awareness among urban decision-makers but fails at the farmer\'s point of purchase where the dealer\'s recommendation and field proof govern choice.',
  },
];
