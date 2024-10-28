let satir = "\n"
let gunler = "1-Pazartesi" + satir + "2-Salı" + satir + "3-Çarşamba" + satir + "4-Perşembe" +
    satir + "5-Cuma" + satir + "6-Cumartesi" + satir + "7-Pazar" + satir + "Lütfen bir değer giriniz..."
let deger = prompt(gunler)
switch (deger) {
    case "1":
        console.log("Pazartesi günü")
        break;
    case "2":
        console.log("Salı günü")
        break;
    case "3":
        console.log("Çarşamba günü")
        break;
    case "4":
        console.log("Perşembe günü")
        break;
    case "5":
        console.log("Cuma günü")
        break;
    case "6":
        console.log("Cumartesi günü")
        break;
    case "7":
        console.log("Pazar günü")
        break;
    default:
        console.log("Geçerli bir sayı giriniz")
}
let sayac = 0;
for (let i = 1; i <= 50; i++) {
    for (let j = 1; j <= 5; i++) {
        if (i % j == 0) {
            continue;
        } else {
            sayac++
            console.log(i)
        }
    }
}
