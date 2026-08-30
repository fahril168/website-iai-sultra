import React from 'react';
import PageHeader from '../components/PageHeader';
import { Target, Compass, Flag, Sparkles } from 'lucide-react';

export default function VisiMisiPage() {
  return (
    <div>
      {/* Page Header */}
      <PageHeader
        label="Landasan Organisasi"
        title="Visi, Misi & Tujuan"
        desc="Arah dan cita-cita IAI Sulawesi Tenggara dalam menjalankan amanah organisasi profesi arsitektur."
        breadcrumbs={[{ label: 'Tentang', to: '/tentang/profil' }, { label: 'Visi & Misi' }]}
      />

      {/* Main Grid: Visi & Misi Berdampingan Kiri-Kanan */}
      <section className="py-20 sm:py-28 bg-brand-warm">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 1. VISI (KIRI) */}
            <div className="bg-white border border-brand-gray-200 rounded-brand-lg p-8 sm:p-10 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-maroon">
                    Visi Organisasi
                  </span>
                  <Compass className="w-6 h-6 text-maroon" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-brand-black mb-4">
                  Visi IAI Sulawesi Tenggara
                </h3>
                <p className="text-brand-gray-600 text-base leading-relaxed mb-0">
                  Menjadi organisasi yang profesional dalam menjalankan praktek arsitek yang beretika dan bertanggung jawab demi terwujudnya arsitek professional, inovatif, berdaya saing dan siap menghadapi Masyarakat Ekonomi Asean (MEA).
                </p>
              </div>
            </div>

            {/* 2. MISI (KANAN) */}
            <div className="bg-white border border-brand-gray-200 rounded-brand-lg p-8 sm:p-10 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-maroon">
                    Misi Organisasi
                  </span>
                  <Target className="w-6 h-6 text-maroon" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-brand-black mb-4">
                  Misi IAI Sulawesi Tenggara
                </h3>
                <p className="text-brand-gray-600 text-base leading-relaxed mb-0">
                  Menggalang kekuatan anggota sebagai potensi dan bergandengan-tangan dengan semua pihak khususnya Pemerintah secara profesional.
                </p>
              </div>
            </div>

            {/* 3. TUJUAN (KIRI BAWAH) */}
            <div className="bg-white border border-brand-gray-200 rounded-brand-lg p-8 sm:p-10 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-maroon">
                    Tujuan Organisasi
                  </span>
                  <Flag className="w-6 h-6 text-maroon" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-brand-black mb-4">
                  Tujuan IAI Sultra
                </h3>
                <p className="text-brand-gray-600 text-base leading-relaxed mb-0">
                  Berpartisipasi aktif dalam mewujudkan Kota yang berkelas, serta mengembangkan pengetahuan dan kemampuan arsitek profesional seiring kemajuan teknologi agar mampu mengabdikan ilmunya bagi dunia arsitektur Indonesia serta mampu bersaing dan diakui secara internasional.
                </p>
              </div>
            </div>

            {/* 4. MOTTO (KANAN BAWAH) */}
            <div className="bg-gradient-to-br from-brand-off to-white border border-brand-gray-200 rounded-brand-lg p-8 sm:p-10 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-maroon">
                    Motto Organisasi
                  </span>
                  <Sparkles className="w-6 h-6 text-maroon" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-maroon mb-2">
                  Veracity – Variety – Validity
                </h3>
                <p className="text-brand-gray-800 font-medium text-base mb-3">
                  Kesungguhan – Keberagaman – Pengesahan
                </p>
                <p className="text-brand-gray-600 text-sm leading-relaxed mb-0">
                  Semboyan luhur profesi arsitek Indonesia yang mencerminkan integritas kejujuran karya (Veracity), kekayaan kreativitas desain (Variety), serta pengakuan hukum & sertifikasi keahlian (Validity).
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
