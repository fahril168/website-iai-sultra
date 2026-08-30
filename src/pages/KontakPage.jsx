import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    subjek: 'Informasi Keanggotaan',
    pesan: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ nama: '', email: '', telepon: '', subjek: 'Informasi Keanggotaan', pesan: '' });
    }, 1000);
  };

  return (
    <div>
      {/* Page Header */}
      <PageHeader
        label="Sekretariat & Pelayanan"
        title="Kontak & Lokasi"
        desc="Hubungi pengurus atau kunjungi sekretariat Ikatan Arsitek Indonesia Daerah Sulawesi Tenggara."
        breadcrumbs={[{ label: 'Kontak' }]}
      />

      {/* Main Content */}
      <section className="py-20 sm:py-28 bg-brand-warm">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Col: Info & Map */}
            <div className="lg:col-span-6 space-y-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
                  Informasi Sekretariat
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-black mb-4">
                  Sekretariat BPD IAI Sultra
                </h2>
                <p className="text-brand-gray-600 text-base leading-relaxed">
                  Kami siap melayani kebutuhan konsultasi keprofesian, verifikasi berkas anggota baru, serta pengurusan Surat Tanda Registrasi Arsitek (STRA).
                </p>
              </div>

              {/* Contact List */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-white rounded-brand-lg border border-brand-gray-200 shadow-subtle">
                  <div className="w-12 h-12 rounded-brand bg-maroon-subtle flex items-center justify-center text-maroon shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-brand-black mb-1">
                      Alamat Kantor
                    </h4>
                    <p className="text-sm text-brand-gray-600 leading-relaxed mb-0">
                      Kompleks Perumahan BPD SULTRA, Jl. Abunawas No. 2, Kendari 93121, Sulawesi Tenggara
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-brand-lg border border-brand-gray-200 shadow-subtle">
                  <div className="w-12 h-12 rounded-brand bg-maroon-subtle flex items-center justify-center text-maroon shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-brand-black mb-1">
                      Telepon / Fax
                    </h4>
                    <p className="text-sm text-brand-gray-600 mb-0">
                      0401 3131660
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-brand-lg border border-brand-gray-200 shadow-subtle">
                  <div className="w-12 h-12 rounded-brand bg-maroon-subtle flex items-center justify-center text-maroon shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-brand-black mb-1">
                      Surat Elektronik (Email)
                    </h4>
                    <p className="text-sm text-brand-gray-600 mb-0">
                      sekretariat.iaisultra@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-brand-lg overflow-hidden border border-brand-gray-200 shadow-subtle h-72 sm:h-80 bg-brand-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.8!2d122.51!3d-3.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTgnMTIuMCJTIDEyMsKwMzAnMzYuMCJF!5e0!3m2!1sid!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Sekretariat IAI Sultra"
                />
              </div>
            </div>

            {/* Right Col: Interactive Message Form */}
            <div className="lg:col-span-6 bg-white border border-brand-gray-200 rounded-brand-lg p-8 sm:p-10 shadow-card">
              <span className="text-xs font-semibold uppercase tracking-[2.5px] text-maroon block mb-2">
                Hubungi Kami Secara Daring
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-brand-black mb-6">
                Kirim Pesan atau Pertanyaan
              </h3>

              {isSubmitted ? (
                <div className="p-8 bg-green-50 border border-green-200 rounded-brand text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
                  <h4 className="font-heading font-bold text-lg text-green-900">
                    Pesan Anda Telah Terkirim!
                  </h4>
                  <p className="text-sm text-green-700 leading-relaxed">
                    Terima kasih telah menghubungi IAI Sulawesi Tenggara. Tim sekretariat kami akan merespons pesan Anda secepatnya.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2 bg-green-600 text-white rounded-brand text-xs font-semibold uppercase tracking-wider hover:bg-green-700 transition-colors"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-gray-600 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                      placeholder="Masukkan nama lengkap Anda"
                      className="w-full px-4 py-3 rounded-brand border border-brand-gray-200 bg-brand-warm text-brand-gray-800 text-sm focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-gray-600 mb-2">
                        Alamat Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contoh@email.com"
                        className="w-full px-4 py-3 rounded-brand border border-brand-gray-200 bg-brand-warm text-brand-gray-800 text-sm focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-gray-600 mb-2">
                        Nomor WhatsApp / HP
                      </label>
                      <input
                        type="tel"
                        value={formData.telepon}
                        onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
                        placeholder="0812xxxxxxxx"
                        className="w-full px-4 py-3 rounded-brand border border-brand-gray-200 bg-brand-warm text-brand-gray-800 text-sm focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-gray-600 mb-2">
                      Keperluan / Subjek
                    </label>
                    <select
                      value={formData.subjek}
                      onChange={(e) => setFormData({ ...formData, subjek: e.target.value })}
                      className="w-full px-4 py-3 rounded-brand border border-brand-gray-200 bg-brand-warm text-brand-gray-800 text-sm focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-colors"
                    >
                      <option value="Informasi Keanggotaan">Informasi Keanggotaan</option>
                      <option value="Sertifikasi & Lisensi (STRA)">Sertifikasi & Lisensi (STRA)</option>
                      <option value="Kemitraan & Advokasi">Kemitraan & Advokasi</option>
                      <option value="Kegiatan & Seminar">Kegiatan & Seminar</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-gray-600 mb-2">
                      Isi Pesan *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.pesan}
                      onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                      placeholder="Tuliskan pertanyaan atau pesan Anda secara rinci..."
                      className="w-full px-4 py-3 rounded-brand border border-brand-gray-200 bg-brand-warm text-brand-gray-800 text-sm focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-brand font-semibold text-sm uppercase tracking-wider text-white bg-maroon hover:bg-maroon-hover shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan Sekarang</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
