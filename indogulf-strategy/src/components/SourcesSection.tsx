import { ExternalLink, FileText, BookOpen, Building2 } from 'lucide-react';

const sources = [
  {
    category: 'Company Sources',
    icon: Building2,
    color: '#237A48',
    items: [
      { title: 'Indogulf Cropsciences Ltd. Annual Report FY2024–25', url: 'https://www.indogulf.co.in', note: 'Revenue, profit, distribution network metrics' },
      { title: 'Indogulf Cropsciences Ltd. Annual Report FY2023–24', url: 'https://www.indogulf.co.in', note: 'Prior-year baseline financials' },
      { title: 'Case Study: Indogulf Crop Science (indogulf crop science case.pdf)', note: 'Brand recall (<15%), dealer influence (72%), market context' },
    ],
  },
  {
    category: 'Academic & Industry',
    icon: BookOpen,
    color: '#82B95B',
    items: [
      { title: 'ICAR Punjab Rice Study', note: 'On-soil demonstration: 32% trial adoption vs <3% for mass media. Directional evidence — different outcomes measured, different study contexts.' },
      { title: 'Crop Protection (2026) — Jammu/Samba Study', note: 'Dealer diagnostic accuracy: 34% → 81% post-training. Re-order velocity impact. Limited geographic scope.' },
      { title: 'IAMAI-Kantar Report', note: '85%+ 30-day uninstall rate for standalone agri-apps. Basis for WhatsApp-native advisory preference.' },
      { title: 'Agrochemical Market Reports (industry estimates)', note: 'Market size: ~INR 69,000 Cr domestic (FY24). Biologicals CAGR: 14.2%. Export share: ~USD 3.3B FY25. Source: case study background.' },
    ],
  },
];

const disclaimer = `This website presents a strategic analysis and recommendation for Indogulf Cropsciences Ltd., prepared as a case competition submission. It does not represent official company strategy, investor advice, or audited guidance. All figures labelled "proposed" or "illustrative" are strategic targets that have not been executed or independently validated. Verified figures are sourced from the materials listed above. No financial, legal, or investment decisions should be based on this content.`;

export default function SourcesSection() {
  return (
    <div className="section-pad" style={{ background: 'linear-gradient(180deg, #EDF2E8 0%, #E4EBDD 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            <div className="w-12 h-px bg-primary/40" />
            Sources
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <h2 className="font-serif text-charcoal text-4xl md:text-5xl mb-4">All Sources & Disclaimers</h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            Full provenance for every figure used in this strategy. Transparency is a core commitment.
          </p>
        </div>

        {/* Source groups */}
        <div className="space-y-8 mb-14">
          {sources.map(group => (
            <div key={group.category} className="bg-white rounded-2xl border border-sage/50 shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-sage/30" style={{ background: `${group.color}08` }}>
                <group.icon className="w-4 h-4" style={{ color: group.color }} />
                <h3 className="font-semibold text-charcoal text-base">{group.category}</h3>
              </div>
              <div className="divide-y divide-sage/20">
                {group.items.map((item, i) => (
                  <div key={i} className="px-6 py-4 flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: group.color }} />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm text-charcoal mb-1">{item.title}</div>
                      {item.note && <p className="text-xs text-charcoal/50 leading-relaxed">{item.note}</p>}
                    </div>
                    {'url' in item && item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-primary hover:text-primary/70 transition-colors flex-shrink-0"
                      >
                        Visit <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer box */}
        <div className="p-6 rounded-2xl border border-amber/30 bg-amber/5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 rounded-full bg-amber" />
            <h4 className="font-semibold text-charcoal text-sm">Important Disclaimer</h4>
          </div>
          <p className="text-xs text-charcoal/60 leading-relaxed">{disclaimer}</p>
        </div>
      </div>
    </div>
  );
}
