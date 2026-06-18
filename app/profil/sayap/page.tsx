"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

const sayapPartai = [
  {
    name: "Garda Pemuda NasDem",
    alias: "GP NasDem",
    description: "Wadah bagi pemuda yang berfokus pada gagasan kreatif, energi positif, dan restorasi pemuda Indonesia.",
    icon: "lucide:zap",
    color: "from-blue-500 to-cyan-400",
    features: ["Kepemudaan", "Kreativitas", "Olahraga"]
  },
  {
    name: "Garnita Malahayati",
    alias: "Garda Wanita",
    description: "Organisasi sayap yang fokus pada pemberdayaan perempuan, kesetaraan gender, dan kesejahteraan keluarga.",
    icon: "lucide:flower-2",
    color: "from-rose-500 to-pink-400",
    features: ["Pemberdayaan", "Edukasi", "Sosial"]
  },
  {
    name: "Gemuruh",
    alias: "Gerakan Massa Buruh",
    description: "Sayap partai yang konsisten memperjuangkan hak-hak buruh dan isu-isu dunia perburuhan di Indonesia.",
    icon: "lucide:hard-hat",
    color: "from-orange-600 to-yellow-500",
    features: ["Advokasi Buruh", "Kesejahteraan", "Serikat"]
  },
  {
    name: "Liga Mahasiswa NasDem",
    alias: "LMN",
    description: "Wadah perjuangan bagi mahasiswa untuk menyalurkan idealisme dan intelektualitas dalam politik.",
    icon: "lucide:graduation-cap",
    color: "from-indigo-600 to-purple-500",
    features: ["Intelektual", "Diskusi", "Gerakan"]
  },
  {
    name: "Petani NasDem",
    alias: "Pejuang Pangan",
    description: "Wadah perjuangan untuk kaum tani guna mewujudkan kedaulatan pangan dan kesejahteraan petani.",
    icon: "lucide:sprout",
    color: "from-emerald-600 to-green-400",
    features: ["Kedaulatan Pangan", "Modernisasi", "Pupuk"]
  },
  {
    name: "BAHU NasDem",
    alias: "Badan Advokasi Hukum",
    description: "Sayap partai yang memberikan bantuan hukum dan berfokus pada penegakan keadilan bagi masyarakat.",
    icon: "lucide:scale",
    color: "from-slate-700 to-slate-500",
    features: ["Bantuan Hukum", "Edukasi Konstitusi", "Keadilan"]
  }
];

function SayapPartaiPage() {
  return (
    <main className="min-h-screen bg-[#001A2E] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-44 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#FFCC00]/5 blur-[120px] rounded-full -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Sayap <span className="text-[#FFCC00]">Perjuangan</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base tracking-[0.3em] uppercase font-light">
            Elemen penggerak restorasi di berbagai lini masyarakat
          </p>
        </motion.div>
      </section>

      {/* Wings Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sayapPartai.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-full"
            >
              <div className="bg-[#002a4a]/30 border border-white/5 rounded-[2.5rem] p-10 h-full flex flex-col justify-between hover:bg-[#002a4a]/50 hover:border-[#FFCC00]/30 transition-all duration-500 backdrop-blur-sm">
                
                <div>
                  {/* Icon & Title */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <Icon icon={item.icon} className="text-white" width="32" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-[#FFCC00] transition-colors uppercase tracking-tight">
                    {item.name}
                  </h2>
                  <p className="text-[#FFCC00] text-[10px] font-black tracking-[0.2em] uppercase mb-6 opacity-70">
                    {item.alias}
                  </p>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
                    {item.description}
                  </p>
                </div>

                {/* Features/Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {item.features.map((feature) => (
                    <span key={feature} className="text-[9px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 rounded-full text-slate-300">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="absolute top-6 right-10 opacity-5 group-hover:opacity-20 transition-opacity">
                   <Icon icon={item.icon} width="80" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 rounded-[3rem] bg-gradient-to-r from-[#FFCC00] to-[#E6B800] text-[#001A2E] text-center"
        >
          <h3 className="text-3xl font-black uppercase mb-4">Mari Bergabung Bersama Kami</h3>
          <p className="text-sm font-medium opacity-80 max-w-2xl mx-auto mb-8">
            Setiap sayap partai adalah ruang terbuka bagi aspirasi Anda. Pilih wadah yang sesuai dengan profesi, minat, dan semangat Anda untuk perubahan.
          </p>
          <button className="bg-[#001A2E] text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform shadow-xl">
            Hubungi Sekretariat DPD
          </button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

export default SayapPartaiPage;