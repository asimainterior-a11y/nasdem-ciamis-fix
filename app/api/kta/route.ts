import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

// Inisialisasi Sanity Client (Hanya berjalan di Server)
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  // Menggunakan token tanpa "NEXT_PUBLIC_" agar aman
  token: process.env.SANITY_API_WRITE_TOKEN, 
  apiVersion: '2024-05-02',
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validasi data sederhana
    if (!body.nik || !body.nama) {
      return NextResponse.json({ message: 'NIK dan Nama wajib diisi' }, { status: 400 });
    }

    // Simpan data ke Sanity dengan tipe dokumen 'kta'
    const result = await client.create({
      _type: 'kta',
      nama: body.nama,
      nik: body.nik,
      whatsapp: body.whatsapp,
      email: body.email,
      alamat: body.alamat,
      pekerjaan: body.pekerjaan,
      pendidikan: body.pendidikan,
      statusVerifikasi: 'pending',
    });

    return NextResponse.json({ message: 'Pendaftaran berhasil', id: result._id }, { status: 200 });
  } catch (error) {
    console.error('Sanity Error:', error);
    return NextResponse.json({ message: 'Terjadi kesalahan pada server' }, { status: 500 });
  }
}