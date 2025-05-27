// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'; // Jika Anda sudah menambahkan sitemap

export default defineConfig({
  // Tambahkan atau perbarui baris ini:
  site: 'https://camatbola.netlify.app/', // PENTING: Ganti dengan URL situs Netlify Anda
  // ... konfigurasi lainnya
  integrations: [sitemap()], // Jika Anda sudah menambahkan sitemap
});
// https://astro.build/config
export default defineConfig({});
