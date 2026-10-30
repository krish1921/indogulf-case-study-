import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Zap, Users, MessageSquare, ShoppingBag, Film, ArrowRight } from 'lucide-react';

const initiatives = [
  {
    id: 'demo-plots',
    number: '01',
    icon: Zap,
    title: 'Village Demonstration Plots',
    desc: '0.5-acre side-by-side split trials comparing Indogulf vs conventional practice. Run by Krishi Mitras and progressive farmers at the village level.',
    metrics: { reach: '40+ farmers/plot', cost: '~₹2,000/plot', conversion: '25–35% (proposed target)', scale: '10,000 plots by M24 (proposed)' },
    color: '#237A48',
  },
  {
    id: 'krishi-mitra',
    number: '02',
    icon: Users,
    title: 'Krishi Mitra Network',
    desc: '2,000 progressive farmer champions who host village trials. Incentivized with product support and community recognition. No fixed salary required.',
    metrics: { reach: '2,000 champions (proposed)', cost: 'Product + recognition incentives', conversion: 'Peer trust multiplier', scale: 'Covers 10+ villages each' },
    color: '#82B95B',
  },
  {
    id: 'whatsapp',
    number: '03',
    icon: MessageSquare,
    title: 'WhatsApp Advisories & Alerts',
    desc: 'Crop-stage advice, pest alerts, spray charts, and weather-triggered notifications. Available in 6 Indic languages. 92% open rate within 2 hours (cited).',
    metrics: { reach: '25,000/district/season (proposed)', cost: '₹30/farmer (proposed phygital cost)', conversion: '65%+ retention (proposed)', scale: 'Nationwide via WhatsApp Business API' },
    color: '#D8A34B',
  },
  {
    id: 'dealer-kits',
    number: '04',
    icon: ShoppingBag,
    title: 'On-Dealer Activation Kits',
    desc: 'Low-cost demo kits, crop posters, QR leaflets co-branded with top 1,400 key dealers. QR codes link to product videos and track farmer engagement.',
    metrics: { reach: '1,400 Krishi Saathi stores', cost: 'Low capex per store', conversion: 'QR-tracked attribution', scale: 'Covers entire key account network' },
    color: '#79543A',
  },
  {
    id: 'videos',
    number: '05',
    icon: Film,
    title: 'Digital Farmer Education',
    desc: 'Short vernacular video reels (45-sec) accessible via QR codes on packaging. Local farmer testimonials from real fields. Counterfeit shield via serial scan.',
    metrics: { reach: 'Every product sold', cost: 'One-time production per SKU', conversion: 'On-pack engagement', scale: 'Embedded in product packaging' },
    color: '#123B2A',
  },
];

const campaignWorkflow = [
  { step: 'Dealer & Crop Data', desc: 'Collect farmer and crop data from dealer network and FIS scores' },
  { step: 'Select High-Potential Villages', desc: 'Use dealer data and crop mix to identify target villages' },
  { step: 'Conduct Demonstrations', desc: 'Run 0.5-acre split demos with Krishi Mitras' },
  { step: 'Share Localized Advice', desc: 'WhatsApp advisory in 6 Indic languages' },
  { step: 'Track QR Engagement', desc: 'Monitor QR scans at dealer level' },
  { step: 'Evaluate Conversion', desc: 'Measure demo-to-purchase rate' },
  { step: 'Scale Successful Pilots', desc: 'Expand to new districts based on evidence' },
];

const comparisonData = [
  { metric: 'Demo-to-Buy Conversion', mass: 3, field: 30, note: 'Different outcome contexts' },
  { metric: 'Farmer Reach/Season', mass: 2500, field: 25000, note: 'Per district capacity' },
  { metric: 'Cost per Contact (₹)', mass: 280, field: 30, note: 'Proposed phygital cost' },
  { metric: '30-Day Retention (%)', mass: 15, field: 65, note: 'App vs WhatsApp loop' },
];

// Campaign scenario builder
const cropOptions = ['Rice (Paddy)', 'Wheat', 'Cotton', 'Chilli', 'Basmati'];
const segmentOptions = ['Progressive Innovators (20%)', 'Yield Maximizers (60%)', 'Risk-Averse Smallholders (20%)'];
const channelOptions = ['WhatsApp Advisory', 'Village Demo Plot', 'Dealer Activation Kit', 'On-Pack QR Video'];

function CampaignBuilder() {
  const [crop, setCrop] = useState('');
  const [segment, setSegment] = useState('');
  const [channel, setChannel] = useState('');

  const showResult = crop && segment && channel;

  const getMetrics = () => {
    const isDemoChannel = channel.includes('Demo');
    const isSmallholder = segment.includes('Risk');
    const isInnovator = segment.includes('Innovator');
    return {
      reach: isDemoChannel ? '40–80 farmers/village' : '2,000–8,000 farmers/campaign',
      conversion: isDemoChannel ? '25–35% (proposed trial target)' : isInnovator ? '20–30% (proposed estimate)' : '8–15% (proposed estimate)',
      cost: isDemoChannel ? '~₹2,000–4,000/plot' : '~₹30–50/farmer (proposed phygital)',
      message: isInnovator
        ? 'VIP advisory on export protocols, soil health analysis, and premium formulation demo.'
        : isSmallholder
        ? 'Micro-dose trial pack, Krishi Mitra endorsement, and local-language safety guidance.'
        : 'Crop-stage advisory, pest alert subscription, and village demonstration invitation.',
    };
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-sage/40">
      <h3 className="font-semibold text-charcoal text-lg mb-6">Campaign Scenario Builder</h3>
      <p className="text-sm text-charcoal/50 mb-8">Select a crop, segment, and channel to see the proposed campaign approach. All outputs are illustrative.</p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-xs font-semibold text-charcoal/50 uppercase tracking-wide mb-2">Crop Category</label>
          <select id="campaign-crop" value={crop} onChange={(e) => setCrop(e.target.value)}
            className="w-full p-3 rounded-xl border border-sage/60 text-sm text-charcoal bg-white focus:outline-none focus:border-primary/40">
            <option value="">Select crop...</option>
            {cropOptions.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-charcoal/50 uppercase tracking-wide mb-2">Farmer Segment</label>
          <select id="campaign-segment" value={segment} onChange={(e) => setSegment(e.target.value)}
            className="w-full p-3 rounded-xl border border-sage/60 text-sm text-charcoal bg-white focus:outline-none focus:border-primary/40">
            <option value="">Select segment...</option>
            {segmentOptions.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-charcoal/50 uppercase tracking-wide mb-2">Communication Channel</label>
          <select id="campaign-channel" value={channel} onChange={(e) => setChannel(e.target.value)}
            className="w-full p-3 rounded-xl border border-sage/60 text-sm text-charcoal bg-white focus:outline-none focus:border-primary/40">
            <option value="">Select channel...</option>
            {channelOptions.map(ch => <option key={ch} value={ch}>{ch}</option>)}
          </select>
        </div>
      </div>

      {showResult && (() => {
        const m = getMetrics();
        return (
          <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
            <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-4">Suggested Campaign Approach (Illustrative)</div>
            <div className="mb-4 p-4 rounded-xl bg-white border border-sage/40">
              <div className="text-sm text-charcoal/70 leading-relaxed"><strong className="text-charcoal">Message: </strong>{m.message}</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Farmer Reach', value: m.reach },
                { label: 'Est. Conversion', value: m.conversion },
                { label: 'Est. Unit Cost', value: m.cost },
                { label: 'Language', value: '6 Indic languages' },
              ].map(item => (
                <div key={item.label} className="text-center p-3 bg-white rounded-xl border border-sage/40">
                  <div className="text-xs text-charcoal/40 mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-primary">{item.value}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-charcoal/40 mt-4">ⓘ All metrics are proposed/illustrative. Actual results depend on execution quality and market conditions.</p>
          </div>
        );
      })()}

      {!showResult && (
        <div className="text-center py-8 text-charcoal/30 text-sm">
          Select all three options above to see the campaign approach
        </div>
      )}
    </div>
  );
}

export default function FieldMarketingEngine() {
  const [activeInit, setActiveInit] = useState(0);

  return (
    <div className="section-pad bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            <div className="w-12 h-px bg-primary/40" />
            Field Marketing
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <h2 className="font-serif text-charcoal text-4xl md:text-5xl mb-6">
            Low-Cost Field Marketing Engine
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            Five low-cost, high-impact initiatives designed to make field marketing measurable and scalable across the 1,400-dealer key network.
          </p>
        </div>

        {/* Headline metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: '60–70%', label: 'Lower marketing cost vs mass media', note: 'Proposed/illustrative estimate' },
            { value: '3–5×', label: 'Farmer reach per ₹1 spend', note: 'Illustrative comparison' },
            { value: '25–35%', label: 'Demo-to-buy conversion (target)', note: 'Proposed target in pilot markets' },
            { value: '1,400', label: 'Key dealers with minimal capex', note: 'Scalable across network' },
          ].map(stat => (
            <div key={stat.label} className="p-5 rounded-2xl bg-white border border-sage/40 shadow-sm text-center">
              <div className="font-display font-bold text-2xl text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-charcoal/70">{stat.label}</div>
              <div className="text-xs text-charcoal/30 mt-1">{stat.note}</div>
            </div>
          ))}
        </div>

        {/* 5 Initiatives */}
        <div className="grid lg:grid-cols-5 gap-4 mb-16">
          {initiatives.map((init, i) => (
            <button
              key={init.id}
              id={`initiative-${init.id}`}
              onClick={() => setActiveInit(i)}
              className={`text-left p-5 rounded-2xl border-2 transition-all ${
                activeInit === i ? 'shadow-lg scale-105' : 'border-sage/40 bg-white hover:border-primary/30'
              }`}
              style={activeInit === i ? { background: `${init.color}08`, borderColor: init.color } : {}}
            >
              <div className="font-display font-bold text-3xl mb-3" style={{ color: `${init.color}40` }}>{init.number}</div>
              <init.icon className="w-6 h-6 mb-3" style={{ color: init.color }} />
              <div className="font-semibold text-charcoal text-sm">{init.title}</div>
            </button>
          ))}
        </div>

        {/* Active initiative detail */}
        <div className="mb-16 p-8 bg-white rounded-3xl shadow-lg border border-sage/40">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {(() => { const I = initiatives[activeInit]; return <I.icon className="w-8 h-8" style={{ color: I.color }} />; })()}
                <h3 className="font-serif text-charcoal text-2xl">{initiatives[activeInit].title}</h3>
              </div>
              <p className="text-charcoal/70 leading-relaxed mb-6">{initiatives[activeInit].desc}</p>
            </div>
            <div>
              <div className="text-xs font-semibold text-charcoal/40 uppercase tracking-wide mb-4">Proposed Success Metrics</div>
              <div className="space-y-3">
                {Object.entries(initiatives[activeInit].metrics).map(([key, val]) => (
                  <div key={key} className="flex items-center gap-3">
                    <div className="w-28 text-xs text-charcoal/50 capitalize">{key}</div>
                    <div className="flex-1 text-sm font-medium text-charcoal">{val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Campaign workflow */}
        <div className="mb-16">
          <h3 className="font-serif text-charcoal text-3xl mb-8 text-center">Campaign Execution Workflow</h3>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 overflow-x-auto pb-4">
            {campaignWorkflow.map((item, i) => (
              <div key={i} className="flex md:flex-col items-center gap-3 flex-shrink-0 group">
                <div className="flex items-center gap-3 md:flex-col md:items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{i+1}</div>
                  <div className="text-center max-w-28">
                    <div className="text-xs font-semibold text-charcoal leading-tight">{item.step}</div>
                    <div className="text-xs text-charcoal/40 mt-1 hidden group-hover:block leading-tight">{item.desc}</div>
                  </div>
                </div>
                {i < campaignWorkflow.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-primary/30 flex-shrink-0 md:rotate-90 lg:rotate-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Comparison chart */}
        <div className="mb-16 p-8 bg-white rounded-3xl shadow-lg border border-sage/40">
          <h3 className="font-serif text-charcoal text-2xl mb-2">Mass Media vs Field Demonstration</h3>
          <p className="text-sm text-charcoal/50 mb-2">These figures represent different reported outcomes and should not be interpreted as a perfectly controlled comparison.</p>
          <p className="text-xs text-amber/70 mb-6">ⓘ Proposed/illustrative comparison — primary research validation required. Traditional CAC and phygital cost are the solution's proposed estimates.</p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { name: 'Demo-to-Buy Conv. (%)', mass: 3, field: 30 },
                { name: 'Farmer Retention (%)', mass: 15, field: 65 },
                { name: 'Cost per Contact (₹)', mass: 280, field: 30 },
              ]} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E4EBDD" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#1D292260' }} />
                <YAxis tick={{ fontSize: 11, fill: '#1D292260' }} />
                <Tooltip
                  contentStyle={{ background: 'white', border: '1px solid #E4EBDD', borderRadius: '8px', fontSize: '12px' }}
                  formatter={(val, name) => [val, name === 'mass' ? 'Traditional' : 'Phygital (Proposed)']}
                />
                <Legend formatter={val => val === 'mass' ? 'Traditional / Mass Media' : 'Phygital Model (Proposed)'} wrapperStyle={{ fontSize: '12px' }} />
                <Bar dataKey="mass" name="Traditional" fill="#79543A" radius={[4,4,0,0]} />
                <Bar dataKey="field" name="Field Demo" fill="#237A48" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Campaign builder */}
        <CampaignBuilder />
      </div>
    </div>
  );
}
