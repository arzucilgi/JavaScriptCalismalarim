/**
 JavaScript sektron çalışan bir programlama dilidir
 ASENKRON ÇALIŞTIĞI YERLER :
 1-Timing
 2-Event
 3-HTTP İteklerinde 
 => ASENKRON YAPILARI SENKRONA ÇEVİREREK YÖNETME İŞLEMİNİİ ŞU ŞEKİLDE YAPIYORUZ
 CALLBACK- PROMİSE- ASYNC & AWAİT
 */
/*
console.log("Arzu Nur ")
setTimeout(() => {
    console.log("1 saniye sonra çalışacak")
}, 1000);
setTimeout(() => {
    console.log("Yarım saniye sonra çalışacak ")
}, 500);
console.log("Samet")
 bunların genel olaraj çıktısı arzu samet yarım  saniye ve 1 saniye şeklinde olacak asenkron ve senkron programlama mantığına göre 
*/

/* 
function getName(callback){
    setTimeout(() => {
        console.log("Samet")
        callback()
    }, 1000);
    
}
function getSurname(){
    setTimeout(() => {
        console.log("Arslan")
    }, 500);
}
/*
getName()
getSurname()/* // Önce arslan sonra samet çıktısı gelir  çünkü burda asenkron çalıştığı için böyle bir sorun ortaya çıkmış oldu.

CALLBACK=bir fonksiyonu bir fonksiyona parametre geçerek asenkron yapıyı senkrona çeviririz.

getName(getSurname)
*/
//! ASENKRON PROBLEM VE ÇÖZÜMÜ 
/* 
const users =[
    {
        userId:5,
        post : "arzu post 1"
    },
    {
        userId:5,
        post: "arzu post 2"
    },
    {
        userId:5,
        post: "arzu post 3"
    },
    {
        userId:5,
        post: "samet post 1"
    },
    {
        userId:5,
        post: "arslan post 1"
    }
]
function getUserId(){
    setTimeout(() => {
         let userId=7
         return userId
    }, 1000);
}
function getPostUserId(userId){
    console.log(userId)
    setTimeout(() => {
        users.forEach((user)=>{
            if(user.userId===userId){
                console.log(user.post)
            }
        })
         
    }, 500);
}

let userId=getUserId()
getPostUserId(userId)
*/

/*

const users =[
    {
        userId:5,
        post : "arzu post 1"
    },
    {
        userId:5,
        post: "arzu post 2"
    },
    {
        userId:5,
        post: "arzu post 3"
    },
    {
        userId:7,
        post: "samet post 1"
    },
    {
        userId:7,
        post: "arslan post 1"
    }
]
function getUserId(callback){
    setTimeout(() => {
         let userId=7
         callback(userId)
         
    }, 1000);
   
}
function getPostUserId(userId){
    setTimeout(() => {
        users.forEach((user)=>{
            if(user.userId===userId){
                console.log(user.post)
            }
        })
         
    }, 500);
}

getUserId(getPostUserId)
 */

/*
!AJAX: Tarayıcı ile serveri birbine bağlar. tarayıcıdan veri almak için ara katman gibi düşünebiliriz.
W3SCHOLLS tan xmlhttprequest e iyice bak gerekli olan  şeyler orda var
 */
function prepareURL(url,id){
    if(id==null){
        return url
    }
    return `${url}?postId=${id}`
}

function getComments(url,id){
let newURL=prepareURL(url,id)

const xhr=new XMLHttpRequest
xhr.addEventListener("readystatechange",()=>{
    if(xhr.readyState==4 && xhr.status===200){
        console.log(JSON.parse(xhr.responseText))
    }
})

xhr.open("GET",newURL)
xhr.send()
}

// getComments("https://jsonplaceholder.typicode.com/comments",null)

function getData(url){
    const xhr=new XMLHttpRequest
    xhr.addEventListener("readystatechange",()=>{
        if(xhr.readyState===4&&xhr.status===200){
            console.log(JSON.parse(xhr.responseText))
        }
    })

    xhr.open("GET",url)
    xhr.send()
}
getData("https://jsonplaceholder.typicode.com/posts")