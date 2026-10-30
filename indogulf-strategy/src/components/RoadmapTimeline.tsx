import { useState } from 'react';
import { roadmapPhases } from '../data/roadmap';
import { CheckSquare, Calendar, Users, Target } from 'lucide-react';

export default function RoadmapTimeline() {
  const [activePhase, setActivePhase] = useState(0);

  const phase = roadmapPhases[activePhase];

  return (
    <div className="section-pad" style={{ background: 'linear-gradient(135deg, #0a1e13 0%, #123B2A 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-leaf mb-4">
            <div className="w-12 h-px bg-leaf/40" />
            90-Day Roadmap
            <div className="w-12 h-px bg-leaf/40" />
          </div>
          <h2 className="font-serif text-white text-4xl md:text-5xl mb-6">
            The 90-Day Execution Plan
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A phased approach to deploying the field-first strategy.
            Pilot budget: ₹3.5 Cr (&lt;13% of estimated marketing spend).
          </p>
          <p className="text-white/30 text-sm mt-3">
            ⓘ This roadmap represents the proposed strategy. It has not been executed.
          </p>
        </div>

        {/* Phase selector — desktop horizontal, mobile vertical */}
        <div className="hidden md:flex items-stretch gap-0 mb-12 rounded-2xl overflow-hidden border border-white/10">
          {roadmapPhases.map((p, i) => (
            <button
              key={p.id}
              id={`phase-btn-${p.id}`}
              onClick={() => setActivePhase(i)}
              className={`flex-1 p-6 text-left transition-all border-r last:border-r-0 border-white/10 ${
                activePhase === i ? 'text-white' : 'text-white/50 hover:text-white/80'
              }`}
              style={activePhase === i ? { background: `${p.color}40`, borderBottom: `3px solid ${p.color}` } : { background: 'rgba(255,255,255,0.03)' }}
            >
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: activePhase === i ? p.color : 'rgba(255,255,255,0.3)' }}>
                {p.days}
              </div>
              <div className="font-semibold text-sm">{p.phase.split('—')[1]?.trim() || p.phase}</div>
            </button>
          ))}
        </div>

        {/* Mobile phase selector */}
        <div className="flex md:hidden gap-3 mb-8 overflow-x-auto pb-2">
          {roadmapPhases.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActivePhase(i)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                activePhase === i ? 'text-white' : 'text-white/50 border-white/10'
              }`}
              style={activePhase === i ? { background: p.color, borderColor: p.color } : {}}
            >
              {p.days}
            </button>
          ))}
        </div>

        {/* Phase detail */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-lg"
                style={{ background: phase.color }}>
                {activePhase + 1}
              </div>
              <div>
                <div className="font-semibold text-white text-xl">{phase.phase}</div>
                <div className="text-white/50 text-sm">{phase.days}</div>
              </div>
            </div>

            <p className="text-white/70 leading-relaxed mb-8">{phase.objective}</p>

            {/* Activities */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <CheckSquare className="w-4 h-4 text-leaf" />
                <span className="text-xs font-semibold text-leaf uppercase tracking-wide">Key Activities</span>
              </div>
              {phase.activities.map((act, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: phase.color }} />
                  <span className="text-sm text-white/75">{act}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {/* Milestones */}
            <div className="p-6 rounded-2xl border" style={{ background: `${phase.color}15`, borderColor: `${phase.color}30` }}>
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-4 h-4" style={{ color: phase.color }} />
                <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: phase.color }}>Milestones / Deliverables</span>
              </div>
              {phase.milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-3 mb-3">
                  <div className="w-5 h-5 rounded flex items-center justify-center mt-0.5 flex-shrink-0 text-white text-xs font-bold"
                    style={{ background: phase.color }}>✓</div>
                  <span className="text-sm text-white/80">{m}</span>
                </div>
              ))}
            </div>

            {/* KPIs */}
            <div className="p-6 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-amber" />
                <span className="text-xs font-semibold text-amber uppercase tracking-wide">KPIs to Track</span>
              </div>
              {phase.kpis.map((kpi, i) => (
                <div key={i} className="flex items-start gap-3 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 bg-amber flex-shrink-0" />
                  <span className="text-sm text-white/70">{kpi}</span>
                </div>
              ))}
            </div>

            {/* Stakeholders */}
            <div className="p-6 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-4 h-4 text-leaf/70" />
                <span className="text-xs font-semibold text-leaf/70 uppercase tracking-wide">Responsible Stakeholders</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {phase.stakeholders.map((s, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full text-white/60 border border-white/10">{s}</span>
                ))}
              </div>
            </div>

            {phase.budget && (
              <div className="p-4 rounded-xl border border-amber/20 bg-amber/5">
                <div className="text-xs font-semibold text-amber uppercase tracking-wide mb-1">Budget Note</div>
                <p className="text-xs text-white/60">{phase.budget}</p>
              </div>
            )}
          </div>
        </div>

        {/* Scale gate note */}
        <div className="mt-12 p-6 rounded-2xl border border-leaf/20 bg-leaf/5 text-center">
          <div className="text-xs font-semibold text-leaf uppercase tracking-wide mb-2">Governance Guardrail</div>
          <p className="text-white/70 text-sm">
            The 90-day short-term plan commits only ₹3.5 Cr (&lt;13% of total marketing budget).
            Scaling to the remaining 1,400 Key Accounts requires passing the Month 3 Board Gate:
            <strong className="text-leaf"> &gt;20% demo-to-purchase conversion</strong> and
            <strong className="text-leaf"> &gt;75% dealer retention</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
