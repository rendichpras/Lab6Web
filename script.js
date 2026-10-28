// Latihan 1 — Mengubah teks dengan DOM
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

// Latihan 2 — Event click
const tombol = document.getElementById("tombolAksi");
tombol.addEventListener("click", function () {
  pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

// Latihan 3 — Mengubah kelas dan gaya CSS
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");
tombolGaya.addEventListener("click", function () {
  teksGaya.classList.toggle("highlight");
  teksGaya.classList.toggle("teks-besar");
});

// Eksperimen Mandiri 4 — Sembunyikan & Tampilkan Paragraf
const tombolToggleParagraf = document.getElementById("tombolToggleParagraf");
const paragrafSembunyi = document.getElementById("paragrafSembunyi");
tombolToggleParagraf.addEventListener("click", function () {
  paragrafSembunyi.classList.toggle("tersembunyi");
  if (paragrafSembunyi.classList.contains("tersembunyi")) {
    tombolToggleParagraf.textContent = "Tampilkan Paragraf";
  } else {
    tombolToggleParagraf.textContent = "Sembunyikan Paragraf";
  }
});

// Latihan 4 — Event input dan penghitung karakter
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");
namaInput.addEventListener("input", function () {
  jumlahKarakter.textContent = namaInput.value.length;
});

// Latihan 5 — Validasi form pendaftaran (dilengkapi Eksperimen Mandiri 2)
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const usiaInput = document.getElementById("usia").value;
  const usia = Number(usiaInput);
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nama === "") {
    pesanForm.className = "pesan-error";
    pesanForm.textContent = "Nama wajib diisi.";
  } else if (nama.length < 3) {
    // Eksperimen Mandiri 2
    pesanForm.className = "pesan-error";
    pesanForm.textContent = "Nama minimal terdiri dari 3 karakter.";
  } else if (!polaEmail.test(email)) {
    pesanForm.className = "pesan-error";
    pesanForm.textContent = "Masukkan email yang valid.";
  } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
    pesanForm.className = "pesan-error";
    pesanForm.textContent = "Usia harus berupa bilangan bulat 17–100.";
  } else {
    pesanForm.className = "pesan-sukses";
    pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
    form.reset();
  }
});

// Latihan 6 — Daftar tugas sederhana (To-do List) & Eksperimen Mandiri 1
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
  const teks = inputTugas.value.trim();
  if (teks === "") {
    pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
    return;
  }
  const item = document.createElement("li");
  const label = document.createElement("span");
  const selesai = document.createElement("button");
  const hapus = document.createElement("button");

  label.textContent = teks + " ";
  selesai.type = "button";
  selesai.textContent = "Tandai selesai";
  selesai.addEventListener("click", function () {
    item.classList.toggle("selesai");
    selesai.textContent = item.classList.contains("selesai")
      ? "Batalkan selesai"
      : "Tandai selesai";
  });

  // Eksperimen Mandiri 1: Tombol hapus tugas
  hapus.type = "button";
  hapus.textContent = "Hapus";
  hapus.className = "btn-hapus";
  hapus.addEventListener("click", function () {
    item.remove();
    pesanTugas.textContent = "Tugas berhasil dihapus.";
  });

  item.append(label, selesai, hapus);
  daftarTugas.appendChild(item);
  inputTugas.value = "";
  pesanTugas.textContent = "Tugas ditambahkan.";
  inputTugas.focus();
});

// ==========================================================
// F. Mini Project — Form Pendaftaran Workshop
// ==========================================================
const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");
const counterNama = document.getElementById("counterNama");
const infoSesi = document.getElementById("infoSesi");
const pesanWorkshop = document.getElementById("pesanWorkshop");
const btnResetWorkshop = document.getElementById("btnResetWorkshop");

const previewNama = document.getElementById("previewNama");
const previewEmail = document.getElementById("previewEmail");
const previewSesi = document.getElementById("previewSesi");

// 1. Live character counter & ringkasan langsung nama
namaWorkshop.addEventListener("input", function () {
  counterNama.textContent = namaWorkshop.value.length;
  previewNama.textContent = namaWorkshop.value.trim() || "-";
});

// 2. Ringkasan langsung email
emailWorkshop.addEventListener("input", function () {
  previewEmail.textContent = emailWorkshop.value.trim() || "-";
});

// 3. Event change pada dropdown sesi workshop (Eksperimen Mandiri 3)
sesiWorkshop.addEventListener("change", function () {
  const sesiTerpilih = sesiWorkshop.value;
  if (sesiTerpilih !== "") {
    infoSesi.textContent = "Sesi dipilih: " + sesiTerpilih;
    previewSesi.textContent = sesiTerpilih;
  } else {
    infoSesi.textContent = "Belum ada sesi yang dipilih.";
    previewSesi.textContent = "-";
  }
});

// 4. Tombol reset untuk mengosongkan input & ringkasan
btnResetWorkshop.addEventListener("click", function () {
  formWorkshop.reset();
  counterNama.textContent = "0";
  infoSesi.textContent = "Belum ada sesi yang dipilih.";
  previewNama.textContent = "-";
  previewEmail.textContent = "-";
  previewSesi.textContent = "-";
  pesanWorkshop.textContent = "";
  pesanWorkshop.className = "";
});

// 5. Validasi form saat submit
formWorkshop.addEventListener("submit", function (event) {
  event.preventDefault();
  const nama = namaWorkshop.value.trim();
  const email = emailWorkshop.value.trim();
  const sesi = sesiWorkshop.value;
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nama === "") {
    pesanWorkshop.className = "pesan-error";
    pesanWorkshop.textContent = "Nama lengkap wajib diisi.";
  } else if (nama.length < 3) {
    pesanWorkshop.className = "pesan-error";
    pesanWorkshop.textContent = "Nama minimal terdiri dari 3 karakter.";
  } else if (!polaEmail.test(email)) {
    pesanWorkshop.className = "pesan-error";
    pesanWorkshop.textContent = "Format email tidak valid.";
  } else if (sesi === "") {
    pesanWorkshop.className = "pesan-error";
    pesanWorkshop.textContent = "Silakan pilih salah satu sesi workshop.";
  } else {
    pesanWorkshop.className = "pesan-sukses";
    pesanWorkshop.textContent = "Pendaftaran berhasil! Terima kasih " + nama + ", Anda terdaftar pada sesi " + sesi + ".";
    formWorkshop.reset();
    counterNama.textContent = "0";
    infoSesi.textContent = "Belum ada sesi yang dipilih.";
  }
});
