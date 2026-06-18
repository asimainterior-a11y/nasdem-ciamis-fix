"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const menuSections = [
    {
      title: "Navigation",
      links: [
        { name: "Beranda", href: "/" },
        { name: "Visi & Misi", href: "/profil/visi-misi" },
        { name: "Struktur", href: "/profil/struktur" },
        { name: "Fraksi", href: "/fraksi" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Instagram", href: "#" },
        { name: "Facebook", href: "#" },
        { name: "TikTok", href: "#" },
        { name: "YouTube", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#19367F] text-white overflow-hidden">
      {/* 1. CONTRASTING BANNER: Sebagai pembatas yang elegan dan eye-catching */}
      <div className="bg-[#FFCC00] py-4 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[#001A2E] font-light uppercase tracking-[0.5em] text-[10px] mx-8 flex items-center gap-4">
              Restorasi Indonesia <div className="w-1 h-1 bg-[#19367F] rounded-full" />
              DPD NasDem Ciamis <div className="w-1 h-1 bg-[#19367F] rounded-full" />
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* KOLOM UTAMA: ALAMAT DENGAN FONT TIPIS */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h3 className="font-extralight text-3xl tracking-tighter opacity-90 italic">
                NasDem <span className="font-semibold not-italic">Ciamis.</span>
              </h3>
              <p className="font-extralight text-slate-400 text-sm leading-relaxed max-w-xs tracking-wide">
                Mewujudkan restorasi semangat kepemimpinan muda untuk Galuh yang bermartabat.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#FFCC00] font-medium">Sekretariat</p>
              <p className="font-extralight text-slate-300 text-sm leading-relaxed max-w-xs">
                Jl. Drs. H. Soejoed, Kertasari, Kec. Ciamis, <br />
                Kabupaten Ciamis, Jawa Barat 46213
              </p>
            </div>
          </div>

          {/* KOLOM LINK: MINIMALIS */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {menuSections.map((section) => (
              <div key={section.title} className="space-y-6">
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-medium">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="font-extralight text-slate-400 text-sm hover:text-white transition-all duration-500 flex items-center group gap-2"
                      >
                        <span className="h-[1px] w-0 bg-[#FFCC00] group-hover:w-3 transition-all duration-500" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* SOCIAL ICONS: SIMPLE CIRCLE */}
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-medium">Platform</h4>
              <div className="flex gap-4">
                {['ri:facebook-fill', 'ri:instagram-line', 'ri:tiktok-fill', 'ri:youtube-fill'].map((icon, i) => (
                  <Link key={i} href="#" className="opacity-40 hover:opacity-100 transition-opacity duration-500">
                    <Icon icon={icon} className="text-xl" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: SUPER THIN */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-extralight text-[10px] tracking-[0.2em] text-slate-500 uppercase">
            © {currentYear} — DPD PARTAI NASDEM CIAMIS
          </p>
          <div className="flex gap-8">
            <Link href="#" className="font-extralight text-[10px] tracking-[0.2em] text-slate-600 uppercase hover:text-white transition-colors">Digital KTA</Link>
            <Link href="#" className="font-extralight text-[10px] tracking-[0.2em] text-slate-600 uppercase hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* Tambahkan CSS di file global kamu atau menggunakan style tag ini */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </footer>
  );
}