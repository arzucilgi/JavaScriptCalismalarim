//!STORAGE KULLANIMI (web depolama alanı)
/**
 * ?Local storage:Kayıt edilen veriler pc kapansa veya tarayıcı kapansa bile orda kayıt altında kalır silinmez
 * ?Session storage:Kayıt edilen veriler pc açılıp kapandığında yada tarayıcı yeniden açıldığında veya 
 * ?kapandığnda kayıt edeilen veriler otomatik olarak silinir 
 * İkisi de window içinde yer alır Window altındaki verileri çağırırken window kelimesini 
 * kullanmak zorunda değiliz 
 * Parametrelerden ilki int ikincisi ise string olarak karşımıza  çıkar String yerine int girmiş olsak bile onu string olarak algılar 
 * 
 */
//!SESSİON ve LOCAL STORAGE her sey aynı sadece isimleri değiştirip aynı kodlar üzeerinden çalışabiliriz
//?DEĞER EKLEME 
window.sessionStorage.setItem("350","Arzu")
sessionStorage.setItem("230","Samet")
sessionStorage.setItem("10","Arslan")
sessionStorage.setItem("50","Arslan")
//?DEĞER SİLME
sessionStorage.removeItem("50")
//?DEĞER ALMA
let value=sessionStorage.getItem(230)
console.log(value)

let deger=sessionStorage.getItem(230)
if(deger===null){
    console.log("Değer Bulunamadı")
}else{
    console.log("Değer Bulundu:",deger)
}
//?HEpsini Sİlme
// sessionStorage.clear()
//?ARRAY YAZDIRMA

let array =["Arzu","Samet","Arslan","Hacer"]
sessionStorage.setItem("names",JSON.stringify(array))
let al=JSON.parse(sessionStorage.getItem("names"))
console.log(al)
al.forEach(function(name) {
    console.log(name)
});
