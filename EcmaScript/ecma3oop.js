// Oluşturulan bir sınıfı kullanmak istiyorsssak onu new anahtar kelimesiyle nesne türetme zorundayız.Js oop konusunda çok gelişmiş değildir.
class Insan{
    /*
    1-Özellikler
    2-Yapıcı Method
    3-Fonksiyon
     */
    constructor(isim,soyisim,yas,maas){//yapıcı methottur.yeni nesne oluştuktan sonra ilk bunun içine  gelinir.Parmetreleri Eşlestirmek için
        this.isim=isim;
        this.soyisim=soyisim;
        this.yas=yas;
        this.maas=maas
    }
    bigileriGöster(){
        console.log(`
        İsim: ${this.isim}
        Soyisim: ${this.soyisim}
        Yas: ${this.yas}
        Maas: ${this.maas}
        `)
    }
}
const insan1=new Insan("Arzu Nur","Çılgı",20,30000)
const insan2=new Insan("Samet","Arslan",21,35000)
insan1.bigileriGöster();
insan2.bigileriGöster();
console.log(insan1.isim)

//!STATİC : bazı değişkenleri ve metotları static olarak tanımladığımızda classtan nesne türetmeden direk  sınıf ismi üzerinden metoları
//!ve özelliklere erişebilyoruz
class Matematik{
    topla(a,b){
        console.log(a+b)
    }
    static cikar(a,b){
        console.log(a-b)
    }
    carp(a,b){
        console.log(a*b)
    }
    bol(a,b){
        console.log(a/b)
    }
}
const matematik=new Matematik
matematik.topla(10,5)
Matematik.cikar(10,2)// static tanımlanmış metoda nesne üzerinden erişemedim sınıf ismini kullanarak eriştim
//Eğer bir nesne özelliğni veya metodu statik olarak tanımlarsam yeni bir nesne oluşturmadan static olarak tanımlanan  özelliğe 
// sınıf ismini kullanarak erişirim eğer statik olarak tanımlamadıysam o nesne özelliğine erişmek için yeni bir nesne oluşturup 
// nesne üzerinden istediğim bilgiye erişmek zorundayım...

//!INHERİTANCE(MİRAZ ALMA): bir sınıfı miras aldığımızda o sınıfa ait bütün özellikleri ve metodları da miras almış oluruz ve kullanabilirz

class Person{
    constructor(firstName,lastName,salary){
        this.firstName=firstName
        this.lastName=lastName
        this.salary=salary
    }
    writeInfo(){
        console.log(this.firstName,this.lastName,this.salary)
    }
}

class Student extends Person{
    constructor(firstName,lastName,salary){
        super(firstName,lastName,salary)
    }
    write(){
        super.writeInfo()
    }
}
const student1 = new Student("Arzu","Samet","40000")
student1.write()