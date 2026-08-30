import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { galeriKarya } from '../data/galeriData';

export default function KaryaSlider() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-white border-y border-brand-gray-100 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
              Karya Anggota
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-black mb-3">
              Karya Desain Arsitektur
            </h2>
            <p className="text-brand-gray-600 text-sm sm:text-base max-w-xl">
              Dokumentasi karya perancangan arsitektur ikonik oleh anggota Ikatan Arsitek Indonesia Sulawesi Tenggara.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-brand-gray-200 bg-white hover:bg-maroon hover:border-maroon hover:text-white flex items-center justify-center text-brand-black transition-colors duration-200 shadow-sm focus:outline-none"
              aria-label="Geser Kiri"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-brand-gray-200 bg-white hover:bg-maroon hover:border-maroon hover:text-white flex items-center justify-center text-brand-black transition-colors duration-200 shadow-sm focus:outline-none"
              aria-label="Geser Kanan"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {galeriKarya.map((karya) => (
            <div
              key={karya.id}
              className="flex-none w-[300px] sm:w-[360px] snap-start bg-white rounded-brand-lg border border-brand-gray-100 overflow-hidden shadow-subtle hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="w-full h-56 overflow-hidden bg-brand-gray-100 relative">
                <img
                  src={karya.images[0].src}
                  alt={karya.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-brand-black group-hover:text-maroon transition-colors line-clamp-1 mb-2">
                  {karya.title}
                </h3>
                <p className="text-sm text-brand-gray-600 line-clamp-2 leading-relaxed mb-4">
                  {karya.desc}
                </p>
                <Link
                  to="/galeri"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-maroon hover:text-maroon-dark uppercase tracking-wider group-hover:underline"
                >
                  <span>Lihat Detail</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            to="/galeri"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-brand font-semibold text-sm uppercase tracking-wider text-white bg-maroon hover:bg-maroon-hover shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span>Lihat Semua Galeri Karya</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
