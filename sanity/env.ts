export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-05-01'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', // Tambahkan 'production' sebagai default
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bb6egx7d', // Ganti dengan ID proyek asli Anda
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined || v === '') { // Tambahkan pengecekan string kosong
    throw new Error(errorMessage)
  }

  return v
}