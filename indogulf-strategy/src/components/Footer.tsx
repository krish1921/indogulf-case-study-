import { Leaf } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4" style={{ background: '#0a1e13' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Leaf className="w-4 h-4 text-leaf" />
            </div>
            <div>
              <div className="font-serif text-white text-base leading-tight">Indogulf Strategy</div>
              <div className="text-white/30 text-xs">Case Competition Analysis</div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { label: 'Overview', href: '#overview' },
              { label: 'Brand Strategy', href: '#brand-strategy' },
              { label: 'Field Marketing', href: '#field-marketing' },
              { label: 'Roadmap', href: '#roadmap' },
              { label: 'Research', href: '#research' },
              { label: 'Sources', href: '#sources' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/40 hover:text-white/80 text-xs font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="text-white/25 text-xs text-center md:text-right max-w-xs">
            For case competition purposes only. Not investment advice. All proposed targets are unvalidated.
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-white/20 text-xs">
            © {currentYear} · Indogulf Cropsciences Strategy Analysis · Case Competition Submission
          </p>
        </div>
      </div>
    </footer>
  );
}
