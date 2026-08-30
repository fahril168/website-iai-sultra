import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ label, title, desc, breadcrumbs = [] }) {
  return (
    <header className="bg-brand-black text-white pt-32 pb-16 relative overflow-hidden border-b border-white/10">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/30 via-transparent to-black pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {label && (
            <p className="text-xs sm:text-sm font-semibold tracking-[3px] uppercase text-white/60 mb-3">
              {label}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          {desc && (
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mb-6">
              {desc}
            </p>
          )}

          {/* Breadcrumb */}
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/60 font-medium pt-2">
              <Link to="/" className="hover:text-white transition-colors">
                Beranda
              </Link>
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
                  <ChevronRight className="w-3.5 h-3.5 text-white/30 shrink-0" />
                  {item.to ? (
                    <Link to={item.to} className="hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white/90 font-semibold">{item.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
