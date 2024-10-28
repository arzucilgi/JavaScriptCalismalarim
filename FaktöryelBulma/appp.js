// let a=Math.floor(7.8)
//  console.log(a)
// let sayi= Number(prompt("Lütfen bir sayı giriniz"))
// let carp=1
// for(let i=1;i<=sayi;i++){
// carp*=i
// }
// alert("Sayının faktöryeli="+carp)

//ARMSTRONG  SAYI BULMA 

let sayi=prompt("Lütfen bir sayı giriniz")
let toplam=0
for(let i=0;i<sayi.length;i++ ) {
    let rakam =sayi.charAt(i)
    toplam+=rakam*rakam*rakam
}
if(Number(sayi)==toplam){
    alert("Armstrong sayıdır ")
}else{
    alert("Armstron sayi değildir!!!")
}

