let sec = "1-Bakiye Sorgulama\n" + "2-Para Çekme\n" + "3-Para Yatırma \n" + "4-Çıkış\n" + "Lütfen sayı seçiniz"
let deger = prompt(sec)
let bakiye = 1000
switch (deger) {
    case "1":
        alert("Hesabınızda bulunan  miktar:" + bakiye)
        break;
    case "2":
        let tutar = Number(prompt("Çekilecek miktari giriniz:"))
        if (tutar > bakiye) {
            alert("Hesabınızda yeterli bakiye yok!")
        } else {
            alert("Para Çekimi gerçekleşmiştir.Kalan bakiye:" + (bakiye - tutar))
        }
        break;
    case "3":
        let yatir = Number(prompt("Yatırılacak miktarı giriniz:"))
        alert("Yafırma işlemi başarılı.Yeni bakiye:" + (bakiye + yatir))
        break;
    case "4":
        alert("Hesabınızdan Çıkış Yapılmıştır")
        break;
    default:
        alert("Lütfen 1-4 arasında bir sayi giriniz!!!")
}
