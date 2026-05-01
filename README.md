# Project-UTS-Pemograman-Web
Bedah Fungsi: Simulasi Multi-User pada Dua Tab Berbeda
penggunaan dua tab browser bukan sekadar penggandaan halaman, melainkan simulasi dua pengguna (user) yang berbeda dalam satu jaringan sistem terdistribusi.
1. Tab Pertama (Pengirim/Penerima A)
   Tab ini berfungsi sebagai titik awal komunikasi.
   <img width="1919" height="1034" alt="Cuplikan layar 2026-05-01 145730" src="https://github.com/user-attachments/assets/99335608-6871-4149-b883-5c1bcf839e34" />
   
-Aksi: Pada tab ini, saya mencoba menginput data teks seperti "tes" dan "123" ke dalam kolom input.
                                             
-Fungsi Teknis: Saat tombol kirim diklik, tab ini bertindak sebagai sender (pengirim) yang membungkus pesan ke dalam paket data WebSocket untuk dikirim ke server di port 5000.

-Visual: Teks "Pesan masuk: tes" muncul di area pesan sebagai konfirmasi bahwa pesan tersebut telah berhasil diproses oleh server dan dikembalikan ke layar pengirim.

2. Tab Kedua (Penerima B)                                    
   Tab ini membuktikan aspek real-time dan broadcasting dari sistem.
   <img width="1919" height="1018" alt="Cuplikan layar 2026-05-01 145641" src="https://github.com/user-attachments/assets/fcabd30b-df56-41e7-9d48-533efc07babe" />

   -Aksi: Tab ini dibiarkan terbuka secara pasif tanpa melakukan input apa pun.

   -Fungsi Teknis: Meskipun tidak melakukan aksi pengiriman, tab ini tetap memiliki koneksi aktif (keep-alive) ke server. Begitu server menerima data dari Tab Pertama, server langsung "mendorong" (push) data tersebut ke Tab Kedua secara instan.

   -Visual: Pesan "tes" dan "123" muncul secara otomatis di layar Tab Kedua pada saat yang bersamaan dengan Tab Pertama, tanpa perlu melakukan pembaruan halaman (refresh).

   Kesimpulan dari Analisis Tab

   Munculnya pesan yang identik di kedua tab tersebut memvalidasi bahwa:

   a. Server Berhasil Terhubung: Port 5000 mampu menangani lebih dari satu koneksi secara simultan.
  
   b. Broadcast Berhasil: Logika pemrograman pada sisi server berhasil mendistribusikan pesan ke seluruh klien yang terhubung dalam satu grup koneksi yang sama.
   

