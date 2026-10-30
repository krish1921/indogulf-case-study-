import { useEffect, useRef, useState } from 'react';
import { Zap, Shield, Globe, TrendingUp } from 'lucide-react';

const valueLevers = [
  {
    icon: Zap,
    title: 'Farmer Preference → Pricing Power',
    color: '#237A48',
    current: 'Dealer-led brand choice; price-driven switching',
    proposed: 'Farmer-preferred brand; reduced price sensitivity',
    mechanism: 'When farmers request Indogulf by name, dealers lose discretion. Brand preference allows modest price premiums without volume loss.',
    type: 'proposed' as const,
  },
  {
    icon: Shield,
    title: 'Demo Plot Network → Moat',
    color: '#82B95B',
    current: 'Zero demonstration plots; zero CRM infrastructure',
    proposed: '10,000 geo-tagged plots; 50,000+ verified relationships',
    mechanism: 'A demonstration network takes 18–24 months to build and cannot be easily replicated by competitors. Farmer trust compounds over time.',
    type: 'proposed' as const,
  },
  {
    icon: Globe,
    title: 'Biologicals Mix → Margin Expansion',
    color: '#D8A34B',
    current: '35% gross margin on generic chemistry portfolio',
    proposed: '55–60% gross margin on BioEdge biologicals (cited)',
    mechanism: 'Biologicals (14.2% CAGR sector) carry higher margins. Shifting mix toward biological ICM products improves EBITDA without volume growth.',
    type: 'proposed' as const,
  },
  {
    icon: TrendingUp,
    title: 'Branded Specialty → P/E Re-rating',
    color: '#123B2A',
    current: 'Generic agri-inputs: ~13× P/E (approximate)',
    proposed: 'Branded agri-tech: 22–26× P/E (cited peer range)',
    mechanism: 'If margins improve and farmer brand equity is demonstrable, analysts may re-rate Indogulf from commodity to specialty. Not guaranteed — requires multi-year execution.',
    type: 'proposed' as const,
  },
];

const valueChain = [
  { step: 'Demonstration Plot', desc: 'Farmer sees visible result on his field', icon: '🌱' },
  { step: 'Krishi Mitra Advisory', desc: 'Trust-based peer recommendation reinforces adoption', icon: '👨‍🌾' },
  { step: 'WhatsApp Follow-up', desc: 'Post-trial advisory cements product-brand association', icon: '📱' },
  { step: 'CRM Record Created', desc: 'Verified relationship enables repeat-purchase tracking', icon: '📊' },
  { step: 'Brand Recall Improves', desc: 'Farmer remembers Indogulf at next purchase decision', icon: '🏆' },
];

function useVisible(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function ValueCreation() {
  const { ref, visible } = useVisible();

  return (
    <div ref={ref} className="section-pad bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            <div className="w-12 h-px bg-primary/40" />
            Value Creation
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <h2 className="font-serif text-charcoal text-4xl md:text-5xl mb-6">
            How the Strategy Creates Value
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Four compounding levers — from farmer preference to valuation re-rating. All are proposed mechanisms, not guaranteed outcomes.
          </p>
        </div>

        {/* Levers grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {valueLevers.map((lever, i) => (
            <div
              key={lever.title}
              className="bg-white rounded-2xl border border-sage/50 shadow-sm overflow-hidden card-lift"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${i * 120}ms, transform 0.5s ease ${i * 120}ms`,
              }}
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${lever.color}15` }}
                  >
                    <lever.icon className="w-5 h-5" style={{ color: lever.color }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-base leading-snug">{lever.title}</h3>
                    <span className="label-proposed text-xs mt-1">Proposed mechanism</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-red-50 border border-red-100">
                    <div className="text-xs font-semibold text-red-400 uppercase tracking-wide mb-1">Current</div>
                    <p className="text-xs text-charcoal/70">{lever.current}</p>
                  </div>
                  <div className="p-3 rounded-xl border" style={{ background: `${lever.color}08`, borderColor: `${lever.color}25` }}>
                    <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: lever.color }}>Proposed</div>
                    <p className="text-xs text-charcoal/70">{lever.proposed}</p>
                  </div>
                </div>

                <p className="text-xs text-charcoal/55 leading-relaxed italic border-l-2 pl-3" style={{ borderColor: lever.color + '60' }}>
                  {lever.mechanism}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Value chain flow */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-sage/40 shadow-md">
          <div className="text-center mb-10">
            <h3 className="font-serif text-charcoal text-3xl mb-2">The Value Chain</h3>
            <p className="text-charcoal/50 text-sm">How one demonstration plot translates into durable brand equity</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0 justify-center">
            {valueChain.map((step, i) => (
              <div key={step.step} className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
                <div className="flex flex-col items-center text-center max-w-28 md:max-w-32">
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <div className="font-semibold text-charcoal text-xs leading-tight mb-1">{step.step}</div>
                  <p className="text-charcoal/40 text-xs leading-tight">{step.desc}</p>
                </div>
                {i < valueChain.length - 1 && (
                  <div className="md:mx-3 text-charcoal/20 font-bold md:text-xl rotate-90 md:rotate-0">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
