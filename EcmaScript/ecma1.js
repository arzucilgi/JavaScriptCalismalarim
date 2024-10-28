//? Ecmascript bir standart javascript ise bu stndartı esas alan betik bir dildir
//?Ecmascript yazılan kodun bütün tarayıcalrda eşit çalışmasını sağlar.JAvaxcrpin versiyon standartı gibi düşünülebilir.
/**
 *! EcmaScript6 ile birlikte js e kazandırlan özellikler
 Let,Const,Arrow,For of, Map object,Set Object,string includes, string startWith,endsWith,Array from
 ,array keys(),array find(),array findIndex(), class,promises  gibi bir çok metot kazandırılmıştır
 */

//! ARROW FUNCTİON
/* 
 const yazdir =()=>{
   console.log("Merhaba")
}
yazdir()
*/

/*
 
const yazdir=(firsNAme)=>{
 console.log("Merhaba",firsNAme)// eğer fonksiyon tek satırlık işlem yapıyorsa süslü paranteze gerek kalmaz
}
yazdir("arzuu")
 */

/*
const yazdir=firsNAme=> console.log("Merhaba", firsNAme)// tek parametrelive tek satır için geçerli
yazdir("samet")
 */

/*
const kupal=x=> x*x*x
console.log("Küpü",kupal(3))
 */



//! DESTRUCTİNG KULLANIMI
/*
let aile=["arzu","samet","hacer"]
let uye1,uye2,uye3
[uye1,uye2,uye3]=aile
console.log(uye1,uye2,uye3)
 */

/*
const hesapla=(a,b)=>{
    const topla=a+b
    const cikar=a-b
    const carp=a*b
    const dizi=[topla,cikar,carp]
    return dizi
}
let [a,b,c]=hesapla(10,2)
console.log(a,b,c)
 */

/*
const  person={
   firstName:"Arzu",
   lastName:"Samet",
   salary:40.000,
   age:20
}
let {firstName,lastName,salary,age}=person
console.log(firstName,lastName,salary,age)
 */


/* //?KötüKod
let isim, soyisim, maas, yas
isim=person.firstName
soyisim=person.lastName
maas=person.salary
yas=person.age
console.log(isim,soyisim,maas,yas)
 */

//!SPREAD OPERETÖRÜ(...)
/*
let numbers=[10,20,30,40]
add= (a,b,c,d)=>{
    console.log(a+b+c+d)
}
add(... numbers)
 */

/**ESki yöntem
  add(numbers[0],numbers[1],numbers[2],numbers[3])
 */

/*
const diller1=["java","php"]
const diller2=["python","ruby", ...diller1]
console.log(diller2)
 */

/*
let num=[1,2,3,4,5,6,7,8,9,10]
let [a,b,... K]=num
console.log(a,b,K)
 */

/*
let array1=[8,6,4,3]
let array2=[...array1]
console.log(array2)
 */

//!FOR İN FOR OFF KULLANIM ŞEKLİ
/*
let names=["arzu","samet","hacer","osman"]
names.forEach(function(name){
    console.log(name)
})
names.forEach(name=>console.log(name))

? for in: değişken tanımı in diziismi => index numaralarını döndürür
for(let name in names){console.log(name,names[name])}

? for of: değeri lazımsa kullan
for(let isim of names){console.log(isim,names.indexOf(isim))}
*/

