/** ÇIKTI ALMA
 -document.write() ana sayfada yazdırır
 -console.log() konsolda yazdırır.
 */
document.writeln("Hello World");
console.log("arzu");
console.log("Arzu");
console.log("Hello World");
let a = 5;
let b = 10;
console.log("İki sayının toplamı:", a + b);
console.log(window)
console.log(window.location.port)
/* window un içine erişirken window.-- demek zorunda değiliz ama document in içindeki bir dosyaya erişirken 
 document.-- demek zorundayız 
 ! bu bir bilgilendirme 
 ? mavi ile  yorum 
 TODO: burası da böyle 

  */
/*
Global scope: her yerden erişilebilen değişken tanımalama (public)
var:fonksiyonun dışında  tanımlanırsa global
   fonksiyonun içinde veya if for gibi blok içinde tanımlanırsa function scope olur.
   ! ram bellekte çok fazla yer  kaplar
let/const: Block scope tur sadece tanımlandığı yerde kullanılır
let a=5
let a=10 şeklinde yazamazsın ama bunu var ile yapabiliriz ve a =10 olarak yazdırılır
a=10 dersek o zaman let ile 5 olan a 10 olarak güncellenebilir.
const ta ise  bir değer ataması yaptğımızda kesinlikle o değer değişmez.
*/
/*
?VERİ TİPLERİ
primitive veri tipleri
string: çifft tırnak içinde kullanılır.
number: tırnaksız yazıp algılanır.
boolean: true false  şeklinde kullanılır.
null: boş. İilk bbaşta null olarak atanan bir değişken daha sonra farklı bir değer ataması yapıldığında kendini günceller.
undefined: ilk  başta değer ataması yapılmamş değişkenler için kullanılır.
referans veri tipleri
object:
function:
== iki ifadenin tipine bakmaz sayılar eşit mi değil mi kontrol eder
5=="5" true 
5==="5" false 
 */
let insan = {
    isim: "Arzu",
    soyisim: "Çılgı",
    yas: 20
}
console.log(typeof insan)

let func = function () {
    console.log("hellllooooo")
}

console.log(typeof func)

// function 
// window içerisinde 
alert("İki sayının toplamı:" + (a + b)); //  Sayfada bildirim çubuğu gibi gösterir (Uyarı)
let isim = prompt("İsminizi giriniz :")//Sayfada bildirim çubuğundan ismini alır.
console.log(isim) // promptan aldığımız her şey string olarak  tutulur eğer yaşını isteseydim de
// string olarak konsola yazardı.
let sonuc = confirm(" Silmek istediğinize emin  misiniz?")
console.log(sonuc)// console boolean değer dödürür.
/*  
! STRİNGİ NUMBERA DÖNÜŞTÜRME
Number(dönüşecek değer)
parseInt(dönüşecek değer)
parseFloat da  vardır değere göre dönüşüm yapılabilir 
!NUMBERI STRİNG VERİ TİPİNE DÖNÜŞTÜRME 
String (dönuşecek değer)
.toString() şeklinde de dönüşüm yapılabilir.
!TOOLTİP
IDE lerde bir terim yazdığımızda bilgilendirme metni olarak çıkan küçük notlara denir
!BREAKPOİNT
kodu adım adım derlemek anlamına gelir. kodun hangi satırdan itibaren adım adım çalışmasını istiyorsak 
o kodun üst
ne debugger yazılır ve incelediğimiz sayfada source gelerek ordann kodu tek tek ilerletip hatanın 
nerde olduğunu kolayca bulabliriz
 */