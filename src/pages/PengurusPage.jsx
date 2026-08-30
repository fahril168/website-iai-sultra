import React from 'react';
import PageHeader from '../components/PageHeader';
import { pengurusData } from '../data/pengurusData';
import { Shield, Award, Users, BookOpen } from 'lucide-react';

export default function PengurusPage() {
  return (
    <div>
      {/* Page Header */}
      <PageHeader
        label="Struktur Organisasi"
        title="Struktur Pengurus IAI Sultra"
        desc="Badan Pengurus Daerah, Dewan Kehormatan, Dewan Pertimbangan, serta Badan & Lembaga IAI Sulawesi Tenggara."
        breadcrumbs={[{ label: 'Pengurus' }]}
      />

      {/* Main Content */}
      <section className="py-20 sm:py-28 bg-brand-warm">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 space-y-24">
          
          {/* 1. KETUA FEATURED CARD & BPD GRID */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
                Pimpinan Daerah
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black mb-3">
                Badan Pengurus Daerah (BPD)
              </h2>
              <p className="text-brand-gray-600 text-base">
                Jajaran pengurus harian yang mengemban mandat operasional organisasi IAI Sulawesi Tenggara.
              </p>
            </div>

            {/* Featured Ketua Card */}
            <div className="max-w-md mx-auto mb-12">
              <div className="bg-white border-2 border-maroon rounded-brand-lg p-8 text-center shadow-card hover:-translate-y-1 transition-all duration-300">
                <div className="w-20 h-20 rounded-full bg-maroon-subtle border-2 border-maroon text-maroon font-heading font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                  {pengurusData.ketua.initials}
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-black mb-1">
                  {pengurusData.ketua.nama}
                </h3>
                <p className="text-sm font-semibold text-maroon mb-1">
                  {pengurusData.ketua.jabatan}
                </p>
                <span className="text-xs text-brand-gray-400">
                  {pengurusData.ketua.periode}
                </span>
              </div>
            </div>

            {/* BPD Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pengurusData.bpd.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-brand-gray-200 rounded-brand-lg p-6 text-center shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-off border border-brand-gray-200 text-maroon font-heading font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {item.initials}
                  </div>
                  <h4 className="font-heading font-bold text-base text-brand-black mb-1">
                    {item.nama}
                  </h4>
                  <p className="text-xs text-maroon font-medium mb-0">
                    {item.jabatan}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. DEWAN KEHORMATAN & DEWAN PERTIMBANGAN */}
          <div className="pt-16 border-t border-brand-gray-200">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
                Majelis & Dewan
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black mb-3">
                Dewan Kehormatan & Pertimbangan
              </h2>
              <p className="text-brand-gray-600 text-base">
                Perangkat pertimbangan etika dan pengarah kebijakan strategis profesi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pengurusData.dewan.map((dewan, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-brand-gray-200 rounded-brand-lg p-8 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-maroon bg-maroon-subtle px-3 py-1 rounded-md inline-block mb-4">
                      {dewan.kategori}
                    </span>
                    <p className="text-sm text-brand-gray-600 leading-relaxed mb-6">
                      {dewan.deskripsi}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-brand-gray-100">
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-brand-gray-400 mb-2">Anggota:</h5>
                    <ul className="space-y-1.5 text-sm text-brand-gray-800 font-medium">
                      {dewan.anggota.map((ang, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-maroon" />
                          <span>{ang}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. BADAN & LEMBAGA ORGANISASI */}
          <div className="pt-16 border-t border-brand-gray-200">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
                Struktur Kelengkapan Organisasi
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black mb-3">
                Badan & Lembaga IAI Sulawesi Tenggara
              </h2>
              <p className="text-brand-gray-600 text-base">
                Perangkat kelengkapan organisasi yang menjalankan fungsi operasional dan keahlian profesi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pengurusData.badanLembaga.map((badan) => (
                <div
                  key={badan.id}
                  className="bg-white border border-brand-gray-200 rounded-brand-lg p-8 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                >
                  <h4 className="font-heading font-bold text-lg text-brand-black mb-3">
                    {badan.nama}
                  </h4>
                  <p className="text-sm text-brand-gray-600 leading-relaxed mb-0">
                    {badan.deskripsi}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
