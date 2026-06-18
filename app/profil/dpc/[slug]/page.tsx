"use client";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

// 1. FUNGSI HELPER UNTUK MERAPIKAN JABATAN DARI TABEL (Sangat Penting untuk Warga)
// Fungsi ini mengubah "Wkb. Pertanian. P dan K Desa" menjadi "Wakil Ketua Bidang Pertanian, Peternakan dan Desa"
const formatJabatan = (jabatanRaw: string): string => {
  let jabatan = jabatanRaw.trim();

  // Ubah Wkb/Wk menjadi Wakil Ketua Bidang
  jabatan = jabatan.replace(/^(Wkb\.|Wkb|Wk\.|Wk)\s+/i, "Wakil Ketua Bidang ");
  
  // Ubah singkatan lainnya
  jabatan = jabatan.replace(/M\.Adat/i, "Masyarakat Adat");
  
  // Perbaiki Wkbid Pertanian dari Excel
  jabatan = jabatan.replace(/Pertanian\. P dan K Desa/i, "Pertanian, Peternakan dan Desa");
  
  jabatan = jabatan.replace(/I\.Kreatif/i, "Industri Kreatif");
  jabatan = jabatan.replace(/A\.T & Ruang/i, "Agraria, Tata Ruang");
  
  // Perbaiki Wkbid Kehutanan dari Excel
  jabatan = jabatan.replace(/Kehutanan A\.T & Ruang/i, "Kehutanan, Agraria dan Tata Ruang");

  return jabatan;
};

// 2. MOCK DATA DPC KECAMATAN (Contoh untuk 2 Kecamatan)
// Mika, format data ini disesuaikan dengan Halaman Struktur DPD
const dataDpcKecamatan: Record<string, { nama: string; pengurus: any[] }> = {
  // Slug URL: "pamarican" -> domain.com/profil/dpc/pamarican
    "sadananya": {
        nama: "Sadananya",
        pengurus: [
        { id: 1, name: "H. SUTIA", role: "Ketua", img: "/images/man.jpg" },
        { id: 2, name: "YAYAN SURYASYAH", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
        { id: 3, name: "DELIA BUNGA LESTARI", role: "Wkb. Organisasi & Keanggotaan", img: "/images/woman.jpg" },
        { id: 4, name: "NURLINA", role: "Wkb. UMKM", img: "/images/woman.jpg" },
        { id: 5, name: "PURNAWAN", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
        { id: 6, name: "KOSTAMAN", role: "Wkb. Kesehatan", img: "/images/man.jpg" },
        { id: 7, name: "RENIAWATI", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
        { id: 8, name: "WAHIDIN", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
        { id: 9, name: "DEDE RUSLAN", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" },
        { id: 10, name: "EMA HERMAYANI", role: "Wkb. Pemuda dan Olahraga", img: "/images/woman.jpg" },
        { id: 11, name: "ELIH", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" },
        { id: 12, name: "SANDI BAGAS MAULANA", role: "Sekretaris", img: "/images/man.jpg" },
        { id: 13, name: "FAUZAN HAKIM URBANI", role: "Wakil Sekretaris 1", img: "/images/man.jpg" },
        { id: 14, name: "DENDIS SAPUTRA, SE", role: "Bendahara", img: "/images/man.jpg" },
        { id: 15, name: "CHINTA AGUSTIN PERTAMA PUTRI", role: "Wakil Bendahara 1", img: "/images/woman.jpg" },
        ],
    },

    "sukamantri": {
    nama: "Sukamantri",
    pengurus: [
      { id: 1, name: "ELAN SUHERLAN, S.d., M.M", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "ATIM KURNIA", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "ITA ATIKAH", role: "Wkb. Organisasi & Keanggotaan", img: "/images/woman.jpg" },
      { id: 4, name: "UNENG DEWI KARTINI", role: "Wkb. UMKM", img: "/images/woman.jpg" },
      { id: 5, name: "KH. BUSROL KARIM", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 6, name: "HANI NURYANI", role: "Wkb. Kesehatan", img: "/images/woman.jpg" },
      { id: 8, name: "TUTI", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 8, name: "HJ. APONG NURJANAH", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/woman.jpg" },
      { id: 9, name: "DIDIN SARIPUDIN", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" },
      { id: 10, name: "OPA MUSTOPA", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 11, name: "YADI MULYADI", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" },
      { id: 12, name: "IWAN ADI TRIANA", role: "Sekretaris", img: "/images/man.jpg" },
      { id: 13, name: "KUSWARA", role: "Wakil Sekretaris", img: "/images/man.jpg" },
      { id: 14, name: "DEDEH HANDAYANI", role: "Bendahara", img: "/images/woman.jpg" },
      { id: 15, name: "NENI KUSRINI", role: "Wakil Bendahara", img: "/images/woman.jpg" },
    ],
  },

"cimaragas": {
    nama: "Cimaragas",
    pengurus: [
      { id: 1, name: "ASEP DANI PERMADI", role: "Ketua", img: "/images/man.jpg" }, //
      { id: 2, name: "PREDI PERDIAN", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" }, //
      { id: 3, name: "YAYAT HIDAYA", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" }, //
      { id: 4, name: "YETI SULASTRI", role: "Wkb. UMKM", img: "/images/woman.jpg" }, //
      { id: 5, name: "ELAN SUHERLAN", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" }, //
      { id: 6, name: "GITA PURNAMASARI", role: "Wkb. Kesehatan", img: "/images/woman.jpg" }, //
      { id: 7, name: "YULIANA", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" }, //
      { id: 8, name: "ANA HERYANA", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" }, //
      { id: 9, name: "NANANG MARPUDIN", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" }, //
      { id: 10, name: "RAMDAN LESMANA", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" }, //
      { id: 11, name: "DIAN ARIF", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" }, //
      { id: 12, name: "YULI YULPALAH", role: "Sekretaris", img: "/images/woman.jpg" }, //
      { id: 13, name: "MAS TRIANA WAHYUNI", role: "Wakil Sekretaris", img: "/images/woman.jpg" }, //
      { id: 14, name: "NANA TAOFIQUROHMAN", role: "Bendahara", img: "/images/man.jpg" }, //
      { id: 15, name: "ADI HERDIANA", role: "Wakil Bendahara", img: "/images/man.jpg" }, //
    ],
  },

  "cipaku": {
    nama: "Cipaku",
    pengurus: [
      { id: 1, name: "EKA DK HARSAMUNANTO", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "ENDAN", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "SOMA WIJAYA", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 4, name: "WAWAN SETIAWAN", role: "Wkb. UMKM", img: "/images/man.jpg" },
      { id: 5, name: "AJAT SUDRAJAT", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 6, name: "ODING", role: "Wkb. Kesehatan", img: "/images/man.jpg" },
      { id: 7, name: "IDA JULIAWATI", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 8, name: "DETI RAHMAYANTI", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/woman.jpg" },
      { id: 9, name: "JUJU JUBAEDAH", role: "Wkb. Pertanian. P dan K Desa", img: "/images/woman.jpg" },
      { id: 10, name: "ASEP WAHYUDIN", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 11, name: "DEDE SUPARMAN", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" },
      { id: 12, name: "SUPENDI", role: "Sekretaris", img: "/images/man.jpg" },
      { id: 13, name: "IYUS HUDIANA", role: "Wakil Sekretaris 1", img: "/images/man.jpg" },
      { id: 14, name: "INA PARLINA", role: "Wakil Sekretaris 2", img: "/images/woman.jpg" },
      { id: 15, name: "ANGGI HERMAWAN", role: "Wakil Sekretaris 3", img: "/images/man.jpg" },
      { id: 16, name: "BAHRUN", role: "Bendahara", img: "/images/man.jpg" },
      { id: 17, name: "ILHAM NUR HIDAYAT", role: "Wakil Bendahara 1", img: "/images/man.jpg" },
      { id: 18, name: "DEDE YUSUP", role: "Wakil Bendahara 2", img: "/images/man.jpg" },
      { id: 19, name: "YAYU SRI RAHAYU", role: "Wakil Bendahara 3", img: "/images/woman.jpg" },
    ],
  },

  // --- DATA KECAMATAN PURWADADI ---
  "purwadadi": {
    nama: "Purwadadi",
    pengurus: [
      { id: 1, name: "WAGIMAN", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "NASUHA", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "KARMAN", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 4, name: "SURYONO", role: "Wkb. UMKM", img: "/images/man.jpg" },
      { id: 5, name: "MUHTARUDIN", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 6, name: "SOLIKHATUN", role: "Wkb. Kesehatan", img: "/images/woman.jpg" },
      { id: 7, name: "TRIANTI", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 8, name: "ASRIAH", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/woman.jpg" },
      { id: 9, name: "YATIN", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" },
      { id: 10, name: "SURYAMAN", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 11, name: "SULASTRI", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/woman.jpg" },
      { id: 12, name: "SAPRUDIN", role: "Sekretaris", img: "/images/man.jpg" },
      { id: 13, name: "JUMIATI", role: "Wakil Sekretaris", img: "/images/woman.jpg" },
      { id: 14, name: "HOLID MUKSIN", role: "Bendahara", img: "/images/man.jpg" },
      { id: 15, name: "CECENG", role: "Wakil Bendahara", img: "/images/man.jpg" },
    ],
  },

  // --- DATA KECAMATAN PAMARICAN ---
  "pamarican": {
    nama: "Pamarican",
    pengurus: [
      { id: 1, name: "TATI KARYATI", role: "Ketua", img: "/images/woman.jpg" },
      { id: 2, name: "DRS. H. NORSODIN", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "TATANG", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 4, name: "HERI", role: "Wkb. UMKM", img: "/images/man.jpg" },
      { id: 5, name: "HUSNUDIN", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 6, name: "ARIYAT", role: "Wkb. Kesehatan", img: "/images/man.jpg" },
      { id: 7, name: "ADE PUPU MARFUAH", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 8, name: "HERMAN", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 9, name: "HENDRA KRISTYAWAN", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" },
      { id: 10, name: "IMAS MASRIANI", role: "Wkb. Pemuda dan Olahraga", img: "/images/woman.jpg" },
      { id: 11, name: "SITI HABIBAH", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/woman.jpg" },
      { id: 12, name: "DHARMAWAN AHMAD ASSIDIQ. SE", role: "Sekretaris", img: "/images/man.jpg" },
      { id: 13, name: "ENDANG DUKI", role: "Wakil Sekretaris 1", img: "/images/man.jpg" },
      { id: 14, name: "ROHIMAH SUTIAWATI", role: "Wakil Sekretaris 2", img: "/images/woman.jpg" },
      { id: 15, name: "N. ROHAYATI", role: "Bendahara", img: "/images/woman.jpg" },
      { id: 16, name: "NANI HERYANI", role: "Wakil Bendahara", img: "/images/woman.jpg" },
    ],
  },

  // --- DATA KECAMATAN CIHAURBEUTI ---
  "cihaurbeuti": {
    nama: "Cihaurbeuti",
    pengurus: [
      { id: 1, name: "MANSUR", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "NONO KARSONO", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "ENCENG KURNIAWAN", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 4, name: "AGUS HERMANTO", role: "Wkb. UMKM", img: "/images/man.jpg" },
      { id: 5, name: "ADE RAHMAN", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 6, name: "A'I SYARIFAH", role: "Wkb. Kesehatan", img: "/images/woman.jpg" },
      { id: 7, name: "YULIANTI", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 8, name: "IWAN DARMAWAN", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 9, name: "ENDANG DUDI SUTISNA", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" },
      { id: 10, name: "DEDE ROHIMAT", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 11, name: "ADE AHMAD", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" },
      { id: 12, name: "BEKTI BARLIANSYAH", role: "Sekretaris", img: "/images/man.jpg" },
      { id: 13, name: "AGUS ISWARA", role: "Wakil Sekretaris 1", img: "/images/man.jpg" },
      { id: 14, name: "BELA SAPITRI", role: "Wakil Sekretaris 2", img: "/images/woman.jpg" },
      { id: 15, name: "WENDY HERDIANTO, ST", role: "Bendahara", img: "/images/man.jpg" },
      { id: 16, name: "NURHASANAH", role: "Wakil Bendahara 1", img: "/images/woman.jpg" },
      { id: 17, name: "NUNUNG NURDAETI", role: "Wakil Bendahara 2", img: "/images/woman.jpg" },
    ],
  },

  // --- DATA KECAMATAN CIAMIS ---
  "ciamis": {
    nama: "Ciamis",
    pengurus: [
      { id: 1, name: "MUSLIM RIDLWAN", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "DODO SUDRAJAT", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "ADANG KUSMAYADI", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 4, name: "FATAH YASIN", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" },
      { id: 5, name: "UU GUMILAR", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 6, name: "MILA KARMILA", role: "Wkb. UMKM", img: "/images/woman.jpg" },
      { id: 7, name: "AHMAD GOJALI", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 8, name: "DIAMI NURAIDAH", role: "Wkb. Kesehatan", img: "/images/woman.jpg" },
      { id: 9, name: "WIDA NINGSIH", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 10, name: "TAUFIK", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 11, name: "FAHRUL ZAINAL MUFLIHIN", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" },
      { id: 12, name: "IDIN JAHIDIN", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 13, name: "JOJO SUKARJO", role: "Sekretaris", img: "/images/man.jpg" },
      { id: 14, name: "WAWAN SETIAWAN R", role: "Wakil Sekretaris 1", img: "/images/man.jpg" },
      { id: 15, name: "DENI HERMAWAN", role: "Wakil Sekretaris 2", img: "/images/man.jpg" },
      { id: 16, name: "FUJI ASTUTI", role: "Bendahara", img: "/images/woman.jpg" },
      { id: 17, name: "ELIS SARININGSIH, SP", role: "Wakil Bendahara 1", img: "/images/woman.jpg" },
      { id: 18, name: "DICKY RUSPRIADY", role: "Wakil Bendahara 2", img: "/images/man.jpg" },
    ],
  },

  // --- DATA KECAMATAN BANJARANYAR ---
  "banjaranyar": {
    nama: "Banjaranyar",
    pengurus: [
      { id: 1, name: "ASEP SOMANTRI", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "AGUNG", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "RAKHMAT", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 4, name: "UNING NURYATI", role: "Wkb. UMKM", img: "/images/woman.jpg" },
      { id: 5, name: "SURYONO", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 6, name: "ROMYATI", role: "Wkb. Kesehatan", img: "/images/woman.jpg" },
      { id: 7, name: "SUHARTI", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 8, name: "RIDA PARIDAWATI", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/woman.jpg" },
      { id: 9, name: "MUHAMAD RUSLI SPD 1", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" },
      { id: 10, name: "DEDI PRIATNA", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 11, name: "NANI SURYANI", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/woman.jpg" },
      { id: 12, name: "JEJEN", role: "Sekretaris", img: "/images/man.jpg" },
      { id: 13, name: "SOPIK", role: "Wakil Sekretaris", img: "/images/man.jpg" },
      { id: 14, name: "ANI DEDEH KURNIASIH", role: "Bendahara", img: "/images/woman.jpg" },
      { id: 15, name: "POPON PATIMAH", role: "Wakil Bendahara 1", img: "/images/woman.jpg" },
    ],
  },

  // --- DATA KECAMATAN BAREGBEG ---
  "baregbeg": {
    nama: "Baregbeg",
    pengurus: [
      { id: 1, name: "DENI RAMDANI", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "ENDANG KURNIA", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "BAMBANG FEBRIANSYAH", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 4, name: "KARDI", role: "Wkb. UMKM", img: "/images/man.jpg" },
      { id: 5, name: "HANDIANA", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 6, name: "ADE SRI MULYATI", role: "Wkb. Kesehatan", img: "/images/woman.jpg" },
      { id: 7, name: "IKA YUNINGSIH", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 8, name: "MUHAMMAD WILI BASUNI", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 9, name: "DIANA OKTAVIANA", role: "Wkb. Pertanian. P dan K Desa", img: "/images/woman.jpg" },
      { id: 10, name: "HERYANA", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 11, name: "WIWIN WINARTI", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/woman.jpg" },
      { id: 12, name: "ARIS RAKHMAT GUMILAR", role: "Sekretaris", img: "/images/man.jpg" },
      { id: 13, name: "ADE YADI", role: "Wakil Sekretaris", img: "/images/man.jpg" },
      { id: 14, name: "IKE MICIKEU", role: "Bendahara", img: "/images/woman.jpg" },
      { id: 15, name: "RISKA PURNAMASARI", role: "Wakil Bendahara", img: "/images/woman.jpg" },
      { id: 16, name: "AYU SRI RAHAYU SELVIANA", role: "Wakil Bendahara", img: "/images/woman.jpg" },
    ],
  },

  // --- DATA KECAMATAN KAWALI ---
  "kawali": {
    nama: "Kawali",
    pengurus: [
      { id: 1, name: "AHMAD NANDI", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "ACENG AHMAD HIDAYAT", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "NIA KURNIA, SE", role: "Wkb. Organisasi & Keanggotaan", img: "/images/woman.jpg" },
      { id: 4, name: "YANA PRIATNA", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 5, name: "YUNUS YUDI PURNAMA", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 6, name: "ADE KUSNADI", role: "Wkb. UMKM", img: "/images/man.jpg" },
      { id: 7, name: "UUS RUSLIANA", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 8, name: "NANANG ADNAN", role: "Wkb. Kesehatan", img: "/images/man.jpg" },
      { id: 9, name: "HELIS HIDIANTI", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 10, name: "DINRI SAHLAN", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 11, name: "DADAN HAMDANI", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" },
      { id: 12, name: "SIDIK PIRMAN", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 13, name: "ARIP MUSLIM", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" },
      { id: 14, name: "ENDANG WAWAN", role: "Sekretaris", img: "/images/man.jpg" },
      { id: 15, name: "SUSI SUKMAWATI", role: "Wakil Sekretaris 1", img: "/images/woman.jpg" },
      { id: 16, name: "DENIS SEPTIANA PUTRA", role: "Wakil Sekretaris 2", img: "/images/man.jpg" },
      { id: 17, name: "YOGA JATNIKA", role: "Wakil Sekretaris 3", img: "/images/man.jpg" },
      { id: 18, name: "IMA YUNIANTINI", role: "Bendahara", img: "/images/woman.jpg" },
      { id: 19, name: "SUHARTIKA", role: "Wakil Bendahara 1", img: "/images/woman.jpg" },
      { id: 20, name: "TIKA MUJI LESTARI", role: "Wakil Bendahara 2", img: "/images/woman.jpg" },
    ],
  },

  // --- DATA KECAMATAN CIJEUNGJING ---
  "cijeungjing": {
    nama: "Cijeungjing",
    pengurus: [
      { id: 1, name: "ANAS MA'RUF", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "NURCAHYA PANJI", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "NISA SILVIA NURHIDAYAH", role: "Wkb. Organisasi & Keanggotaan", img: "/images/woman.jpg" },
      { id: 4, name: "ANAH MARTINI", role: "Wkb. UMKM", img: "/images/woman.jpg" },
      { id: 5, name: "SUMARNA", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 6, name: "CICIH", role: "Wkb. Kesehatan", img: "/images/woman.jpg" },
      { id: 7, name: "KHANSA FUADAH SAYYIDAH A", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 8, name: "HADIYANA", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 9, name: "LILIS SETIAWATI", role: "Wkb. Pertanian. P dan K Desa", img: "/images/woman.jpg" },
      { id: 10, name: "RIDWAN", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 11, name: "DEDE ROSIDIN", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" },
      { id: 12, name: "NANI NURYA ADAWIYAH", role: "Sekretaris", img: "/images/woman.jpg" },
      { id: 13, name: "PIPIT PITRIYANI", role: "Wakil Sekretaris 1", img: "/images/woman.jpg" },
      { id: 14, name: "RANI APRIANI", role: "Wakil Sekretaris 2", img: "/images/woman.jpg" },
      { id: 15, name: "TITIN NURHAYATI", role: "Bendahara", img: "/images/woman.jpg" },
      { id: 16, name: "ROSALIA FITRIANI", role: "Wakil Bendahara 1", img: "/images/woman.jpg" },
      { id: 17, name: "B. HABUDIN", role: "Wakil Bendahara 2", img: "/images/man.jpg" },
      { id: 18, name: "TAKIYUDIN", role: "Wakil Bendahara 3", img: "/images/man.jpg" },
    ],
  },

  // --- DATA KECAMATAN BANJARSARI ---
  "banjarsari": {
    nama: "Banjarsari",
    pengurus: [
      { id: 1, name: "UGUN SUPRIATNA", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "INDRA RAMADHAN", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "ASEP", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 4, name: "ENDANG YUNINGSIH", role: "Wkb. UMKM", img: "/images/woman.jpg" },
      { id: 5, name: "MUHAMAD HAMSI NASIRIN", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 6, name: "WULANDARI", role: "Wkb. Kesehatan", img: "/images/woman.jpg" },
      { id: 7, name: "EKA ROHAYATI", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 8, name: "MISBAHUDIN", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 9, name: "LAILATUL ROFINGAH", role: "Wkb. Pertanian. P dan K Desa", img: "/images/woman.jpg" },
      { id: 10, name: "PURKON", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 11, name: "LILIS KOMALASARI", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/woman.jpg" },
      { id: 12, name: "DANI ANDRIAN", role: "Sekretaris", img: "/images/man.jpg" },
      { id: 13, name: "JEJEN HIDAYAT", role: "Wakil Sekretaris", img: "/images/man.jpg" },
      { id: 14, name: "TONO", role: "Bendahara", img: "/images/man.jpg" },
      { id: 15, name: "HENDI", role: "Wakil Bendahara", img: "/images/man.jpg" },
    ],
  },

  // --- DATA KECAMATAN SUKADANA ---
  "sukadana": {
    nama: "Sukadana",
    pengurus: [
      { id: 1, name: "DRS. ABDURAKHMAN SUTARA", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "HERU HERDIAWAN", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "UUS TARSA, S.Pd", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 4, name: "IIN HERDIATI", role: "Wkb. UMKM", img: "/images/woman.jpg" },
      { id: 5, name: "NIA KURNIATI", role: "Wkb. Agama dan M.Adat", img: "/images/woman.jpg" },
      { id: 6, name: "ESIH S.H", role: "Wkb. Kesehatan", img: "/images/woman.jpg" },
      { id: 7, name: "TINI NURAENI", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 8, name: "SURYADI", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 9, name: "MAMAN", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" },
      { id: 10, name: "KOSWARA, S.IP", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 11, name: "KODADI SURAHMAN", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" },
      { id: 12, name: "DRS. ANANG RUKMANA, M.Pd", role: "Sekretaris", img: "/images/man.jpg" },
      { id: 13, name: "YATI SUMIATI", role: "Wakil Sekretaris", img: "/images/woman.jpg" },
      { id: 14, name: "THOMAS ACHMAD FAUZY, S.T", role: "Bendahara", img: "/images/man.jpg" },
      { id: 15, name: "SAHIDIN", role: "Wakil Bendahara", img: "/images/man.jpg" },
    ],
  },

  // --- DATA KECAMATAN RANCAH ---
  "rancah": {
    nama: "Rancah",
    pengurus: [
      { id: 1, name: "TARYONO EPKA SUSANDI", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "ENGKOS KOSWARI", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "NENDI SUPRIADI", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 4, name: "NASIHIN", role: "Wkb. UMKM", img: "/images/man.jpg" },
      { id: 5, name: "NINIS ANISA", role: "Wkb. Agama dan M.Adat", img: "/images/woman.jpg" },
      { id: 6, name: "INDRAWATI", role: "Wkb. Kesehatan", img: "/images/woman.jpg" },
      { id: 7, name: "NUNUNG JUHAENI", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 8, name: "MUHAMMAD ALBI FIRDAUS", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 9, name: "AAN SITI AMINAH", role: "Wkb. Pertanian. P dan K Desa", img: "/images/woman.jpg" },
      { id: 10, name: "ARYA SYALTA ROSYADI", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 11, name: "TEGUH GINANJAR", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" },
      { id: 12, name: "KUSDIMAN", role: "Sekretaris", img: "/images/man.jpg" },
      { id: 13, name: "DEDE SUMIATI", role: "Wakil Sekretaris", img: "/images/woman.jpg" },
      { id: 14, name: "IRA SITI SARAH", role: "Bendahara", img: "/images/woman.jpg" },
      { id: 15, name: "RIZAL MAULANA", role: "Wakil Bendahara", img: "/images/man.jpg" },
      { id: 16, name: "ERLINDA", role: "Wakil Bendahara", img: "/images/woman.jpg" },
      { id: 17, name: "TARYONO", role: "Wakil Bendahara", img: "/images/man.jpg" },
    ],
  },

  // --- DATA KECAMATAN LAKBOK ---
  "lakbok": {
    nama: "Lakbok",
    pengurus: [
      { id: 1, name: "WAWAN MISWANTO", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "HASAN HUSEN", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "SODIKIN", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 4, name: "SUPRIYANTO", role: "Wkb. UMKM", img: "/images/man.jpg" },
      { id: 5, name: "AMAH AMEL", role: "Wkb. Agama dan M.Adat", img: "/images/woman.jpg" },
      { id: 6, name: "SUTINI TRISNAWATI", role: "Wkb. Kesehatan", img: "/images/woman.jpg" },
      { id: 7, name: "LILIS HARLINA", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 8, name: "CACA", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 9, name: "SUPARYO", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" },
      { id: 10, name: "NUROHMAT", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 11, name: "ADIS KUSWOYO", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" },
      { id: 12, name: "EKA RULISDIANA", role: "Sekretaris", img: "/images/man.jpg" },
      { id: 13, name: "ARIS CAHYONO", role: "Wakil Sekretaris", img: "/images/man.jpg" },
      { id: 14, name: "BUDI TARYAMAN", role: "Bendahara", img: "/images/man.jpg" },
      { id: 15, name: "TITING YULISTIANI", role: "Wakil Bendahara 1", img: "/images/woman.jpg" },
      { id: 16, name: "LUKMANUL HAKIM", role: "Wakil Bendahara 2", img: "/images/man.jpg" },
      { id: 17, name: "MARYATI", role: "Wakil Bendahara 3", img: "/images/woman.jpg" },
    ],
  },

  // --- DATA KECAMATAN CIKONENG (image_134711.png) ---
  "cikoneng": {
    nama: "Cikoneng",
    pengurus: [
      { id: 1, name: "H. TATANG SYAHRIA, S.PD.I", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "RIAN F", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "DEDE RUDI", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 4, name: "CUCU RUSMANA", role: "Wkb. UMKM", img: "/images/man.jpg" },
      { id: 5, name: "RIZAL AL SAFAR", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 6, name: "HENI KUSDIANAWATI", role: "Wkb. Kesehatan", img: "/images/woman.jpg" },
      { id: 7, name: "ANI KUSNIYATI", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 8, name: "IMAN", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 9, name: "DIDIN SAHIDIN", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" },
      { id: 10, name: "ADI ALI WIJAYA", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 11, name: "SUTARDI", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" },
      { id: 12, name: "YOGA NUGRAHA", role: "Sekretaris", img: "/images/man.jpg" },
      { id: 13, name: "YANA MULYANA", role: "Wakil Sekretaris 1", img: "/images/man.jpg" },
      { id: 14, name: "VANIA ALISA FUJIANTI", role: "Wakil Sekretaris 2", img: "/images/woman.jpg" },
      { id: 15, name: "REINA RAHMITHA WAHDINI", role: "Bendahara", img: "/images/woman.jpg" },
      { id: 16, name: "RINA ROSDIANA", role: "Wakil Bendahara", img: "/images/woman.jpg" },
    ],
  },

  // --- DATA KECAMATAN CIDOLOG (image_1346d9.png) ---
  "cidolog": {
    nama: "Cidolog",
    pengurus: [
      { id: 1, name: "H. ENDANG SURYANA", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "ADE HADIAT", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "CEPI MULYANA", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 4, name: "LILIS KARTISAH", role: "Wkb. UMKM", img: "/images/woman.jpg" },
      { id: 5, name: "RIDWAN FIRDAUS", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 6, name: "PIRMAN RAMDAN GIFARI", role: "Wkb. Kesehatan", img: "/images/man.jpg" },
      { id: 7, name: "CUCU WULANSARI, S.Pd", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 8, name: "ANDRI", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 9, name: "ABDUL BASIT ANSOR", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" },
      { id: 10, name: "ELIA SOPA MARWATI", role: "Wkb. Pemuda dan Olahraga", img: "/images/woman.jpg" },
      { id: 11, name: "YUYUN", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/woman.jpg" },
      { id: 12, name: "CIKAL LEVIA", role: "Sekretaris", img: "/images/woman.jpg" },
      { id: 13, name: "MUHIDIN", role: "Wakil Sekretaris", img: "/images/man.jpg" },
      { id: 14, name: "OHIN", role: "Bendahara", img: "/images/man.jpg" },
      { id: 15, name: "TOMMY", role: "Wakil Bendahara", img: "/images/man.jpg" },
    ],
  },

  // --- DATA KECAMATAN PANJALU (image_1346b4.png) ---
  "panjalu": {
    nama: "Panjalu",
    pengurus: [
      { id: 1, name: "DONNY SETIAWAN", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "ASEP EPENDI", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "AKOM KOMARUDIN", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 4, name: "BENY SUPRIADI", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 5, name: "LILIS KOMALASARI", role: "Wkb. Organisasi & Keanggotaan", img: "/images/woman.jpg" },
      { id: 6, name: "ICA IRAWATI", role: "Wkb. UMKM", img: "/images/woman.jpg" },
      { id: 7, name: "YAYI HERMANSYAH", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 8, name: "NONOK DEDEH DAHLIA", role: "Wkb. Kesehatan", img: "/images/woman.jpg" },
      { id: 9, name: "ENGKOM KOMALA", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 10, name: "ASEP YUSUP AS", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 11, name: "YANTO ISKANDAR", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" },
      { id: 12, name: "LUKMAN NURBARKAH, S.Pd", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 13, name: "DIDING ROSIDIN", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" },
      { id: 14, name: "IIK ATIKAH", role: "Sekretaris", img: "/images/woman.jpg" },
      { id: 15, name: "YENI HERDIANI LESTARI", role: "Wakil Sekretaris 1", img: "/images/woman.jpg" },
      { id: 16, name: "ADANG DIDI ATMO", role: "Wakil Sekretaris 2", img: "/images/man.jpg" },
      { id: 17, name: "ASEP SYAEPUDIN", role: "Wakil Sekretaris 3", img: "/images/man.jpg" },
      { id: 18, name: "AI FHARIDZA", role: "Bendahara", img: "/images/woman.jpg" },
      { id: 19, name: "UPI YUSTIATI", role: "Wakil Bendahara 1", img: "/images/woman.jpg" },
      { id: 20, name: "ENGKUN", role: "Wakil Bendahara 2", img: "/images/man.jpg" },
    ],
  },

  // --- DATA KECAMATAN SINDANGKASIH (image_1343ce.jpg) ---
  "sindangkasih": {
    nama: "Sindangkasih",
    pengurus: [
      { id: 1, name: "PUPUNG KUNTORO, S.IP", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "ENDANG SUTIAWAN", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "EDI SUPRIADI", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 4, name: "TETI KARTIKA", role: "Wkb. Organisasi & Keanggotaan", img: "/images/woman.jpg" },
      { id: 5, name: "ASEP IWAN SETIAWAN", role: "Wkb. UMKM", img: "/images/man.jpg" },
      { id: 6, name: "IRHAM IRAWAN", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 7, name: "ENGKOS KOSTAMAN", role: "Wkb. Kesehatan", img: "/images/man.jpg" },
      { id: 8, name: "ATIN", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 9, name: "JAJANG KURNIAWAN", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 10, name: "ENDANG PERMANA", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" },
      { id: 11, name: "DEDI SUPRIADI", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 12, name: "ANDI HIDAYAT", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" },
      { id: 13, name: "YAYU YUGIANINGSIH", role: "Sekretaris", img: "/images/woman.jpg" },
      { id: 14, name: "LIA DAHLIA", role: "Wakil Sekretaris", img: "/images/woman.jpg" },
      { id: 15, name: "EPONG MAELASARI", role: "Bendahara", img: "/images/woman.jpg" },
      { id: 16, name: "AJENG SALMA NADA ADZANI", role: "Wakil Bendahara 1", img: "/images/woman.jpg" },
      { id: 17, name: "HENDRIANA WAHID", role: "Wakil Bendahara 2", img: "/images/man.jpg" },
    ],
  },

  "panumbangan": {
    nama: "Panumbangan",
    pengurus: [
      { id: 1, name: "PRIATNA, S.Pd., M.Si", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "JOJON SUJONO", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "ENJANG WANDI", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 4, name: "TITIN SUPRIATIN", role: "Wkb. UMKM", img: "/images/woman.jpg" },
      { id: 5, name: "IYAN SOPYAN", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 6, name: "DIAN RUSDIANTO", role: "Wkb. Kesehatan", img: "/images/man.jpg" },
      { id: 7, name: "ELA LAELASARI", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 8, name: "IMAN FIRMASYAH", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 9, name: "AGUS MULYANA", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" },
      { id: 10, name: "RONI IRAWAN", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 11, name: "DODO RUSMANTO", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" },
      { id: 12, name: "MUNIR MULYANA", role: "Sekretaris", img: "/images/man.jpg" },
      { id: 13, name: "ETI ROHAETI", role: "Wakil Sekretaris", img: "/images/woman.jpg" },
      { id: 14, name: "TATING YUNIOR", role: "Bendahara", img: "/images/woman.jpg" },
      { id: 15, name: "ARIE C KELANA", role: "Wakil Bendahara", img: "/images/woman.jpg" },
    ],
  },

  "cisaga": {
    nama: "Cisaga",
    pengurus: [
      { id: 1, name: "SONI NUGRAHA", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "AGUS RUSDIANA", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "MEMED AHMADI", role: "Wakil Ketua", img: "/images/man.jpg" },
      { id: 4, name: "NILAM MAELASARI", role: "Wkb. Organisasi & Keanggotaan", img: "/images/woman.jpg" },
      { id: 5, name: "ADIK HERYANTO", role: "Wkb. UMKM", img: "/images/man.jpg" },
      { id: 6, name: "YUYUN SAEFUL UYUN", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 7, name: "SITI PATONAH", role: "Wkb. Kesehatan", img: "/images/woman.jpg" },
      { id: 8, name: "ANIH ISMAYANTI", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 9, name: "HAMID DUMAJID", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 10, name: "DEDE ARIFIN", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" },
      { id: 11, name: "ARIS SETIAWAN", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 12, name: "LUKMAN", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" },
      { id: 13, name: "ANDRI PURWANTO", role: "Sekretaris", img: "/images/man.jpg" },
      { id: 14, name: "TIKA KARTIKA", role: "Wakil Sekretaris 1", img: "/images/woman.jpg" },
      { id: 15, name: "TARSO", role: "Wakil Sekretaris 2", img: "/images/man.jpg" },
      { id: 16, name: "TATO ROHMAT", role: "Wakil Sekretaris 3", img: "/images/man.jpg" },
      { id: 17, name: "REGY ERYANTO", role: "Bendahara", img: "/images/man.jpg" },
      { id: 18, name: "YANTI KUSUMAH DEWI", role: "Wakil Bendahara 1", img: "/images/woman.jpg" },
      { id: 19, name: "YADI SUPRIADI", role: "Wakil Bendahara 2", img: "/images/man.jpg" },
      { id: 20, name: "DODI HERDIANA", role: "Wakil Bendahara 3", img: "/images/man.jpg" },
    ],
  },

  "jatinagara": {
    nama: "Jatinagara",
    pengurus: [
      { id: 1, name: "NANA SUPRIATNA", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "ENGKOS", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "AMIN", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 4, name: "TOTONG", role: "Wakil Ketua", img: "/images/man.jpg" },
      { id: 5, name: "ACENG WAWAN", role: "Wkb. UMKM", img: "/images/man.jpg" },
      { id: 6, name: "DUDIN KOMARUDIN", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 7, name: "AAB ABDUL ROJAK", role: "Wkb. Kesehatan", img: "/images/man.jpg" },
      { id: 8, name: "MIRAHWATI", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 9, name: "AEP SAEPUROHMAN", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 10, name: "APIP PURNAWAN", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" },
      { id: 11, name: "DIDI", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 12, name: "EMAN SULAEMAN", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" },
      { id: 13, name: "AHMAD NURDIN", role: "Sekretaris", img: "/images/man.jpg" },
      { id: 14, name: "SITI NUR ASIH", role: "Wakil Sekretaris 1", img: "/images/woman.jpg" },
      { id: 15, name: "AAN NURYATI", role: "Wakil Sekretaris 2", img: "/images/woman.jpg" },
      { id: 16, name: "NANI KURNIASIH", role: "Bendahara", img: "/images/woman.jpg" },
      { id: 17, name: "RISA HASTIKA SARI", role: "Wakil Bendahara 1", img: "/images/woman.jpg" },
      { id: 18, name: "ANGGRAENI SURYA", role: "Wakil Bendahara 2", img: "/images/woman.jpg" },
    ],
  },

  "lumbung": {
    nama: "Lumbung",
    pengurus: [
      { id: 1, name: "UHIN NASIHIN", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "IWAN GUNAWAN", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "ADE ROSIDIN", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 4, name: "ATENG WAHYUDI", role: "Wkb. UMKM", img: "/images/man.jpg" },
      { id: 5, name: "MAMAN ABDURAHMAN", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 6, name: "INA HERLINA", role: "Wkb. Kesehatan", img: "/images/woman.jpg" },
      { id: 7, name: "NITA SILVYANI", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 8, name: "SYARIF", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 9, name: "AEP", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" },
      { id: 10, name: "ADE IPAN ILMI", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 11, name: "ISKANDAR", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" },
      { id: 12, name: "NINA KARINA", role: "Sekretaris", img: "/images/woman.jpg" },
      { id: 13, name: "OHAN", role: "Wakil Sekretaris 1", img: "/images/man.jpg" },
      { id: 14, name: "OMAN", role: "Wakil Sekretaris 2", img: "/images/man.jpg" },
      { id: 15, name: "YOYO SUNARYO", role: "Wakil Sekretaris 3", img: "/images/man.jpg" },
      { id: 16, name: "NUNUNG", role: "Bendahara", img: "/images/woman.jpg" },
      { id: 17, name: "ADELIA RUSDAYANTI", role: "Wakil Bendahara 1", img: "/images/woman.jpg" },
      { id: 18, name: "RONI KURNIAWAN", role: "Wakil Bendahara 2", img: "/images/man.jpg" },
      { id: 19, name: "CUCU ROSMIATI", role: "Wakil Bendahara 3", img: "/images/woman.jpg" },
    ],
  },

  "panawangan": {
    nama: "Panawangan",
    pengurus: [
      { id: 1, name: "MAMAN SUPARMAN", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "MOCH. DENI SUMANTRI", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "YANA ROSDIANA", role: "Wakil Ketua", img: "/images/man.jpg" },
      { id: 4, name: "LIA YULIA", role: "Wakil Ketua", img: "/images/woman.jpg" },
      { id: 5, name: "DEDE HERMAWAN", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 6, name: "NENA NURAENA", role: "Wakil Ketua", img: "/images/woman.jpg" },
      { id: 7, name: "ALAN SAHLAN", role: "Wkb. UMKM", img: "/images/man.jpg" },
      { id: 8, name: "ISMANTO", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 9, name: "FITRI", role: "Wkb. Kesehatan", img: "/images/woman.jpg" },
      { id: 10, name: "NUR ELAH", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 11, name: "ERI RUSTAMAN", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 12, name: "H. RASDI RISDIANTO", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" },
      { id: 13, name: "MAMAN ROHMANA", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 14, name: "RUDIYANTO", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" },
      { id: 15, name: "CUCU SETIAWAN", role: "Sekretaris", img: "/images/man.jpg" },
      { id: 16, name: "TATANG", role: "Wakil Sekretaris 1", img: "/images/man.jpg" },
      { id: 17, name: "ARIP MUNANDAR", role: "Wakil Sekretaris 2", img: "/images/man.jpg" },
      { id: 18, name: "ANI SETIANI", role: "Wakil Sekretaris 3", img: "/images/woman.jpg" },
      { id: 19, name: "SARMAN", role: "Bendahara", img: "/images/man.jpg" },
      { id: 20, name: "YOGA LESMANA", role: "Wakil Bendahara 1", img: "/images/man.jpg" },
      { id: 21, name: "JAJANG SOLIHIN", role: "Wakil Bendahara 2", img: "/images/man.jpg" },
      { id: 22, name: "ATANG SUPRIADI", role: "Wakil Bendahara 3", img: "/images/man.jpg" },
    ],
  },

  "rajadesa": {
    nama: "Rajadesa",
    pengurus: [
      { id: 1, name: "AMIR SUHERMAN", role: "Ketua", img: "/images/man.jpg" },
      { id: 2, name: "ENDANG JUHANA", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 3, name: "MAMAN MUNAWARUDIN", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" },
      { id: 4, name: "UJU JUNAEDI", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" },
      { id: 5, name: "WANTO KUSWANTO", role: "Wkb. UMKM", img: "/images/man.jpg" },
      { id: 6, name: "ANDI IRAWAN", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" },
      { id: 7, name: "RUSLIANA", role: "Wkb. Kesehatan", img: "/images/man.jpg" },
      { id: 8, name: "IDAH SAIDAH", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" },
      { id: 9, name: "DADANG KURNIA", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/man.jpg" },
      { id: 10, name: "YOYOH KOMARIAH", role: "Wkb. Pertanian. P dan K Desa", img: "/images/woman.jpg" },
      { id: 11, name: "FAJAR ALINUDIN", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" },
      { id: 12, name: "LUKMAN", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" },
      { id: 13, name: "EGA YULIADI", role: "Sekretaris", img: "/images/man.jpg" },
      { id: 14, name: "ADE BAHTIAR", role: "Wakil Sekretaris 1", img: "/images/man.jpg" },
      { id: 15, name: "ATIK MUSTIKA DEWI", role: "Wakil Sekretaris 2", img: "/images/woman.jpg" },
      { id: 16, name: "DEWI APRILIANI", role: "Bendahara", img: "/images/woman.jpg" },
      { id: 17, name: "ENENG SOLEHAH", role: "Wakil Bendahara 1", img: "/images/woman.jpg" },
      { id: 18, name: "JUJU IJUDIN", role: "Wakil Bendahara 2", img: "/images/man.jpg" },
      { id: 19, name: "DASKAM", role: "Wakil Bendahara 3", img: "/images/man.jpg" },
    ],
  },

  // --- DATA KECAMATAN TAMBAKSARI (image_1343af.png) ---
  "tambaksari": {
    nama: "Tambaksari",
    pengurus: [
      { id: 1, name: "NENDI IMAN RUSMANTO", role: "Ketua", img: "/images/man.jpg" }, //
      { id: 2, name: "AGUS", role: "Wkb. Pemilihan Umum", img: "/images/man.jpg" }, //
      { id: 3, name: "DADAN HERNAWAN", role: "Wkb. Organisasi & Keanggotaan", img: "/images/man.jpg" }, //
      { id: 4, name: "DEDE KUSNADI", role: "Wkb. UMKM", img: "/images/man.jpg" }, //
      { id: 5, name: "ENDAYANA", role: "Wkb. Agama dan M.Adat", img: "/images/man.jpg" }, //
      { id: 6, name: "TITI WASTI", role: "Wkb. Kesehatan", img: "/images/woman.jpg" }, //
      { id: 7, name: "IKAH ENI", role: "Wkb. Perempuan dan Anak", img: "/images/woman.jpg" }, //
      { id: 8, name: "YANTI KURNIATI", role: "Wkb. Pariwisata dan I.Kreatif", img: "/images/woman.jpg" }, //
      { id: 9, name: "DEDI RUKAEDI", role: "Wkb. Pertanian. P dan K Desa", img: "/images/man.jpg" }, //
      { id: 10, name: "HAMIM DARMADI", role: "Wkb. Pemuda dan Olahraga", img: "/images/man.jpg" }, //
      { id: 11, name: "ESO SUDARSO", role: "Wkb. Kehutanan A.T & Ruang", img: "/images/man.jpg" }, //
      { id: 12, name: "IIS WARDANI", role: "Sekretaris", img: "/images/woman.jpg" }, //
      { id: 13, name: "LINA MARLINA", role: "Wakil Sekretaris", img: "/images/woman.jpg" }, //
      { id: 14, name: "ELA KOMALASARI", role: "Bendahara", img: "/images/woman.jpg" }, //
      { id: 15, name: "CALAM DARMA SAPUTRA", role: "Wakil Bendahara", img: "/images/man.jpg" }, //
    ],
  },


  }
  // Mika, tambahkan 25 kecamatan lainnya di sini dengan slug yang unik


// 3. KOMPONEN UTAMA
export default function DetailDpcKecamatan() {
  const params = useParams();
  const slug = params.slug as string;
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  // Ambil data berdasarkan slug, jika tidak ditemukan gunakan default kosong
  const dpcInfo = dataDpcKecamatan[slug] || { 
    nama: slug.replace(/-/g, ' ').toUpperCase(), // Fallback nama dari slug
    pengurus: [] 
  };

  // Helper untuk memisahkan KSB (Ketua, Sekretaris, Bendahara) dari Wakil Ketua Bidang
  const ksbPengurus = dpcInfo.pengurus.filter(m => /^(Ketua|Sekretaris|Bendahara)$/.test(m.role));
  const bidPengurus = dpcInfo.pengurus.filter(m => !/^(Ketua|Sekretaris|Bendahara|Wakil Sekretaris 1|Wakil Bendahara 1)$/.test(m.role));
  const wakilKsb = dpcInfo.pengurus.filter(m => /^(Wakil Sekretaris 1|Wakil Bendahara 1)$/.test(m.role));

  // Komponen Kartu Anggota (Konsisten dengan StrukturPage DPD)
  const MemberCard = ({ member }: { member: any }) => (
    <motion.div
      whileHover={{ y: -10 }}
      onClick={() => setSelectedMember(member)}
      className="group cursor-pointer mx-auto w-full max-w-[240px]"
    >
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-[#002a4a] shadow-2xl">
        <img 
          src={member.img} 
          alt={member.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 object-[center_15%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001A2E] via-transparent to-transparent opacity-90" />
        <div className="absolute bottom-4 left-4 right-4">
          {/* Jabatan yang sudah dirapikan dengan formatJabatan */}
          <p className="text-[#FFCC00] text-[9px] font-black uppercase tracking-widest mb-1 leading-tight">
            {formatJabatan(member.role)}
          </p>
          <h3 className="text-sm font-bold leading-tight uppercase">{member.name}</h3>
        </div>
      </div>
    </motion.div>
  );

  return (
    <main className="min-h-screen bg-[#001A2E] text-white overflow-x-hidden">
      <Navbar />

      {/* Header Section: Elegan & Profesional */}
      <section className="pt-40 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-[#FFCC00]/10 border border-[#FFCC00]/20 px-4 py-1.5 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] animate-pulse" />
            <span className="text-[#FFCC00] font-black uppercase tracking-[0.2em] text-[10px]">Struktur Organisasi</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight"
          >
            DPC KECAMATAN <span className="text-[#FFCC00]">{dpcInfo.nama}</span>
          </motion.h1>
          
          <p className="text-slate-400 font-light max-w-2xl mx-auto uppercase tracking-[0.3em] text-[10px]">
            Dewan Pimpinan Cabang Partai NasDem Ciamis Periode 2025-2029
          </p>
        </div>
      </section>

      {/* Konten Utama Section */}
      <section className="max-w-7xl mx-auto px-6 pb-32 space-y-24">
        
        {/* 1. KETUA - Single Card at Top */}
        {ksbPengurus.length > 0 && (
          <div className="text-center space-y-12">
            <h2 className="text-[#FFCC00] font-black uppercase tracking-widest text-xs opacity-50 italic">Pimpinan Cabang</h2>
            <MemberCard member={ksbPengurus[0]} /> {/* Ketua */}
            <div className="h-20 w-px bg-gradient-to-b from-[#FFCC00] to-transparent mx-auto opacity-30" />
          </div>
        )}

        {/* 2. WAKIL KETUA BIDANG - Grid (Tabel Items 2-11) */}
        {bidPengurus.length > 0 && (
          <div className="pt-20 border-t border-white/5 space-y-16">
            <div className="text-center space-y-2">
              <h2 className="text-[#FFCC00] font-black uppercase tracking-widest text-xs">Wakil Ketua Bidang</h2>
              <p className="text-[9px] text-slate-500 uppercase tracking-widest">Unsur Pelaksana Strategis</p>
            </div>
            {/* Grid dinamis: 2 kolom di HP, 4 kolom di Desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-10 md:gap-y-16">
                            {bidPengurus.map(m => (
                <MemberCard key={`${m.id}-${m.role}`} member={m} />
                ))}
            </div>
          </div>
        )}

        {/* 3. SEKRETARIAT & KEBENDAHARAAN - Grid (Tabel Items 12-15) */}
        {ksbPengurus.length > 1 && (
          <div className="pt-20 border-t border-white/5 space-y-16">
            <div className="text-center space-y-2">
              <h2 className="text-[#FFCC00] font-black uppercase tracking-widest text-xs">Sekretariat & Kebendaharaan</h2>
              <p className="text-[9px] text-slate-500 uppercase tracking-widest">Unsur Administrasi & Keuangan</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
              <MemberCard member={ksbPengurus[1]} /> {/* Sekretaris */}
              {wakilKsb.length > 0 && <MemberCard member={wakilKsb[0]} />} {/* Wasek 1 */}
              <MemberCard member={ksbPengurus[2]} /> {/* Bendahara */}
              {wakilKsb.length > 1 && <MemberCard member={wakilKsb[1]} />} {/* Waben 1 */}
            </div>
          </div>
        )}
      </section>

      {/* Modal Detail Tetap Sama dengan DPD, Berfungsi dengan formatJabatan */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-[#001A2E]/95 backdrop-blur-md"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#002a4a] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2rem] border border-white/10 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-5 h-[350px] md:h-full">
                  <img src={selectedMember.img} className="w-full h-full object-cover grayscale object-[center_15%]" />
                </div>
                <div className="md:col-span-7 p-8 md:p-12 space-y-6 flex flex-col justify-center">
                  <div>
                    <p className="text-[#FFCC00] font-black uppercase tracking-widest text-[10px] mb-2">
                      {formatJabatan(selectedMember.role)}
                    </p>
                    <h2 className="text-3xl font-black uppercase tracking-tighter">{selectedMember.name}</h2>
                  </div>
                  <div className="pt-6 border-t border-white/10 space-y-6">
                    <div>
                      <h4 className="text-[10px] uppercase text-slate-500 mb-2 font-black tracking-widest">Visi Perjuangan</h4>
                      <p className="text-sm italic text-slate-300 font-light leading-relaxed">"Mewujudkan restorasi Indonesia yang adil dan makmur, dimulai dari tingkat kecamatan."</p>
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