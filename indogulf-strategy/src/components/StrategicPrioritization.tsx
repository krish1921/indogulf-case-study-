import { useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { strategicAlternatives } from '../data/alternatives';

const dealerTiers = [
  {
    tier: 'Top 15–20% Key Accounts (~1,400 "Krishi Saathis")',
    budget: '85% of trade marketing budget',
    actions: [
      'Exclusive Regional Rights: Protected territory for 6 patented molecules and BioEdge line',
      'Advisory Merchandising: Premium store redesign with interactive diagnostic counters',
      'Dedicated Agronomist: Indogulf field officers run demos on behalf of the dealer',
      'Replace 12% price rebate with 4% verified advisory margin (QR demo scans)',
      'Receivables target: <30 days (vs. current 75 days)',
    ],
    color: '#237A48',
    label: 'Priority Tier',
  },
  {
    tier: 'Long-Tail Distributors (~5,600 Traditional Retailers)',
    budget: '15% of budget (digital only)',
    actions: [
      'Standard transactional counter: non-exclusive, open-market supply of off-patent generic SKUs',
      'Self-service ordering via digital distributor portal on strict cash-and-carry terms',
      'Zero field subsidies',
      'Zero fixed field-force resource allocation',
    ],
    color: '#79543A',
    label: 'Maintenance Tier',
  },
];

const radarData = [
  { subject: 'Channel Impact', A: 98, B: 52, C: 46, D: 44, E: 30 },
  { subject: 'Farmer Trust', A: 94, B: 38, C: 40, D: 50, E: 20 },
  { subject: 'Capital Efficiency', A: 92, B: 56, C: 26, D: 44, E: 30 },
  { subject: 'Scalability', A: 88, B: 70, C: 22, D: 30, E: 40 },
  { subject: 'Speed to Market', A: 80, B: 60, C: 44, D: 38, E: 60 },
  { subject: 'Brand Equity', A: 72, B: 50, C: 30, D: 84, E: 20 },
];

const statusIcon: Record<string, React.ElementType> = {
  'PRIORITY #1': CheckCircle,
  'PRIORITY #2': AlertCircle,
  'REJECTED': XCircle,
};
const statusColor: Record<string, string> = {
  'PRIORITY #1': '#237A48',
  'PRIORITY #2': '#D8A34B',
  'REJECTED': '#b94040',
};

export default function StrategicPrioritization() {
  const [activeAlt, setActiveAlt] = useState(0);
  const [activeTier, setActiveTier] = useState(0);

  const alt = strategicAlternatives[activeAlt];

  return (
    <div className="section-pad" style={{ background: '#123B2A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-leaf mb-4">
            <div className="w-12 h-px bg-leaf/40" />
            Channel Strategy
            <div className="w-12 h-px bg-leaf/40" />
          </div>
          <h2 className="font-serif text-white text-4xl md:text-5xl mb-6">
            Strategic Prioritization
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Of five alternatives, Channel Restructuring paired with Field Expansion receives Priority #1
            to build a defensible commercial moat.
          </p>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: '85%', label: 'Trade capital focused on top 1,400 dealers', note: 'Proposed strategy target' },
            { value: '75%+', label: 'Volume controlled by top 20% dealers', note: 'Source-cited Pareto observation' },
            { value: '1,400', label: 'Key Account "Krishi Saathi" dealers', note: 'Top 20% of 7,000 network' },
            { value: '63.6%', label: 'Yr 1 ROI vs traditional discounts', note: 'Proposed/illustrative estimate' },
          ].map((stat) => (
            <div key={stat.label} className="p-5 rounded-2xl border text-center"
              style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(130,185,91,0.2)' }}>
              <div className="font-display font-bold text-2xl text-leaf mb-1">{stat.value}</div>
              <div className="text-white/70 text-xs mb-1">{stat.label}</div>
              <div className="text-white/30 text-xs">{stat.note}</div>
            </div>
          ))}
        </div>

        {/* Alternatives grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">5 Strategic Alternatives</h3>
            <div className="space-y-3">
              {strategicAlternatives.map((a, i) => {
                const Icon = statusIcon[a.status];
                return (
                  <button
                    key={a.id}
                    id={`alt-btn-${a.id}`}
                    onClick={() => setActiveAlt(i)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      activeAlt === i
                        ? 'bg-white/10 border-leaf/40 shadow-lg'
                        : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 flex-shrink-0" style={{ color: statusColor[a.status] }} />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-white text-sm truncate">{a.title}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-bold" style={{ color: statusColor[a.status] }}>{a.status}</span>
                          <span className="text-xs text-white/40">Score: {a.score}/5</span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl p-6 h-full border"
              style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)' }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {(() => { const Icon = statusIcon[alt.status]; return <Icon className="w-6 h-6" style={{ color: statusColor[alt.status] }} />; })()}
                    <h3 className="font-semibold text-white text-lg">{alt.title}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        background: `${statusColor[alt.status]}20`,
                        color: statusColor[alt.status],
                        border: `1px solid ${statusColor[alt.status]}40`
                      }}>
                      {alt.status}
                    </span>
                    <span className="text-white/50 text-xs">Strategic score: {alt.score}/5</span>
                  </div>
                </div>
              </div>

              {/* Score bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-white/40 mb-2">
                  <span>Priority Score</span>
                  <span>{alt.score}/5.0</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${(alt.score / 5) * 100}%`, background: statusColor[alt.status] }} />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-white/40 uppercase tracking-wide mb-2">Strategic Test</div>
                  <p className="text-xs text-white/70 font-medium">{alt.test}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white/40 uppercase tracking-wide mb-2">Rationale</div>
                  <p className="text-sm text-white/80 leading-relaxed">{alt.rationale}</p>
                </div>
                {alt.status === 'REJECTED' && (
                  <div className="p-3 rounded-xl border border-red-500/20 bg-red-500/5">
                    <div className="text-xs font-semibold text-red-400 uppercase tracking-wide mb-1">Failure Mode</div>
                    <p className="text-xs text-white/70">{alt.flaw}</p>
                  </div>
                )}
                <div className="pt-3 border-t border-white/10">
                  <p className="text-xs text-white/50 leading-relaxed italic">"{alt.verdict}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-dimensional radar */}
        <div className="mb-16 p-8 rounded-3xl border" style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}>
          <h3 className="font-serif text-white text-2xl mb-2">Alternative Comparison Chart</h3>
          <p className="text-white/40 text-xs mb-8">Qualitative strategic assessment across six dimensions — illustrative weighting only</p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }} />
                <Radar name="Channel + Field" dataKey="A" stroke="#82B95B" fill="#82B95B" fillOpacity={0.2} />
                <Radar name="Field Expansion" dataKey="B" stroke="#D8A34B" fill="#D8A34B" fillOpacity={0.1} />
                <Radar name="Diffuse Army" dataKey="C" stroke="rgba(255,255,255,0.3)" fill="none" strokeDasharray="3 3" />
                <Radar name="Corp. Rebranding" dataKey="E" stroke="#b94040" fill="none" strokeDasharray="3 3" />
                <Tooltip
                  contentStyle={{ background: '#1D2922', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontSize: '11px' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 text-xs text-white/50">
            <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-leaf inline-block" /> Channel + Field (Priority #1)</span>
            <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-amber inline-block" /> Field Expansion only</span>
            <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-white/30 inline-block" style={{ borderTop: '1px dashed' }} /> Diffuse Army (Rejected)</span>
          </div>
        </div>

        {/* Apple Store Dealer Transformation */}
        <div>
          <div className="text-center mb-10">
            <h3 className="font-serif text-white text-3xl mb-2">The "Apple Store" Dealer Transformation</h3>
            <p className="text-white/50 text-sm">Proposed — Proposed strategy for top 1,400 key accounts</p>
          </div>

          <div className="flex flex-col md:flex-row gap-3 mb-6 justify-center">
            {dealerTiers.map((t, i) => (
              <button
                key={i}
                id={`dealer-tier-${i}`}
                onClick={() => setActiveTier(i)}
                className={`flex-1 max-w-sm p-4 rounded-xl border-2 text-left transition-all ${activeTier === i ? 'border-leaf/60' : 'border-white/10 hover:border-white/20'}`}
                style={activeTier === i ? { background: `${t.color}20`, borderColor: t.color } : { background: 'rgba(255,255,255,0.03)' }}
              >
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: t.color }}>{t.label}</span>
                <div className="text-white text-sm font-medium mt-1">{t.tier}</div>
                <div className="text-white/40 text-xs mt-1">{t.budget}</div>
              </button>
            ))}
          </div>

          <div className="p-6 rounded-2xl border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)' }}>
            <ul className="space-y-3">
              {dealerTiers[activeTier].actions.map((action, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: dealerTiers[activeTier].color }} />
                  <span className="text-white/80">{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
