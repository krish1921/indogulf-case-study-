import { useState, useCallback } from 'react';
import { farmerSegments } from '../data/segments';
import { Info } from 'lucide-react';

function Slider({ label, value, onChange, color }: { label: string; value: number; onChange: (v: number) => void; color: string }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-charcoal">{label}</label>
        <span className="text-lg font-bold" style={{ color }}>{value}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${color} 0%, ${color} ${value}%, #E4EBDD ${value}%, #E4EBDD 100%)`,
            accentColor: color,
          }}
        />
      </div>
    </div>
  );
}

function ScoreGauge({ score }: { score: number }) {
  const getClass = (score: number) => {
    if (score >= 70) return { label: 'Progressive Innovator', color: '#237A48' };
    if (score >= 40) return { label: 'Yield Maximizer', color: '#D8A34B' };
    return { label: 'Risk-Averse Smallholder', color: '#79543A' };
  };
  const cls = getClass(score);
  const circumference = 2 * Math.PI * 45;
  const dashOffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-36 h-36">
        <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#E4EBDD" strokeWidth="10" />
          <circle
            cx="50" cy="50" r="45" fill="none"
            stroke={cls.color} strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="font-display font-bold text-3xl text-charcoal">{score.toFixed(0)}</div>
          <div className="text-xs text-charcoal/50">/ 100</div>
        </div>
      </div>
      <div className="text-center">
        <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: cls.color }}>Illustrative Segment</div>
        <div className="font-semibold text-charcoal text-sm mt-1">{cls.label}</div>
      </div>
    </div>
  );
}

export default function FISCalculator() {
  const [a, setA] = useState(60); // Product Innovation Adoption
  const [b, setB] = useState(50); // Demonstration Response
  const [c, setC] = useState(45); // Purchase Behaviour
  const [activeSegment, setActiveSegment] = useState<string | null>(null);

  const fis = useCallback(() => {
    return 0.40 * a + 0.30 * b + 0.30 * c;
  }, [a, b, c]);

  const score = fis();

  const components = [
    { key: 'A', label: 'A — Product Innovation Adoption', sublabel: 'High-margin SKU adoption rate', value: a, weight: 0.40, color: '#237A48', onChange: setA },
    { key: 'B', label: 'B — Demonstration Response', sublabel: 'Demo-to-conversion rate', value: b, weight: 0.30, color: '#D8A34B', onChange: setB },
    { key: 'C', label: 'C — Purchase Behaviour', sublabel: 'Cash-and-carry ratio', value: c, weight: 0.30, color: '#79543A', onChange: setC },
  ];

  const activeSegData = activeSegment ? farmerSegments.find(s => s.id === activeSegment) : null;

  return (
    <div className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            <div className="w-12 h-px bg-primary/40" />
            Farmer Intelligence
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <h2 className="font-serif text-charcoal text-4xl md:text-5xl mb-6">
            Farmer Influence Score (FIS)
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            An algorithmic prioritization model replacing gross billing volume as the primary dealer performance metric.
          </p>
        </div>

        {/* Formula banner */}
        <div className="mb-12 p-6 rounded-2xl text-center border border-primary/20"
          style={{ background: 'linear-gradient(135deg, #123B2A08, #237A4808)' }}>
          <div className="text-xs font-semibold text-primary/60 uppercase tracking-widest mb-3">Formula — from Solution Presentation (Slide 4)</div>
          <div className="font-display font-bold text-charcoal text-2xl md:text-3xl">
            FIS = <span style={{ color: '#237A48' }}>0.40A</span> + <span style={{ color: '#D8A34B' }}>0.30B</span> + <span style={{ color: '#79543A' }}>0.30C</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm text-charcoal/60">
            <span><strong className="text-primary">A</strong> = Product Innovation Adoption (40%)</span>
            <span><strong className="text-amber">B</strong> = Demonstration Response (30%)</span>
            <span><strong className="text-soil">C</strong> = Purchase Behaviour / Cash-Carry Ratio (30%)</span>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-charcoal/40">
            <Info className="w-3.5 h-3.5" />
            This calculator uses illustrative sample values. No real farmer database is connected.
          </div>
        </div>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {/* Sliders */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-sage/40">
            <h3 className="font-semibold text-charcoal mb-8 text-lg">Adjust Component Scores</h3>
            <div className="space-y-8">
              {components.map((comp) => (
                <div key={comp.key}>
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <div className="font-semibold text-charcoal text-sm">{comp.label}</div>
                      <div className="text-charcoal/40 text-xs">{comp.sublabel} · Weight: {(comp.weight * 100).toFixed(0)}%</div>
                    </div>
                  </div>
                  <Slider label="" value={comp.value} onChange={comp.onChange} color={comp.color} />
                  <div className="mt-2 flex justify-between text-xs text-charcoal/40">
                    <span>Weighted: <strong className="text-charcoal">{(comp.value * comp.weight).toFixed(1)}</strong></span>
                    <span>Contribution: <strong className="text-charcoal">{((comp.value * comp.weight / score) * 100).toFixed(0)}%</strong></span>
                  </div>
                </div>
              ))}
            </div>

            {/* Weighted breakdown */}
            <div className="mt-8 p-4 rounded-xl bg-sage/30 space-y-2">
              <div className="text-xs font-semibold text-charcoal/50 uppercase tracking-wide mb-3">Weighted Breakdown</div>
              {components.map((comp) => (
                <div key={comp.key} className="flex items-center gap-3">
                  <div className="w-16 text-xs text-charcoal/60">{comp.key} ({(comp.weight*100).toFixed(0)}%)</div>
                  <div className="flex-1 h-2 bg-white rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${(comp.value * comp.weight / 100) * 100}%`, background: comp.color }} />
                  </div>
                  <div className="w-10 text-xs font-bold text-right" style={{ color: comp.color }}>{(comp.value * comp.weight).toFixed(1)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Score display */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-sage/40 flex flex-col items-center justify-center">
              <ScoreGauge score={score} />
              <div className="mt-4 text-center">
                <div className="text-xs text-charcoal/40 mb-1">Total Farmer Influence Score</div>
                <div className="font-display font-bold text-5xl text-charcoal">{score.toFixed(1)}</div>
                <div className="text-sm text-charcoal/50 mt-2 font-medium">
                  = 0.40×{a} + 0.30×{b} + 0.30×{c}
                </div>
                <div className="text-xs text-charcoal/30 mt-2">
                  = {(0.4*a).toFixed(1)} + {(0.3*b).toFixed(1)} + {(0.3*c).toFixed(1)}
                </div>
              </div>
            </div>

            <div className="bg-amber/5 border border-amber/20 rounded-2xl p-5">
              <div className="text-xs font-semibold text-amber uppercase tracking-wide mb-2">Proposed Marketing Prioritization</div>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {score >= 70
                  ? 'High FIS: Prioritize for VIP WhatsApp advisory, export protocol support, and early demonstration invitations. Allocate dedicated agronomist time.'
                  : score >= 40
                  ? 'Mid FIS: Include in seasonal village demonstration campaigns and dealer programme outreach. Target with crop-stage advisory content.'
                  : 'Lower FIS: Introduce via Krishi Mitra recommendations, micro-dose trial packs, and trusted peer referrals. Reduce adoption friction.'}
              </p>
            </div>

            <p className="text-xs text-charcoal/30 text-center px-4">
              ⓘ Illustrative — these profiles represent proposed segmentation logic, not real farmer records. No customer database is connected.
            </p>
          </div>
        </div>

        {/* Farmer Segments */}
        <div>
          <div className="text-center mb-10">
            <h3 className="font-serif text-charcoal text-3xl mb-2">Three Farmer Micro-Segments</h3>
            <p className="text-charcoal/50 text-sm">Segment shares are assumptions from the solution, not independently validated population estimates.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {farmerSegments.map((seg) => (
              <button
                key={seg.id}
                id={`segment-card-${seg.id}`}
                onClick={() => setActiveSegment(activeSegment === seg.id ? null : seg.id)}
                className={`text-left p-6 rounded-2xl border-2 transition-all card-lift ${
                  activeSegment === seg.id ? 'shadow-xl scale-105' : 'border-sage/40 bg-white hover:border-primary/30'
                }`}
                style={activeSegment === seg.id ? { borderColor: seg.color, background: `${seg.color}08` } : {}}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{seg.icon}</div>
                  <div className="text-right">
                    <div className="font-display font-bold text-2xl" style={{ color: seg.color }}>{seg.share}%</div>
                    <div className="text-xs text-charcoal/40">assumed share</div>
                  </div>
                </div>
                <h4 className="font-semibold text-charcoal text-base mb-2">{seg.name}</h4>
                <div className="text-sm text-charcoal/60 mb-3">{seg.landholding} · {seg.riskTolerance} risk tolerance</div>
                <div className="flex flex-wrap gap-1">
                  {seg.crops.slice(0,3).map((crop) => (
                    <span key={crop} className="text-xs px-2 py-0.5 rounded-full bg-sage text-charcoal/70">{crop}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          {activeSegData && (
            <div className="mt-6 p-6 bg-white rounded-2xl border shadow-md"
              style={{ borderColor: `${activeSegData.color}30` }}>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-charcoal/40 mb-2">Farmer Profile</div>
                  <p className="text-sm text-charcoal/70">{activeSegData.profile}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-charcoal/40 mb-2">Target Solutions</div>
                  <ul className="space-y-1">
                    {activeSegData.targetSolutions.map(s => (
                      <li key={s} className="text-xs text-charcoal/70 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: activeSegData.color }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-charcoal/40 mb-2">Communication Strategy</div>
                  <p className="text-xs text-charcoal/70 leading-relaxed">{activeSegData.marketingStrategy}</p>
                </div>
              </div>
              <p className="text-xs text-charcoal/30 mt-4">{activeSegData.shareNote}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
