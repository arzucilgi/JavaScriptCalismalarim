// EVENTS(OLAYLAR) bir yere tıkladığımızda gerçekleşecek olan olaylar olarak karşımıza çıkmaktadır
//  Farklı farklı eventsler olabilir şimdi onlara bakıcaz
// onclick: üzerine tıklandığında gerçekleşen olayları yazmak için kullanılır html içinde yapılır
// html 70. satırda kullanılan onclick butona tıklanıldığında merhaba yazar
// ?Html sayfasında bu şekilde event tanımlamak kod karmaşıklığı yaratır Onun yerine biz
// ?js dosyasında fonksiyon tanımlayıp onu html sayfasında çağırmamız daha güzel olur 

// function changeTittle(){
//     document.querySelector("#div2 h2").textContent="Todo List Sayfası Değişti"//60. kod satırında events var
// }
//!  bir başka events tanımlama ise bütün işlemler js sayfasında gerçekleşir 

// const change=document.querySelector("#div4").children[2]
// change.addEventListener("click",function(){
//     alert("Merhaba Ben 3. div")
// })
// console.log(change)


// ! Tavsiye edilen kullanım şekli 
// function changeTittle(){
//     document.querySelector("#div2 h2").textContent="Todo List Sayfası Değişti"//60. kod satırında events var
// }
// const change=document.querySelector("#div4").children[2]
// change.addEventListener("click",changeTittle)

//! MAUSE EVENTLARI
/** DOMContentLoaded: ana sayfa yüklendiğinde  çalısssın      
load                      mouseleave
click                     mouseout
dblclick                  mouseenter
mouseover
 enter ile out arsındaki fark enter sadece istenilen yer  girince artar ama out istenilen yer girifkten sonra 
içinde gezinirken de artat 
*/

// 1 document.addEventListener("DOMContentLoaded",run)
// 2 window.addEventListener("load",run)
// function run(){
//     //    alert("Sayfa Yüklendi")
//     console.log("sayfa yüklendi")
// }

// const sec=document.querySelector(".div1").children[2]
// const card=document.querySelector("#div4")
//3 sec.addEventListener("click", run1)
//4 sec.addEventListener("dblclick", run1)
//5 card.addEventListener("mouseover",run1) // mouse ile sçilen yere her geldiğinde fonksiyon çalışır
//6 card.addEventListener("mouseout",run1)
// card.addEventListener("mouseenter",run1)
// card.addEventListener("mouseleave",run1)
// function run1(e){
//     console.log(e.type)//eventin türünü verdi
// }

// ! KLAVYE EVENTLARI
/**
 * keypress: Harf ve sayılarda tetiklenen eventtir. karakterlerde çalışmaz
 * keydown: klavyedeki her şeyde çalışır. keypress ile çalışma mantığı aynıdır
 * keyup:Tuştan elini kaldırdığında çalışan eventtır. keydown ile arasıdaki fark down basınca direk yazar.up kaldırınca basar
 */
// document.addEventListener("keypress",run)
// function run(e){
//     console.log(e.keyCode )//? basılan harfin asci karşılığını verir
//     console.log(e.key)//? sayfada klavyeye basıldığında basılan harfi gösterir
// }
// document.addEventListener("keydown",run)
// function run(e){
//     console.log(e.keyCode)
//     if(e.keyCode==116){
//         alert("sayfa yenileme engellendi!")
//     }
//     e.preventDefault()
// }

// const input=document.querySelector("#div3").children[0]
// input.addEventListener("keypress",run)

// function run(e){
//     console.log(e.target.value)
// }


// ? 54. satırdaki başlığı klavyeden yazı alınan yere ne yazarsak o olarak değiştiren kod 
// const div=document.querySelector("#div2")
// const input=document.querySelector("#div3").children[0]
// input.addEventListener("keyup",run)

// function run(e){
//   div.textContent=e.target.value
// }


//! İNPUT EVENTLARI
/**
 * focus:İnput alınabilecek bir alana girildiğinde aktif olur
 * blur:İnput alınabilecek bir alana girildikten sonra o alandan çıktığımız anda aktif olur 
 * copy:
 * paste:
 * cut:
 * select:
 * Klavye inputları da burda kullanılabilir
 */
const input=document.querySelector("#div3").children[0].children[0]
console.log(input)
input.addEventListener("focus",run)
input.addEventListener("blur",run)
input.addEventListener("copy",run)
input.addEventListener("paste",run)
input.addEventListener("cut",run)
input.addEventListener("select",run)

function run(e){
    console.log(e.type)
}

