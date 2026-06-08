const form = document.getElementById("asal-form");
const sayiInput = document.getElementById("sayi");
const card = document.getElementById("card");
const ekran = document.getElementById("ekran");
const ekranSayi = document.getElementById("ekran-sayi");
const ekranCumle = document.getElementById("ekran-cumle");


const durumlar = ["beklemede", "asal", "degil", "hata"];

function durumuAyarla(durum) {
    durumlar.forEach((d) => {
        card.classList.remove(d);
        ekran.classList.remove(d);
    });

    if (durum !== "beklemede") {
        card.classList.add(durum);
        ekran.classList.add(durum);
    }

    if (window.particles) {
        window.particles.setTheme(durum === "beklemede" ? "varsayilan" : durum);
    }
}


function sonucGoster(sayi, cumle, durum) {
    ekran.classList.add("yenileniyor");
    damga.classList.remove("vuruldu");

    setTimeout(() => {
        ekranSayi.textContent = sayi;
        ekranCumle.textContent = cumle;
        durumuAyarla(durum);
        ekran.classList.remove("yenileniyor");

    }, 180);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const sayiGirildi = sayiInput.value.trim();

    if (!/^-?\d+$/.test(sayiGirildi)) {
        sonucGoster("!", "Geçerli bir tam sayı girin.", "hata", "HATA", "hata");
        return;
    }

    const sayi = Number(sayiGirildi);
    const asal = asalMi(sayi);

    if (asal) {
        sonucGoster(sayi, sayi + " sayısı asaldır.", "asal", "ASAL", "asal");
    } else {
        sonucGoster(sayi, sayi + " sayısı asal değildir.", "degil", "DEĞİL", "degil");
    }
});
