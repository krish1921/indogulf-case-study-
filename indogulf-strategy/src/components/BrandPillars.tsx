import { useState } from 'react';
import { Sun, MessageCircle, Award, ArrowRight } from 'lucide-react';

const pillars = [
  {
    id: 'field-proof',
    icon: Sun,
    title: 'Field Proof',
    subtitle: 'Visible, locally-relevant crop results',
    color: '#237A48',
    accent: '#82B95B',
    bgFrom: '#237A48',
    description: 'Replace broadcast advertising with empirical on-soil evidence. Village trials neutralize farmer risk aversion more effectively than any media campaign.',
    initiatives: [
      { label: '2,000 Krishi Mitras', desc: 'Progressive farmer champions hosting village trials — incentivized with product support and recognition, no fixed salary.' },
      { label: '0.5-acre Split Demos', desc: 'Direct side-by-side comparison — Indogulf product vs conventional practice. Visible results build trust.' },
      { label: '10,000 Plots by Month 24', desc: 'Proposed scale target. 150 plots in Month 6 → 2,500 by Month 12 → 10,000 by Month 24. All targets are proposed, not achieved.' },
      { label: 'Geo-tagged & QR-tracked', desc: 'Each demo plot has a unique QR code for attendance verification and conversion tracking to control marketing leakage.' },
    ],
    evidence: 'ICAR Punjab Study (cited): On-soil demonstration drives 32% trial adoption vs <3% for mass media. Directional evidence — these measure different outcomes.',
    evidenceType: 'academic',
  },
  {
    id: 'useful-advice',
    icon: MessageCircle,
    title: 'Useful Advice',
    subtitle: 'Localized, crop-stage, actionable guidance',
    color: '#79543A',
    accent: '#D8A34B',
    bgFrom: '#79543A',
    description: 'WhatsApp-native advisory operating on zero-storage, zero-app-download infrastructure. Crop-stage guidance, pest alerts, and weather-linked spray charts in farmer-preferred languages.',
    initiatives: [
      { label: '6 Indic Languages', desc: 'Content available in Hindi, Telugu, Punjabi, Marathi, Gujarati, and Tamil — meeting farmers in the language of daily life.' },
      { label: '92% WhatsApp Open Rate', desc: 'Cited engagement rate within 2 hours. This is the basis for the proposed WhatsApp-first digital strategy. Primary source not specified in dossier.' },
      { label: 'Pest & Weather Alerts', desc: 'Satellite humidity and temperature data triggering pest alerts and dealer inventory notifications 48 hours before infestation risk.' },
      { label: 'QR Reels on Packaging', desc: '45-second vernacular video demos accessible by scanning product packaging. Peer farmer tutorials show correct spraying techniques.' },
    ],
    evidence: 'Rural WhatsApp penetration: 92% (cited in solution). IAMAI-Kantar (cited): standalone agri-apps have 85%+ 30-day uninstall rate.',
    evidenceType: 'industry',
  },
  {
    id: 'scientific-credibility',
    icon: Award,
    title: 'Scientific Credibility',
    subtitle: 'Patents translated into farmer benefits',
    color: '#123B2A',
    accent: '#82B95B',
    bgFrom: '#123B2A',
    description: 'Indogulf\'s 6 granted patents and ISO-certified manufacturing provide credibility that competitors without proprietary technology cannot replicate. The strategy frames technical strengths as practical farmer value.',
    initiatives: [
      { label: '6 Granted Patents', desc: 'Source-verified capability. Includes Pyrazosulfuron Ethyl 97% (rice herbicide) and Spiromesifen 96.5% (mite/whitefly control). Framed as farmer savings in demos.' },
      { label: '4 ISO-Certified Plants', desc: 'Manufacturing quality credentials across 20 acres in Haryana and J&K. Translates to consistent product formulation reliability.' },
      { label: 'ICAR & Third-Party Studies', desc: 'Biological products marketed using company trial data, ICAR studies, and verified field results — not unverified claims. Aligned with CIB&RC guidelines.' },
      { label: 'BioEdge ICM Positioning', desc: 'Biologicals positioned as efficiency companions to conventional chemistry — not replacements. Avoids the market friction of "100% organic" claims that farmers distrust.' },
    ],
    evidence: 'Company filing (source-verified): 6 granted patents, 4 manufacturing facilities, ISO 9001:2015 & ISO 14001:2015 certified. Two Star Export House recognition.',
    evidenceType: 'company',
  },
];

const beforeAfter = [
  { before: 'Dealer-dependent discovery', after: 'Evidence-backed farmer preference', icon: '→' },
  { before: 'Generic brand perception', after: 'Branded scientific credibility', icon: '→' },
  { before: 'Broadcast advertising (<3% switch)', after: 'Field demonstrations (32% trial)', icon: '→' },
  { before: '7,000 undifferentiated dealers', after: '1,400 high-influence advisory hubs', icon: '→' },
];

export default function BrandPillars() {
  const [activePillar, setActivePillar] = useState(0);

  const pillar = pillars[activePillar];
  const evidenceColors: Record<string, string> = {
    academic: 'text-primary bg-leaf/10 border-leaf/20',
    industry: 'text-amber bg-amber/10 border-amber/20',
    company: 'text-soil bg-soil/10 border-soil/20',
  };
  const evidenceLabels: Record<string, string> = {
    academic: 'Research evidence',
    industry: 'Industry data',
    company: 'Company data',
  };

  return (
    <div className="section-pad" style={{ background: '#F7F6EF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            <div className="w-12 h-px bg-primary/40" />
            Brand Strategy
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <h2 className="font-serif text-charcoal text-4xl md:text-5xl mb-6">
            Three Brand-Building Levers
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            "Win farmer preference with visible field proof, then reinforce it through useful local-language advice."
          </p>
        </div>

        {/* Pillar tabs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
          {pillars.map((p, i) => (
            <button
              key={p.id}
              id={`pillar-tab-${p.id}`}
              onClick={() => setActivePillar(i)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-sm transition-all border-2 ${
                activePillar === i
                  ? 'text-white shadow-lg scale-105'
                  : 'text-charcoal bg-white border-sage/40 hover:border-primary/40'
              }`}
              style={activePillar === i ? { background: p.color, borderColor: p.color } : {}}
            >
              <p.icon className="w-5 h-5" />
              {p.title}
            </button>
          ))}
        </div>

        {/* Active pillar detail */}
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 rounded-3xl p-8 text-white relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${pillar.bgFrom}, ${pillar.color}dd)` }}>
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10"
              style={{ background: pillar.accent, transform: 'translate(30%,-30%)' }} />
            <pillar.icon className="w-12 h-12 mb-6 opacity-80" />
            <h3 className="font-serif text-3xl mb-3">{pillar.title}</h3>
            <p className="text-white/70 text-sm mb-6">{pillar.subtitle}</p>
            <p className="text-white/90 leading-relaxed text-sm">{pillar.description}</p>

            {/* Evidence tag */}
            <div className={`mt-6 flex items-start gap-2 p-3 rounded-xl border ${evidenceColors[pillar.evidenceType]}`}
              style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}>
              <span className="text-xs font-bold uppercase tracking-wide opacity-60">{evidenceLabels[pillar.evidenceType]}</span>
              <p className="text-xs leading-relaxed opacity-80">{pillar.evidence}</p>
            </div>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {pillar.initiatives.map((init, i) => (
              <div key={i} className="p-5 bg-white rounded-2xl border border-sage/40 shadow-sm card-lift">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full" style={{ background: pillar.accent }} />
                  <span className="font-semibold text-charcoal text-sm">{init.label}</span>
                </div>
                <p className="text-sm text-charcoal/60 leading-relaxed">{init.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Before / After */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="font-serif text-charcoal text-3xl">Before vs After</h3>
            <p className="text-charcoal/50 mt-2 text-sm">The proposed brand positioning shift</p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-sage/40 bg-white shadow-md">
            <div className="grid grid-cols-5 bg-sage/30 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-charcoal/50">
              <div className="col-span-2">Current State</div>
              <div className="text-center">Shift</div>
              <div className="col-span-2 text-right">Proposed State</div>
            </div>
            {beforeAfter.map((row, i) => (
              <div key={i} className={`grid grid-cols-5 px-6 py-4 items-center ${i % 2 === 0 ? '' : 'bg-sage/10'}`}>
                <div className="col-span-2 text-sm text-charcoal/60 font-medium">{row.before}</div>
                <div className="flex justify-center">
                  <ArrowRight className="w-4 h-4 text-amber" />
                </div>
                <div className="col-span-2 text-right text-sm font-semibold text-primary">{row.after}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-charcoal/40 text-center mt-4">
            ⓘ Figures in "Proposed State" column represent strategy targets, not achieved results.
          </p>
        </div>
      </div>
    </div>
  );
}
