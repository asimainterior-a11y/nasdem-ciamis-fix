"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export default function ProfilTotoMarwoto() {
  const stats = [
    { label: "Dapil", value: "CIAMIS 4" },
    { label: "Jabatan", value: "Sekretaris" },
    { label: "Komisi", value: "Komisi D" },
    { label: "Fraksi", value: "NasDem" },
  ];

  const highlights = [
    { title: "Pendidikan Inklusif", desc: "Memperjuangkan akses pendidikan berkualitas bagi anak-anak di pelosok Ciamis." },
    { title: "Layanan Kesehatan", desc: "Peningkatan fasilitas Puskesmas dan jaminan kesehatan bagi keluarga pra-sejahtera." },
    { title: "Kepemudaan & Olahraga", desc: "Membangun wadah kreativitas dan fasilitas olahraga bagi pemuda di desa-desa." },
  ];

  const news = [
    { 
      title: "Toto Marwoto Tinjau Kesiapan Sarana Pendidikan di Rancah", 
      date: "30 April 2026", 
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=500" 
    },
    { 
      title: "Sosialisasi Pentingnya Jaminan Kesehatan Masyarakat", 
      date: "25 April 2026", 
      img: "https://images.unsplash.com/photo-1505751172107-573225a463be?auto=format&fit=crop&q=80&w=500" 
    },
    { 
      title: "Fraksi NasDem Dukung Turnamen Olahraga Antar Desa", 
      date: "19 April 2026", 
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=500" 
    },
    { 
      title: "Rapat Kerja Komisi D: Evaluasi Anggaran Kesejahteraan Sosial", 
      date: "15 April 2026", 
      img: "https://images.unsplash.com/photo-1577416414929-7a1ed99c23b9?auto=format&fit=crop&q=80&w=500" 
    },
  ];

  return (
    <main className="min-h-screen bg-[#19367F] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Foto Profil */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-[#FFC20E]/30 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
              <img 
                src="/images/toto-marwoto-f.jpeg" 
                alt="Toto Marwoto" 
                className="w-full aspect-[4/5] object-cover object-top" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#19367F] via-transparent to-transparent opacity-50" />
            </div>
            <div className="absolute top-10 -left-6 w-32 h-32 bg-[#FFC20E]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -right-6 w-40 h-1 bg-[#FFC20E]" />
          </motion.div>

          {/* Bio & Deskripsi */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-2">
              <span className="text-[#FFC20E] font-black uppercase tracking-[0.4em] text-[10px] bg-white/5 px-4 py-1 rounded-full border border-white/10">
                Sekretaris Fraksi NasDem
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none pt-4">
                TOTO <br /> <span className="text-[#FFC20E]">MARWOTO</span>
              </h1>
            </div>

            <p className="text-xl text-white/90 font-light leading-relaxed max-w-xl italic border-l-4 border-[#FFC20E] pl-6">
              "Kesejahteraan sosial dimulai dari akses pendidikan dan kesehatan yang adil. Tugas kita adalah menjadi jembatan bagi mereka yang suaranya belum terdengar."
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors group">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#FFC20E] mb-2 font-bold opacity-70">{stat.label}</p>
                  <p className="font-black text-xs uppercase tracking-tight group-hover:scale-105 transition-transform">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6">
              <Link href="/aspirasi" className="group flex items-center gap-3 bg-[#FFC20E] text-[#19367F] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl">
                <Icon icon="solar:chat-line-bold" width="22" />
                Sampaikan Aspirasi
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Slide Bar Section */}
      <section className="py-20 bg-[#142B66]/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tighter">Berita <span className="text-[#FFC20E]">Terbaru</span></h2>
            <div className="h-1 w-12 bg-[#FFC20E] mt-2" />
          </div>
          <p className="text-[10px] uppercase tracking-widest text-white/40">Geser untuk melihat lainnya &rarr;</p>
        </div>
        
        <div className="flex gap-6 overflow-x-auto px-6 pb-10 no-scrollbar select-none">
          {news.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="min-w-[300px] md:min-w-[350px] bg-[#19367F] rounded-2xl overflow-hidden border border-white/10 flex-shrink-0 shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-3">
                <p className="text-[#FFC20E] text-[10px] font-bold uppercase tracking-widest">{item.date}</p>
                <h3 className="font-bold leading-snug hover:text-[#FFC20E] transition-colors line-clamp-2">{item.title}</h3>
                <Link href="#" className="inline-block pt-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                  Baca Selengkapnya
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fokus Kerja Section */}
      <section className="bg-[#142B66] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Fokus <span className="text-[#FFC20E]">Aspirasi</span></h2>
            <p className="text-white/50 uppercase tracking-[0.4em] text-[10px]">Misi Kesejahteraan & Pengembangan SDM</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-[#19367F] border border-white/5 hover:border-[#FFC20E]/50 transition-all shadow-lg"
              >
                <div className="w-14 h-14 bg-[#FFC20E] text-[#19367F] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#FFC20E]/20">
                  <Icon icon={idx === 0 ? "solar:pen-new-square-bold" : idx === 1 ? "solar:medical-kit-bold" : "solar:reorder-bold"} width="30" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-20 bg-[#FFC20E] text-[#19367F]">
        <div className="max-w-5xl mx-auto px-6 text-center">
           <Icon icon="ri:double-quotes-l" width="60" className="mx-auto mb-8 opacity-30" />
           <h2 className="text-2xl md:text-4xl font-black tracking-tight leading-tight uppercase">
             "Mari kita bangun Ciamis melalui penguatan sumber daya manusia yang cerdas, sehat, dan berdaya saing."
           </h2>
           <p className="mt-8 font-bold tracking-[0.3em] text-sm">- TOTO MARWOTO</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}