import { useState } from 'react';
import { CheckCircle, Clock, AlertTriangle, HelpCircle } from 'lucide-react';

type Certainty = 'verified' | 'proposed' | 'illustrative' | 'assumption';

interface Claim {
  claim: string;
  source: string;
  certainty: Certainty;
  note?: string;
  category: string;
}

const claims: Claim[] = [
  { category: 'Financials', certainty: 'verified', claim: 'FY25 total revenue: ₹621.15 Cr (+8.6% YoY)', source: 'Annual Report FY2024–25', note: 'Audited and publicly disclosed.' },
  { category: 'Financials', certainty: 'verified', claim: 'Domestic revenue: ₹555.29 Cr (89.5% of total)', source: 'Annual Report FY2024–25' },
  { category: 'Financials', certainty: 'verified', claim: 'Export revenue: ₹65.86 Cr (−12.7% YoY)', source: 'Annual Report FY2024–25' },
  { category: 'Financials', certainty: 'proposed', claim: 'FY27E revenue: ₹711.2 Cr', source: 'Solution Presentation projections', note: 'Not audited. Conditional on strategy execution.' },
  { category: 'Financials', certainty: 'proposed', claim: 'FY29E revenue: ₹961.2 Cr at 22× P/E → ₹1,837 Cr market cap', source: 'Solution Presentation projections', note: 'Highly uncertain. Depends on market conditions and execution.' },
  { category: 'Farmer Behaviour', certainty: 'verified', claim: 'Farmer brand recall: <15%', source: 'Case Study (Indogulf crop science case)', note: 'Source-reported case figure.' },
  { category: 'Farmer Behaviour', certainty: 'verified', claim: '72% of purchases driven by dealer recommendation', source: 'Case Study background data' },
  { category: 'Farmer Behaviour', certainty: 'verified', claim: 'Mass media drives <3% brand switches; on-soil demos drive 32% trial adoption', source: 'ICAR Punjab Rice Study, cited in dossier', note: 'Directional evidence — these figures measure different outcomes and are not directly comparable.' },
  { category: 'Digital Engagement', certainty: 'verified', claim: 'WhatsApp open rate within 2 hrs: 92%', source: 'Solution Presentation, Appendix A3', note: 'Primary source not specified in dossier. Cited as-is.' },
  { category: 'Digital Engagement', certainty: 'verified', claim: 'Standalone agri-apps: 85%+ 30-day uninstall rate', source: 'IAMAI-Kantar, cited in dossier' },
  { category: 'Distribution', certainty: 'verified', claim: '7,000+ active distributors across 22 states + 3 UTs', source: 'Case Study + Research Dossier' },
  { category: 'Distribution', certainty: 'verified', claim: '6 granted patents; 4 ISO-certified plants (20 acres)', source: 'Company filings' },
  { category: 'Distribution', certainty: 'assumption', claim: 'Top 20% of dealers (~1,400) drive ~75%+ of volume', source: 'Pareto principle applied to dealer count', note: 'Plausible heuristic but no dealer-level data cited to verify exact split.' },
  { category: 'Strategy Targets', certainty: 'proposed', claim: 'Month 6: 150 demo plots, 18% recall, 6,000 farmers reached', source: 'Solution Presentation' },
  { category: 'Strategy Targets', certainty: 'proposed', claim: 'Month 12: 2,500 demo plots, 25% recall, 100,000 conversion milestone', source: 'Solution Presentation' },
  { category: 'Strategy Targets', certainty: 'proposed', claim: 'Month 24: 10,000 demo plots, 35%+ recall, 50,000+ verified CRM records', source: 'Solution Presentation' },
  { category: 'Strategy Targets', certainty: 'proposed', claim: 'Demo-to-purchase conversion: 25–35% (phygital model)', source: 'Solution Presentation, Appendix A3', note: 'Not validated in live pilots.' },
  { category: 'Unit Economics', certainty: 'proposed', claim: 'Phygital CAC: ₹30/farmer vs ₹280 traditional field sales', source: 'Solution Presentation, Slide 5', note: 'Illustrative comparison — different activity types, not measured in a controlled study.' },
  { category: 'Unit Economics', certainty: 'illustrative', claim: 'BioEdge farmer ROI: ₹850 treatment → ₹5,000 gross benefit (5.88×)', source: 'Research Dossier, Slide 3', note: 'Gross benefit ÷ treatment cost only. Not net farm ROI after all input costs.' },
  { category: 'Unit Economics', certainty: 'assumption', claim: 'Dealer training doubles re-order velocity (34%→81% diagnostic accuracy)', source: 'Crop Protection 2026, Jammu/Samba Study', note: 'Single-region study; generalizability to other states and crops is uncertain.' },
];

const categories = ['All', ...Array.from(new Set(claims.map(c => c.category)))];

const certaintyConfig: Record<Certainty, { icon: React.ElementType; label: string; color: string; bg: string; border: string }> = {
  verified: { icon: CheckCircle, label: 'Source-Verified', color: '#237A48', bg: 'bg-leaf/10', border: 'border-leaf/20' },
  proposed: { icon: Clock, label: 'Proposed Target', color: '#D8A34B', bg: 'bg-amber/10', border: 'border-amber/30' },
  illustrative: { icon: HelpCircle, label: 'Illustrative', color: '#79543A', bg: 'bg-soil/10', border: 'border-soil/20' },
  assumption: { icon: AlertTriangle, label: 'Assumption / Uncertain', color: '#B04040', bg: 'bg-red-50', border: 'border-red-200' },
};

const certOrder: Certainty[] = ['verified', 'proposed', 'illustrative', 'assumption'];

export default function EvidenceVsAssumptions() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCert, setActiveCert] = useState<Certainty | 'all'>('all');

  const filtered = claims.filter(c => {
    const catOk = activeCategory === 'All' || c.category === activeCategory;
    const certOk = activeCert === 'all' || c.certainty === activeCert;
    return catOk && certOk;
  });

  const counts = certOrder.reduce<Record<string, number>>((acc, cert) => {
    acc[cert] = claims.filter(c => c.certainty === cert).length;
    return acc;
  }, {});

  return (
    <div className="section-pad" style={{ background: '#F0F4EC' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            <div className="w-12 h-px bg-primary/40" />
            Intellectual Honesty
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <h2 className="font-serif text-charcoal text-4xl md:text-5xl mb-6">
            Evidence vs. Assumptions
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Every claim in this strategy, categorised by how much confidence you should place in it.
          </p>
        </div>

        {/* Legend / cert filter */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {certOrder.map(cert => {
            const cfg = certaintyConfig[cert];
            const active = activeCert === cert;
            return (
              <button
                key={cert}
                id={`evidence-filter-${cert}`}
                onClick={() => setActiveCert(active ? 'all' : cert)}
                className={`p-4 rounded-2xl border-2 text-left transition-all ${
                  active ? `${cfg.bg} ${cfg.border}` : 'bg-white border-sage/30 hover:border-sage'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <cfg.icon className="w-4 h-4" style={{ color: cfg.color }} />
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: cfg.color }}>{cfg.label}</span>
                </div>
                <div className="text-2xl font-bold" style={{ color: cfg.color }}>{counts[cert]}</div>
                <div className="text-xs text-charcoal/40">claim{counts[cert] !== 1 ? 's' : ''}</div>
              </button>
            );
          })}
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-charcoal/60 border-sage/50 hover:border-primary/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Claims list */}
        <div className="space-y-3">
          {filtered.map((claim, i) => {
            const cfg = certaintyConfig[claim.certainty];
            return (
              <div key={i} className={`flex items-start gap-4 p-5 rounded-2xl bg-white border ${cfg.border} shadow-sm`}>
                <cfg.icon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: cfg.color }} />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full border" style={{ color: cfg.color, borderColor: cfg.color + '40', background: cfg.color + '10' }}>
                      {cfg.label}
                    </span>
                    <span className="text-xs text-charcoal/40 font-medium">{claim.category}</span>
                  </div>
                  <p className="text-sm font-semibold text-charcoal leading-snug mb-1">{claim.claim}</p>
                  <p className="text-xs text-charcoal/50">Source: {claim.source}</p>
                  {claim.note && (
                    <p className="text-xs text-charcoal/40 italic mt-1">{claim.note}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-charcoal/40">No claims match the selected filters.</div>
        )}
      </div>
    </div>
  );
}
