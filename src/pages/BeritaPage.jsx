import React from 'react';
import PageHeader from '../components/PageHeader';
import { beritaList } from '../data/beritaData';
import { Calendar, ArrowRight } from 'lucide-react';

export default function BeritaPage() {
  return (
    <div>
      {/* Page Header */}
      <PageHeader
        label="Informasi & Agenda"
        title="Berita & Kegiatan"
        desc="Kabar terkini, liputan seminar arsitektur, musyawarah daerah, dan agenda IAI Sulawesi Tenggara."
        breadcrumbs={[{ label: 'Kegiatan', to: '/kegiatan/program-kerja' }, { label: 'Berita & Kegiatan' }]}
      />

      {/* Main Content */}
      <section className="py-20 sm:py-28 bg-brand-warm">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beritaList.map((berita) => (
              <article
                key={berita.id}
                className="bg-white border border-brand-gray-200 rounded-brand-lg overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col group"
              >
                <div className="w-full h-64 sm:h-72 overflow-hidden bg-brand-gray-100 relative">
                  <img
                    src={berita.image}
                    alt={berita.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-brand-gray-400 uppercase tracking-wider mb-3">
                      <Calendar className="w-4 h-4 text-maroon" />
                      <span>{berita.date}</span>
                    </div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-black group-hover:text-maroon transition-colors mb-3 leading-snug">
                      {berita.title}
                    </h3>
                    <p className="text-brand-gray-600 text-sm sm:text-base leading-relaxed mb-0">
                      {berita.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-brand-gray-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-brand-gray-400">
                      Publikasi BPD IAI Sultra
                    </span>
                    <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-maroon hover:text-maroon-dark uppercase tracking-wider focus:outline-none">
                      <span>Detail Berita</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
