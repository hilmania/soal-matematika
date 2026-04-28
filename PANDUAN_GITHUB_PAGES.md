# 📱 Panduan Deploy ke GitHub Pages

Ikuti langkah-langkah ini untuk membuat soal matematika Anda bisa diakses online!

---

## LANGKAH 1: Persiapan (5 menit)

### 1.1 Install Git (jika belum)
```bash
# Check apakah Git sudah terinstall
git --version

# Jika belum, install via Homebrew
brew install git
```

### 1.2 Setup Git Configuration
```bash
# Set nama dan email (ganti dengan data Anda)
git config --global user.name "Nama Anda"
git config --global user.email "email@gmail.com"

# Verify
git config --global --list
```

---

## LANGKAH 2: Buat Repository di GitHub (5 menit)

### 2.1 Login ke GitHub
1. Buka https://github.com
2. Login dengan akun Anda (atau buat akun baru jika belum)

### 2.2 Buat Repository Baru
1. Klik **"+" (New)** di kanan atas
2. Pilih **"New repository"**
3. **Isi form:**
   - Repository name: `soal-matematika` (atau nama lain)
   - Description: "Kuis Matematika Interaktif Kelas 1-2 SD"
   - Visibility: **Public** (agar bisa diakses siapa saja)
   - ✅ Initialize this repository with a README
4. Klik **"Create repository"**

### 2.3 Copy Repository URL
- Klik tombol **"Code"** (hijau)
- Copy URL HTTPS: `https://github.com/username/soal-matematika.git`

---

## LANGKAH 3: Upload File ke GitHub (10 menit)

### 3.1 Buka Terminal dan Navigate ke Folder
```bash
cd /Users/hilmania/Documents/soal-matematika-kelas2SD
```

### 3.2 Initialize Git Repository (Lokal)
```bash
# Initialize repository lokal
git init

# Add GitHub repo sebagai remote
git remote add origin https://github.com/USERNAME/soal-matematika.git
# Ganti USERNAME dengan username GitHub Anda!

# Verify
git remote -v
```

### 3.3 Add dan Commit File
```bash
# Lihat file yang akan di-upload
git status

# Add semua file
git add .

# Commit dengan pesan
git commit -m "Add: Quiz Matematika Interaktif Kelas 1-2 SD"
```

### 3.4 Push ke GitHub
```bash
# Rename branch ke main (jika diperlukan)
git branch -M main

# Push ke GitHub
git push -u origin main

# Jika diminta, masukkan GitHub token atau password
```

**Untuk GitHub Personal Access Token (recommended):**
1. GitHub Settings → Developer settings → Personal access tokens
2. Pilih "Tokens (classic)" → Generate new token
3. Berikan permissions: `repo`, `public_repo`
4. Copy token
5. Saat diminta password, paste token sebagai password

---

## LANGKAH 4: Enable GitHub Pages (3 menit)

### 4.1 Buka Settings Repository
1. Buka repository Anda di GitHub
2. Klik tab **"Settings"**
3. Scroll ke bawah, cari **"Pages"** (di menu kiri)

### 4.2 Setup GitHub Pages
1. Di bawah **"Source"**, pilih:
   - Branch: **`main`** (atau `master`)
   - Folder: **`/ (root)`**
2. Klik **"Save"**

### 4.3 Tunggu Build Selesai
- GitHub akan menampilkan status "Building..." lalu "Your site is live at..."
- Tunggu 1-2 menit sampai selesai
- Refresh halaman untuk update

---

## LANGKAH 5: Akses Website Online (30 detik)

Setelah build selesai, website Anda bisa diakses di:
```
https://USERNAME.github.io/soal-matematika/
```

**Contoh:**
```
https://hilmania.github.io/soal-matematika/quiz_interaktif_50soal.html
```

### Untuk Akses File Spesifik:
```
# Quiz interaktif 50 soal
https://USERNAME.github.io/soal-matematika/quiz_interaktif_50soal.html

# Quiz dengan 10 soal
https://USERNAME.github.io/soal-matematika/quiz_interaktif.html

# File markdown (will be formatted as HTML)
https://USERNAME.github.io/soal-matematika/SOAL_LEVEL_1_KELAS_1-2_SD.html
```

---

## LANGKAH 6: Update File ke GitHub (Jika ada perubahan)

Jika ingin menambah/mengubah soal atau file:

```bash
# Navigate ke folder
cd /Users/hilmania/Documents/soal-matematika-kelas2SD

# Edit file sesuai keinginan Anda (gunakan text editor)

# Check perubahan
git status

# Add perubahan
git add .

# Commit
git commit -m "Update: Menambah 50 soal baru"

# Push ke GitHub
git push origin main

# Website otomatis update dalam 1-2 menit!
```

---

## 💡 TIPS & TRIK

### Membuat Index File (Halaman Utama)
Buat file `index.html` agar website lebih user-friendly:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Kuis Matematika - Kelas 1-2 SD</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            max-width: 600px;
        }
        h1 { color: #667eea; margin-bottom: 20px; }
        .button {
            display: inline-block;
            padding: 15px 30px;
            margin: 10px;
            background: #667eea;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        .button:hover {
            background: #5568d3;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🧮 Kuis Matematika Interaktif</h1>
        <p>Kelas 1-2 SD - 200 Soal Variatif</p>
        
        <a href="quiz_interaktif_50soal.html" class="button">
            ▶️ Mulai Quiz (50 Soal)
        </a>
        
        <a href="quiz_interaktif.html" class="button">
            ▶️ Quiz Contoh (10 Soal)
        </a>
        
        <hr style="margin: 30px 0;">
        
        <p style="color: #666;">
            <strong>Fitur:</strong><br>
            ✅ 4 Kategori Soal<br>
            ✅ Feedback Instant (Benar/Salah)<br>
            ✅ Hitung Skor Otomatis<br>
            ✅ Responsive & Mobile-Friendly
        </p>
    </div>
</body>
</html>
```

Simpan sebagai `index.html` di folder yang sama, kemudian:
```bash
git add index.html
git commit -m "Add: Homepage untuk akses mudah"
git push origin main
```

Sekarang akses langsung ke: `https://USERNAME.github.io/soal-matematika/`

---

## 🔗 SHARE LINK

### Setelah Online, Share dengan:
```
📱 WhatsApp, Email, Social Media:
"Hai, coba kuis matematika online kami! 
https://USERNAME.github.io/soal-matematika/"

👥 Google Classroom / LMS:
Paste link langsung ke assignment/resource

💬 QR Code:
Buat QR code dari link untuk dicetak
(https://qr-code-generator.com/)
```

---

## ⚠️ TROUBLESHOOTING

| Masalah | Solusi |
|---------|--------|
| **404 Not Found** | Tunggu 2-3 menit, GitHub Pages masih build |
| **File tidak muncul** | Pastikan branch: `main`, folder: `root` |
| **Push error: Permission denied** | Gunakan Personal Access Token, bukan password |
| **Website tidak update setelah push** | Cache browser, buka Private/Incognito window |
| **Branch masih `master` bukan `main`** | Rename: `git branch -M main` |

---

## 📊 RINGKASAN COMMAND

```bash
# 1. Setup pertama kali
cd /path/to/folder
git init
git remote add origin https://github.com/USERNAME/repo.git
git branch -M main

# 2. Upload awal
git add .
git commit -m "Initial commit"
git push -u origin main

# 3. Update berikutnya
git add .
git commit -m "Update message"
git push origin main

# 4. Check status
git status
git log
```

---

## 🎉 SELESAI!

Website Anda sekarang online dan bisa diakses dari mana saja!

**Contoh URL akhir:**
```
https://hilmania.github.io/soal-matematika/quiz_interaktif_50soal.html
```

---

## 📚 Dokumentasi Resmi:
- GitHub Pages: https://pages.github.com/
- GitHub Docs: https://docs.github.com/en/pages
- Git Guide: https://git-scm.com/

**Butuh bantuan? Hubungi GitHub Support atau tanya di Stack Overflow!** 💪
