# Portfolio — Putra Raja Aljabbar

Website portfolio statis (HTML + Tailwind CSS CDN + Vanilla JS), responsive, dua bahasa (**EN / ID**, default **EN**), siap di-deploy gratis ke **GitHub Pages** di `https://rajaaljabbar.github.io`.

## Struktur Folder

```
putra-portfolio/
├── index.html                 # Halaman utama (default: English)
├── 404.html                   # Halaman error GitHub Pages (dwibahasa EN/ID)
├── robots.txt
├── sitemap.xml
├── .nojekyll                  # Matikan proses Jekyll di GitHub Pages
├── .gitignore
├── .github/workflows/deploy.yml   # Auto-deploy saat push ke main + auto-versi footer (v2.0.x)
└── assets/
    ├── css/style.css          # Style kustom
    ├── js/
    │   ├── tailwind.config.js # Tema Tailwind (warna, font, spacing)
    │   ├── i18n.js            # Kamus terjemahan EN/ID + tombol toggle bahasa
    │   └── main.js            # Typewriter, modal, menu mobile, scroll-spy, form, footer
    ├── img/                   # Logo, foto profil, gambar proyek (terkompres < 200 KB)
    └── docs/resumeputra.pdf   # CV (tombol "Download CV" membuka PDF ini di tab baru)
```

## Menjalankan Lokal

```bash
python -m http.server 8000   # lalu buka http://localhost:8000
```

Membuka `index.html` langsung (`file:///`) juga bisa.

## Mengubah Teks / Bahasa

Semua kalimat yang bisa diterjemahkan ada di `assets/js/i18n.js` dalam bentuk pasangan `["teks Indonesia", "English text"]`.
Istilah teknis IT tetap dipertahankan dalam bahasa Inggris di kedua mode.
Bahasa pilihan pengunjung disimpan di `localStorage`; bahasa awal diatur lewat `DEFAULT_LANG = "en"` di `i18n.js`.

## Deploy ke GitHub Pages

Nama repository harus **`rajaaljabbar.github.io`** agar URL menjadi `https://rajaaljabbar.github.io`.

```bash
git add .
git commit -m "feat(v2.0.0): bilingual EN/ID portfolio & audit optimizations"
git remote add origin https://github.com/rajaaljabbar/rajaaljabbar.github.io.git
git push -u origin main
```

Lalu di GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
Setiap push ke `main` otomatis ter-deploy lewat `.github/workflows/deploy.yml`, dan versi footer (`pra-kernel@v2.0.N`) naik otomatis.

## Changelog

### `v2.0.0` (2026-11-18)
- **Bilingual Toggle (`EN` / `ID`):** Menambahkan switcher bahasa di header (desktop & mobile) dengan bahasa default **English (`EN`)** dan mode **Indonesian (`ID`)** yang mempertahankan terminologi teknis IT tetap dalam bahasa Inggris.
- **Image Optimization:** Mengompresi gambar beresolusi besar di `assets/img/` dari total ~9,3 MB menjadi ~724 KB (pengurangan 92%) agar loading cepat dan preview OpenGraph WhatsApp/LinkedIn tampil optimal.
- **SEO & Metadata:** Menambahkan canonical URL, OpenGraph URL absolut, Twitter Card, JSON-LD `Person` schema, dan `sitemap.xml`.
- **Accessibility & UX:** Menambahkan focus trap keyboard (`Tab`/`Shift+Tab`) pada modal STAR, atribut `width`/`height` pada seluruh `<img>` untuk mencegah layout shift (CLS), serta custom scrollbar tipis di `style.css`.
- **Projects & Experience:** Menambahkan total 6 proyek arsitektur STAR beserta riwayat karier terbaru dan integrasi `assets/docs/resumeputra.pdf` (buka di tab baru).
