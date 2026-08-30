import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, ShieldCheck, Users, Calendar, MapPin } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import KaryaSlider from '../components/KaryaSlider';
import { beritaList } from '../data/beritaData';
import { asset } from '../utils/asset';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. HERO SLIDER */}
      <HeroSlider />

      {/* 2. PROFIL ORGANISASI RINGKAS */}
      <section className="py-20 sm:py-28 bg-brand-warm">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Text Col */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
                  Profil Organisasi
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black leading-tight">
                  Ikatan Arsitek Indonesia <br />
                  <span className="text-maroon">Provinsi Sulawesi Tenggara</span>
                </h2>
              </div>

              <p className="text-base sm:text-lg text-brand-gray-600 leading-relaxed">
                <strong>Ikatan Arsitek Indonesia (IAI) Daerah Sulawesi Tenggara</strong> merupakan organisasi resmi profesi arsitek yang berdedikasi tinggi dalam menjalankan praktik keprofesian arsitektur yang beretika, profesional, dan bertanggung jawab.
              </p>

              <p className="text-base text-brand-gray-600 leading-relaxed">
                Dengan semangat motto <em>"Veracity – Variety – Validity" (Kesungguhan – Keberagaman – Pengesahan)</em>, IAI Sultra terus menggalang kekuatan anggota dan bersinergi aktif bersama Pemerintah Daerah dalam mewujudkan tata kota yang berkelas serta berkelanjutan.
              </p>

              <div className="pt-2">
                <Link
                  to="/tentang/profil"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-maroon hover:text-maroon-dark group"
                >
                  <span>Lihat Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Image Col */}
            <div className="lg:col-span-6">
              <div className="rounded-brand-lg overflow-hidden shadow-card border border-brand-gray-200 group">
                <img
                  src={asset('/assets/img/5.jpg')}
                  alt="Kegiatan IAI Sulawesi Tenggara"
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. VISI & MISI PREVIEW (Maroon Gradient Accent with Aesthetic Waves) */}
      <section className="bg-gradient-to-br from-[#66001a] via-maroon to-[#4a0013] text-white relative overflow-hidden">
        {/* Top Wave Transition */}
        <div className="w-full overflow-hidden leading-none -mt-px pointer-events-none">
          <svg
            className="relative block w-full h-10 sm:h-16 lg:h-20 text-brand-warm"
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C320,80 640,100 1020,40 C1220,10 1340,30 1440,55 L1440,0 L0,0 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[3px] text-white/70 block mb-2">
              Landasan Organisasi
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Visi & Misi IAI Sultra
            </h2>
            <p className="text-white/80 text-sm sm:text-base">
              Arah dan cita-cita strategis dalam menjalankan amanah organisasi profesi arsitektur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card Visi */}
            <div className="bg-white text-brand-gray-800 rounded-brand-lg p-8 sm:p-10 shadow-card border-l-4 border-maroon hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-heading font-bold text-2xl text-brand-black mb-4">
                Visi
              </h3>
              <p className="text-brand-gray-600 text-sm sm:text-base leading-relaxed mb-0">
                Menjadi organisasi yang profesional dalam menjalankan praktek arsitek yang beretika dan bertanggung jawab demi terwujudnya arsitek professional, inovatif, berdaya saing dan siap menghadapi Masyarakat Ekonomi Asean (MEA).
              </p>
            </div>

            {/* Card Misi */}
            <div className="bg-white text-brand-gray-800 rounded-brand-lg p-8 sm:p-10 shadow-card border-l-4 border-maroon hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-heading font-bold text-2xl text-brand-black mb-4">
                Misi
              </h3>
              <p className="text-brand-gray-600 text-sm sm:text-base leading-relaxed mb-0">
                Menggalang kekuatan anggota sebagai potensi dan bergandengan-tangan dengan semua pihak khususnya Pemerintah secara profesional.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Wave Transition */}
        <div className="w-full overflow-hidden leading-none -mb-px pointer-events-none">
          <svg
            className="relative block w-full h-10 sm:h-16 lg:h-20 text-white"
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,65 C320,15 680,105 1040,40 C1240,5 1360,55 1440,45 L1440,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* 4. KARYA SLIDER CAROUSEL */}
      <KaryaSlider />

      {/* 5. BERITA TERBARU */}
      <section className="py-20 sm:py-28 bg-brand-warm">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
                Publikasi & Kabar
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black mb-2">
                Berita & Kegiatan Terbaru
              </h2>
              <p className="text-brand-gray-600 text-sm sm:text-base">
                Ikuti perkembangan terkini dari kegiatan dan program IAI Sulawesi Tenggara.
              </p>
            </div>
            <Link
              to="/kegiatan/berita"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-maroon hover:text-maroon-dark self-start sm:self-auto"
            >
              <span>Semua Berita</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beritaList.slice(0, 2).map((berita) => (
              <div
                key={berita.id}
                className="bg-white border border-brand-gray-200 rounded-brand-lg overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col group"
              >
                <div className="w-full h-64 overflow-hidden bg-brand-gray-100 relative">
                  <img
                    src={berita.image}
                    alt={berita.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-brand-gray-400 uppercase tracking-wider mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{berita.date}</span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-brand-black group-hover:text-maroon transition-colors line-clamp-2 mb-3 leading-snug">
                      {berita.title}
                    </h3>
                    <p className="text-brand-gray-600 text-sm sm:text-base line-clamp-3 leading-relaxed mb-0">
                      {berita.excerpt}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-brand-gray-100">
                    <Link
                      to="/kegiatan/berita"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-maroon hover:text-maroon-dark uppercase tracking-wider"
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-maroon-dark via-maroon to-[#6b001b] text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Ingin Berkonsultasi atau Bergabung dengan IAI Sultra?
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Hubungi sekretariat kami untuk informasi pendaftaran anggota, sertifikasi keahlian (STRA), dan layanan rekomendasi keprofesian.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-brand font-semibold text-sm uppercase tracking-wider text-maroon bg-white hover:bg-brand-warm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <MapPin className="w-4 h-4 text-maroon" />
              <span>Hubungi Sekretariat</span>
            </Link>
            <Link
              to="/tentang/profil"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-brand font-semibold text-sm uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm transition-all duration-300"
            >
              <span>Syarat Keanggotaan</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
