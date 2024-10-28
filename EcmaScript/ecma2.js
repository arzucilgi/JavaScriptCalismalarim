//!MAP KULLANIMI
/*
MAP:Dizi mantığı ile çalışır dizi kategorisine koyabilirim
*/
const map = new Map()

/*map.set(1,"arzu")
map.set(true,5)
map.set([1,2,3],{firstname:"arzu", lastname:"samet"})
map.set(true,"5")
console.log(map) 
*/
//SET
map.set(35, "İzmir")
map.set(34, "İstanbul")
map.set(6, "Ankara")
map.set(1, "Adana")
//GET
console.log(map.get(6))
const donenDeger = (map.get(34))
console.log(donenDeger)
//SİZE
let value=map.size
console.log(value)
//DELETE
value=map.delete(1)
console.log(map)
//HAS
console.log(map.has(34))
// FOR OF İLE MAP ÜZERİNDE GEZİNEBİLİRİZ
for(let [key,value] of map){
    console.log(key,value)
}
const keys=Array.from(map.keys())
keys.forEach(key=>console.log(key,map.get(key)))

for(let key of map.keys()){
    console.log(key)
}
for(let value of map.values()){
    console.log(value)
}
//MAPTEN ARRAYE ÇEVİRME 
const array=Array.from(map)
array.forEach((value)=>{
    console.log(value[0],value[1])}
)
//ARRAYDEN MAPE ÇEVİRME 

const array1=[
    [34,"İstanbul"],
    [27,"Antep"],
    [46,"Kahramanmaraş"]
]
const myMAp=new Map(array1)
console.log(myMAp)
//!NOT 
/* 
let key=[1,2,3]
map.set(key,"array")
console.log(map.get([1,2,3]))// bu şekilde arraya ulaşamaz çünkü array bir referans tiptir. getin içindeki aynı 
array farklı bir referansa sahip olduğu için bulamaz
console.log(map.get(key))// bu şekilde arraye ulasabiliriz çünkü ikisininde referansı aynı yeri gösteriyor*/


//!SET: set bir dizi çeşididir.diziden farkı ise tek bir değer sadece bir defa  tutulur 
const set = new Set()
//ADD
set.add(true)
set.add(3.14)
set.add("Arzu")
set.add([1, 2, 3])
set.add({ userName: "Arslan", passwoerd: "1" })
//SİZE
console.log(set.size)
//DELETE
set.delete(true)
set.delete([1, 2, 3])// silmeez çünkü  referans tiplidir
// HAS
console.log(set.has("Arzu"))
//FOR OF
for (let value of set) {
    console.log(value)
}
//SETTEN ARRAY OLUŞTURMA 
const values = Array.from(set)
values.forEach(go => console.log(go))
//ARRAYDEN SET OLUŞTURMA
let newArray = [1, "arzu", "samet", "arslan", true, 7]
const newSet = new Set(newArray)
console.log(newSet)
//!TEMPLATE LİTERALS :Düzgün bir şekilde string biirleştirme işlemi yapar
function write(fName, lName) {
    console.log("isim: " + fName + " soyisim: " + lName)
    console.log(
        `
        isim:  ${fName}
        soyisim: ${lName}
        `
    )
}
write("arzu", "arslan")