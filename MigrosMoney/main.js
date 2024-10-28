let mesaj =
`
Migrosa Hoşgeldiniz..
MoneyKart var mı?
1-Evet
2-Hayır
`
let sonuc = confirm(mesaj)
let odenecekTutar
const urun = [
    {
        urunIsmi: "süt",
        fiyat: 15
    }, {
        urunIsmi: "bebek bezi",
        fiyat: 100
    }, {
        urunIsmi: "kusbasi",
        fiyat: 220
    }
]
if (sonuc===true) {
    //money kartı vardır
    let isim = prompt("isim giriniz")
    let soyisim = prompt("Soyisim giriniz")
    const musteri=new Musteri(isim,soyisim,sonuc,urun)
     odenecekTutar=  musteri.hesapla()
    alert(
    `Müşteri Bilgileri:${musteri.isim} ${musteri.soyisim}
    Ödenecek Tutar:${odenecekTutar}
    `)

}else {
    const musteri=new Musteri(null,null,sonuc,urun)
    odenecekTutar=musteri.hesapla()
    alert(`Ödenecek Tutar: ${odenecekTutar}`)
}