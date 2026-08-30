import React from 'react';
import PageHeader from '../components/PageHeader';
import { programKerjaPillars, kompetensiArsitek } from '../data/programKerjaData';
import { FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { asset } from '../utils/asset';

export default function ProgramKerjaPage() {
  return (
    <div>
      {/* Page Header */}
      <PageHeader
        label="Arah Kebijakan"
        title="Program Kerja & Standar Kompetensi"
        desc="Pilar program strategis organisasi dan 13 Butir Standar Kompetensi Arsitek Indonesia."
        breadcrumbs={[{ label: 'Kegiatan', to: '/kegiatan/program-kerja' }, { label: 'Program Kerja' }]}
      />

      {/* Main Content */}
      <section className="py-20 sm:py-28 bg-brand-warm">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 space-y-24">
          
          {/* 1. PILAR PROGRAM KERJA */}
          <div>
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
                Program Strategis
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black mb-3">
                Pilar Program Kerja IAI Sultra
              </h2>
              <p className="text-brand-gray-600 text-base">
                Fokus utama pelaksanaan program kepengurusan daerah dalam memajukan profesi arsitektur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programKerjaPillars.map((pilar, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-brand-gray-200 rounded-brand-lg p-8 sm:p-10 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex items-start gap-6"
                >
                  <span className="font-heading font-bold text-3xl sm:text-4xl text-maroon shrink-0 leading-none">
                    {pilar.number}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-brand-black mb-3">
                      {pilar.title}
                    </h3>
                    <p className="text-brand-gray-600 text-sm sm:text-base leading-relaxed mb-0">
                      {pilar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. 13 BUTIR KOMPETENSI ARSITEK IAI */}
          <div className="pt-16 border-t border-brand-gray-200">
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
                Standar Kualifikasi Sertifikasi
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black mb-3">
                13 Butir Kompetensi Arsitek IAI
              </h2>
              <p className="text-brand-gray-600 text-base">
                Pedoman dasar penilaian Sertifikat Keahlian (SKA/STRA) Arsitek oleh Dewan Keprofesian Arsitek (DKA).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kompetensiArsitek.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-brand-gray-200 rounded-brand-lg p-6 sm:p-8 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                >
                  <h4 className="font-heading font-bold text-lg text-brand-black mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-brand-gray-600 leading-relaxed mb-0">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. REGULASI & LISENSI PRAKTIK */}
          <div className="pt-16 border-t border-brand-gray-200">
            <div className="bg-brand-black text-white rounded-brand-lg p-8 sm:p-12 relative overflow-hidden">
              <div className="relative z-10 max-w-3xl space-y-6">
                <span className="text-xs font-semibold uppercase tracking-[2.5px] text-white/70 block">
                  Dasar Hukum & Regulasi
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-tight">
                  Undang-Undang Nomor 6 Tahun 2017 tentang Arsitek
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  Untuk berpraktek secara sah sebagai arsitek profesional di Indonesia, seorang arsitek wajib memiliki Surat Tanda Registrasi Arsitek (STRA) dan Lisensi Praktik Arsitek yang diterbitkan sesuai peraturan perundang-undangan.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={asset('/PROFIL IAI SULTRA.pdf')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-brand text-xs sm:text-sm font-semibold uppercase tracking-wider bg-maroon hover:bg-maroon-hover text-white transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Unduh Dokumen Profil & AD-ART (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
