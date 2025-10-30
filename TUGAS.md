# Evaluasi Harian - Mobile App Development

## 1. Definisi Mobile App Development
Mobile App Development adalah proses pembuatan aplikasi yang dirancang untuk berjalan di perangkat mobile seperti Android dan iOS.  
Fokus utamanya adalah:
- User Experience (UX): memastikan aplikasi mudah digunakan dan responsif.
- Performa & Optimasi: memanfaatkan sumber daya perangkat seefisien mungkin.
- Integrasi Hardware: seperti GPS, kamera, dan sensor.

Output teknis: kode sumber aplikasi (biasanya dalam framework seperti React Native, Flutter, atau Kotlin/Swift) yang siap di-build menjadi aplikasi siap pakai.

---

## 2. Perbandingan Web Development vs Mobile App Development
| Aspek | Web Development | Mobile App Development |
|-------|-----------------|------------------------|
| Target Eksekusi | Browser (desktop/mobile) | OS mobile (Android/iOS) |
| Distribusi | Melalui URL atau hosting | Melalui App Store / Play Store |
| Akses Hardware | Terbatas (via API browser) | Lebih dalam dan langsung |
| Contoh Implikasi | Web app tidak bisa mengakses kamera tanpa izin khusus | Mobile app dapat memanfaatkan sensor dan GPS untuk fitur lokasi |

Kesimpulan: Mobile app memberi pengalaman lebih personal dan native, sedangkan web lebih universal.

---

## 3. Tahapan Discovery & Requirement
Tahapan ini melibatkan:
1. Analisis kebutuhan pengguna  
2. Penentuan fitur utama dan target platform (Android/iOS)  
3. Kebutuhan online/offline  

Contoh: jika pengguna banyak di wilayah minim koneksi, maka fitur offline menjadi prioritas.

---

## 4. Perancangan Arsitektur & Teknologi
Tahapan ini mencakup:
- Pemilihan framework (misalnya React Native)
- Penentuan arsitektur navigasi dan state management (misal Redux, Context API)

Mengapa penting: strategi arsitektur yang tepat memastikan aplikasi scalable dan mudah dikelola.

---

## 5. Native vs Hybrid Development
| Pendekatan | Keuntungan | Kekurangan | Contoh Framework |
|-------------|-------------|-------------|------------------|
| Native | Performa tinggi, akses penuh hardware | Butuh 2 codebase (Android & iOS) | Kotlin, Swift |
| Hybrid | 1 codebase untuk banyak platform | Sedikit kompromi di performa | Ionic, Cordova |

---

## 6. Cross-Platform Native Development
Pendekatan ini memungkinkan developer menulis satu kode untuk berbagai platform tanpa mengorbankan performa native.

Keuntungan: hemat waktu dan biaya.  
Kekurangan: kadang terbatas dalam fitur-fitur hardware spesifik.

---

## 7. Posisi React Native dalam Ekosistem
React Native adalah framework cross-platform berbasis JavaScript dengan sintaks mirip ReactJS.

| Aspek | ReactJS | React Native |
|--------|----------|--------------|
| Target | Browser | Android/iOS |
| Styling | CSS | StyleSheet (mirip CSS) |
| Sintaks | JSX | JSX khusus komponen native |

---

## 8. Tantangan Utama & Solusinya
Tantangan:
- Fragmentasi perangkat  
- Optimasi performa  
- Integrasi API native  

Solusi React Native:
- Hot Reloading untuk iterasi cepat  
- Modul Native untuk integrasi fitur hardware  
- Reusable component antar platform

---

## 9. Pengujian, Build, Signing, & Release
Tahapan penting sebelum publikasi:
1. Testing (QA, Unit Test, Integration Test)  
2. Build (Gradle/Xcode)  
3. Signing (keamanan digital certificate)  
4. Release (ke Play Store / App Store)

Tools: Expo, Fastlane, Android Studio, Xcode.

---

## 10. Mengapa React
