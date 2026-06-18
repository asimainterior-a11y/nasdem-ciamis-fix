"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { client } from "@/sanity/lib/sanity";

function KtaPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    nik: "",
    alamat: "",
    whatsapp: "",
    email: "",
    pekerjaan: "",
    pendidikan: "",
    pengalaman: "",
    motivasi: "",
    kesediaan: "",
  });

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // MENGIRIM KE API ROUTE (SERVER-SIDE) BUKAN LANGSUNG KE SANITY
      const response = await fetch('/api/kta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nama: formData.nama,
          nik: formData.nik,
          whatsapp: formData.whatsapp,
          email: formData.email,
          alamat: formData.alamat,
          pekerjaan: formData.pekerjaan,
          pendidikan: formData.pendidikan,
          // Tambahkan field lain jika Route Handler kamu mendukungnya
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Gagal mendaftar');
      }
      
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error: any) {
      console.error("Error pendaftaran:", error);
      alert(error.message || "Terjadi kesalahan teknis. Silakan coba lagi nanti.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#001A2E] text-white selection:bg-[#FFCC00] selection:text-black">
      <Navbar />

      <section className="pt-40 pb-24 px-6 relative">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent -z-10" />

        <div className="max-w-3xl mx-auto">
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              {/* Header Form */}
              <div className="text-center space-y-6">
                <div className="inline-flex p-4 rounded-3xl bg-white/5 border border-white/10 mb-2">
                  <Icon icon="lucide:user-plus" className="text-[#FFCC00]" width="32" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                  Pendaftaran <span className="text-[#FFCC00]">KTA Digital</span>
                </h1>
                <div className="space-y-4 text-slate-400">
                  <p className="text-sm md:text-base leading-relaxed">
                    Selamat datang di langkah awal perjuangan. Pengisian formulir ini bertujuan sebagai referensi resmi Partai NasDem dalam menggali potensi serta aspirasi Anda untuk pembangunan daerah dan bangsa.
                  </p>
                  <p className="text-xs font-bold text-[#FFCC00] tracking-[0.2em] uppercase">
                    NasDem: Politik Tanpa Mahar
                  </p>
                  <p className="text-sm italic">
                    "Kami siap menjadi kendaraan bagi putra-putri terbaik bangsa yang berprestasi untuk mengabdi di semua level kepemimpinan tanpa sepeserpun biaya mahar."
                  </p>
                </div>
              </div>

              {/* Form Card */}
              <form 
                onSubmit={handleSubmit}
                className="bg-[#002a4a]/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Nama Lengkap */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500 ml-1">Nama Lengkap</label>
                    <input 
                      required
                      type="text"
                      placeholder="Sesuai KTP"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#FFCC00]/50 transition-all"
                      onChange={(e) => setFormData({...formData, nama: e.target.value})}
                    />
                  </div>

                  {/* NIK */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500 ml-1">No. NIK (KTP)</label>
                    <input 
                      required
                      type="text"
                      maxLength={16}
                      placeholder="16 Digit Angka"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#FFCC00]/50 transition-all"
                      onChange={(e) => setFormData({...formData, nik: e.target.value})}
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500 ml-1">No. WhatsApp</label>
                    <input 
                      required
                      type="tel"
                      placeholder="0812..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#FFCC00]/50 transition-all"
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500 ml-1">Email Aktif</label>
                    <input 
                      required
                      type="email"
                      placeholder="nama@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#FFCC00]/50 transition-all"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                {/* Alamat Lengkap */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500 ml-1">Alamat Lengkap</label>
                  <textarea 
                    required
                    rows={3}
                    placeholder="Nama Jalan, Desa/Kelurahan, Kecamatan, Kabupaten Ciamis"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#FFCC00]/50 transition-all"
                    onChange={(e) => setFormData({...formData, alamat: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Pekerjaan */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500 ml-1">Pekerjaan Saat Ini</label>
                    <input 
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#FFCC00]/50 transition-all"
                      onChange={(e) => setFormData({...formData, pekerjaan: e.target.value})}
                    />
                  </div>

                  {/* Pendidikan */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500 ml-1">Pendidikan Terakhir</label>
                    <select 
                      required
                      className="w-full bg-[#001A2E] border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#FFCC00]/50 transition-all appearance-none"
                      onChange={(e) => setFormData({...formData, pendidikan: e.target.value})}
                    >
                      <option value="">Pilih Pendidikan</option>
                      {['SD', 'SMP', 'SMA', 'D1', 'D2', 'D3', 'S1', 'S2', 'S3'].map(p => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Pengalaman Organisasi */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500 ml-1">Pengalaman Organisasi</label>
                  <textarea 
                    rows={2}
                    placeholder="Sebutkan organisasi yang pernah Anda ikuti..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#FFCC00]/50 transition-all"
                    onChange={(e) => setFormData({...formData, pengalaman: e.target.value})}
                  />
                </div>

                {/* Motivasi */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500 ml-1">Motivasi Bergabung NasDem</label>
                  <textarea 
                    required
                    rows={2}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#FFCC00]/50 transition-all"
                    onChange={(e) => setFormData({...formData, motivasi: e.target.value})}
                  />
                </div>

                {/* Kesediaan */}
                <div className="space-y-4">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500 ml-1">Kesediaan Aktif di Partai</label>
                  <div className="flex flex-wrap gap-4">
                    {['Ya', 'Tidak', 'Ragu'].map((choice) => (
                      <label key={choice} className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="radio" 
                          name="kesediaan" 
                          value={choice}
                          required
                          className="hidden"
                          onChange={(e) => setFormData({...formData, kesediaan: e.target.value})}
                        />
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.kesediaan === choice ? 'border-[#FFCC00] bg-[#FFCC00]' : 'border-white/20'}`}>
                          {formData.kesediaan === choice && <div className="w-2 h-2 bg-[#001A2E] rounded-full" />}
                        </div>
                        <span className={`text-sm ${formData.kesediaan === choice ? 'text-white' : 'text-slate-400'}`}>{choice}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Closing & Submit */}
                <div className="pt-8 border-t border-white/5 space-y-8">
                  <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                    Dengan menekan tombol daftar, saya menyatakan data di atas adalah benar dan saya bersedia menjadi bagian dari Gerakan Perubahan Partai NasDem.
                  </p>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${isSubmitting ? 'bg-slate-700 cursor-not-allowed' : 'bg-[#FFCC00] hover:bg-[#e6b800]'} text-[#001A2E] font-black py-5 rounded-2xl shadow-[0_10px_30px_rgba(255,204,0,0.2)] transition-all flex items-center justify-center gap-3 group`}
                  >
                    {isSubmitting ? "SEDANG MENGIRIM..." : "KIRIM PENDAFTARAN"}
                    {!isSubmitting && <Icon icon="lucide:arrow-right" className="group-hover:translate-x-2 transition-transform" />}
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            /* Success State */
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 px-8 bg-[#002a4a]/40 backdrop-blur-xl border border-[#FFCC00]/20 rounded-[3rem] space-y-6"
            >
              <div className="w-24 h-24 bg-[#FFCC00] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(255,204,0,0.3)]">
                <Icon icon="lucide:check-circle" className="text-[#001A2E]" width="48" />
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight italic">Terima Kasih, Kaka!</h2>
              <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
                Data pendaftaran Anda telah berhasil kami terima. Tim DPD NasDem Ciamis akan segera melakukan verifikasi dan menghubungi Anda melalui WhatsApp atau Email untuk langkah selanjutnya.
              </p>
              <div className="pt-8">
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#FFCC00] font-bold text-sm uppercase tracking-widest border-b border-[#FFCC00]/30 pb-1 hover:border-[#FFCC00] transition-all"
                >
                  Kembali ke Beranda
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default KtaPage;