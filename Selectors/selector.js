/*
!SELECTORS (SEÇİCİLER )
Javascript içerisinden html kodlarını yakalamak için kullandığımız yöntemlerdir 
classname, id,  tag name kullanarak element seçme işelmini gerçekleştiricez 

*/
const button= document.getElementById("/* BURAYA ÜZERİNDE İŞLEM YAPILACAK ID ÇAĞIRILIR**/")
getElementByClassName("") //Class ismine göre yaklaar
getElementByTagName("")
console.log(button.id)
console.log(button.className)
const classListesi=button.classList
console.log(button.classList)
const clearButton=document.querySelector("#id ismini verdik ve eriştik")
const toDoList=document.querySelector(". Class ismi ile çağırdık")[2]
toDOList=document.querySelector("li:nth-child(2)")
toDOList=document.querySelector("li:nth-child(odd)")//tek indekse sahip olanları seçti
toDOList=document.querySelector("li:nth-child(even)")//Çift indeksteki elemanları getirdi
// eğer seçilen classtan birden fazla varsa all olan kulllanılır
//bu şekilde kullanımda sadece tek bir tanesi gelir 
const toDoLİst=Array.from(document.querySelector("li:nth-child(even)"))
toDoList.array.forEach(function(todo){
    todo.style.backgraundColor="black";
})