import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { href: '#overview', label: 'Overview', id: 'overview' },
  { href: '#brand-strategy', label: 'Brand Strategy', id: 'brand-strategy' },
  { href: '#channel-strategy', label: 'Channel Strategy', id: 'channel-strategy' },
  { href: '#farmer-intelligence', label: 'Farmer Intelligence', id: 'farmer-intelligence' },
  { href: '#field-marketing', label: 'Field Marketing', id: 'field-marketing' },
  { href: '#roadmap', label: '90-Day Plan', id: 'roadmap' },
  { href: '#research', label: 'Research', id: 'research' },
];

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      style={{ background: 'rgba(18,59,42,0.97)', backdropFilter: 'blur(16px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo('#overview')} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-leaf/20 border border-leaf/30 flex items-center justify-center">
              <Leaf className="w-4 h-4 text-leaf" />
            </div>
            <div className="text-left">
              <div className="font-display font-700 text-white text-sm leading-tight">Indogulf</div>
              <div className="text-leaf/70 text-[10px] tracking-widest uppercase">Strategy Platform</div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'bg-leaf/20 text-leaf'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scrollTo('#roadmap')}
              className="px-4 py-2 text-sm font-medium text-leaf border border-leaf/40 rounded-lg hover:bg-leaf/10 transition-all"
            >
              90-Day Plan
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/10 py-3 px-4 space-y-1"
          style={{ background: 'rgba(18,59,42,0.98)' }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.href)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-leaf/20 text-leaf'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
