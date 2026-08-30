import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-gray-400 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/assets/logo.png"
                alt="IAI Sulawesi Tenggara"
                className="h-11 w-auto brightness-0 invert"
              />
            </Link>
            <div className="text-white/90 text-sm leading-relaxed">
              <p className="font-semibold text-white">Veracity – Variety – Validity</p>
              <p className="text-brand-gray-400 text-xs">Kesungguhan – Keberagaman – Pengesahan</p>
            </div>
            <p className="text-sm text-brand-gray-400 leading-relaxed">
              Organisasi resmi profesi arsitek Provinsi Sulawesi Tenggara. Berdedikasi mewujudkan arsitek profesional, inovatif, dan berdaya saing.
            </p>
          </div>

          {/* Col 2: Navigasi */}
          <div>
            <h4 className="text-white font-semibold text-base font-body mb-5 relative after:content-[''] after:block after:w-6 after:h-[2px] after:bg-maroon-light after:mt-2">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-200 block">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/tentang/profil" className="hover:text-white transition-colors duration-200 block">
                  Profil Organisasi
                </Link>
              </li>
              <li>
                <Link to="/tentang/visi-misi" className="hover:text-white transition-colors duration-200 block">
                  Visi & Misi
                </Link>
              </li>
              <li>
                <Link to="/tentang/sejarah" className="hover:text-white transition-colors duration-200 block">
                  Sejarah
                </Link>
              </li>
              <li>
                <Link to="/pengurus" className="hover:text-white transition-colors duration-200 block">
                  Struktur Pengurus
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Layanan & Informasi */}
          <div>
            <h4 className="text-white font-semibold text-base font-body mb-5 relative after:content-[''] after:block after:w-6 after:h-[2px] after:bg-maroon-light after:mt-2">
              Layanan & Informasi
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/kegiatan/program-kerja" className="hover:text-white transition-colors duration-200 block">
                  Program Kerja
                </Link>
              </li>
              <li>
                <Link to="/kegiatan/berita" className="hover:text-white transition-colors duration-200 block">
                  Berita & Kegiatan
                </Link>
              </li>
              <li>
                <Link to="/galeri" className="hover:text-white transition-colors duration-200 block">
                  Galeri Karya
                </Link>
              </li>
              <li>
                <a
                  href="https://iai.or.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  IAI Nasional ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Sekretariat */}
          <div>
            <h4 className="text-white font-semibold text-base font-body mb-5 relative after:content-[''] after:block after:w-6 after:h-[2px] after:bg-maroon-light after:mt-2">
              Sekretariat
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-maroon-light shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Kompleks Perumahan BPD SULTRA, Jl. Abunawas No. 2 Kendari (93121)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-maroon-light shrink-0" />
                <a
                  href="mailto:sekretariat.iaisultra@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  sekretariat.iaisultra@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-maroon-light shrink-0" />
                <span>0401 3131660</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-gray-400">
          <p>© {new Date().getFullYear()} Ikatan Arsitek Indonesia — Provinsi Sulawesi Tenggara. Hak Cipta Dilindungi.</p>
          <p className="text-brand-gray-400/80">Veracity – Variety – Validity</p>
        </div>

      </div>
    </footer>
  );
}
