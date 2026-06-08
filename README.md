# 🔢 Asal Sayı Kontrolü

Modern, şık ve interaktif asal sayı kontrol uygulaması. Sayıyı yaz, kontrol et — sonuç ekranda belirir.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Özellikler

- 🎨 **Modern Tasarım** - Glassmorphism efekti ve gradient renkler
- 🌊 **Akıcı Animasyonlar** - Yumuşak geçişler ve hover efektleri
- 🎯 **Hızlı Kontrol** - Optimize edilmiş asal sayı algoritması
- 📱 **Responsive** - Mobil ve masaüstü uyumlu
- 🎭 **Dinamik Temalar** - Her sonuç için farklı renk teması
- ⚡ **Performans** - Hafif ve hızlı çalışma
- 🔤 **Özel Fontlar** - Outfit & JetBrains Mono font ailesi

## 🎬 Demo

```
Sayı Girişi: 17
Sonuç: ✓ 17 sayısı asaldır.
```

## 📂 Proje Yapısı

```
proje/
│
├── index.html          # Ana HTML yapısı
├── style.css           # Modern CSS stilleri ve animasyonlar
├── asal.js             # Asal sayı kontrol algoritması
├── app.js              # Form yönetimi ve UI etkileşimleri
└── README.md           # Bu dosya
```

## 🚀 Kurulum

### 1. Projeyi İndirin

```bash
git clone <repository-url>
cd proje
```

### 2. Tarayıcıda Açın

Herhangi bir sunucuya ihtiyaç yok! Sadece `index.html` dosyasını tarayıcınızda açın:

- **Yöntem 1:** Dosyaya çift tıklayın
- **Yöntem 2:** Dosyayı tarayıcıya sürükleyin
- **Yöntem 3:** Live Server (VS Code) ile açın

```bash
# VS Code Live Server ile
code . 
# Ardından sağ tık > Open with Live Server
```

## 💻 Kullanım

1. Sayfayı açın
2. Input alanına bir sayı girin (örn: 17, 23, 97)
3. "Kontrol Et" butonuna tıklayın
4. Sonucu ekranda görün! 🎉

### 📊 Durum Temaları

| Durum | Renk | Açıklama |
|-------|------|----------|
| **ASAL** | 🟢 Yeşil | Sayı asaldır |
| **DEĞİL** | 🔴 Kırmızı | Sayı asal değildir |
| **HATA** | 🟡 Sarı | Geçersiz giriş |

## 🧮 Algoritma

Proje, optimize edilmiş **karekök metodunu** kullanır:

```javascript
function asalMi(sayi) {
    if (!Number.isInteger(sayi) || sayi < 2) {
        return false;
    }
    
    if (sayi === 2) {
        return true;
    }
    
    if (sayi % 2 === 0) {
        return false;
    }
    
    const limit = Math.sqrt(sayi);
    
    for (let i = 3; i <= limit; i += 2) {
        if (sayi % i === 0) {
            return false;
        }
    }
    
    return true;
}
```

### 🎯 Algoritma Özellikleri

- ✅ Çift sayılar direkt elenir (2 hariç)
- ✅ Sadece tek sayılarla kontrol edilir
- ✅ Karekök limitine kadar döngü

## 🎨 Tasarım Özellikleri

### Kullanılan Teknikler

- **Glassmorphism** - Bulanık arka plan efekti
- **CSS Animations** - Smooth geçişler ve float animasyonları
- **Custom Properties** - CSS değişkenleri ile tema yönetimi
- **Backdrop Filter** - Modern blur efekti
- **Gradient Backgrounds** - Renkli gradient geçişler

### Renk Paleti

```css
--bg: #0a0e17              /* Ana arka plan */
--accent: #6366f1          /* Vurgu rengi (mor) */
--prime: #34d399           /* Asal sayı (yeşil) */
--not-prime: #fb7185       /* Asal değil (kırmızı) */
--error: #fbbf24           /* Hata (sarı) */
```

## 📱 Responsive Tasarım

Uygulama tüm ekran boyutlarında mükemmel görünür:

- 📱 Mobil (< 480px)
- 📱 Tablet (480px - 768px)
- 💻 Desktop (> 768px)

## 🔧 Geliştirme

### Dosya Açıklamaları

**index.html**
- Semantic HTML5 yapısı
- Google Fonts entegrasyonu
- Canvas particle efekti için hazırlık

**style.css**
- CSS Variables ile tema sistemi
- Keyframe animasyonlar
- Media queries ile responsive tasarım
- Glassmorphism efektleri

**asal.js**
- Pure JavaScript algoritma
- Input validation
- Edge case kontrolleri

**app.js**
- Form handling
- Durum yönetimi
- UI güncellemeleri

## 🌟 Özelleştirme

### Tema Rengini Değiştirme

`style.css` dosyasındaki CSS değişkenlerini düzenleyin:

```css
:root {
    --accent: #6366f1;        /* Butonlar ve vurgular */
    --prime: #34d399;         /* Asal durumu */
    --not-prime: #fb7185;     /* Asal değil durumu */
}
```

### Animasyon Hızını Ayarlama

```css
:root {
    --transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 📊 Performans

- ⚡ **Sayfa Yükleme:** < 500ms
- ⚡ **Kontrol Süresi:** < 1ms (çoğu sayı için)
- ⚡ **Dosya Boyutu:** ~15KB (toplam)
- ⚡ **Bağımlılık:** Yok (Vanilla JS)

## 🛠️ Teknolojiler

- **HTML5** - Semantic markup
- **CSS3** - Modern styling (Grid, Flexbox, Animations)
- **Vanilla JavaScript** - ES6+ özellikleri
- **Google Fonts** - Outfit & JetBrains Mono

## 📝 Lisans

Bu proje açık kaynaklıdır ve özgürce kullanılabilir.

## 👤 Geliştirici

**Yusuf**

---

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📮 İletişim

Sorularınız veya önerileriniz için iletişime geçebilirsiniz.

---

<div align="center">

### ⭐ Beğendiyseniz yıldız vermeyi unutmayın!

**[⬆ Başa Dön](#-asal-sayı-kontrolü)**

</div>
