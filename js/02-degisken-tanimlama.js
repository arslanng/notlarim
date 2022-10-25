// var DegiskenAdi = "Deger"
// document.write(DegiskenAdi)

// let ile değişken atama (hatalı sıralama)
// console.log(FullName)
// let FullName = "Murat Gökduman"
// let ile değişken atama (doğru sıralama)
let FullName = "Murat Gökduman"
console.log(FullName)
// aynı değişkene birden fazla değer atama
let password;
password = 1234;
console.log(password);
password = 4321
console.log(password);

let adres;
adres = "23 Nisan";
console.log(adres)
adres = adres + " Köroğlu cad"
console.log(adres)

console.log(16%2)

let a = true;
console.log(Boolean(a));

let number1 = "12.222px";
number1 = parseFloat(number1)
console.log(number1)

let testBoolead1 = 0 || "" || 2;
console.log(testBoolead1)

let info = `
Merhaba ${FullName}

Bugün Template literals kullanımını inceliyoruz.

adres bilginiz sistemde ${adres} olarak yer almaktadır.

adınız ${FullName.length} karakter içermektedir. Baş harfi ${FullName[0]}

Saat: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()};

`

console.log(info);

let email = "drmuratgokduman@gmail.com";

let firmaAdi = "oyak REnault";

console.log(firmaAdi);

let editFirmaAdi = `${firmaAdi[0].toUpperCase()}${firmaAdi.slice(1, (firmaAdi.indexOf(" "))).toLowerCase()} ${firmaAdi.charAt(firmaAdi.indexOf(" ")+1).toUpperCase()}${firmaAdi.slice(firmaAdi.indexOf(" ")+2).toLowerCase()}`;

console.log(editFirmaAdi);

let url = "www.kodluyoruz.org";
let language = "Java";
language = "JavaScript";
url = url.slice(url.search(k));