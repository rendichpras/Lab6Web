# Praktikum 6: JavaScript DOM dan Event Handling

* **Nama:** Rendi Ichtiar Prasetyo
* **NIM:** 312510087
* **Kelas:** I251A
* **Mata Kuliah:** Pemrograman Web (Pertemuan 7)

## Deskripsi
Praktikum ini membahas manipulasi Document Object Model (DOM) dan penanganan event menggunakan JavaScript murni. Praktikum mencakup pemilihan elemen, modifikasi konten dan class CSS, event click, event input, validasi form, pembuatan To-do list dinamis, serta Mini Project form pendaftaran workshop.

## Struktur File
* `index.html`: Berisi elemen HTML untuk Latihan 1 sampai 6, Eksperimen Mandiri, dan Mini Project.
* `style.css`: Berisi styling untuk highlight teks, todo list selesai, tombol hapus, pesan error/sukses, dan tata letak dasar.
* `script.js`: Berisi logika JavaScript untuk manipulasi DOM, event listener, validasi form, dan to-do list.

## Cara Menjalankan
1. Buka folder proyek di file explorer atau Visual Studio Code.
2. Buka file `index.html` menggunakan browser (klik ganda atau melalui ekstensi Live Server).
3. Buka Console di Developer Tools (`F12`) untuk melihat status atau pesan JavaScript.

## Fitur yang Dikerjakan
1. **Latihan 1:** Mengubah teks elemen HTML menggunakan `textContent`.
2. **Latihan 2:** Event `click` untuk menampilkan waktu klik tombol.
3. **Latihan 3:** Mengubah tampilan dengan `classList.toggle()` untuk class `.highlight` dan `.teks-besar`.
4. **Latihan 4:** Event `input` untuk menghitung jumlah karakter secara langsung saat mengetik nama.
5. **Latihan 5:** Validasi form (nama kosong, batas minimal 3 karakter, format email regex, batas usia 17–100 tahun).
6. **Latihan 6 & Eksperimen 1:** To-Do List dengan fitur tambah tugas, penanda tugas selesai (`classList.toggle`), dan tombol hapus tugas (`item.remove()`).
7. **Eksperimen Mandiri 4:** Tombol toggle untuk menyembunyikan dan menampilkan kembali paragraf.
8. **Mini Project:** Form pendaftaran workshop dengan:
   - Validasi nama (min 3 karakter), email, dan pilihan sesi workshop.
   - Penghitung karakter nama secara real-time.
   - Ringkasan data input langsung (live preview).
   - Event `change` untuk mendeteksi pilihan sesi.
   - Tombol reset untuk mengosongkan input.
   - Pesan sukses dan pesan error yang tampil langsung pada halaman.
