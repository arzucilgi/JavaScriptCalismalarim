/* 
!FONKSİYON TANIMLAMA
? function toplam(){
    fonksiyon işlemleris
?}
 */

// let metin= "Bu  cümlede kaç tane a harfi vardır?"
// let harf=prompt("Harf giriniz")
// let deger=harfSayisi(harf)
// alert("İstenilen harfi sayısı:"+deger)

// function harfSayisi(  harf ){
//     let toplam=0
//     for (let i=0;i<metin.length;i++){
//        if(metin.charAt(i) ==harf){
//         toplam++
//        }
//     }
// return toplam 
// }

// MÜKEMMEL SAYI BULMA 

// let sayi=Number(prompt("Sayi giriniz "))
// mukemmel(sayi)

// function mukemmel(sayi){
//     let toplam=0
//    for (let i=1;i<=sayi;i++){
//         if(sayi%i==0){
//             toplam+=i
//         }
//    }
//    if(sayi*2==toplam){
//         alert("Mükemmel sayıdır")
//    }else{
//     alert("Mükemmle sayı değildir!!!")
//    }
// }

//! DESİMAL TO BİNARY CONVERSİON

//  convertDesimalToBinary(25)

// function convertDesimalToBinary(number){
//     let binary=""
//     while(true ){
//         binary+=(number%2).toString();
//        number=Math.floor(number/2)

//         if(number==1){
//             binary+=1 
//             break;
//         }
//     }
//     let result=reserve(binary)
//     console.log("sonuç:"+result)
// }

// function reserve(binary){
//     let reserveBinary= ""
//     for( let i=binary.length-1;i>=0;i--){
//         reserveBinary+=binary.charAt(i);
//     }
//     return reserveBinary
// }

// !DESİMAL TO BİNARY CONVERSİON
let number = "111"
convertBinaryToDesimal(number)

function convertBinaryToDesimal(number) {
    let desimal = 0
    let ust = 0
    for (let i = number.length - 1; i >= 0; i--) {
        desimal = desimal + Number(number.charAt(i)) * Math.pow(2, ust);
        ust++
    }
    console.log("Sayı:" + desimal)
}
