import { useState } from 'react';
import { researchCards, evidenceCategories } from '../data/research';
import { BookOpen, ExternalLink, AlertCircle, Filter } from 'lucide-react';

const typeColors: Record<string, string> = {
  company: 'bg-soil/10 text-soil border-soil/20',
  sector: 'bg-primary/10 text-primary border-primary/20',
  academic: 'bg-leaf/10 text-leaf border-leaf/30',
  government: 'bg-amber/10 text-amber border-amber/30',
  industry: 'bg-charcoal/10 text-charcoal/70 border-charcoal/20',
};
const typeLabels: Record<string, string> = {
  company: 'Company Data',
  sector: 'Sector Data',
  academic: 'Academic',
  government: 'Government',
  industry: 'Industry',
};

export default function ResearchLibrary() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = activeCategory === 'All'
    ? researchCards
    : researchCards.filter(c => c.category === activeCategory);

  return (
    <div className="section-pad bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            <div className="w-12 h-px bg-primary/40" />
            Evidence Base
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <h2 className="font-serif text-charcoal text-4xl md:text-5xl mb-6">Research Library</h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Every claim in this strategy is sourced or clearly labelled as proposed. Browse the evidence base below.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <Filter className="w-4 h-4 text-charcoal/40 flex-shrink-0" />
          {evidenceCategories.map(cat => (
            <button
              key={cat}
              id={`research-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold border transition-all ${activeCategory === cat
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-charcoal/60 border-sage/60 hover:border-primary/40'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map(card => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-sage/50 shadow-sm card-lift overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary/60 flex-shrink-0" />
                    <span className="text-xs text-charcoal/40 font-medium">{card.category}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-medium flex-shrink-0 ${typeColors[card.dataType]}`}>
                    {typeLabels[card.dataType]}
                  </span>
                </div>

                <h3 className="font-semibold text-charcoal text-base leading-snug mb-3">{card.title}</h3>

                <div className="p-3 rounded-xl bg-sage/30 mb-3">
                  <p className="text-sm text-charcoal/80 leading-relaxed">{card.finding}</p>
                </div>

                <button
                  id={`research-expand-${card.id}`}
                  onClick={() => setExpandedId(expandedId === card.id ? null : card.id)}
                  className="text-xs text-primary font-semibold hover:text-primary/70 transition-colors"
                >
                  {expandedId === card.id ? '↑ Hide details' : '↓ Implication & limitation'}
                </button>

                {expandedId === card.id && (
                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Strategic Implication</div>
                      <p className="text-xs text-charcoal/70 leading-relaxed">{card.implication}</p>
                    </div>
                    <div className="flex items-start gap-2 p-3 rounded-xl border border-amber/20 bg-amber/5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-amber uppercase tracking-wide mb-1">Limitation</div>
                        <p className="text-xs text-charcoal/60 leading-relaxed">{card.limitation}</p>
                      </div>
                    </div>
                    {card.sampleNote && (
                      <p className="text-xs text-charcoal/40 italic">{card.sampleNote}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Source footer */}
              <div className="px-6 py-3 bg-sage/20 border-t border-sage/40 flex items-center justify-between">
                <p className="text-xs text-charcoal/40 truncate flex-1">{card.source}</p>
                {card.sourceUrl && (
                  <a
                    href={card.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 flex items-center gap-1 text-xs text-primary hover:text-primary/70 transition-colors flex-shrink-0"
                  >
                    Visit <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-charcoal/30 text-xs mt-8">
          {filtered.length} source{filtered.length !== 1 ? 's' : ''} displayed. All figures are sourced from cited studies, company reports, or clearly labelled as proposed.
        </p>
      </div>
    </div>
  );
}
