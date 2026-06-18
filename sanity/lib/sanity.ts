import { createClient } from "next-sanity";

export const client = createClient({
  // Menggunakan variabel dari .env.local Anda
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-05-01",
  useCdn: false, 
  // Pastikan nama ini sama dengan yang di file .env.local
  // Jika di komponen client, tambahkan NEXT_PUBLIC_ di .env dan di sini
  token: process.env.NEXT_PUBLIC_SANITY_API_WRITE_TOKEN || process.env.SANITY_API_WRITE_TOKEN, 
});