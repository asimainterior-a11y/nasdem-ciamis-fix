"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const missions = [
  {
    title: "Restorasi Politik",
    desc: "Membangun politik demokratis berkeadilan dan efisiensi sistem pemilu.",
    icon: "solar:widget-bold",
  },
  {
    title: "Politik Tanpa Mahar",
    desc: "Melakukan deparpolisasi biaya tinggi untuk pemimpin berintegritas.",
    icon: "solar:medal-star-bold",
  },
  {
    title: "Reformasi Hukum",
    desc: "Memantapkan birokrasi pelayanan publik berbasis UUD 1945.",
    icon: "solar:scale-bold",
  },
  {
    title: "Ekonomi Rakyat",
    desc: "Menciptakan akses ekonomi yang adil dan merata bagi masyarakat.",
    icon: "solar:graph-up-bold",
  },
];

export default function VisiMisi() {
  return (
    <section className="relative py-24 bg-[#19367F] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFCC00]/5 blur-[150px] rounded-full"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* SISI KIRI: VISI */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 text-[#FFCC00] mb-4">
                <span className="w-12 h-[1px] bg-[#FFCC00]"></span>
                <span className="uppercase tracking-[0.4em] text-[10px] font-bold">Cita-Cita Luhur</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-none uppercase tracking-tighter">
                Visi <br />
                <span className="font-serif italic text-[#FFCC00] lowercase tracking-normal">NasDem</span>
              </h2>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative group overflow-hidden">
              <Icon icon="fa6-solid:quote-left" className="absolute top-4 right-6 text-white/5 text-6xl" />
              <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed italic relative z-10">
                "Mewujudkan Indonesia yang merdeka, berdaulat, berkeadilan, dan bermartabat melalui gerakan perubahan <span className="text-[#FFCC00] font-bold not-italic">Restorasi Indonesia.</span>"
              </p>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Menciptakan demokrasi Indonesia yang matang, tempat persandingan keberagaman dengan kesatuan demi kesejahteraan bersama.
            </p>
          </motion.div>

          {/* SISI KANAN: MISI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missions.map((misi, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 hover:border-[#FFCC00]/50 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#FFCC00]/10 flex items-center justify-center mb-6 group-hover:bg-[#FFCC00] transition-colors duration-500">
                  <Icon icon={misi.icon} className="text-2xl text-[#FFCC00] group-hover:text-[#001A2E]" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-tight">{misi.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {misi.desc}
                </p>
              </motion.div>
            ))}
            
            {/* CTA Tambahan di bawah grid misi */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 pt-6"
            >
              <div className="flex items-center gap-4 text-xs font-bold text-white/40 uppercase tracking-[0.2em]">
                <span>Pendidikan & Kebudayaan</span>
                <span className="w-2 h-2 rounded-full bg-[#FFCC00]"></span>
                <span>Karakter Bangsa</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}