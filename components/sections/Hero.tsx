"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { Icon } from "@iconify/react";
import { useRef } from "react";

export default function Hero() {
  const container = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(container.current, {
      opacity: 0,
      duration: 1,
    })
    .from(".hero-image-container", {
      opacity: 0,
      scale: 0.9,
      y: 20,
      duration: 1.2,
    })
    .from(".animate-text", {
      x: 30,
      stagger: 0.1,
      duration: 0.8,
      opacity: 0,
    }, "-=0.8")
    .from(".hero-cta", {
      opacity: 0,
      y: 10,
      duration: 0.6,
      clearProps: "all" 
    }, "-=0.4");

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 8;
      const yPos = (clientY / window.innerHeight - 0.5) * 8;

      gsap.to(imageRef.current, {
        x: xPos,
        y: yPos,
        duration: 1.5,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: container });

  return (
    <section 
      ref={container} 
      // Menggunakan h-[90vh] untuk memberi ruang bernapas yang lega
      className="relative w-full h-[80vh] lg:h-[90vh] flex items-center overflow-hidden bg-[#19367F]"
    >
      {/* WRAPPER FOTO: Padding diperbesar menjadi lg:p-16 atau lg:p-20 */}
      <div className="absolute inset-0 z-0 p-6 md:p-12 lg:p-20">
        <div className="hero-image-container relative w-full h-full overflow-hidden rounded-[2rem] border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <img 
            ref={imageRef}
            src="/images/hero.png"
            // object-center memastikan subjek tetap di tengah bingkai yang mengecil
            className="w-full h-full object-cover object-center scale-105"
            alt="Endang Cahyadi - NasDem Ciamis"
          />
          
          {/* OVERLAY GRADIENT: Dibuat lebih pekat di kanan agar teks kontras */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#001A2E]/90 via-[#001A2E]/30 to-transparent z-10" />
        </div>
      </div>

      {/* CONTENT LAYER */}
      <div className="max-w-[1440px] mx-auto px-12 md:px-20 lg:px-32 relative z-20 w-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
          
          {/* TEKS DI SEBELAH KANAN */}
          <div className="col-span-1 lg:col-start-7 lg:col-span-6 space-y-8 lg:text-right flex flex-col lg:items-end">
            <div className="animate-text">
              <div className="flex items-center gap-4 lg:flex-row-reverse">
                <div className="w-12 h-[2px] bg-[#FFCC00]"></div>
                <p className="text-[#FFCC00] font-black tracking-[0.5em] uppercase text-[11px]">
                  DPD NasDem Ciamis
                </p>
              </div>
            </div>
            
            <div className="relative">
              <h1 className="font-bold text-white tracking-tighter uppercase leading-[0.95]">
                <span className="animate-text block text-5xl lg:text-7xl">Gerakan</span>
                <span className="animate-text block text-5xl lg:text-7xl">Perubahan</span>
                <div className="animate-text flex items-baseline gap-3 mt-2 lg:justify-end">
                  <span className="font-serif italic text-[#FFCC00] text-6xl lg:text-8xl normal-case leading-none">di</span>
                  <span className="text-5xl lg:text-7xl">Ciamis</span>
                </div>
              </h1>
            </div>

            <div className="animate-text max-w-sm lg:border-r-4 border-[#FFCC00] lg:pr-8 py-2">
              <p className="text-slate-200 font-semibold text-base lg:text-lg leading-relaxed italic opacity-90">
                "Restorasi semangat kepemimpinan untuk mewujudkan Ciamis yang lebih bermartabat."
              </p>
            </div>

            <div className="animate-text hero-cta pt-6 flex flex-wrap gap-5 lg:justify-end relative z-30">
              <button className="bg-[#FFCC00] text-[#001A2E] px-10 py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-2xl active:scale-95">
                Gabung Sekarang
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Dekorasi Cahaya Tambahan di Belakang Teks */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>
    </section>
  );
}