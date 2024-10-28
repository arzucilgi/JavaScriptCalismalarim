 let kilo=  Number(prompt("Kilonuzu giriniz..."));
 console.log(kilo);
 let boy = Number(prompt("Boyunuzu giriniz..."));
 console.log(boy);
 let indeks= kilo/(boy*2)
 console.log(indeks)
 if( indeks<=18.5){
    console.log("ideal kilo altı")
 }
  else if(indeks>=18.5 && indeks<=24.9){
    console.log(" ideal kilo")
 }
 else if(indeks>=24.9){
    console.log("ideal kilo üstü")
 }
