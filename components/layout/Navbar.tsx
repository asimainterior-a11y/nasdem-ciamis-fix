"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const menuItems = [
  { name: 'Beranda', href: '/' },
  { 
    name: 'Profil', 
    columns: [
      {
        title: "Tentang Kami",
        links: [
          { name: 'Visi & Misi', href: '/profil/visi-misi' },
          { name: 'Sejarah Perjuangan', href: '/profil/sejarah' },
          { name: 'AD/ART', href: '/profil/ad-art' },
        ]
      },
      {
        title: "Struktur Organisasi",
        links: [
          { name: 'Pengurus DPD', href: '/profil/struktur' },
          { name: 'Sayap Partai', href: '/profil/sayap' },
          { name: 'DPC Kecamatan', href: '/profil/dpc' },
        ]
      },
      {
        title: "Layanan",
        links: [
          { name: 'KTA Digital', href: '/kta' },
          { name: 'Aspirasi Warga', href: '/aspirasi' },
        ]
      }
    ]
  },
  { 
    name: 'Fraksi', 
    href: '/fraksi',
    columns: [
      {
        title: "Anggota Fraksi",
        links: [
          { name: 'Dr. H. Toto Marwoto, M.Pd.', href: '/fraksi/toto-marwoto' },
          { name: 'Endang Cahyadi', href: '/fraksi/endang-cahyadi' },
          { name: 'H. Endang Kusnandani, S.Pd.', href: '/fraksi/endang-kusnandani' },
          { name: 'Agus Priatna, S.Sos.', href: '/fraksi/agus-priatna' },
        ]
      },
      {
        title: "Dokumentasi",
        links: [
          { name: 'Kegiatan Fraksi', href: '/fraksi/kegiatan' },
        ]
      }
    ]
  },
  { name: 'Berita', href: '/berita' },
  { name: 'Aspirasi', href: '/aspirasi' },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const activeMenuData = menuItems.find(item => item.name === activeMenu);

  return (
    <nav 
      className="fixed top-0 w-full z-[99999] text-white"
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* Baris Atas: Menggunakan Biru NasDem sesuai layout.tsx */}
      <div className="bg-[#19367F] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4 group">
            {/* Background logo tetap putih agar logo terlihat jelas */}
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden border-2 border-[#FFC20E]/20 group-hover:border-[#FFC20E] transition-all duration-500"> 
              <img 
                src="/images/logo.png" 
                alt="Logo NasDem" 
                className="w-[85%] h-[85%] object-contain" 
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg tracking-wide uppercase">DPD PARTAI <span className="text-[#FFC20E]">NASDEM</span></span>
              <span className="text-[10px] font-medium tracking-[0.3em] text-white/70">KABUPATEN CIAMIS</span>
            </div>
          </Link>
          
          <Link href="/kta" className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-2xl border border-white/10 transition-all">
             <div className="text-right hidden md:block">
                <p className="text-xs font-black tracking-tighter">GABUNG KAMI</p>
             </div>
             <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#FFC20E] text-[#19367F] group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-[#FFC20E]/20">
                <Icon icon="lucide:user-plus" width="22" />
             </div>
          </Link>
        </div>
      </div>

      {/* Baris Bawah: Navigasi Menu dengan tone biru sedikit lebih gelap */}
      <div className="bg-[#142B66]/90 backdrop-blur-xl relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
          {menuItems.map((item) => (
            <div 
              key={item.name} 
              onMouseEnter={() => setActiveMenu(item.name)} 
              className="relative"
            >
              <Link 
                href={item.href || "#"}
                className={`block px-8 py-4 text-[10px] font-bold uppercase tracking-[0.25em] transition-all relative
                  ${activeMenu === item.name ? 'text-[#FFC20E]' : 'hover:text-[#FFC20E] text-white/80'}`}
              >
                {item.name}
                {activeMenu === item.name && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FFC20E]"
                  />
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* Mega Menu Dropdown: Diselaraskan ke Dark Theme agar tidak kaget (Putih -> Navy) */}
        <AnimatePresence>
          {activeMenuData?.columns && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-[#19367F] text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-b border-white/10"
            >
              <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-3 gap-16">
                {activeMenuData.columns.map((col) => (
                  <div key={col.title} className="space-y-6">
                    <h3 className="text-[10px] font-black text-[#FFC20E] uppercase tracking-[0.3em] pb-3 border-b border-white/10">
                      {col.title}
                    </h3>
                    <div className="flex flex-col gap-4">
                      {col.links.map((link) => (
                        <Link 
                          key={link.name} 
                          href={link.href} 
                          className="text-xs font-medium text-white/70 hover:text-[#FFC20E] hover:translate-x-2 transition-all flex items-center gap-3 group"
                        >
                          <div className="w-1.5 h-1.5 bg-[#FFC20E]/20 rounded-full group-hover:bg-[#FFC20E] transition-colors" />
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* Footer kecil di dalam mega menu */}
              <div className="bg-[#142B66] py-4 px-10 text-center border-t border-white/5">
                 <p className="text-[9px] text-[#FFC20E] tracking-[0.4em] font-black uppercase">Restorasi Indonesia — Gerakan Perubahan</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}