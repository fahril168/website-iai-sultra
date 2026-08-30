import React from 'react';
import PageHeader from '../components/PageHeader';
import { CheckCircle2, Shield, Globe2, Award } from 'lucide-react';
import { asset } from '../utils/asset';

const membershipTypes = [
  {
    num: "1.",
    title: "Anggota Kehormatan",
    en: "(Honorary Members)",
    desc: "Seseorang yang berwawasan ilmu/seni arsitektur dan dinilai organisasi sangat berjasa bagi peningkatan dan kemajuan dunia arsitektur serta lingkungan binaan di Indonesia."
  },
  {
    num: "2.",
    title: "Anggota Profesional",
    en: "(Corporate Members)",
    desc: "Arsitek lulusan D3/S1 teknik arsitektur yang memenuhi kualifikasi Arsitek Pratama, Arsitek Madya, atau Arsitek Utama serta mengikuti pembinaan keprofesian (PKB) berkelanjutan.",
    highlight: "Arsitek Pratama, Arsitek Madya, atau Arsitek Utama"
  },
  {
    num: "3.",
    title: "Anggota Biasa",
    en: "",
    desc: "Sarjana atau lulusan D-3 arsitektur dari perguruan tinggi yang mempraktikkan atau menerapkan ilmu arsitektur sejalan dengan Kode Etik & Kaidah Tata Laku Profesi Arsitek."
  },
  {
    num: "4.",
    title: "Anggota Mahasiswa",
    en: "(Student Members)",
    desc: "Mahasiswa jurusan arsitektur yang sekurang-kurangnya telah menyelesaikan pendidikan tingkat 3 (tiga) atau telah lulus minimal 100 SKS."
  },
  {
    num: "5.",
    title: "Mitra IAI",
    en: "(Associate Members)",
    desc: "Arsitek terdaftar sebagai anggota organisasi profesi internasional (ARCASIA / UIA) yang berminat bergabung dan memiliki Sertifikat Keahlian Sementara (SKAS) IAI untuk berpraktik di Indonesia."
  }
];

export default function ProfilPage() {
  return (
    <div>
      {/* Page Header */}
      <PageHeader
        label="Tentang Kami"
        title="Profil Organisasi"
        desc="Mengenal Ikatan Arsitek Indonesia (IAI) Daerah Sulawesi Tenggara sebagai wadah resmi profesi arsitek."
        breadcrumbs={[{ label: 'Tentang', to: '/tentang/profil' }, { label: 'Profil Organisasi' }]}
      />

      {/* Profil Section */}
      <section className="py-20 sm:py-28 bg-brand-warm">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
                Eksistensi & Dedikasi
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black leading-tight">
                Mewujudkan Arsitek Profesional & Berdaya Saing Global
              </h2>

              <p className="text-base sm:text-lg text-brand-gray-600 leading-relaxed">
                <strong>Ikatan Arsitek Indonesia (IAI)</strong> didirikan secara resmi pada tanggal 17 September 1959 di Bandung. Kini di usianya yang matang, IAI telah beranggotakan lebih dari ribuan arsitek di seluruh Indonesia yang terhimpun dalam berbagai kepengurusan daerah dan cabang.
              </p>

              <p className="text-base text-brand-gray-600 leading-relaxed">
                Di tingkat internasional, IAI aktif dalam kegiatan dunia melalui keanggotaan di <strong>ARCASIA</strong> (Architects Regional Council of Asia) sejak 1972, <strong>UIA</strong> (Union Internationale des Architectes) sejak 1974, dan <strong>AAPH</strong> (Asean Association Planning and Housing).
              </p>

              <p className="text-base text-brand-gray-600 leading-relaxed">
                Di Sulawesi Tenggara, IAI Daerah Sultra terus memperkuat eksistensi organisasi profesi, bermitra dengan Pemerintah Provinsi, Kota Kendari, dan kabupaten se-Sultra, serta perguruan tinggi dalam memajukan kualitas lingkungan binaan.
              </p>

              {/* Key badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-brand border border-brand-gray-200 shadow-subtle">
                  <Globe2 className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-brand-black">Afiliasi Internasional</h4>
                    <p className="text-xs text-brand-gray-600">Anggota resmi ARCASIA & UIA Dunia</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-brand border border-brand-gray-200 shadow-subtle">
                  <Shield className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-brand-black">Kode Etik Profesi</h4>
                    <p className="text-xs text-brand-gray-600">Kaidah Tata Laku & Standar Arsitek</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="rounded-brand-lg overflow-hidden shadow-card border border-brand-gray-200">
                <img
                  src={asset('/assets/img/5.jpg')}
                  alt="IAI Sulawesi Tenggara"
                  className="w-full h-[440px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* KEANGGOTAAN IAI (CLEAN NON-CARD STANDARD LIST FORMAT) */}
      <section className="py-20 sm:py-28 bg-brand-off border-t border-brand-gray-200">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
              Keanggotaan Organisasi
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black mb-3">
              Jenis & Kualifikasi Keanggotaan IAI
            </h2>
            <p className="text-base sm:text-lg text-brand-gray-600">
              Berdasarkan Anggaran Rumah Tangga IAI, keanggotaan IAI bersifat perorangan dan aktif.
            </p>
          </div>

          {/* Clean Non-Card Structured List */}
          <div className="max-w-4xl border-t border-brand-gray-200 divide-y divide-brand-gray-200">
            {membershipTypes.map((item, idx) => (
              <div key={idx} className="py-7 grid grid-cols-[40px_1fr] sm:grid-cols-[56px_1fr] gap-4 sm:gap-6 items-start">
                <span className="font-heading font-bold text-xl sm:text-2xl text-maroon leading-snug">
                  {item.num}
                </span>
                <div className="space-y-1.5">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-black">
                    {item.title}{' '}
                    {item.en && <span className="font-normal text-sm sm:text-base text-brand-gray-600">{item.en}</span>}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-gray-600 leading-relaxed max-w-3xl mb-0">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
