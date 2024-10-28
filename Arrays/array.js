/* 
!DİZİ OLUŞTURMA
? let array_name=[ değişik veri tiplerinden oluşan array tanımlayabiliriz]
dizinin elemankarına erişirken diziismini yazıp[ bu parntez içerisinde index numarasını getirebiliriiz]
? let array= new array()
bu şekilde de diziler oluşturulabilir  dizinin elemanlarını manuel olarak tanımlayabiliriz
! diziler object veri tipi olarak karşımıza çıkar 
 */

let isimler = ["Arzu", "Samet", "Arslan", "Hacer", "Şükran"]
isimler.forEach(function (isim) {
    console.log(isim)
})
/*
!DİZİ METODLARI
push()  pop()     slice() reserve()
unshift()   shift()  split() indexOf()
includes()
splice()  toString()
join()   concat()
*/
/*
!STRİNG METODLARI
charAt()  indexOf() concat() lastindexOf() toUpperCase()
toLowerCase() trim()  slice() substring() replace()
split() valueOf() startsWith()  endsWith()
/* 
!MATH SINIFI METODLARI
floor ceil raund  max min random abs sqrt pow
 Math.floor(Math.random()*100);
*/

/*
!DATE KULLANIMI
let tarih= new Date();
console.log(tarih.getDate())
console.log(tarih.getDay())
console.log(tarih.getFullYear())
console.log(tarih.getHaour())
console.log(tarih.getMinute())
console.log(tarih.getMonth())
console.log(tarih.toLocaleDateStirng())
console.log(tarih.toLocaleTimeStirng())
console.log(tarih.toLocaleStirng())
! REFERANCE TİPLİ DEĞİŞKENLER
?object,function,array
 */
/*

refarns tiplerde aynı referansa sahip iki atama işlemi yapıldığında otomatik olarak değişiklik yapılmayan değişken de erkilenir
iki değişken de aynı refaransa gittiği için mantıken aynı ağaca bakıyor gibi olduuğu için btek işlem yapıldığında ikisi de yada 
aynı referansa sahip olan bütün değişkenler etkilenir.
farklı dizi isimlerinin içine farklı adresler ayırarak bellekten aynı değerleri koyup eşit olup olmadıklarını araştırırsak aslında 
eşit gibi gözüken iki dizinin  farklı olduğunu görürüürz. Çünkü aynı değerler olmasına rağmen farklı adreslerde  tutulmuş oldular 
*/

let value
value = document.location.href
value = document.location.hostname
value = document.location.port
console.log(value)
// document içerisindeki komutları incele location da document içindeki bir komut id class href gibi kullandığımız terimler birer
// attribute olarak tanımlanır 
