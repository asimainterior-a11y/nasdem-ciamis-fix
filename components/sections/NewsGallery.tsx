"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

const news = [
  { id: 1, title: "Konsolidasi Kader Muda di Ciamis", date: "24 Apr 2026", category: "Internal", img: "https://images.unsplash.com/photo-1540910419892-f0c74b0e896a?q=80&w=500" },
  { id: 2, title: "Restorasi UMKM Kecamatan Kawali", date: "22 Apr 2026", category: "Ekonomi", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=500" },
  { id: 3, title: "Aksi Sosial Tanggap Bencana", date: "20 Apr 2026", category: "Sosial", img: "https://images.unsplash.com/photo-1469571483398-84358bd33e71?q=80&w=500" },
  { id: 4, title: "Workshop Digital Politik 4.0", date: "18 Apr 2026", category: "Edukasi", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500" },
];

export default function NewsGallery() {
  return (
    <section 
      className="relative z-50 bg-[#19367F] w-full"
      style={{ marginTop: "-2px" }} // Memastikan tidak ada celah putih sehelai rambut pun
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <div className="space-y-1">
            <div className="flex items-center gap-3 text-[#FFCC00] mb-2">
              <span className="w-8 h-[1px] bg-[#FFCC00]"></span>
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold">Warta Restorasi</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[700] text-white tracking-tighter uppercase leading-none">
              Kabar <span className="font-serif italic text-[#FFCC00] lowercase">terkini</span>
            </h2>
          </div>

          <Link href="/berita" className="hidden md:flex items-center gap-2 text-white/50 hover:text-[#FFCC00] transition-colors text-[10px] uppercase tracking-widest font-bold group pb-1">
            Lihat Semua Berita
            <Icon icon="lucide:arrow-right" className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* List Berita */}
        <div className="flex gap-6 overflow-x-auto pb-10 no-scrollbar snap-x snap-mandatory">
          {news.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[300px] md:min-w-[400px] snap-start group"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-5 border border-white/10">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={item.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001A2E] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 bg-[#FFCC00] text-[#001A2E] px-2 py-1 rounded-sm text-[9px] font-black uppercase">
                  {item.category}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-[600] text-xl text-white group-hover:text-[#FFCC00] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm font-light font-serif italic">
                  {item.date} — Restorasi untuk Ciamis lebih baik.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}