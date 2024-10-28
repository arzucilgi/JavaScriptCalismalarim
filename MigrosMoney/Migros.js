class Migros {
    indirimOrani=20
    constructor(isim, soyisim, kartVarMi, urun) {
        this.isim = isim
        this.soyisim = soyisim
        this.kartVarMi = kartVarMi
        this.urun = urun
    }
    hesapla() {
        let odenecekTutar = 0

        if (this.urunleriKontrolEt(this.urun)) {
            if (this.kartVarMi) {
                //money kart var
                this.urun.forEach((urun) => {
                    odenecekTutar += (urun.fiyat * (100 - this.indirimOrani) / 100)
                });
            } else {
                //money kart yokk
                this.urun.forEach((urun) => {
                    odenecekTutar += urun.fiyat
                });
            }
        } else {
            alert("En az bir ürün almalısınız...")
        }
        return odenecekTutar
    }
    urunleriKontrolEt(urun) {
        if (urun != null && urun.length > 0) {
            return true
        } else {
            return false
        }
    }
}