1. Konsep Dasar React Native & New Architecture

React Native adalah framework cross-platform yang memungkinkan pengembangan aplikasi iOS dan Android dengan satu basis kode JavaScript/TypeScript.
Berbeda dari React Web yang merender ke DOM, React Native berinteraksi langsung dengan native components.
Versi v0.80 memperkenalkan New Architecture (Fabric, TurboModules, dan JSI) yang meningkatkan performa rendering dan komunikasi JS–native layer, membuat aplikasi lebih cepat dan efisien.

2. React Native CLI vs Expo

React Native CLI → Memberi kontrol penuh atas native code, ideal untuk proyek kompleks yang butuh integrasi khusus.

Expo → Lebih cepat untuk memulai dan cocok untuk prototipe, tapi terbatas pada modul bawaan.
📌 Contoh: Startup kecil bisa memilih Expo untuk kecepatan pengembangan awal, sedangkan tim besar memilih CLI untuk fleksibilitas penuh.

3. Setup Environment Android

Untuk build Android, React Native memerlukan:

SDK Platforms (android-35) → versi target Android.

Build Tools (35.0.0) → mengompilasi APK.

Platform Tools → menyediakan adb dan device debugging.
Jika salah satunya tidak ada, proyek akan gagal dijalankan di VS Code karena build system tidak bisa menemukan dependency-nya.

4. Prasyarat React Native CLI v0.80

Diperlukan:

Node.js → menjalankan JavaScript di luar browser.

Watchman → memantau perubahan file untuk hot reload.

Yarn → manajer paket yang cepat dan konsisten.
Ketiganya membantu menjaga workflow tetap lancar dan sinkron dengan native runtime.

5. Struktur Folder Proyek

Struktur utama proyek React Native CLI:

android/ & ios/ → berisi native project masing-masing platform.

App.js → entry point aplikasi React Native.

metro.config.js → konfigurasi bundler untuk mengatur path, alias, dan modul.
Struktur ini mendukung pengembangan lintas platform dan memudahkan navigasi di VS Code.