import React from 'react';
import PageHeader from '../components/PageHeader';
import { History, UserCheck, Milestone } from 'lucide-react';

const timelineData = [
  {
    year: "1959",
    title: "Pendirian IAI Nasional",
    desc: "Ikatan Arsitek Indonesia resmi didirikan pada 17 September 1959 di Bandung oleh para pelopor arsitek terkemuka Indonesia seperti F. Silaban dan Mohammad Soesilo."
  },
  {
    year: "1972 & 1974",
    title: "Afiliasi ARCASIA & UIA",
    desc: "IAI resmi menjadi anggota Dewan Arsitek Regional Asia (ARCASIA) pada tahun 1972 dan Ikatan Arsitek Dunia (UIA) pada tahun 1974."
  },
  {
    year: "2006",
    title: "Pembentukan IAI Sulawesi Tenggara",
    desc: "IAI Daerah Sulawesi Tenggara resmi dibentuk melalui inisiasi para tokoh arsitek daerah yang dipelopori oleh Ir. H. Dinamis Yunus Makkajareng, IAI."
  },
  {
    year: "2017",
    title: "Pengesahan UU Arsitek No. 6/2017",
    desc: "Undang-Undang Republik Indonesia Nomor 6 Tahun 2017 tentang Arsitek disahkan sebagai payung hukum perlindungan dan lisensi profesi arsitek (STRA)."
  },
  {
    year: "2026",
    title: "Era Transformasi & Arsitektur Berkelanjutan",
    desc: "IAI Sultra terus mendorong inovasi rancangan arsitektur hijau berbasis kearifan lokal serta penguatan kemitraan pembangunan daerah."
  }
];

const leaders = [
  {
    period: "Periode 2006 – 2008",
    name: "Ir. H. Dinamis Yunus Makkajareng, IAI",
    desc: "Pelopor pendiri IAI Sultra dan perintis awal jalannya roda organisasi profesi arsitek di Bumi Anoa Sulawesi Tenggara."
  },
  {
    period: "Periode 2009 – 2015",
    name: "H. Alim Bahri, IAI",
    desc: "Mengembangkan sinergi kemitraan pembangunan daerah dan pengabdian masyarakat melalui edukasi tata kota dan arsitektur."
  },
  {
    period: "Periode 2015 – 2018",
    name: "H. Arief Saleh Sjamsu, IAI",
    desc: "Memperluas kemitraan strategis KOTAKU Kendari, sosialisasi UU Arsitek No. 6/2017, dan kerjasama akademis Universitas Halu Oleo (UHO)."
  }
];

export default function SejarahPage() {
  return (
    <div>
      {/* Page Header */}
      <PageHeader
        label="Tentang Kami"
        title="Sejarah Perjalanan IAI"
        desc="Rekam jejak perjuangan dan perkembangan Ikatan Arsitek Indonesia di Sulawesi Tenggara dan Nasional."
        breadcrumbs={[{ label: 'Tentang', to: '/tentang/profil' }, { label: 'Sejarah' }]}
      />

      {/* Main Content */}
      <section className="py-20 sm:py-28 bg-brand-warm">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 space-y-24">
          
          {/* 1. TIMELINE */}
          <div>
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
                Kronologi
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black mb-3">
                Tonggak Sejarah Organisasi
              </h2>
              <p className="text-brand-gray-600 text-base">
                Tahapan penting perkembangan IAI dari awal berdiri hingga era modern saat ini.
              </p>
            </div>

            <div className="relative pl-6 sm:pl-10 border-l-2 border-brand-gray-200 space-y-12 max-w-4xl">
              {timelineData.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Dot */}
                  <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-4 border-maroon group-hover:scale-125 transition-transform" />
                  
                  <span className="font-heading font-bold text-maroon text-base sm:text-lg block mb-1">
                    {item.year}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-brand-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brand-gray-600 text-base leading-relaxed mb-0">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. REKAM JEJAK KEPEMIMPINAN */}
          <div className="pt-16 border-t border-brand-gray-200">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
                Kepemimpinan Daerah
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black mb-3">
                Ketua IAI Sulawesi Tenggara
              </h2>
              <p className="text-brand-gray-600 text-base">
                Para tokoh yang memimpin dan memajukan organisasi di Sulawesi Tenggara pada setiap periode.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leaders.map((leader, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-brand-gray-200 rounded-brand-lg p-8 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-maroon bg-maroon-subtle px-3 py-1 rounded-md inline-block mb-4">
                      {leader.period}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-brand-black mb-3">
                      {leader.name}
                    </h3>
                    <p className="text-brand-gray-600 text-sm leading-relaxed mb-0">
                      {leader.desc}
                    </p>
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
