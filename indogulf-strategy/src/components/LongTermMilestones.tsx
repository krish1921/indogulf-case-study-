import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Map, Users, AlertCircle } from 'lucide-react';

const milestones = [
  {
    phase: 'Baseline',
    period: 'FY 2024–25',
    color: '#79543A',
    accent: '#B8855E',
    recall: '<15%',
    recallNum: 15,
    plots: '0',
    plotsNum: 0,
    reach: '—',
    reachNum: 0,
    reachLabel: 'No demo programme active',
    description: 'Current state. Farmer brand recall below 15% — source-reported case figure. Zero systematic demonstration plots. Dealer-led purchase influence at 72%.',
    type: 'verified' as const,
    isCurrent: true,
  },
  {
    phase: 'Month 6',
    period: 'Pilot Completion',
    color: '#82B95B',
    accent: '#A8D47A',
    recall: '18%',
    recallNum: 18,
    plots: '150',
    plotsNum: 150,
    reach: '6,000',
    reachNum: 6000,
    reachLabel: 'farmers reached',
    description: 'Pilot phase complete. 150 geo-tagged demonstration plots active across 10 Key Account districts. Initial Krishi Mitra network established. WhatsApp advisory live in 3 languages.',
    type: 'proposed' as const,
    isCurrent: false,
  },
  {
    phase: 'Month 12',
    period: 'Scale Gate',
    color: '#237A48',
    accent: '#2FA85F',
    recall: '25%',
    recallNum: 25,
    plots: '2,500',
    plotsNum: 2500,
    reach: '100,000',
    reachNum: 100000,
    reachLabel: 'conversion milestone (source-stated)',
    description: '100,000 farmer conversions — milestone stated in the solution presentation. 2,500 demonstration plots operational. Board Gate: >20% demo-to-purchase conversion required to greenlight Phase 3.',
    type: 'proposed' as const,
    isCurrent: false,
  },
  {
    phase: 'Month 24',
    period: 'Full Scale',
    color: '#123B2A',
    accent: '#237A48',
    recall: '35%+',
    recallNum: 35,
    plots: '10,000',
    plotsNum: 10000,
    reach: '50,000+',
    reachNum: 50000,
    reachLabel: 'verified CRM records',
    description: '10,000 demonstration plots active nationally. 50,000+ verified CRM records. Branded farmer community established. P/E re-rating trajectory initiated toward specialty agri-tech comparables.',
    type: 'proposed' as const,
    isCurrent: false,
  },
];

const metrics = [
  { key: 'recall', label: 'Brand Recall', icon: TrendingUp, suffix: '' },
  { key: 'plots', label: 'Demo Plots', icon: Map, suffix: '' },
  { key: 'reach', label: 'Farmers Reached', icon: Users, suffix: '' },
];

function AnimatedBar({ target, color, delay = 0 }: { target: number; color: string; delay?: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(target), delay);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, delay]);

  return (
    <div ref={ref} className="w-full bg-white/10 rounded-full h-1.5 mt-2 overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%`, background: color }}
      />
    </div>
  );
}

export default function LongTermMilestones() {
  const [activeIdx, setActiveIdx] = useState(2);

  return (
    <div
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0a1e13 0%, #123B2A 60%, #0d2a1c 100%)' }}
    >
      {/* Subtle topo pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='60' cy='60' r='50' stroke='%2382B95B' stroke-width='0.6' fill='none'/%3E%3Ccircle cx='60' cy='60' r='35' stroke='%2382B95B' stroke-width='0.4' fill='none'/%3E%3Ccircle cx='60' cy='60' r='20' stroke='%2382B95B' stroke-width='0.3' fill='none'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-leaf mb-4">
            <div className="w-12 h-px bg-leaf/40" />
            Long-Term Roadmap
            <div className="w-12 h-px bg-leaf/40" />
          </div>
          <h2 className="font-serif text-white text-4xl md:text-5xl mb-6">
            24-Month Growth Horizon
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            From zero demonstration plots to 10,000 nationally — a phased path to brand leadership in farmer-preferred agrochemicals.
          </p>

          {/* Disclaimer banner */}
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-2.5 rounded-full border border-amber/30 bg-amber/10">
            <AlertCircle className="w-3.5 h-3.5 text-amber flex-shrink-0" />
            <span className="text-xs text-amber font-medium">
              All milestone figures are proposed targets. None have been achieved.
            </span>
          </div>
        </div>

        {/* Timeline connector — desktop */}
        <div className="hidden lg:block relative mb-12">
          <div className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-white/10" />
          <div className="flex justify-between px-[10%]">
            {milestones.map((m, i) => (
              <button
                key={m.phase}
                id={`milestone-btn-${m.phase.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveIdx(i)}
                className="flex flex-col items-center gap-3 group cursor-pointer"
                aria-pressed={activeIdx === i}
              >
                <div
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-sm text-white z-10 relative transition-all duration-300"
                  style={{
                    background: activeIdx === i ? m.color : 'rgba(255,255,255,0.05)',
                    borderColor: activeIdx === i ? m.color : 'rgba(255,255,255,0.2)',
                    boxShadow: activeIdx === i ? `0 0 0 4px ${m.color}30, 0 4px 20px ${m.color}40` : 'none',
                  }}
                >
                  {i + 1}
                </div>
                <div className="text-center">
                  <div
                    className="font-semibold text-sm transition-colors"
                    style={{ color: activeIdx === i ? m.color : 'rgba(255,255,255,0.5)' }}
                  >
                    {m.phase}
                  </div>
                  <div className="text-white/30 text-xs">{m.period}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile phase tabs */}
        <div className="flex lg:hidden gap-2 mb-8 overflow-x-auto pb-2">
          {milestones.map((m, i) => (
            <button
              key={m.phase}
              onClick={() => setActiveIdx(i)}
              className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold border transition-all"
              style={
                activeIdx === i
                  ? { background: m.color, borderColor: m.color, color: '#fff' }
                  : { borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)' }
              }
            >
              {m.phase}
            </button>
          ))}
        </div>

        {/* Active milestone detail */}
        {(() => {
          const m = milestones[activeIdx];
          return (
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Left: narrative */}
              <div
                className="p-8 rounded-3xl border relative overflow-hidden"
                style={{ background: `${m.color}18`, borderColor: `${m.color}40` }}
              >
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
                  style={{ background: m.accent, transform: 'translate(30%,-30%)' }}
                />
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                    style={{ background: m.color }}
                  >
                    {activeIdx + 1}
                  </div>
                  <div>
                    <div className="font-bold text-white text-xl">{m.phase}</div>
                    <div className="text-white/40 text-sm">{m.period}</div>
                  </div>
                  <span
                    className={`ml-auto text-xs font-semibold px-3 py-1 rounded-full border ${
                      m.type === 'verified'
                        ? 'bg-leaf/10 text-leaf border-leaf/30'
                        : 'bg-amber/10 text-amber border-amber/30'
                    }`}
                  >
                    {m.type === 'verified' ? 'Source-reported' : 'Proposed target'}
                  </span>
                </div>
                <p className="text-white/75 leading-relaxed text-sm">{m.description}</p>

                {m.isCurrent && (
                  <div className="mt-5 p-3 rounded-xl border border-white/10 bg-white/5">
                    <p className="text-xs text-white/50">
                      ⓘ Baseline figures verified from the case study and research dossier. This is the starting point — no programme has been executed.
                    </p>
                  </div>
                )}
              </div>

              {/* Right: KPI cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {/* Recall */}
                <div className="p-5 rounded-2xl border border-white/10 bg-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4" style={{ color: m.color }} />
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Brand Recall</span>
                  </div>
                  <div className="font-display font-bold text-3xl" style={{ color: m.color }}>
                    {m.recall}
                  </div>
                  <AnimatedBar target={m.recallNum > 40 ? 40 : m.recallNum} color={m.color} delay={200} />
                  <p className="text-white/40 text-xs mt-2">Farmer unaided brand recall at point of purchase</p>
                </div>

                {/* Demo plots */}
                <div className="p-5 rounded-2xl border border-white/10 bg-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <Map className="w-4 h-4" style={{ color: m.accent }} />
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Demo Plots</span>
                  </div>
                  <div className="font-display font-bold text-3xl" style={{ color: m.accent }}>
                    {m.plots}
                  </div>
                  <AnimatedBar target={m.plotsNum > 0 ? Math.min((m.plotsNum / 10000) * 100, 100) : 0} color={m.accent} delay={350} />
                  <p className="text-white/40 text-xs mt-2">Active geo-tagged demonstration plots</p>
                </div>

                {/* Reach */}
                <div className="p-5 rounded-2xl border border-white/10 bg-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-leaf" />
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Farmer Reach</span>
                  </div>
                  <div className="font-display font-bold text-3xl text-leaf">
                    {m.reach}
                  </div>
                  <AnimatedBar target={m.reachNum > 0 ? Math.min((m.reachNum / 100000) * 100, 100) : 0} color="#82B95B" delay={500} />
                  <p className="text-white/40 text-xs mt-2">{m.reachLabel}</p>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Comparison table — all phases */}
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-4 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white/40">
            <div>Phase</div>
            <div className="text-center">Brand Recall</div>
            <div className="text-center">Demo Plots</div>
            <div className="text-center">Farmer Reach</div>
          </div>
          {milestones.map((m, i) => (
            <button
              key={m.phase}
              onClick={() => setActiveIdx(i)}
              className="w-full grid grid-cols-4 px-5 py-4 items-center text-left transition-all border-t border-white/5 hover:bg-white/5"
              style={activeIdx === i ? { background: `${m.color}18` } : {}}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: m.color }}
                />
                <div>
                  <div className="font-semibold text-white text-sm">{m.phase}</div>
                  <div className="text-white/30 text-xs">{m.period}</div>
                </div>
              </div>
              <div className="text-center font-bold" style={{ color: m.color }}>{m.recall}</div>
              <div className="text-center font-bold text-white/80">{m.plots}</div>
              <div className="text-center text-white/60 text-sm">{m.reach}</div>
            </button>
          ))}
        </div>

        <p className="text-center text-white/25 text-xs mt-4">
          ⓘ All month 6, 12, and 24 figures are proposed strategy targets. Only the Baseline row reflects source-verified data.
        </p>
      </div>
    </div>
  );
}
