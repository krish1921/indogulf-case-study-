import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Smartphone, TargetIcon } from 'lucide-react';

function useCountUp(target: number, duration: number = 2000, isVisible: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, isVisible]);
  return count;
}

function KPICard({ value, label, sublabel, icon: Icon, type, prefix = '', suffix = '', numericTarget = 0, color, isVisible }:
  { value: string; label: string; sublabel: string; icon: React.ElementType; type: string; prefix?: string; suffix?: string; numericTarget?: number; color: string; isVisible: boolean }) {
  const count = useCountUp(numericTarget, 2000, isVisible);
  const typeLabels: Record<string, string> = {
    verified: 'Source-reported figure',
    proposed: 'Proposed target',
    illustrative: 'Illustrative',
  };
  const typeBg: Record<string, string> = {
    verified: 'bg-leaf/10 text-leaf border-leaf/20',
    proposed: 'bg-amber/10 text-amber border-amber/30',
    illustrative: 'bg-sage text-charcoal/60 border-sage',
  };

  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-md border border-sage/60 hover:shadow-lg transition-all card-lift overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5" style={{ background: color, transform: 'translate(40%,-40%)' }} />
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${color}15` }}>
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${typeBg[type]}`}>{typeLabels[type]}</span>
      </div>
      <div className="font-display font-bold text-charcoal" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color }}>
        {value.startsWith('<') ? '<' : ''}{prefix}{isVisible ? count : 0}{suffix}
      </div>
      <div className="font-semibold text-charcoal mt-1 text-base">{label}</div>
      <p className="text-xs text-charcoal/50 mt-2 leading-relaxed">{sublabel}</p>
    </div>
  );
}

const challengeFlow = [
  { step: 'Product Availability', desc: 'Wide distribution across 7,000+ dealers in 22 states', color: '#79543A' },
  { step: 'Dealer Recommendation', desc: '72% of purchases driven by dealer choice — not farmer preference', color: '#D8A34B' },
  { step: 'Field Proof', desc: 'On-soil demonstrations needed to convert trial intent into purchases', color: '#237A48' },
  { step: 'Farmer Trust', desc: 'Consistent, localized advisory builds preference and loyalty', color: '#82B95B' },
  { step: 'Repeat Purchase', desc: 'Measurable engagement enables scale and margin improvement', color: '#123B2A' },
];

export default function ExecutiveOverview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFlow, setActiveFlow] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const kpis = [
    { value: '<15', label: 'Farmer Brand Recall', sublabel: 'Current baseline — source-reported case figure. Indogulf brand recognition among farmers at point of purchase.', icon: TrendingUp, type: 'verified', numericTarget: 15, color: '#237A48', suffix: '%' },
    { value: '72', label: 'Dealer-Led Purchase Influence', sublabel: 'Farmers rely on dealer recommendation for agrochemical brand selection — creating both dependence and opportunity.', icon: Users, type: 'verified', numericTarget: 72, color: '#79543A', suffix: '%' },
    { value: '92', label: 'WhatsApp Open Rate (2 hrs)', sublabel: 'Rural WhatsApp engagement figure cited in the solution — basis for the WhatsApp-native advisory strategy.', icon: Smartphone, type: 'verified', numericTarget: 92, color: '#237A48', suffix: '%' },
    { value: '25–35', label: 'Target Demo-to-Buy Conversion', sublabel: 'Proposed target from solution presentation — not yet validated in live pilots. Conditional on quality execution.', icon: TargetIcon, type: 'proposed', numericTarget: 30, color: '#D8A34B', suffix: '%' },
  ];

  return (
    <div ref={sectionRef} className="section-pad bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            <div className="w-12 h-px bg-primary/40" />
            Executive Overview
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <h2 className="font-serif text-charcoal text-4xl md:text-5xl mb-6">
            The Strategic Challenge
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Converting operational strength into farmer-recognised brand preference.
            Indogulf has the infrastructure — the gap is in market engagement.
          </p>
        </div>

        {/* KPI Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {kpis.map((kpi) => (
            <KPICard key={kpi.label} {...kpi} isVisible={isVisible} />
          ))}
        </div>

        {/* Challenge Flow */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-sage/40">
          <h3 className="font-serif text-charcoal text-2xl md:text-3xl mb-2">The Core Challenge</h3>
          <p className="text-charcoal/50 mb-10 text-sm">How farmer purchase decisions are made today — and where the strategy intervenes</p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 overflow-x-auto pb-4">
            {challengeFlow.map((item, i) => (
              <div key={i} className="flex md:flex-col items-center gap-4 flex-shrink-0">
                <div className="flex md:flex-col items-center gap-3">
                  {/* Node */}
                  <button
                    id={`challenge-node-${i}`}
                    onClick={() => setActiveFlow(activeFlow === i ? null : i)}
                    className="relative w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-sm transition-all hover:scale-110 shadow-lg cursor-pointer"
                    style={{ background: item.color, boxShadow: activeFlow === i ? `0 0 0 4px ${item.color}40, 0 4px 20px ${item.color}50` : '' }}
                    aria-expanded={activeFlow === i}
                  >
                    {i + 1}
                  </button>
                  <div className="text-center max-w-24">
                    <div className="font-semibold text-charcoal text-xs leading-tight">{item.step}</div>
                  </div>
                </div>

                {/* Connector */}
                {i < challengeFlow.length - 1 && (
                  <div className="md:hidden h-6 w-0.5 mt-1" style={{ background: `${challengeFlow[i+1].color}40` }} />
                )}
                {i < challengeFlow.length - 1 && (
                  <div className="hidden md:block h-0.5 flex-1 w-8" style={{ background: `${challengeFlow[i+1].color}40` }} />
                )}
              </div>
            ))}
          </div>

          {/* Active node description */}
          {activeFlow !== null && (
            <div className="mt-8 p-5 rounded-xl border-l-4 bg-sage/30"
              style={{ borderColor: challengeFlow[activeFlow].color }}>
              <div className="font-semibold text-charcoal text-sm mb-1">{challengeFlow[activeFlow].step}</div>
              <p className="text-charcoal/70 text-sm">{challengeFlow[activeFlow].desc}</p>
            </div>
          )}

          {!activeFlow && (
            <p className="mt-6 text-xs text-charcoal/40 text-center">Click any step to see the strategic context</p>
          )}
        </div>

        {/* Problem Statement */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Brand Differentiation',
              desc: 'Establishing a distinctive market identity that communicates scientific expertise, product reliability, and farmer value — not just product availability.',
              color: '#237A48',
            },
            {
              title: 'Field-Marketing Effectiveness',
              desc: 'Improving the quality, consistency, and measurable impact of interactions among sales teams, dealers, and farmers across the distribution network.',
              color: '#D8A34B',
            },
            {
              title: 'Customer Engagement',
              desc: 'Combining traditional distribution strengths with digital communication, demonstration programmes, and farmer feedback mechanisms.',
              color: '#79543A',
            },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-2xl bg-white border border-sage/40 card-lift">
              <div className="w-2 h-8 rounded-full mb-4" style={{ background: item.color }} />
              <h4 className="font-semibold text-charcoal text-base mb-3">{item.title}</h4>
              <p className="text-sm text-charcoal/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
