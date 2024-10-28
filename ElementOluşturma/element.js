//  Dinamik Olarak Element Oluşturma 
const go = document.querySelector(".div1")
const link = document.createElement("a")
link.id = "goWebSide"
link.className = "go"
link.href = "http://enesbayram.net"
link.target = "_blank"
link.innerHTML = "Kişisel  Websiteme Git"
go.appendChild(link)

const div = document.querySelector("#div4")
const todo = document.createElement("div")
const li = document.createElement("li")
li.innerHTML = "list"
div.appendChild(todo)
todo.appendChild(li)

// ELEMENT SİLME İŞLEMLERİ
// let value
// const todoList = document.querySelector("#div4")
// value = todoList.children[0]
// console.log(value)
// todoList.removeChild(value)
// const div1 = document.querySelector("#div2")
// console.log(div1)
// div1.remove()

//  todolist.romeveChild(todos[todos.length-1])bu benim kodumdan bağımsz örnek

//  ELEMENT YER DEĞİŞTİRME
const eski = document.querySelector("#div2")
const yeni = document.createElement("h2")
yeni.style.paddingLeft = "20px"
yeni.style.fontFamily = "Times New Roman"
yeni.style.fontWeight = "bold"
yeni.textContent = "Yeni Todo Listesi"
console.log(eski.childNodes)// başlığın hangi noda sahip olduğunu 
//görmek için kullandık
eski.replaceChild(yeni, eski.childNodes[1])









