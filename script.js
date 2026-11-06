// ====== CONFIG: ubah data di sini ======
const CONFIG = {
  whatsapp: "6282324102206",
  telpTampil: "0823 2410 2206",
  // Foto galeri: file ada di folder images/. Tambah/ubah baris untuk mengganti foto.
  // Tambah/ubah baris untuk menambah foto, "ket" = keterangan (boleh kosong).
  // VIDEO di galeri: simpan file di folder images/, lalu tambahkan baris seperti ini di daftar galeri:
  //   { video: "images/video-1.mp4", src: "images/video-1.jpg", ket: "Seru di trek" },   (src = gambar sampul, boleh dihapus)
  //   { yt: "ID_VIDEO_YOUTUBE", ket: "Video YouTube" },
  galeri: [
    { src: "images/galeri-1.jpg", ket: "Berpose dengan latar Gunung Merapi" },
    { src: "images/galeri-2.jpg", ket: "Tankaman Natural Park" },
    { src: "images/galeri-3.jpg", ket: "Gerbang Kaliurang Explore" },
    { src: "images/galeri-4.jpg", ket: "Trek lumpur" },
    { src: "images/galeri-5.jpg", ket: "Menerjang aliran sungai" },
    {
      src: "images/galeri-6.jpg",
      ket: "Bukit Songo Papat Dengan Pemandangan Gunung Merapi",
    },
    { src: "images/galeri-7.jpg", ket: "View Gunung Merapi" },
    { src: "images/galeri-8.jpg", ket: "Melewati Sungai Tempuran" },
    { src: "images/galeri-9.jpg", ket: "Berpose Dengan View Merapi" },
    { src: "images/galeri-10.jpg", ket: "Bukit Songo Papat" },
    { src: "images/galeri-11.jpg", ket: "Lewat Trek Air" },
    { src: "images/galeri-12.jpg", ket: "Bukit Songo Papat View Merapi" },
    { src: "images/galeri-13.jpg", ket: "Bukit Songopapat" },
    { src: "images/galeri-14.jpg", ket: "Pose bersama di Sungai tempuran" },
    { src: "images/galeri-15.jpg", ket: "Seru-seruan di sungai" },
    { src: "images/galeri-16.jpg", ket: "" },
    { src: "images/galeri-17.jpg", ket: "" },
    { src: "images/galeri-18.jpg", ket: "" },
    { src: "images/galeri-19.jpg", ket: "" },
    { src: "images/galeri-20.jpg", ket: "" },
    {
      video: "images/video-1.mp4",
      src: "images/video-1.jpg",
      ket: "Seru di trek",
    },
    {
      video: "images/video-2.mp4",
      src: "images/video-2.jpg",
      ket: "Kaliurang di Musim Hujan",
    },
    {
      video: "images/video-3.mp4",
      src: "images/video-3.jpg",
      ket: "Seru di trek sungai",
    },
    {
      video: "images/video-4.mp4",
      src: "images/video-4.jpg",
      ket: "Bisa langsung lihat gunung merapi",
    },
  ],
  hero: "images/hero.jpg", // foto latar bagian atas (opsional)
  paket: [
    {
      nama: "Paket 1",
      durasi: "1,5 – 2 jam",
      sendiri: "300K",
      tandem: "350K",
      // Foto opsi harga (kosongkan "" jika tidak ingin pakai foto)
      fotoSendiri: "images/paket-sendiri.jpg",
      fotoTandem: "images/paket-tandem.jpg",
      trek: [
        "Bukit Songo Papat",
        "Gardu Pandang",
        "Omah Putih",
        "Kaliurang Explore Entrance",
        "Lorong Oxygen",
        "Trek Lumpur",
        "Sungai Tempuran",
      ], // daftar trek paket ini
      info: [
        "Trip ATV (150 cc) explore Kaliurang full trek, hanya berhenti di Bukit Songo Papat",
        "Open trip",
        "Bisa dipesan on the spot atau reservasi via WhatsApp",
      ],
      fasilitas: [
        "Asuransi Jasa Raharja",
        "Pemandu profesional",
        "Helm & boots",
        "Dokumentasi (foto & video)",
        "Loker barang",
        "Pelindung HP anti air",
        "Camilan ringan & coffee break",
        "Kamar mandi, mushola, kantin",
      ],
    },
    {
      nama: "Paket 2",
      durasi: "2 – 2,5 jam",
      sendiri: "400K",
      tandem: "450K",
      fotoSendiri: "images/paket2-sendiri.jpg",
      fotoTandem: "images/paket2-tandem.jpg",
      trek: [
        "Nawang Jagad",
        "Bukit Songo Papat",
        "Gardu Pandang",
        "Omah Putih",
        "Kaliurang Explore Entrance",
        "Lorong Oxygen",
        "Tankaman Natural Park",
        "Trek Lumpur",
        "Sungai Tempuran",
      ], // daftar trek paket ini
      info: [
        "Trip ATV (150 cc) explore Kaliurang full trek, berhenti di Nawang Jagad & Tankaman Kaliurang",
        "Open trip dan private trip (menyesuaikan keadaan)",
        "Wajib reservasi via WhatsApp minimal H-2 jam 13.00 WIB",
        "Menyesuaikan jadwal operasional destinasi wisata (hari & jam buka/tutup)",
      ],
      fasilitas: [
        "Asuransi Jasa Raharja",
        "Pemandu profesional",
        "Helm & boots",
        "Dokumentasi (foto & video)",
        "Loker barang",
        "Pelindung HP anti air",
        "Snack khas Kaliurang & coffee break",
        "Kamar mandi, mushola, kantin",
      ],
    },
  ],
  slot: [
    "Trip 1|08.00 – 10.00",
    "Trip 2|10.00 – 12.00",
    "Trip 3|13.00 – 15.00",
    "Trip 4|15.00 – 17.00",
  ],
  slotNote: [
    "Semua slot (Trip 1–4) berlaku untuk Paket 1.",
    "Paket 2 hanya Trip 1, Trip 2, dan Trip 3.",
    "Pindah waktu keberangkatan: konfirmasi admin minimal H-1 trip.",
  ],
  extra: [
    {
      judul: "Snack",
      harga: "Mulai Rp10.000/pax",
      poin: [
        "4 jenis snack (gorengan, kue, pudding, camilan)",
        "Bisa dengan box / tanpa box",
        "Bisa request harga atau jenis snack",
      ],
    },
    {
      judul: "Paket Makan Rp25.000/pax",
      harga: "",
      poin: [
        "Nasi putih",
        "Sayur: lodeh, tumis kangkung, pecel sayur",
        "Lauk: tempe, tahu, telur dadar, ayam goreng",
        "Buah iris semangka / melon, kerupuk, sambal",
      ],
    },
    {
      judul: "Paket Makan Rp30.000/pax",
      harga: "",
      poin: [
        "Nasi putih",
        "Sayur: lodeh, asem, sop",
        "Lauk: tempe, tahu, ayam bakar, lele goreng",
        "Buah iris semangka / melon, kerupuk, sambal",
      ],
    },
    {
      judul: "Fun Games",
      harga: "Mulai Rp50.000/pax",
      poin: [
        "Durasi 1 – 1,5 jam",
        "Pemandu games, alat games, dokumentasi",
        "Dilaksanakan sebelum trip",
        "Wajib reservasi minimal H-2 trip",
        "Harga menyesuaikan durasi dan jumlah peserta",
      ],
    },
  ],
  extraNote: [
    "Makan: wajib reservasi dan konfirmasi minimal H-2 trip.",
    "Jika fix order, wajib DP makan 50%.",
    "Makan disajikan setelah trip, bisa prasmanan atau dengan box.",
    "Bisa request jenis makanan dengan harga menyesuaikan.",
  ],
  // Google Maps & review
  mapsUrl: "https://www.google.com/maps/search/ATV+Tempuran+Kaliurang",
  rating: { nilai: 5.0, jumlah: 318 },
  review: [
    { teks: "Seru, aman, new experience.", tanggal: "Juli 2025" },
    {
      teks: "Super fun! All staff ramah, first time experience yg bikin nagih.",
      tanggal: "April 2025",
    },
    {
      teks: "First time riding an ATV. The instructors' briefing was clear and easy to understand. The price is worth the ride. The track was challenging and fun at the same time. Overall, a must try experience in Jogja!",
      tanggal: "Oktober 2024",
    },
    {
      teks: "Affordable attraction, but very exciting experience, just the right amount of distance and challenging route, very satisfying. Safe for newbie, safe to bring children — I took my 8 yo daughter with me. Responsive and responsible facilitator, reliable vehicle, proper safety gear, great documentation!",
      tanggal: "April 2025",
    },
  ],
  syarat: [
    "Penyewa wajib melakukan pelunasan sebelum trip dilaksanakan.",
    "Trip ini sudah dilindungi asuransi Jasa Raharja.",
    "Pengendara ATV bertanggung jawab penuh terhadap diri sendiri dan unit yang dikendarai.",
    "Pengendara wajib berusia 16 tahun ke atas & bisa mengendarai kendaraan bermotor.",
    "ATV maksimal digunakan 2 orang dengan beban maksimal 120 kg.",
    "Anak di bawah 16 tahun wajib diboncengkan (bisa sewa pemandu +Rp50K, berlaku usia 5 tahun ke atas).",
    "Penyewa wajib menaati instruksi pemandu selama trip.",
    "Pengendara wajib memakai helm & boots yang disediakan.",
    "Penyewa wajib datang 1 jam / 30 menit sebelum trip karena ada persiapan.",
    "Maksimal keterlambatan kedatangan 15 menit.",
    "Trip dimulai tepat waktu. Tamu yang terlambat dianggap mengundurkan diri dan tidak berhak atas pengembalian dana (non-refundable).",
    "Perubahan jadwal trip dapat dilakukan jika slot trip masih tersedia.",
    "Jika terlambat / pindah jam trip, wajib konfirmasi ke admin minimal 2 jam sebelum trip.",
    "ATV Tempuran berhak mengubah atau menjadwal ulang trip jika terjadi force majeure (cuaca ekstrem, kendala teknis kendaraan, atau alasan operasional lain). Perubahan akan diinformasikan secepat mungkin.",
    "ATV Tempuran berhak membatalkan trip jika penyewa tidak menaati peraturan yang diberikan.",
    "Pengendara wajib sehat fisik dan mental. Wanita hamil dilarang mengikuti trip.",
    "Pengendara wajib menjaga ketertiban dan sopan santun selama trip.",
    "Pengendara wajib memakai pakaian yang nyaman selama trip.",
    "Penyewa wajib membawa pakaian ganti karena berisiko basah dan kotor.",
    "Sanksi dapat diberikan jika penyewa: tidak menaati aturan & membahayakan keselamatan; mengubah jadwal sepihak tanpa konfirmasi admin (denda Rp50.000/ATV); merusak unit atau sarana dengan sengaja; tidak memakai helm/boots; mengendara di bawah pengaruh alkohol atau obat-obatan; berboncengan lebih dari 2 orang; ugal-ugalan atau keluar dari jalur trek.",
  ],
};
// =======================================

const $ = (id) => document.getElementById(id);
const wa = (t) =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t)}`;
const ul = (a) => a.map((x) => `<li>${x}</li>`).join("");

const fotoOpt = (src, alt) =>
  src
    ? `<span class="opt-imgwrap"><img class="opt-img" src="${src}" alt="${alt}" loading="lazy" onerror="this.remove()"></span>`
    : "";

$("paketList").innerHTML = CONFIG.paket
  .map(
    (p) => `
  <div class="card pkg" data-testid="${p.nama.toLowerCase().replace(/\s+/g, "-")}-card">
    <h3>${p.nama}</h3><span class="badge">⏱ ${p.durasi}</span>
    <ul class="list">${ul(p.info)}</ul>
    <h4>Trek</h4><div class="chips">${p.trek.map((t) => `<i>${t}</i>`).join("")}</div>
    <h4>Fasilitas</h4><ul class="list">${ul(p.fasilitas)}</ul>
    <div class="prices">
      <a class="opt" data-testid="${p.nama.toLowerCase().replace(/\s+/g, "-")}-opsi-sendiri" target="_blank" rel="noopener" href="${wa(`Halo, saya mau pesan ${p.nama}, opsi Sendiri (${p.sendiri})`)}">${fotoOpt(p.fotoSendiri, "ATV dikendarai sendiri")}<b>${p.sendiri}</b><small>Sendiri</small></a>
      <a class="opt" data-testid="${p.nama.toLowerCase().replace(/\s+/g, "-")}-opsi-tandem" target="_blank" rel="noopener" href="${wa(`Halo, saya mau pesan ${p.nama}, opsi Tandem (${p.tandem})`)}">${fotoOpt(p.fotoTandem, "ATV tandem berboncengan")}<b>${p.tandem}</b><small>Tandem</small></a>
    </div>
    <a class="btn sm" target="_blank" rel="noopener" href="${wa("Halo, saya tertarik " + p.nama)}">Pesan ${p.nama}</a>
  </div>`,
  )
  .join("");

$("slotList").innerHTML = CONFIG.slot
  .map((s) => {
    const [a, b] = s.split("|");
    return `<div class="slot"><b>${a}</b><span>${b}</span></div>`;
  })
  .join("");
$("slotNote").innerHTML = ul(CONFIG.slotNote);

$("extraList").innerHTML = CONFIG.extra
  .map(
    (e) => `
  <div class="card"><h3>${e.judul}</h3>${e.harga ? `<div class="price">${e.harga}</div>` : ""}<ul class="list">${ul(e.poin)}</ul></div>`,
  )
  .join("");
$("extraNote").innerHTML = ul(CONFIG.extraNote);

$("syaratList").innerHTML =
  `<details open><summary>Lihat semua ketentuan</summary><ol class="list">${ul(CONFIG.syarat)}</ol></details>`;

// Lokasi & review Google
const bintang = "★★★★★";
$("reviewBox").innerHTML = `
  <div class="rev-summary" data-testid="review-summary">
    <span class="g-logo" aria-hidden="true">
      <svg viewBox="0 0 48 48" width="30" height="30">
        <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.5 6.1 29.5 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.7-.4-3.9z"/>
        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.5 6.1 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
        <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
        <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.7-.4-3.9z"/>
      </svg>
    </span>
    <div>
      <div class="rev-score"><b>${CONFIG.rating.nilai.toFixed(1)}</b><span class="rev-stars">${bintang}</span></div>
      <div class="rev-count">${CONFIG.rating.jumlah} ulasan di Google</div>
    </div>
  </div>
  <div class="rev-cards">
    ${CONFIG.review
      .map(
        (r) => `
      <figure class="rev-card" data-testid="review-card">
        <span class="rev-stars">${bintang}</span>
        <blockquote>${r.teks}</blockquote>
        <figcaption>${r.tanggal} · Ulasan Google</figcaption>
      </figure>`,
      )
      .join("")}
  </div>
  <a class="btn sm" data-testid="lihat-ulasan-button" target="_blank" rel="noopener" href="${CONFIG.mapsUrl}">Lihat semua ulasan di Google</a>`;

$("telp").textContent = CONFIG.telpTampil;
document.querySelectorAll("[data-wa]").forEach((a) => {
  a.href = wa(a.dataset.wa);
  a.target = "_blank";
  a.rel = "noopener";
});
$("year").textContent = new Date().getFullYear();

const menu = $("menu");
$("burger").addEventListener("click", () => menu.classList.toggle("open"));
menu.addEventListener("click", () => menu.classList.remove("open"));

const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0, rootMargin: "0px 0px -60px 0px" },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Navbar: tetap di atas, berubah solid saat di-scroll
const navbar = $("navbar");
const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Galeri foto & video (kotak kosong tampil jika foto belum ada)
const lb = $("lightbox"),
  lbImg = lb.querySelector("img"),
  lbVid = lb.querySelector("video"),
  lbFrame = lb.querySelector("iframe");
$("galleryList").innerHTML = CONFIG.galeri
  .map((g, i) => {
    const isVid = g.video || g.yt,
      alt = g.ket || "Foto ATV Tempuran Kaliurang";
    const cover =
      g.src || (g.yt ? `https://img.youtube.com/vi/${g.yt}/hqdefault.jpg` : "");
    const thumb = cover
      ? `<img loading="lazy" src="${cover}" alt="${alt}">`
      : `<video muted playsinline preload="metadata" src="${g.video}#t=0.5"></video>`;
    return `<figure class="${isVid ? "vid" : "ph"}" data-i="${i}">${thumb}${
      isVid
        ? '<span class="play">▶</span>'
        : `<span class="ph-note">Taruh foto di<br><code>${g.src}</code></span>`
    }${g.ket ? `<figcaption>${g.ket}</figcaption>` : ""}</figure>`;
  })
  .join("");
document.querySelectorAll("#galleryList figure.ph img").forEach((img) => {
  img.addEventListener("load", () => img.parentElement.classList.remove("ph"));
  img.addEventListener("error", () => img.remove());
  if (img.complete && img.naturalWidth)
    img.parentElement.classList.remove("ph");
});
function closeLb() {
  lb.classList.remove("open", "m-img", "m-vid", "m-yt");
  lbVid.pause();
  lbVid.removeAttribute("src");
  lbFrame.removeAttribute("src");
}
$("galleryList").addEventListener("click", (e) => {
  const fig = e.target.closest("figure");
  if (!fig || fig.classList.contains("ph")) return;
  const g = CONFIG.galeri[fig.dataset.i];
  if (g.video) {
    lbVid.src = g.video;
    lb.classList.add("open", "m-vid");
    lbVid.play().catch(() => {});
  } else if (g.yt) {
    lbFrame.src = `https://www.youtube-nocookie.com/embed/${g.yt}?autoplay=1&rel=0`;
    lb.classList.add("open", "m-yt");
  } else {
    lbImg.src = fig.querySelector("img").src;
    lb.classList.add("open", "m-img");
  }
});
lb.addEventListener("click", (e) => {
  if (e.target === lb || e.target.id === "lbX" || e.target === lbImg) closeLb();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLb();
});

// Foto latar hero (aktif otomatis jika file ada)
const hi = new Image();
hi.onload = () => {
  document
    .querySelector(".hero")
    .style.setProperty("--hero-img", `url("${CONFIG.hero}")`);
  document.querySelector(".hero").classList.add("has-img");
};
hi.src = CONFIG.hero;
