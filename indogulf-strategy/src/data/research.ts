// Research cards from the Research Dossier (Indogulf_7_Slides_Executive_Brief.docx)
// Source URLs are from the original citations. Do not fabricate study titles or statistics.

export interface ResearchCard {
  id: string;
  category: string;
  title: string;
  finding: string;
  implication: string;
  limitation: string;
  source: string;
  sourceUrl?: string;
  sampleNote?: string;
  dataType: 'company' | 'sector' | 'academic' | 'government' | 'industry';
}

export const researchCards: ResearchCard[] = [
  {
    id: 'company-fy25',
    category: 'Company Financials',
    title: 'Indogulf Cropsciences FY2024–25 Financial Results',
    finding: 'Total revenue: ₹621.15 Cr (+8.6% YoY). Domestic revenue: ₹555.29 Cr (+11.8%). Export revenue: ₹65.86 Cr (−12.7%). Profit for the year: ₹32.09 Cr (+12.7%)',
    implication: 'Domestic market is the primary growth engine (89.5% of revenue). Export contraction signals need to refocus on domestic brand building and farmer-direct engagement.',
    limitation: 'Annual report figures; do not reflect intra-year segment-level marketing ROI, field-level contribution margins, or brand health metrics.',
    source: 'Indogulf Cropsciences Ltd. Annual Report FY2024–25',
    sourceUrl: 'https://www.indogulf.co.in',
    dataType: 'company',
  },
  {
    id: 'company-fy24',
    category: 'Company Financials',
    title: 'Indogulf Cropsciences FY2023–24 Financial Results',
    finding: 'Total revenue: ₹571.90 Cr. Domestic revenue: ₹496.57 Cr. Export revenue: ₹75.33 Cr. Profit for the year: ₹28.47 Cr.',
    implication: 'Previous year baseline for comparison. Export revenue share was higher in FY24 (13.2% vs 10.6% in FY25), indicating ongoing export market headwinds.',
    limitation: 'Prior-year figures only. No segment-level marketing or distribution cost data available in public disclosures.',
    source: 'Indogulf Cropsciences Ltd. Annual Report FY2023–24',
    sourceUrl: 'https://www.indogulf.co.in',
    dataType: 'company',
  },
  {
    id: 'mass-media-vs-demo',
    category: 'Farmer Purchase Behaviour',
    title: 'ICAR Punjab Rice Study: Media vs. On-Soil Demonstration Influence',
    finding: 'Mass media (TV/Radio) influences <3% of brand switches among farmers. Empirical on-soil visual demonstration drives 32% direct trial adoption.',
    implication: 'Field demonstrations are approximately 10x more effective than mass media at generating product trials. Reallocating broadcast budget to demo plots is the core strategic shift recommended.',
    limitation: 'These figures measure different outcomes and cannot be directly compared as if from a controlled experiment. The 32% figure for on-soil demos and <3% for mass media come from different research contexts. See solution slide note: "Directional evidence only: these figures measure different outcomes."',
    source: 'ICAR Punjab Rice Study, as cited in Research Dossier',
    dataType: 'academic',
    sampleNote: 'Punjab region, rice farmers — geographic generalizability to other states and crops is uncertain.',
  },
  {
    id: 'dealer-training',
    category: 'Dealer Influence & Retailer Knowledge',
    title: 'Crop Protection (2026) Jammu/Samba Study: Dealer Diagnostic Accuracy',
    finding: 'Untrained dealers misdiagnose crop pests 66% of the time. After structured agronomic training, diagnostic accuracy improves from 34% to 81%, directly doubling product re-order velocity.',
    implication: 'Dealer training is a high-ROI intervention. Structured certification programmes (like the proposed Krishi Saathi bootcamps) could significantly improve advisory quality, farmer satisfaction, and repeat purchases.',
    limitation: 'Study conducted in Jammu/Samba region. Sample size and study methodology details not provided in the research dossier. Results may not generalize to other agro-climatic zones or product categories.',
    source: 'Crop Protection (2026), Jammu/Samba Study, as cited in Research Dossier',
    dataType: 'academic',
    sampleNote: 'Jammu/Samba district dealers — limited geographic scope.',
  },
  {
    id: 'whatsapp-rural',
    category: 'Rural Internet Usage & Digital Advisory',
    title: 'WhatsApp Rural Penetration & Open Rates',
    finding: 'WhatsApp achieves 92% rural penetration. Message open rate within 2 hours: 92%. This outperforms standalone agri-apps which exhibit 85%+ 30-day uninstall rates.',
    implication: 'WhatsApp is the most accessible digital channel for rural farmer communication. WhatsApp-native advisory tools avoid the storage, connectivity, and literacy barriers associated with standalone applications.',
    limitation: 'The 92% open rate figure is cited in the solution presentation. Primary source and methodology not listed in the dossier. Actual engagement rates will vary by content quality, timing, and farmer literacy.',
    source: 'As cited in Solution Presentation (Slide 2, Appendix A3); IAMAI-Kantar on app uninstall rates',
    dataType: 'industry',
  },
  {
    id: 'agrochemical-market',
    category: 'Industry Market Size',
    title: 'Indian Agrochemical Market: Size and Export Position',
    finding: 'Agrochemical exports reached approximately USD 3.3 billion in FY2025. India is the third-largest agrochemical exporter globally (after China and USA). Domestic market estimated at approximately INR 69,000 crore (USD 7.8 billion) in FY2024. FY2024 market composition: approximately 51% exports, 49% domestic formulations.',
    implication: 'Large domestic market with significant export opportunity. Herbicides identified as a relatively fast-growing export segment. Indogulf\'s export contraction contrasts with overall sector growth, suggesting competitive or regulatory headwinds for its export portfolio.',
    limitation: 'Market size estimates from industry reports; specific figures may vary across sources. Indogulf\'s market share within this total is not publicly stated.',
    source: 'Case Study Background (indogulf crop science case.pdf)',
    dataType: 'industry',
  },
  {
    id: 'dealer-network',
    category: 'Company Distribution',
    title: 'Indogulf Distribution Network Metrics',
    finding: '7,000+ active distributors across 22 states and 3 Union Territories. 8 regional branches. 78 plant nutrition products, 19 biological solutions, 732 crop protection products (including 483 formulations). 6 granted patents. 4 ISO-certified manufacturing plants across 20 acres.',
    implication: 'Substantial distribution infrastructure exists. The challenge is not reach but quality of engagement. The Pareto observation (top 20% of ~7,000 = ~1,400 dealers controlling 75%+ of volume) drives the proposed concentration strategy.',
    limitation: 'Distributor count alone does not indicate quality of relationships, frequency of farmer interactions, or marketing effectiveness. No publicly available dealer-level performance data.',
    source: 'Case Study Background + Research Dossier',
    dataType: 'company',
  },
  {
    id: 'biologicals-market',
    category: 'Biologicals Strategy',
    title: 'Biologicals Segment: Margins and Market Growth',
    finding: 'Biologicals category growing at 14.2% CAGR (cited as fastest agri-input subsector). BioEdge gross margin: 55–60% vs 35% for generic chemicals. Farmer ROI calculation (illustrative): ₹850/acre treatment delivers ₹5,000 gross benefit = ~5.88x gross benefit-to-cost ratio.',
    implication: 'Biologicals represent the highest-margin expansion opportunity. The 5.88x figure represents gross benefit divided by treatment cost, not net ROI after all farming costs. ICM positioning (companion to chemistry, not replacement) addresses farmer risk aversion.',
    limitation: 'The 5.88× "ROI" is gross benefit ÷ treatment cost — not net farm-level ROI after all input costs. The 14.2% CAGR is a sector estimate. Indogulf\'s actual biologicals margin will depend on specific product mix and market conditions. Per-acre benefit calculations are illustrative examples.',
    source: 'Research Dossier (Slides 3 and 6), Solution Appendix A5',
    dataType: 'industry',
  },
  {
    id: 'cac-comparison',
    category: 'Field Marketing Economics',
    title: 'Phygital vs Traditional Field Sales: Unit Economics Comparison',
    finding: 'Traditional field sales: Cost per farmer contact ₹280, reach 2,500 farmers/district/season, lead-to-purchase conversion 3–5%, 30-day retention 15%. Phygital model (WhatsApp + demos): ₹30 per contact, 25,000 reach, 25–35% conversion, 65%+ retention.',
    implication: 'The phygital model shows substantially better unit economics across all dimensions. CAC can be reduced by ~89% while dramatically increasing reach and conversion.',
    limitation: 'These are the solution\'s proposed targets and directional comparisons — not independently audited results. Actual cost per farmer contact, conversion rates, and retention will depend on market conditions, content quality, and execution. The figures may not be directly comparable as they reflect different activity types.',
    source: 'Solution Presentation (Slide 5, Appendix A3), Research Dossier (Slide 4)',
    dataType: 'industry',
    sampleNote: 'Proposed/illustrative comparison — primary research validation needed',
  },
  {
    id: 'brand-architecture',
    category: 'Brand Architecture',
    title: 'Pure Masterbrand vs House of Brands vs Hybrid Endorsed Model',
    finding: 'Pure Masterbrand across 829 SKUs commoditizes premium biologicals. House of Brands requires ₹25+ Cr. SG&A. Hybrid Endorsed Model recommended: Indogulf Masterbrand + 3–4 Hero Brands (60% marketing spend) + BioEdge umbrella (25%). Comparable branded agri-tech companies trade at 22–26× P/E vs Indogulf\'s current ~13×.',
    implication: 'Transitioning to an endorsed hero-brand architecture could re-rate the company\'s public valuation multiple from generic (13×) to specialty branded (22×) over 3 years — if margins also improve as projected.',
    limitation: 'P/E multiple expansion depends on achieving both margin improvement targets and market recognition — both require execution, time, and market conditions outside the company\'s control. Peer P/E comparisons are directional, not a guarantee of re-rating.',
    source: 'Solution Presentation (Slides 7–8), Research Dossier (Slide 7)',
    dataType: 'industry',
  },
];

export const evidenceCategories = [
  'All',
  'Company Financials',
  'Farmer Purchase Behaviour',
  'Dealer Influence & Retailer Knowledge',
  'Rural Internet Usage & Digital Advisory',
  'Industry Market Size',
  'Company Distribution',
  'Biologicals Strategy',
  'Field Marketing Economics',
  'Brand Architecture',
];
