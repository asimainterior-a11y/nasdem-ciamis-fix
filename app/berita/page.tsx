"use client";

import Footer from '@/components/sections/Footer';
import { Calendar, MapPin, Tag, Share2 } from 'lucide-react';

export default function BeritaDetail() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <main className="flex-grow py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Breadcrumb & Category */}
          <div className="flex items-center gap-2 text-[10px] font-bold text-blue-700 tracking-[0.2em] uppercase mb-6">
            <span className="text-slate-300">/</span>
            <span>Prestasi & Kegiatan</span>
          </div>

          {/* Title Section */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-8">
              NasDem Ciamis Borong Gelar <span className="text-blue-700">“Treble Winner”</span> di Ajang LAGA Perubahan Jakarta
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 py-6 border-y border-slate-200">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-orange-600" />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">26 April 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-orange-600" />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Jakarta</span>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <Share2 size={14} className="text-slate-400 cursor-pointer hover:text-blue-700 transition-colors" />
              </div>
            </div>
          </header>

          {/* Featured Image Placeholder */}
          <div className="relative w-full h-[400px] bg-slate-200 rounded-2xl overflow-hidden mb-12 shadow-2xl">
            <img 
              src="/images/berita.jpeg" 
              alt="DPD NasDem Ciamis di ABN Jakarta" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white/80 text-xs italic font-light italic">Foto: Kader DPD NasDem Ciamis saat parade aksi perubahan di Kampus ABN Jakarta.</p>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-slate max-w-none">
            <p className="text-lg leading-relaxed text-slate-700 font-medium first-letter:text-5xl first-letter:font-black first-letter:text-blue-700 first-letter:mr-3 first-letter:float-left">
              DPD Partai NasDem Kabupaten Ciamis menorehkan prestasi gemilang dalam ajang Bimbingan Teknis (Bimtek) dan Laboratorium Gerakan (LAGA) Perubahan di Kampus Akademi Bela Negara (ABN) Partai NasDem, Jakarta. Tak tanggung-tanggung, Ciamis sukses memborong gelar “Treble Winner” dalam ajang yang ditutup pada Minggu (26/4/2026).
            </p>

            <p className="text-slate-700 leading-relaxed">
              Bergabung dalam Kelompok 7 bersama Kuningan dan Kota Banjar, Ciamis menyapu bersih Juara 3 pada tiga kategori sekaligus, yakni Festival Prototype, Kedisiplinan, dan Konten. Prestasi ini diraih di hadapan 600 peserta dari Jawa Barat dan Jawa Tengah, serta disaksikan langsung oleh Ketua Umum Partai NasDem, Surya Paloh.
            </p>

            <h3 className="text-xl font-black text-slate-900 tracking-tight mt-10 mb-4 uppercase text-[14px]">
              Inovasi ‘Sampah Berlogo NasDem’
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Dalam sesi “Aksi Laga Perubahan”, Anggota DPRD Ciamis dari Fraksi NasDem, Endang Cahyadi, memaparkan program unggulan bertema “NasDem Jaga Alam”. Ia mengusulkan pembuatan TPS3R di setiap kecamatan, bank sampah di tiap desa, hingga pengadaan tempat sampah minimal di 1.000 rumah per desa. Strategi ini diproyeksikan memiliki dampak elektoral masif dengan potensi menjangkau 795.000 pemilih di 265 desa di Ciamis.
            </p>

            <blockquote className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-xl my-10">
              <p className="italic text-slate-800 font-medium">
                "Piala ini dasarnya adalah prototype dari Kabupaten Ciamis. Kita tahu bersama Ciamis adalah kota terbaik dan terbersih se-Asia Tenggara. Ini adalah bentuk apresiasi ABN bagi kader yang mampu mempresentasikan aksi perubahan secara konkret."
              </p>
              <cite className="block mt-4 text-[10px] font-bold text-orange-700 uppercase tracking-[0.2em]">— Toto Marwoto, Ketua DPD NasDem Ciamis</cite>
            </blockquote>

            <p className="text-slate-700 leading-relaxed">
              Keberhasilan ini semakin kuat karena Ciamis memang memegang predikat prestisius sebagai peraih Adipura Kencana, penghargaan tertinggi di bidang lingkungan yang diserahkan langsung oleh Menteri Siti Nurbaya pada 2023 lalu. Melalui pencapaian ini, DPD NasDem Ciamis membuktikan bahwa politik juga merupakan aksi nyata yang menyentuh kebutuhan dasar masyarakat, yakni kebersihan dan kelestarian alam.
            </p>
          </article>

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 mr-4 text-slate-400">
              <Tag size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Tags:</span>
            </div>
            {['Prestasi', 'NasDem Ciamis', 'Laga Perubahan', 'Lingkungan Hidup'].map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-600 uppercase tracking-wider hover:border-blue-700 hover:text-blue-700 transition-colors cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}