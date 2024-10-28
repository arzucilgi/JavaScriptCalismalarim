/**PROMİSE 
 * Asenkron yapıları senkrona çevirmek için kullanılır.Callbacklerin gelişmiş versiyonlarıdır.
 * 1-Panding (Bekleme Aşaması)
 * 2-Resolve(fullfilled)  aşaması kabul edilirse .then() ile yakalanır. 
 * 2-Rejected aşaması ise reddediilirse uygulanna aşamadır. .catch ile yakalanır.
 */


// let check =false;

// let promise1=new Promise((resolve,reject)=>{
//     if(check){
//         resolve("Promise başarılı...")
//     }else{
//         reject("Promise başarısız...")
//     }
// })
// console.log(promise1)

/*
let  check=false
function createPromise(){
    return new Promise((resolve,reject)=>{
        if(check){
            resolve("Proomise de herhangi bir sorun yok")
        }else{
            reject("Sıkıntı büyük")
        }
    })
}
createPromise()
.then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{console.log("Her  durumda çalışır ")})
 */

//? PROMİSE + XMLHTTPREQUEST
/*
function readStudent(url){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest()
       try {
        xhr.addEventListener("readystatechange",()=>{
            if(xhr.readyState===4&& xhr.status===200){
                resolve(JSON.parse(xhr.responseText))
            }
        })
       } catch (error) {
            reject(error)
       }
       xhr.open("GET",url)
       xhr.send()
    })
}

readStudent("promise.json")
.then((data)=>{console.log(data)})
.catch((err)=>{console.log(err)})

*/

function getUsers(url){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest()
        xhr.addEventListener("readystatechange",()=>{
            try {
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText))
                }
            } catch (error) {
                reject(error)
            }
        })
        xhr.open("GET",url)
        xhr.send()
    })
}
getUsers("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
    data.forEach(user => {
        console.log(user.name)
    });
})
.catch((err)=>{console.log(err)})
.finally(()=>{console.log("Her durumda çalışacak")})

//?PROMİS.ALL YAPISININ KULLANIM AMACI VE ŞEKLİ
//verilen bütün promisler başarılı ise thene girer bir tanesi bile başarısızsa catch blogu içerisinde çalışır.

const p1=Promise.resolve("Birinci promise başarılı")
const p2= Promise.resolve("İkinci promise başarılı")
const p3=new Promise((resolve,reject)=>{
    resolve("üçüncü promis başarılı")
})
const p4=Promise.reject("Hata var!!!")

Promise.all([p1,p2,p3,p4])
.then((res)=>{
    for(let value of res){
        console.log(value)
    }
})
.catch((err)=>(console.log(err)))