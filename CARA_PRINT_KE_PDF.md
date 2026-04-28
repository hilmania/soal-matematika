# CARA MENGKONVERSI HTML KE PDF

File HTML sudah berhasil dibuat dan siap untuk dikonversi ke PDF. Berikut adalah cara-caranya:

## METODE 1: Menggunakan Browser (Paling Mudah) ⭐

### Langkah-langkah:

1. **Buka file HTML**
   - Buka Finder dan navigasi ke folder: `/Users/hilmania/Documents/soal-matematika-kelas2SD/`
   - Double-click salah satu file HTML:
     - `SOAL_LOMBA_MATEMATIKA_KELAS_2_SD.html`
     - `SOAL_DISCOVERY_OF_CHAMPIONS_KELAS_1-6_SD.html`
     - `SOAL_LEVEL_1_KELAS_1-2_SD.html`

2. **Print ke PDF**
   - Tekan `⌘ + P` (Command + P)
   - Di dialog Print, pilih opsi "PDF"
   - Klik "Save as PDF"
   - Beri nama file dan pilih lokasi penyimpanan

3. **Atau gunakan "Export as PDF"**
   - Di Safari: File → Export as PDF
   - Di Chrome: File → Print → Save as PDF

---

## METODE 2: Menggunakan Terminal (Command Line)

### Jika sudah install wkhtmltopdf:
```bash
cd /Users/hilmania/Documents/soal-matematika-kelas2SD/
wkhtmltopdf SOAL_LOMBA_MATEMATIKA_KELAS_2_SD.html SOAL_LOMBA_MATEMATIKA_KELAS_2_SD.pdf
```

### Jika sudah install pandoc dengan LaTeX:
```bash
cd /Users/hilmania/Documents/soal-matematika-kelas2SD/
pandoc SOAL_LOMBA_MATEMATIKA_KELAS_2_SD.md -o SOAL_LOMBA_MATEMATIKA_KELAS_2_SD.pdf
```

---

## METODE 3: Menggunakan Online Converter

1. Buka https://cloudconvert.com/html-to-pdf
2. Upload file HTML
3. Klik "Convert"
4. Download file PDF hasil konversi

---

## FILE YANG SUDAH DISIAPKAN

✓ **SOAL_LOMBA_MATEMATIKA_KELAS_2_SD.html**
- Format standar 4 kategori
- 200 soal untuk kelas 2 SD

✓ **SOAL_DISCOVERY_OF_CHAMPIONS_KELAS_1-6_SD.html**
- Template 3 level (kelas 1-2, 3-4, 5-6)
- Format sesuai Discovery of Champions

✓ **SOAL_LEVEL_1_KELAS_1-2_SD.html**
- 50 soal per kategori
- Level 1 (Kelas 1-2 SD) lengkap
- Format Discovery of Champions

---

## REKOMENDASI

**Untuk hasil terbaik:**
1. Gunakan **Safari** atau **Chrome** (hasil lebih konsisten)
2. Pastikan zoom di browser = 100% sebelum print
3. Di dialog print:
   - Format Kertas: A4
   - Margin: Normal atau Default
   - Orientation: Portrait
   - Paper Size: A4

**Tips:**
- Preview hasil print sebelum save PDF
- Jika ada halaman yang terputus, reduce zoom menjadi 95%
- Gunakan "Print backgrounds" untuk hasil lebih baik

---

## TROUBLESHOOTING

**Q: Gambar tidak muncul di PDF?**
A: Pastikan browser sudah fully load file HTML sebelum print

**Q: Layout berantakan?**
A: Coba gunakan browser yang berbeda atau reduce zoom ke 95-90%

**Q: File terlalu besar?**
A: Ini normal, file berisi 200 soal per file

---

**File-file sudah siap! Silakan print menggunakan metode di atas.**
