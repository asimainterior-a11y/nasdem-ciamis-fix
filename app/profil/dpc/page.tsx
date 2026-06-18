"use client";

import Link from 'next/link';
import { MapPin, ArrowUpRight } from 'lucide-react';
import Footer from '@/components/sections/Footer'; // Import Footer sesuai permintaan

const daftarKecamatan = [
  { slug: "banjarsari", nama: "Banjarsari" },
  { slug: "baregbeg", nama: "Baregbeg" },
  { slug: "ciamis", nama: "Ciamis" },
  { slug: "cidolog", nama: "Cidolog" },
  { slug: "cihaurbeuti", nama: "Cihaurbeuti" },
  { slug: "cijeungjing", nama: "Cijeungjing" },
  { slug: "cikoneng", nama: "Cikoneng" },
  { slug: "cimaragas", nama: "Cimaragas" },
  { slug: "cipaku", nama: "Cipaku" },
  { slug: "cisaga", nama: "Cisaga" },
  { slug: "jatinagara", nama: "Jatinagara" },
  { slug: "kawali", nama: "Kawali" },
  { slug: "lakbok", nama: "Lakbok" },
  { slug: "lumbung", nama: "Lumbung" },
  { slug: "pamarican", nama: "Pamarican" },
  { slug: "panawangan", nama: "Panawangan" },
  { slug: "panjalu", nama: "Panjalu" },
  { slug: "panumbangan", nama: "Panumbangan" },
  { slug: "purwadadi", nama: "Purwadadi" },
  { slug: "rajadesa", nama: "Rajadesa" },
  { slug: "rancah", nama: "Rancah" },
  { slug: "sadananya", nama: "Sadananya" },
  { slug: "sindangkasih", nama: "Sindangkasih" },
  { slug: "sukadana", nama: "Sukadana" },
  { slug: "sukamantri", nama: "Sukamantri" },
  { slug: "tambaksari", nama: "Tambaksari" },
  { slug: "banjaranyar", nama: "Banjaranyar" },
];

export default function DPCPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Bagian Utama Konten */}
      <main className="flex-grow py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <header className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-bold tracking-wider uppercase text-[10px] mb-4">
              <MapPin size={12} />
              <span>Wilayah Kerja Kabupaten Ciamis</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Struktur Kepengurusan <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-orange-600">
                DPC Partai NasDem
              </span>
            </h1>
          </header>
          
          {/* Grid Layout Responsif */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {daftarKecamatan.map((kec) => (
              <Link 
                key={kec.slug} 
                href={`/profil/dpc/${kec.slug}`}
                className="group relative"
              >
                {/* Thumbnail Card: Glassmorphism transparan ke Blue Solid saat hover */}
                <div className="h-24 flex flex-col items-center justify-center p-4 rounded-xl border border-white bg-white/50 backdrop-blur-sm shadow-sm transition-all duration-300 group-hover:bg-blue-700 group-hover:border-blue-800 group-hover:shadow-lg group-hover:shadow-blue-200 group-hover:-translate-y-1">
                  
                  <span className="text-[11px] md:text-xs font-black text-slate-700 group-hover:text-white uppercase tracking-widest text-center transition-colors px-2 leading-relaxed">
                    {kec.nama}
                  </span>

                  {/* Indikator Panah kecil */}
                  <div className="absolute top-2 right-2 text-slate-300 group-hover:text-blue-200 transition-colors">
                    <ArrowUpRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}