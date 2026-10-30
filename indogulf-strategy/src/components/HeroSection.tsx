import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Leaf } from 'lucide-react';

// SVG Agricultural Landscape — landscape SVG + HTML overlay panels
function AgriLandscape() {
  return (
    <div className="relative w-full h-full min-h-[420px] overflow-hidden rounded-2xl">
      {/* Sky gradient background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #0a2518 0%, #123B2A 40%, #1a5035 70%, #237A48 100%)'
      }} />

      {/* Stars */}
      {[...Array(20)].map((_, i) => (
        <div key={i} className="absolute rounded-full bg-white/40"
          style={{
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            top: Math.random() * 40 + '%',
            left: Math.random() * 100 + '%',
            opacity: Math.random() * 0.6 + 0.2,
          }}
        />
      ))}

      {/* SVG landscape — decorative only; panels live outside as HTML */}
      <svg
        viewBox="0 0 600 400"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Rolling hills */}
        <path d="M0,200 Q100,150 200,180 Q300,210 400,160 Q500,120 600,170 L600,400 L0,400 Z" fill="#0d2e1e" />
        <path d="M0,240 Q150,200 300,220 Q450,240 600,200 L600,400 L0,400 Z" fill="#123B2A" />
        <path d="M0,280 Q100,260 200,270 Q400,290 600,250 L600,400 L0,400 Z" fill="#1a4a30" />

        {/* Field rows */}
        {[0,1,2,3,4,5].map((i) => (
          <g key={i}>
            <ellipse cx={80 + i*70} cy={330+i*4} rx={20} ry={4} fill="#82B95B" opacity={0.3-i*0.03} />
            {[0,1,2].map((j) => (
              <g key={j}>
                <line
                  x1={60 + i*70 + j*12} y1={330+i*4}
                  x2={60 + i*70 + j*12} y2={310+i*4-j*2}
                  stroke="#82B95B" strokeWidth="1.5" opacity={0.6}
                />
                <ellipse
                  cx={60 + i*70 + j*12} cy={305+i*4-j*2}
                  rx="4" ry="6"
                  fill="#82B95B" opacity={0.7}
                />
              </g>
            ))}
          </g>
        ))}

        {/* Hero plant */}
        <g transform="translate(320, 260)">
          <rect x="-2" y="0" width="4" height="80" rx="2" fill="#4a8a35" />
          <ellipse cx="-18" cy="30" rx="22" ry="8" fill="#82B95B" transform="rotate(-30,-18,30)" />
          <ellipse cx="20" cy="20" rx="20" ry="7" fill="#6aa348" transform="rotate(25,20,20)" />
          <ellipse cx="-15" cy="55" rx="18" ry="6" fill="#82B95B" transform="rotate(-20,-15,55)" />
          <ellipse cx="0" cy="-5" rx="10" ry="14" fill="#4a8a35" />
          <ellipse cx="-5" cy="-12" rx="6" ry="8" fill="#82B95B" />
          <ellipse cx="5" cy="-15" rx="5" ry="7" fill="#82B95B" />
        </g>

        {/* Soil layer */}
        <rect x="0" y="350" width="600" height="50" fill="#5a3f28" />
        <rect x="0" y="370" width="600" height="30" fill="#4a3020" />
        <line x1="320" y1="340" x2="300" y2="370" stroke="#79543A" strokeWidth="1.5" opacity="0.6" />
        <line x1="320" y1="340" x2="340" y2="375" stroke="#79543A" strokeWidth="1.5" opacity="0.6" />
        <line x1="320" y1="340" x2="315" y2="385" stroke="#79543A" strokeWidth="1" opacity="0.5" />
      </svg>

      {/* ── HTML overlay panels — positioned via CSS, never cropped by SVG ── */}

      {/* FIS Score badge — top-left */}
      <div
        className="absolute top-3 left-3 z-10 rounded-xl"
        style={{
          background: 'rgba(18,59,42,0.93)',
          border: '1px solid rgba(216,163,75,0.45)',
          backdropFilter: 'blur(6px)',
          padding: '10px 14px',
          minWidth: 148,
          animation: 'floatUp 5s ease-in-out infinite 2s',
        }}
      >
        <div style={{
          fontSize: 8, fontWeight: 700, letterSpacing: '0.8px', color: '#D8A34B',
          marginBottom: 4, textTransform: 'uppercase' as const, fontFamily: 'Inter,sans-serif',
        }}>
          Farmer Influence Score
        </div>
        <div style={{
          fontSize: 30, fontWeight: 700, color: 'white', lineHeight: 1,
          fontFamily: 'Inter,sans-serif', marginBottom: 6,
        }}>
          78.4
        </div>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', marginBottom: 6 }} />
        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter,sans-serif', marginBottom: 2 }}>
          0.40A + 0.30B + 0.30C
        </div>
        <div style={{ fontSize: 9, color: '#82B95B', fontWeight: 600, fontFamily: 'Inter,sans-serif' }}>
          Illustrative · not a real record
        </div>
      </div>

      {/* Field Demo Analytics panel — top-right */}
      <div
        className="absolute top-3 right-3 z-10 rounded-xl overflow-hidden animate-float"
        style={{
          background: 'rgba(18,59,42,0.92)',
          border: '1px solid rgba(130,185,91,0.35)',
          backdropFilter: 'blur(6px)',
          minWidth: 170,
        }}
      >
        {/* Panel header */}
        <div style={{
          background: 'rgba(35,122,72,0.55)',
          padding: '7px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#82B95B', flexShrink: 0 }} />
          <span style={{ fontSize: 9, fontWeight: 700, color: 'white', fontFamily: 'Inter,sans-serif', letterSpacing: '0.3px' }}>
            Field Demo Analytics
          </span>
        </div>
        {/* Panel body */}
        <div style={{ padding: '10px 12px' }}>
          <div style={{ fontSize: 26, fontWeight: 700, color: '#82B95B', fontFamily: 'Inter,sans-serif', lineHeight: 1 }}>
            32%
          </div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter,sans-serif', marginTop: 3, marginBottom: 8 }}>
            On-soil demo trial adoption rate
          </div>
          <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', marginBottom: 8 }} />
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter,sans-serif', marginBottom: 3 }}>
            Brand recall target
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#D8A34B', fontFamily: 'Inter,sans-serif' }}>
            &lt;15% → 35% by Month 24
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-forest/60 to-transparent" />
    </div>
  );
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      heroRef.current.style.opacity = String(1 - scrollY / 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOverview = () => {
    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToRoadmap = () => {
    document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a1e13 0%, #123B2A 50%, #1a4a2f 100%)' }}>

      {/* Topographic background pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 Q50 70 100 100 Q150 130 200 100' stroke='%2382B95B' stroke-width='1' fill='none'/%3E%3Cpath d='M0 130 Q50 100 100 130 Q150 160 200 130' stroke='%2382B95B' stroke-width='0.7' fill='none'/%3E%3Cpath d='M0 70 Q50 40 100 70 Q150 100 200 70' stroke='%2382B95B' stroke-width='0.7' fill='none'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #82B95B, transparent)' }} />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full opacity-8"
        style={{ background: 'radial-gradient(circle, #D8A34B, transparent)' }} />

      <div ref={heroRef} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: editorial */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border"
                style={{ background: 'rgba(130,185,91,0.1)', borderColor: 'rgba(130,185,91,0.3)', color: '#82B95B' }}>
                <Leaf className="w-3.5 h-3.5" />
                <span className="font-medium tracking-wide text-xs uppercase">Agritech Strategy Platform</span>
              </div>
              <div className="h-px flex-1 opacity-20" style={{ background: '#82B95B' }} />
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-serif leading-tight text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                From Product
                <span className="block" style={{ color: '#82B95B' }}>Availability</span>
                to Farmer Preference.
              </h1>
              <p className="text-lg leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.72)' }}>
                A science-led, field-first growth strategy built around farmer trust, dealer influence,
                localized advisory, and measurable outcomes.
              </p>
            </div>

            {/* Value props */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Farmer brand recall', value: '<15%', note: 'Current baseline' },
                { label: 'Target demo conversion', value: '25–35%', note: 'Proposed target' },
                { label: 'Dealer-led influences', value: '72%', note: 'Purchase decisions' },
                { label: 'Demo plots by M24', value: '10,000', note: 'Proposed scale' },
              ].map((stat) => (
                <div key={stat.label} className="p-3 rounded-xl border"
                  style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)' }}>
                  <div className="font-display font-bold text-xl" style={{ color: '#D8A34B' }}>{stat.value}</div>
                  <div className="text-xs font-medium text-white/80 mt-0.5">{stat.label}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.note}</div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToOverview}
                id="hero-explore-btn"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-forest transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: '#82B95B' }}
              >
                Explore the Strategy
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={scrollToRoadmap}
                id="hero-roadmap-btn"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white border transition-all hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.25)' }}
              >
                View the 90-Day Plan
              </button>
            </div>

            {/* Disclaimer */}
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              ⓘ This is a strategic analysis platform. All projections and targets are proposed strategy,
              not verified outcomes. No live backend is connected.
            </p>
          </div>

          {/* Right: Agricultural visualization */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(130,185,91,0.2)' }}>
              <AgriLandscape />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-3xl border opacity-20 pointer-events-none"
              style={{ borderColor: '#82B95B' }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToOverview}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-xs text-white/60 tracking-widest uppercase">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 text-white animate-bounce" />
      </button>
    </div>
  );
}
