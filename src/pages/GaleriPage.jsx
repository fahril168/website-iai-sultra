import React from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { galeriKarya, galeriDokumentasi } from '../data/galeriData';

export default function GaleriPage() {
  return (
    <div>
      {/* Page Header */}
      <PageHeader
        label="Portofolio & Dokumentasi"
        title="Galeri Karya & Kegiatan"
        desc="Dokumentasi karya perancangan arsitektur unggulan anggota IAI Sultra dan rekam jejak kegiatan organisasi."
        breadcrumbs={[{ label: 'Galeri' }]}
      />

      {/* Main Content */}
      <section className="py-20 sm:py-28 bg-brand-warm space-y-24">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 space-y-24">
          
          {/* 1. KARYA DESAIN ARSITEKTUR */}
          <div>
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
                Karya Unggulan
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black mb-3">
                Karya Desain Anggota IAI Sultra
              </h2>
              <p className="text-brand-gray-600 text-base">
                Dokumentasi proyek arsitektur ikonik yang dirancang oleh arsitek profesional IAI Sulawesi Tenggara. Klik thumbnail gambar untuk melihat sudut pandang lain.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {galeriKarya.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* 2. DOKUMENTASI KEGIATAN & ORGANISASI */}
          <div className="pt-16 border-t border-brand-gray-200">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
                Foto Kegiatan
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black mb-3">
                Dokumentasi Kegiatan & Acara
              </h2>
              <p className="text-brand-gray-600 text-base">
                Momen-momen penting penyelenggaraan seminar, penataran kode etik, dan forum organisasi IAI Sultra.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galeriDokumentasi.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-brand-gray-200 rounded-brand-lg overflow-hidden shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-full h-64 overflow-hidden bg-brand-gray-100 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-heading font-bold text-base text-brand-black group-hover:text-maroon transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
