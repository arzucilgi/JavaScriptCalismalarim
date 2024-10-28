let yakitTipi = Number(prompt("1, 2 veya 3 ile yakıt tipinizi belirleyiniz"))
let litre = Number(prompt("Kaç litre benzin istersiniz..."))
let bakiye = Number(prompt("Bakiyenizi giriniz..."))
var fiyat
var odenek
if (yakitTipi == 1) {
    fiyat = 24.5
    odenek = fiyat * litre
    console.log("ödenecek tutar:" + odenek)
    if(bakiye<odenek){
        prompt("Yetersiz Bakiye"+(odenek-bakiye))
    }
    if(bakiye>=odenek){
        prompt("İyi günlerde kullanın")
        prompt("Para üssünüz:"+(bakiye-odenek))
    }
}
else if (yakitTipi == 2) {
    fiyat = 22
    odenek = fiyat * litre
    console.log("ödenecek tutar:" + odenek)
    if(bakiye<odenek){
        prompt("Yetersiz Bakiye"+(odenek-bakiye))
    }
    if(bakiye>=odenek){
        prompt("İyi günlerde kullanın")
        prompt("Para üssünüz:"+(bakiye-odenek))
    }
}
else if (yakitTipi == 3) {
    fiyat = 20
    odenek = fiyat * litre
    console.log("ödenecek tutar:" + odenek)
    if(bakiye<odenek){
        prompt("Yetersiz Bakiye"+(odenek-bakiye))
    }
    if(bakiye>=odenek){
        prompt("İyi günlerde kullanın")
        prompt("Para üssünüz:"+(bakiye-odenek))
    }
}

