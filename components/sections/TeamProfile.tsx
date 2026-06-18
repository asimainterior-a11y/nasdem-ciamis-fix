"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const hierarchy = {
  dpw: [
    { name: "Drs. MAMAT RACHMAT, M.Si.", role: "Ketua DPW Jawa Barat", img: "/images/06.png" }
  ],
  ketuaDpd: [
    { name: "Dr. TOTO MARWOTO, M.Pd.", role: "Ketua DPD NasDem Ciamis", img: "/images/01.png" }
  ],
  wakilKetua: [
    { name: "ENDANG CAHYADI", role: "WAKIL KETUA BADAN PEMENANGAN PEMILU", img: "/images/02.png" },
    { name: "ARIE MIRZHA", role: "WAKIL KETUA BIDANG ORGANISASI KEANGGOTAAN", img: "/images/05.png" }
  ],
  sekretarisBendahara: [
    { name: "H. ENDANG KUSNANDANG, S.Pd.", role: "Sekretaris DPD NasDem Ciamis", img: "/images/03.png" },
    { name: "AGUS PRIATNA, S.Sos.", role: "Bendahara DPD NasDem Ciamis", img: "/images/04.png" }
  ]
};

// Gabungkan semua pengurus untuk slider "Kenal Tokoh"
const allMembers = [
  ...hierarchy.dpw,
  ...hierarchy.ketuaDpd,
  ...hierarchy.wakilKetua,
  ...hierarchy.sekretarisBendahara
];

export default function TeamProfile() {
  return (
    <section className="py-24 bg-[#19367F] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase">
            Kenal <span className="text-[#FFCC00]">Tokoh</span>
          </h2>
          <div className="h-1.5 w-24 bg-[#FFCC00] mx-auto mb-4" />
          <p className="text-slate-400 font-medium uppercase tracking-[0.3em] text-xs">
            Profil Kepemimpinan NasDem Ciamis
          </p>
        </div>

        {/* Slider Container */}
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16 member-swiper"
          >
            {allMembers.map((member, i) => (
              <SwiperSlide key={i}>
                <div className="group relative p-4">
                  {/* Image Card dengan Frame */}
                  <div className="relative z-10 aspect-[3/4] rounded-3xl overflow-hidden border-2 border-white/5 transition-all duration-500 group-hover:border-[#FFCC00]/50 shadow-2xl bg-[#002a4a]">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001A2E] via-[#001A2E]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Info Teks */}
                    <div className="absolute bottom-8 left-8 right-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-[#FFCC00] text-[10px] font-black uppercase tracking-[0.2em] mb-1 leading-tight">
                        {member.role}
                      </p>
                      <h4 className="text-xl font-bold leading-tight tracking-tight">
                        {member.name}
                      </h4>
                      <div className="w-0 group-hover:w-full h-[2px] bg-[#FFCC00] mt-3 transition-all duration-500 shadow-[0_0_10px_#FFCC00]" />
                    </div>
                  </div>

                  {/* Background Accent Frame yang Berputar saat Hover */}
                  <div className="absolute inset-0 border border-white/5 rounded-[2.5rem] -z-0 group-hover:rotate-3 group-hover:scale-105 transition-all duration-500 pointer-events-none" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Styling untuk Navigation Swiper agar sesuai tema NasDem */}
      <style jsx global>{`
        .member-swiper .swiper-button-next,
        .member-swiper .swiper-button-prev {
          color: #FFCC00;
          transform: scale(0.7);
        }
        .member-swiper .swiper-pagination-bullet {
          background: #555;
          opacity: 1;
        }
        .member-swiper .swiper-pagination-bullet-active {
          background: #FFCC00;
          width: 24px;
          border-radius: 10px;
          transition: all 0.3s;
        }
      `}</style>
    </section>
  );
}