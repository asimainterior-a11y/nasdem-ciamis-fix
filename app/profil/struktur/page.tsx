"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

const hierarchy = {
  ketuaDpd: [
    {
      id: 1,
      name: "Dr. H. TOTO MARWOTO, M.Pd.",
      role: "Ketua DPD NasDem Ciamis",
      img: "/images/01.png",
      visi: "Menjadikan NasDem Ciamis sebagai wadah perjuangan rakyat yang inklusif.",
      misi: ["Memperkuat struktur hingga akar rumput", "Mencetak kader berkualitas"]
    }
  ],
  wakilKetua: [
    { id: 2, name: "ENDANG CAHYADI", role: "Wakil Ketua Bidang Pemenangan Pemilu", img: "/images/02.png", visi: "-", misi: [] },
    { id: 3, name: "ARIE MIRZHA", role: "Wakil Ketua Bidang Organisasi dan Keanggotaan", img: "/images/05.png", visi: "-", misi: [] },
    { id: 4, name: "DEDE AHMAD RAMDANI, S.Pd.I, M.Pd", role: "Wakil Ketua Bidang Kaderisasi dan Pendidikan Politik", img: "/images/dede.png", visi: "-", misi: [] },
    { id: 5, name: "SUGIHARTO", role: "Wakil Ketua Bidang Hubungan Legislatif", img: "/images/man.jpg", visi: "-", misi: [] },
    { id: 6, name: "TERRIANA RAHAYU PERMANAHADI", role: "Wakil Ketua Bidang Hubungan Eksekutif", img: "/images/woman.jpg", visi: "-", misi: [] },
    { id: 7, name: "EDI KOMARUDIN, SE", role: "Wakil Ketua Bidang Hubungan Sayap dan Badan", img: "/images/man.jpg", visi: "-", misi: [] },
    { id: 8, name: "DUDUNG ABDULLAH, M.Pd", role: "Wakil Ketua Bidang Penggalangan dan Penggerak Komunitas", img: "/images/man.jpg", visi: "-", misi: [] },
    { id: 9, name: "YUSUP HERDIAWAN, S.IP", role: "Wakil Ketua Bidang Pemilih Pemula dan Milenial", img: "/images/man.jpg", visi: "-", misi: [] },
    { id: 10, name: "TAUFIQ IHSANI, M.Pd", role: "Wakil Ketua Bidang Digital dan Siber", img: "/images/man.jpg", visi: "-", misi: [] },
    { id: 11, name: "AGUS SAEFUL UJAB", role: "Wakil Ketua Bidang Media dan Komunikasi Publik", img: "/images/agus.png", visi: "-", misi: [] },
    { id: 12, name: "PIPIT SUSANTI", role: "Wakil Ketua Bidang Ekonomi", img: "/images/woman.jpg", visi: "-", misi: [] },
    { id: 13, name: "YENI HERDIANI LESTARI", role: "Wakil Ketua Bidang Usaha Mikro Kecil dan Menengah", img: "/images/woman.jpg", visi: "-", misi: [] },
    { id: 14, name: "JAJANG HENDARUSMAN, S.Pd.I", role: "Wakil Ketua Bidang Agama dan Masyarakat Adat", img: "/images/man.jpg", visi: "-", misi: [] },
    { id: 15, name: "DEWI YULIANTI, S.Pd", role: "Wakil Ketua Bidang Tenaga Kerja", img: "/images/woman.jpg", visi: "-", misi: [] },
    { id: 16, name: "TITA YUNIARTI", role: "Wakil Ketua Bidang Kesehatan", img: "/images/woman.jpg", visi: "-", misi: [] },
    { id: 17, name: "IIK ATIKAH", role: "Wakil Ketua Bidang Perempuan dan Anak", img: "/images/woman.jpg", visi: "-", misi: [] },
    { id: 18, name: "IPA NUR'IZAH", role: "Wakil Ketua Bidang Pendidikan dan Kebudayaan", img: "/images/woman.jpg", visi: "-", misi: [] },
    { id: 19, name: "ASEP GUMILAR, SH", role: "Wakil Ketua Bidang Hukum dan HAM", img: "/images/man.jpg", visi: "-", misi: [] },
    { id: 20, name: "LIA LIDIAWATI", role: "Wakil Ketua Bidang Pariwisata dan Industri Kreatif", img: "/images/woman.jpg", visi: "-", misi: [] },
    { id: 21, name: "TATI KARYATI, S.Pd", role: "Wakil Ketua Bidang Pertanian, Peternakan dan Desa", img: "/images/woman.jpg", visi: "-", misi: [] },
    { id: 22, name: "DARSONO", role: "Wakil Ketua Bidang Maritim", img: "/images/man.jpg", visi: "-", misi: [] },
    { id: 23, name: "HENDRIK KUSDIANA PERMANA", role: "Wakil Ketua Bidang Pemuda dan Olahraga", img: "/images/man.jpg", visi: "-", misi: [] },
    { id: 24, name: "AGUS SUKMANA", role: "Wakil Ketua Bidang Energi dan Mineral", img: "/images/man.jpg", visi: "-", misi: [] },
    { id: 25, name: "JAJANG HERDIANA", role: "Wakil Ketua Bidang Lingkungan Hidup", img: "/images/jajang-h.png", visi: "-", misi: [] },
    { id: 26, name: "MAMUN SODIK", role: "Wakil Ketua Bidang Kehutanan, Agraria dan Tata Ruang", img: "/images/man.jpg", visi: "-", misi: [] },
    { id: 27, name: "TATI ROFIQOH RAHMAWATI", role: "Wakil Ketua Bidang Migran", img: "/images/man.jpg", visi: "-", misi: [] },
    { id: 28, name: "SUPYAN", role: "Wakil Ketua Bidang Pembangunan dan Infrastruktur", img: "/images/man.jpg", visi: "-", misi: [] },
  ],
  sekretariat: [
    { id: 29, name: "H. ENDANG KUSNANDANG, S.Pd.", role: "Sekretaris", img: "/images/03.png", visi: "-", misi: [] },
    { id: 31, name: "ASEP DARAJAT", role: "Wasekbid Kebijakan Publik & Isu Strategis", img: "/images/man.jpg", visi: "-", misi: [] },
    { id: 32, name: "AGUS SETIAWAN, S.IP", role: "Wasekbid Ideologi, Organisasi & Kaderisasi", img: "/images/man.jpg", visi: "-", misi: [] },
    { id: 33, name: "MARSONO", role: "Wasekbid Pemenangan Pemilu", img: "/images/man.jpg", visi: "-", misi: [] },
    { id: 34, name: "MAKMUN HERRI ROJIQIEN M., S.Sos", role: "Wasekbid Umum & Administrasi", img: "/images/man.jpg", visi: "-", misi: [] },
  ],
  kebendaharaan: [
    { id: 30, name: "AGUS PRIATNA, S.Sos.", role: "Bendahara", img: "/images/04.png", visi: "-", misi: [] },
    { id: 35, name: "Ir. Hj. WISEU WIDIASIH", role: "Wabid Pengelolaan Dana & Aset", img: "/images/man.jpg", visi: "-", misi: [] },
    { id: 36, name: "EMAN SUHERMAN", role: "Wabid Penggalangan Dana", img: "/images/man.jpg", visi: "-", misi: [] },
  ]
};

export default function StrukturPage() {
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  // Ukuran kartu diseragamkan semua
  const MemberCard = ({ member }: { member: any }) => (
    <motion.div
      whileHover={{ y: -10 }}
      onClick={() => setSelectedMember(member)}
      className="group cursor-pointer mx-auto w-full max-w-[280px]"
    >
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-[#002a4a] shadow-2xl">
        <img 
          src={member.img} 
          alt={member.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001A2E] via-transparent to-transparent opacity-90" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-[#FFCC00] text-[9px] font-black uppercase tracking-widest mb-1 leading-tight">{member.role}</p>
          <h3 className="text-sm font-bold leading-tight uppercase">{member.name}</h3>
        </div>
      </div>
    </motion.div>
  );

  return (
    <main className="min-h-screen bg-[#19367F] text-white overflow-x-hidden font-sans">
      <Navbar />

      <section className="pt-40 pb-20 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4"
        >
          Struktur <span className="text-[#FFCC00]">Kepemimpinan</span>
        </motion.h1>
        <p className="text-slate-400 font-light max-w-2xl mx-auto uppercase tracking-[0.3em] text-[10px]">
          Dewan Pimpinan Daerah Kabupaten Ciamis Periode 2025-2029
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32 space-y-32">

        {/* 1. KETUA DPD (TOP) */}
        <div className="text-center space-y-8">
          <h2 className="text-[#FFCC00] font-black uppercase tracking-widest text-xs opacity-50 italic">Pimpinan Tertinggi</h2>
          <MemberCard member={hierarchy.ketuaDpd[0]} />
          <div className="h-20 w-px bg-gradient-to-b from-[#FFCC00] to-transparent mx-auto opacity-30" />
        </div>

        {/* 2. WAKIL KETUA BIDANG (MIDDLE) */}
        <div className="pt-20 border-t border-white/5 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-[#FFCC00] font-black uppercase tracking-widest text-xs">Wakil Ketua Bidang</h2>
            <p className="text-[9px] text-slate-500 uppercase tracking-widest">Unsur Pelaksana Strategis</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
            {hierarchy.wakilKetua.map(m => <MemberCard key={m.id} member={m} />)}
          </div>
        </div>

        {/* 3. SEKRETARIAT (BOTTOM PART 1) */}
        <div className="pt-20 border-t border-white/5 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-[#FFCC00] font-black uppercase tracking-widest text-xs">Sekretariat</h2>
            <p className="text-[9px] text-slate-500 uppercase tracking-widest">Unsur Administrasi & Operasional</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {hierarchy.sekretariat.map(m => <MemberCard key={m.id} member={m} />)}
          </div>
        </div>

        {/* 4. KEBENDAHARAAN (BOTTOM PART 2) */}
        <div className="pt-20 border-t border-white/5 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-[#FFCC00] font-black uppercase tracking-widest text-xs">Kebendaharaan</h2>
            <p className="text-[9px] text-slate-500 uppercase tracking-widest">Unsur Pengelolaan Aset & Keuangan</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {hierarchy.kebendaharaan.map(m => <MemberCard key={m.id} member={m} />)}
          </div>
        </div>

      </section>

      {/* Modal Detail tetap sama */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-[#19367F]/95 backdrop-blur-md"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#002a4a] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] border border-white/10 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-5 h-[350px] md:h-full">
                  <img src={selectedMember.img} className="w-full h-full object-cover grayscale" />
                </div>
                <div className="md:col-span-7 p-8 md:p-12 space-y-6 flex flex-col justify-center">
                  <div>
                    <p className="text-[#FFCC00] font-black uppercase tracking-widest text-[10px] mb-2">{selectedMember.role}</p>
                    <h2 className="text-3xl font-black uppercase tracking-tighter">{selectedMember.name}</h2>
                  </div>
                  <div className="pt-6 border-t border-white/10 space-y-6">
                    <div>
                      <h4 className="text-[10px] uppercase text-slate-500 mb-2 font-black tracking-widest">Visi Perjuangan</h4>
                      <p className="text-sm italic text-slate-300 font-light leading-relaxed">"{selectedMember.visi || 'Mewujudkan restorasi Indonesia yang adil dan makmur.'}"</p>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-6">
                    <button onClick={() => setSelectedMember(null)} className="w-full py-4 border border-white/10 rounded-xl text-[10px] uppercase font-black tracking-widest hover:bg-white/5 transition-colors">Tutup</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}