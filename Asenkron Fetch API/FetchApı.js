// callback-promise-ajax(xmlhttprequest)
//? FETCH API: Servera http isteği atmak için kullanırız.Window objesi içinde bulunur.
// bir url linki koyarız gelen şeyleri promise ile yakalarız
/*
function getData(url){
    fetch(url)
    .then((response)=>response.json())// burda return varmı gibi düşün. Json bir promise oluşturur ve bu promisin tekrra yakalanması için bir tane daha .then kullandık.
    .then((data)=>{console.log(data)})
    .catch((err)=>{console.log(err)})
}
getData("fetchapi.json")
*/

/*
function getUsers(urll){
    fetch(urll)
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}
getUsers("https://jsonplaceholder.typicode.com/users")
*/

//! ASYNC AWAIT // PROMİS THEN ZİNCİRİNDEN KURTULMAK İÇİN KULLANIRIZ.
// eğer bir yapının başına aync eklersek onun dödürdüğü değer promise olur 
//! await koyduğumuz yerdeki yapacağımız işelm uzun surebilir bunlar asenkron çalıştğı için diğer işleme geçme biz her şeyi halledene 
//! kadar anlamına gelir o satırdaki bütün işlemler bitmeden bir diğer satıra  geçmez.yualnızca asenkron çalışan yerlerde kullanılabilir başka yerde kullanılırsa direk hata alırız.

async function hello(){
    return "hello world"
}
hello()
.then((res)=>{console.log(res)})
const button=document.querySelector("#button").addEventListener("click",()=>{
   fetch("https://jsonplaceholder.typicode.com/posts/1")
   .then((response)=>response.json())
   .then((post)=>{// id si 1 olanın yorumlarını almak için içerde bir tane daha then yapısı kullanırız.
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then((response)=>response.json())
        .then((comments)=>{console.log(comments)})
   })
})

document.querySelector("#button").addEventListener("click",async()=>{
    const responsePost= await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const post=await responsePost.json()
    const responseComment= await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    const comments= await responseComment.json()
    console.log(comments)
})

document.querySelector("#button").addEventListener("click",async ()=>{
    const post =await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    const comments= await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()
    console.log(post,comments)
})