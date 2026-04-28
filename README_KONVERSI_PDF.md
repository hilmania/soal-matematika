# 📋 PANDUAN LENGKAP - KONVERSI KE PDF

Semua file soal sudah disiapkan dalam format **HTML** yang siap diprint ke PDF!

---

## 📁 FILE-FILE YANG TERSEDIA

### **1. SOAL_LOMBA_MATEMATIKA_KELAS_2_SD**
- **Format:** Markdown (.md) + HTML (.html)
- **Isi:** 200 soal (4 kategori × 50 soal)
- **Kategori:** Arithmetic, Numeric Logic, Spatial, Memory
- **Level:** Kelas 2 SD
- **Ukuran:** ~20KB

### **2. SOAL_DISCOVERY_OF_CHAMPIONS_KELAS_1-6_SD**
- **Format:** Markdown (.md) + HTML (.html)
- **Isi:** Template 3 level dengan contoh soal
- **Level:** Kelas 1-2, 3-4, 5-6 SD
- **Format:** Discovery of Champions
- **Ukuran:** ~16KB

### **3. SOAL_LEVEL_1_KELAS_1-2_SD** ⭐
- **Format:** Markdown (.md) + HTML (.html)
- **Isi:** 200 soal lengkap Level 1
- **Kategori:** 
  - Arithmetic (Number Bond): 50 soal
  - Numeric Logic (Teka-teki Bilangan): 50 soal
  - Spatial (Orientasi Arah): 50 soal
  - Memory (Mengingat Angka): 50 soal
- **Kunci Jawaban:** Lengkap dengan tabel
- **Ukuran:** ~39KB

### **Style File**
- **style-print.css** - CSS untuk print optimal

---

## 🖨️ CARA CONVERT KE PDF - PILIH SATU:

### **METODE 1: Browser Print (PALING MUDAH) ⭐⭐⭐**

#### Langkah:
1. **Buka file HTML**
   ```bash
   open SOAL_LEVEL_1_KELAS_1-2_SD.html
   ```
   Atau double-click file HTML di Finder

2. **Tunggu halaman load sepenuhnya** (2-3 detik)

3. **Print ke PDF** (Pilih salah satu):
   - **Metode A (Recommended):**
     - Tekan `⌘ + P` (Command + P)
     - Di dropdown PDF pilih "Save as PDF"
     - Tentukan nama dan lokasi
     - Click "Save"

   - **Metode B (Safari/Chrome):**
     - File Menu → Print → PDF → Save as PDF

   - **Metode C (macOS):**
     - Tekan `⌘ + P`
     - Click "PDF" di dropdown
     - "Open PDF in Preview" untuk preview sebelum save

4. **Setting Optimal:**
   - Format Kertas: **A4**
   - Margin: **Normal** atau **Default**
   - Scale/Zoom: **100%**
   - Paper Type: **Plain Paper**
   - Orientation: **Portrait**

---

### **METODE 2: Command Line (Terminal)**

#### Jika sudah install Pandoc:
```bash
cd /Users/hilmania/Documents/soal-matematika-kelas2SD/

# Konversi satu file
pandoc SOAL_LEVEL_1_KELAS_1-2_SD.md -o SOAL_LEVEL_1_KELAS_1-2_SD.pdf

# Atau konversi semua
for file in SOAL_*.md; do
  pandoc "$file" -o "${file%.md}.pdf"
done
```

#### Jika sudah install wkhtmltopdf:
```bash
wkhtmltopdf SOAL_LEVEL_1_KELAS_1-2_SD.html SOAL_LEVEL_1_KELAS_1-2_SD.pdf
```

---

### **METODE 3: Online Converter**

1. Buka https://cloudconvert.com/html-to-pdf
2. Upload file HTML
3. Click "Convert"
4. Download file PDF

---

## ✅ TIPS & TRIK

### **Untuk Hasil Terbaik:**
- ✓ Gunakan **Safari** atau **Chrome** (hasil lebih konsisten)
- ✓ Refresh halaman sebelum print (⌘ + R)
- ✓ Pastikan zoom browser = **100%**
- ✓ Matikan "Print backgrounds" jika file terlalu besar
- ✓ Gunakan "Print to File" bukan "Print to Printer"

### **Jika Ada Masalah:**

| Masalah | Solusi |
|---------|--------|
| Halaman terputus | Reduce zoom ke 95% sebelum print |
| Gambar tidak muncul | Reload halaman & tunggu load penuh |
| Font jelek | Gunakan Chrome bukan Safari |
| File terlalu besar | Normal, file berisi 200 soal |
| Background warna hilang | Cek "Print backgrounds" di print dialog |

---

## 📊 ISI SOAL PER FILE

### **SOAL_LEVEL_1_KELAS_1-2_SD.html** (REKOMENDASI)

```
KATEGORI 1: ARITHMETIC (50 soal)
├── Topik: Ikatan Bilangan (Number Bond)
├── Tipe: Pilih persamaan yang TIDAK sesuai
└── Contoh: 8 = 3 + 5, mana yang salah?

KATEGORI 2: NUMERIC LOGIC (50 soal)
├── Topik: Teka-Teki Bilangan
├── Tipe: Logika dengan kondisi berjenjang
└── Contoh: Bilangan lebih besar 2, kurang dari 6, bukan genap = ?

KATEGORI 3: SPATIAL (50 soal)
├── Topik: Orientasi & Arah (4 Mata Angin)
├── Tipe: Rotasi & perputaran arah
└── Contoh: Hadap utara, putar kanan = menghadap?

KATEGORI 4: MEMORY (50 soal)
├── Topik: Mengingat Angka & Posisi
├── Tipe: Hafal deretan angka, jawab pertanyaan
└── Contoh: Baris "3 7 2 9 1", angka ke-3 = ?

TOTAL: 200 SOAL + KUNCI JAWABAN
```

---

## 🔍 QA CHECKLIST

Sebelum print, pastikan:
- ✓ File HTML sudah dibuka dan fully loaded
- ✓ Tidak ada error di browser console
- ✓ Semua soal dan jawaban terlihat
- ✓ Tabel jawaban lengkap di bagian akhir
- ✓ Browser zoom = 100%

---

## 📱 KOMPATIBILITAS

| Aplikasi | Status | Notes |
|----------|--------|-------|
| Safari | ✓ Optimal | Native macOS |
| Chrome | ✓ Optimal | Recommended |
| Firefox | ✓ Baik | Support penuh |
| Edge | ✓ Baik | Windows alternative |

---

## 💾 UKURAN FILE PDF (ESTIMASI)

| File | Halaman | Ukuran PDF (estimasi) |
|------|---------|---------------------|
| SOAL_LOMBA_MATEMATIKA_KELAS_2_SD | ~25-30 | 500KB-1MB |
| SOAL_DISCOVERY_OF_CHAMPIONS | ~15-20 | 300-500KB |
| SOAL_LEVEL_1_KELAS_1-2_SD | ~35-40 | 700KB-1.2MB |

*Estimasi dapat berbeda tergkau setting print*

---

## 🎯 LANGKAH CEPAT (30 DETIK)

```bash
# Terminal shortcut
open SOAL_LEVEL_1_KELAS_1-2_SD.html && echo "Tekan ⌘+P untuk print"
```

Atau:
1. Double-click `SOAL_LEVEL_1_KELAS_1-2_SD.html`
2. Tekan `⌘ + P`
3. Pilih "Save as PDF"
4. Done! ✓

---

## 📞 BANTUAN

Jika mengalami masalah:

1. **Markdown to PDF langsung** (tanpa HTML):
   ```bash
   pandoc SOAL_LEVEL_1_KELAS_1-2_SD.md -o output.pdf
   ```

2. **Lihat file dengan lebih detail:**
   ```bash
   # View in Preview
   open SOAL_LEVEL_1_KELAS_1-2_SD.html -a Preview
   ```

3. **Check file size:**
   ```bash
   ls -lh SOAL_*.html
   ```

---

**Semua file siap digunakan! Pilih metode yang paling mudah untuk Anda.** ✓

Pertanyaan? Lihat `CARA_PRINT_KE_PDF.md` untuk informasi lebih detail.
