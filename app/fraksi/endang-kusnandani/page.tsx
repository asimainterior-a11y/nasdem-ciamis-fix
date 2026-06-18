"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export default function ProfilEndangKusnandang() {
  const stats = [
    { label: "Dapil", value: "CIAMIS 4" },
    { label: "Jabatan", value: "Bendahara DPD" },
    { label: "Komisi", value: "Komisi C" },
    { label: "Fraksi", value: "NasDem" },
  ];

  return (
    <main className="min-h-screen bg-[#19367F] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Foto Profil - Dengan Koreksi Posisi agar tidak terpotong */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-[#FFC20E]/30 shadow-2xl bg-slate-900">
              <img 
                src="/images/endang-kusnandang-f.jpeg" 
                alt="H. Endang Kusnandang" 
                className="w-full aspect-[4/5] object-cover object-[center_15%]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#19367F] via-transparent to-transparent opacity-40" />
            </div>
            
            {/* Ornamen Latar Belakang */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-r-4 border-t-4 border-[#FFC20E]/20 rounded-tr-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-4 border-b-4 border-[#FFC20E]/20 rounded-bl-3xl" />
          </motion.div>

          {/* Bio & Deskripsi */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#FFC20E]/10 border border-[#FFC20E]/20 px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#FFC20E] animate-pulse" />
                <span className="text-[#FFC20E] font-bold uppercase tracking-[0.2em] text-[10px]">Profil Fraksi NasDem</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                H. ENDANG <br /> 
                <span className="text-[#FFC20E]">KUSNANDANG</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
              "Menjaga amanah rakyat dengan transparansi dan kerja nyata. Fokus saya adalah memastikan pembangunan daerah menyentuh seluruh lapisan masyarakat di pelosok Ciamis."
            </p>

            {/* Stats Badge */}
            <div className="flex flex-wrap gap-3">
              {stats.map((stat, i) => (
                <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                  <p className="text-[9px] uppercase tracking-widest text-[#FFC20E] mb-1 font-semibold">{stat.label}</p>
                  <p className="font-bold text-sm uppercase">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Interaksi & Aspirasi */}
            <div className="flex flex-wrap gap-5 pt-4">
              <Link href="/aspirasi" className="group flex items-center gap-3 bg-[#FFC20E] text-[#19367F] px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl shadow-[#FFC20E]/10">
                <Icon icon="solar:letter-bold" width="20" />
                Hubungi Saya
              </Link>
              <div className="flex items-center gap-2">
                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#FFC20E] hover:text-[#19367F] transition-all"><Icon icon="ri:facebook-fill" width="20" /></a>
                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#FFC20E] hover:text-[#19367F] transition-all"><Icon icon="ri:instagram-line" width="20" /></a>
                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#FFC20E] hover:text-[#19367F] transition-all"><Icon icon="ri:whatsapp-line" width="20" /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nilai-Nilai Section */}
      <section className="py-24 px-6 bg-[#142B66]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: "solar:shield-check-bold", title: "Integritas", desc: "Berkomitmen pada transparansi anggaran dan akuntabilitas publik." },
              { icon: "solar:users-group-rounded-bold", title: "Kemanusiaan", desc: "Memprioritaskan bantuan sosial dan pemberdayaan masyarakat desa." },
              { icon: "solar:graph-up-bold", title: "Pertumbuhan", desc: "Mendorong percepatan ekonomi lokal melalui sektor UMKM." }
            ].map((item, idx) => (
              <div key={idx} className="space-y-4 group">
                <div className="w-16 h-1 bg-[#FFC20E] group-hover:w-full transition-all duration-500" />
                <Icon icon={item.icon} width="40" className="text-[#FFC20E]" />
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}