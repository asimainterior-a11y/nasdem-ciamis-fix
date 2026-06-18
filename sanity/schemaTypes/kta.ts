// schemaTypes/kta.ts
export default {
  name: 'kta',
  title: 'Pendaftaran KTA',
  type: 'document',
  fields: [
    { name: 'nama', title: 'Nama Lengkap', type: 'string' },
    { name: 'nik', title: 'NIK', type: 'string' },
    { name: 'whatsapp', title: 'WhatsApp', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'alamat', title: 'Alamat', type: 'text' },
    { name: 'pekerjaan', title: 'Pekerjaan', type: 'string' },
    { name: 'pendidikan', title: 'Pendidikan', type: 'string' },
    { 
      name: 'statusVerifikasi', 
      title: 'Status Verifikasi', 
      type: 'string', 
      initialValue: 'pending',
      options: { list: ['pending', 'verified', 'rejected'] }
    },
  ],
};