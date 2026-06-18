"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

const targetInstansi = [
  { id: 'legislatif', label: 'Legislatif (DPRD Kabupaten)', icon: 'solar:government-line-duotone' },
  { id: 'eksekutif', label: 'Eksekutif (Bupati/Dinas Terkait)', icon: 'solar:city-line-duotone' },
  { id: 'yudikatif', label: 'Yudikatif (Hukum/Kejaksaan)', icon: 'solar:law-card-line-duotone' },
];

export default function AspirasiPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nik: '',
    nama: '',
    kecamatan: '',
    whatsapp: '',
    tujuan: '',
    kategori: '',
    judul: '',
    pesan: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <main className="min-h-screen bg-[#19367F] text-white">
      <Navbar />

      {/* HEADER SECTION */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full border border-[#FFCC00]/30 text-[#FFCC00] text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            Suara Rakyat Ciamis
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 uppercase">
            Layanan <span className="text-[#FFCC00]">Aspirasi</span> & Pengaduan
          </h1>
          <p className="text-slate-400 font-extralight text-lg max-w-2xl mx-auto leading-relaxed">
            Sampaikan keluhan dan aspirasi Anda secara langsung kepada pihak berwenang di tingkat Kabupaten Ciamis. Kami menjamin kerahasiaan identitas Anda.
          </p>
        </div>
      </section>

      {/* INTERACTIVE FORM SECTION */}
      <section className="pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="flex justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -z-10" />
            {[1, 2, 3].map((num) => (
              <div 
                key={num}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                  step >= num ? 'bg-[#FFCC00] text-[#001A2E] shadow-[0_0_20px_rgba(255,204,0,0.4)]' : 'bg-[#002a4a] text-slate-500'
                }`}
              >
                {num}
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-xl">
            <AnimatePresence mode="wait">
              {/* STEP 1: IDENTITAS */}
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                    <Icon icon="solar:user-id-bold" className="text-[#FFCC00]" />
                    Validasi Identitas Kependudukan
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-slate-500">NIK (Sesuai KTP)</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#FFCC00] outline-none transition-all font-extralight" placeholder="16 Digit NIK" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-slate-500">Nama Lengkap</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#FFCC00] outline-none transition-all font-extralight" placeholder="Nama Sesuai KTP" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-slate-500">Kecamatan Domisili</label>
                      <select className="w-full bg-[#19367F] border border-white/10 rounded-xl px-5 py-4 focus:border-[#FFCC00] outline-none transition-all font-extralight text-slate-400">
                        <option>Pilih Kecamatan</option>
                        <option>Ciamis</option>
                        <option>Kawali</option>
                        <option>Panjalu</option>
                        {/* Tambahkan kecamatan lainnya */}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-slate-500">No. WhatsApp</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#FFCC00] outline-none transition-all font-extralight" placeholder="0812xxxx" />
                    </div>
                  </div>
                  <button onClick={nextStep} className="w-full bg-[#FFCC00] text-[#001A2E] py-5 rounded-xl font-black uppercase tracking-widest mt-8 hover:bg-white transition-all">
                    Lanjutkan Laporan
                  </button>
                </motion.div>
              )}

              {/* STEP 2: TUJUAN & KATEGORI */}
              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-xl font-bold mb-4">Pilih Tujuan Aspirasi</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {targetInstansi.map((t) => (
                      <div 
                        key={t.id}
                        onClick={() => setFormData({...formData, tujuan: t.id})}
                        className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                          formData.tujuan === t.id ? 'border-[#FFCC00] bg-[#FFCC00]/10' : 'border-white/10 bg-white/5'
                        }`}
                      >
                        <Icon icon={t.icon} className={`text-3xl mb-4 ${formData.tujuan === t.id ? 'text-[#FFCC00]' : 'text-slate-500'}`} />
                        <p className="text-xs font-bold leading-tight">{t.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button onClick={prevStep} className="flex-1 border border-white/10 py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-white/5">Kembali</button>
                    <button onClick={nextStep} className="flex-[2] bg-[#FFCC00] text-[#001A2E] py-5 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-all">Lanjutkan</button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: ISI LAPORAN */}
              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-slate-500">Subjek Laporan</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#FFCC00] outline-none transition-all font-extralight" placeholder="Contoh: Kerusakan Jalan Kertasari" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-slate-500">Detail Keluhan / Aspirasi</label>
                    <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#FFCC00] outline-none transition-all font-extralight" placeholder="Tuliskan secara lengkap detail keluhan Anda..." />
                  </div>
                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex gap-4">
                    <Icon icon="solar:info-circle-bold" className="text-yellow-500 text-2xl shrink-0" />
                    <p className="text-[11px] text-yellow-200/70 leading-relaxed font-light">
                      Dengan mengirimkan laporan ini, aspirasi Anda akan diverifikasi oleh sistem dan diteruskan ke database DPD NasDem Ciamis untuk segera ditindaklanjuti ke instansi terkait.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={prevStep} className="flex-1 border border-white/10 py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-white/5">Kembali</button>
                    <button className="flex-[2] bg-[#FFCC00] text-[#001A2E] py-5 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-[0_10px_40px_rgba(255,204,0,0.2)]">
                      Kirim Aspirasi Sekarang
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}