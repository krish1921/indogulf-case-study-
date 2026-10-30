import { financialData, revenueChartData, projectionData } from '../data/financials';
import { AlertCircle, TrendingUp, TrendingDown } from 'lucide-react';

function Bar({ value, max, color, label }: { value: number; max: number; color: string; label: string }) {
  const pct = (value / max) * 100;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-xs font-bold" style={{ color }}>{label}</div>
      <div className="relative flex flex-col justify-end" style={{ height: 140, width: 56 }}>
        <div
          className="w-full rounded-t-lg transition-all duration-1000"
          style={{ height: `${pct}%`, background: color, minHeight: 4 }}
        />
      </div>
      <div className="text-xs font-semibold text-charcoal">₹{value.toFixed(0)} Cr</div>
    </div>
  );
}

export default function FinancialData() {
  const { fy24, fy25, growthMetrics } = financialData;
  const maxRev = Math.max(fy24.totalRevenue, fy25.totalRevenue) * 1.1;

  return (
    <div className="section-pad" style={{ background: 'linear-gradient(180deg, #F7F6EF 0%, #EDF2E8 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            <div className="w-12 h-px bg-primary/40" />
            Financial Snapshot
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <h2 className="font-serif text-charcoal text-4xl md:text-5xl mb-4">Financial Overview</h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            Verified actuals from FY24–FY25 annual reports. Projections are proposed strategy targets only.
          </p>
        </div>

        {/* Actuals cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {[
            {
              label: 'Total Revenue FY25',
              value: `₹${fy25.totalRevenue.toFixed(0)} Cr`,
              sub: `+${growthMetrics.totalRevenueGrowth}% YoY`,
              icon: TrendingUp,
              color: '#237A48',
              type: 'verified',
            },
            {
              label: 'Domestic Revenue',
              value: `₹${fy25.revenueIndia.toFixed(0)} Cr`,
              sub: `+${growthMetrics.domesticGrowth}% YoY`,
              icon: TrendingUp,
              color: '#82B95B',
              type: 'verified',
            },
            {
              label: 'Export Revenue',
              value: `₹${fy25.revenueExports.toFixed(0)} Cr`,
              sub: `${growthMetrics.exportDecline}% YoY`,
              icon: TrendingDown,
              color: '#D8A34B',
              type: 'verified',
            },
            {
              label: 'Profit for Year FY25',
              value: `₹${fy25.profit.toFixed(0)} Cr`,
              sub: `+${growthMetrics.profitGrowth}% YoY`,
              icon: TrendingUp,
              color: '#123B2A',
              type: 'verified',
            },
          ].map(card => (
            <div key={card.label} className="bg-white rounded-2xl p-6 border border-sage/50 shadow-sm card-lift">
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${card.color}15` }}>
                  <card.icon className="w-4 h-4" style={{ color: card.color }} />
                </div>
                <span className="label-verified text-xs">Source-verified</span>
              </div>
              <div className="font-bold text-2xl" style={{ color: card.color }}>{card.value}</div>
              <div className="font-semibold text-charcoal text-sm mt-1">{card.label}</div>
              <div className="text-xs text-charcoal/50 mt-1">{card.sub} vs FY24</div>
            </div>
          ))}
        </div>

        {/* Charts side by side */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {/* Bar chart FY24 vs FY25 */}
          <div className="bg-white rounded-2xl p-8 border border-sage/50 shadow-sm">
            <h3 className="font-semibold text-charcoal text-lg mb-1">Revenue Composition</h3>
            <p className="text-xs text-charcoal/40 mb-8">FY24 vs FY25 — source-verified actuals</p>
            <div className="flex items-end justify-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="text-xs font-semibold text-charcoal/50 mb-1">FY 2023–24</div>
                <div className="flex items-end gap-1">
                  <Bar value={revenueChartData[0].india} max={maxRev} color="#237A48" label="Dom" />
                  <Bar value={revenueChartData[0].exports} max={maxRev} color="#D8A34B" label="Exp" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-xs font-semibold text-charcoal/50 mb-1">FY 2024–25</div>
                <div className="flex items-end gap-1">
                  <Bar value={revenueChartData[1].india} max={maxRev} color="#237A48" label="Dom" />
                  <Bar value={revenueChartData[1].exports} max={maxRev} color="#D8A34B" label="Exp" />
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-center mt-4">
              <span className="flex items-center gap-1.5 text-xs text-charcoal/50"><span className="w-3 h-3 rounded-sm bg-primary inline-block" />Domestic</span>
              <span className="flex items-center gap-1.5 text-xs text-charcoal/50"><span className="w-3 h-3 rounded-sm bg-amber inline-block" />Exports</span>
            </div>
          </div>

          {/* Projections table */}
          <div className="bg-white rounded-2xl p-8 border border-sage/50 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-charcoal text-lg">Revenue Projections</h3>
              <span className="label-proposed text-xs">Proposed targets</span>
            </div>
            <p className="text-xs text-charcoal/40 mb-6">Conditional on full strategy execution. Not audited.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-sage/50">
                    <th className="text-left py-2 text-xs font-semibold text-charcoal/50 uppercase tracking-wide">Year</th>
                    <th className="text-right py-2 text-xs font-semibold text-charcoal/50 uppercase tracking-wide">Revenue (Cr)</th>
                    <th className="text-right py-2 text-xs font-semibold text-charcoal/50 uppercase tracking-wide">PAT (Cr)</th>
                    <th className="text-right py-2 text-xs font-semibold text-charcoal/50 uppercase tracking-wide">P/E</th>
                  </tr>
                </thead>
                <tbody>
                  {projectionData.map((row, i) => (
                    <tr key={row.year} className={`border-b border-sage/20 ${i === 0 ? 'bg-leaf/5' : ''}`}>
                      <td className="py-3 text-charcoal font-medium text-xs">{row.year}</td>
                      <td className="py-3 text-right font-semibold text-primary text-xs">₹{row.revenue.toFixed(0)}</td>
                      <td className="py-3 text-right text-charcoal/70 text-xs">₹{row.pat.toFixed(0)}</td>
                      <td className="py-3 text-right text-charcoal/60 text-xs">{row.pe}×</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-start gap-2 mt-4 p-3 rounded-xl bg-amber/5 border border-amber/20">
              <AlertCircle className="w-3.5 h-3.5 text-amber flex-shrink-0 mt-0.5" />
              <p className="text-xs text-charcoal/50">Projections from Solution Presentation. P/E re-rating is speculative — dependent on margin delivery and market conditions outside management control.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
