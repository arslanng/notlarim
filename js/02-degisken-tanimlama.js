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
url = url.slice(url.search("k"));

// tagname üzerinden gidince console.log da alabilmek için ID bilgisi de gerekmekte
// let title = document.getElementsByTagName('h2');
// console.log(title.title.innerHTML);

let title = document.getElementById('title');
title.innerHTML = "Değiştirilen Başlık";
console.log(title.innerHTML);

let link = document.querySelector("ul#list>li>a")
link.innerHTML += " değişti";
link.style.color = "red";
link.classList.add("btn");

// let promptName = prompt("lütfen adınızı yazınız:","buraya yazılacak");
// let promptDeneme = document.querySelector("#promptDeneme");
// promptDeneme.innerHTML = `${promptDeneme.innerHTML} <small style="color:red">${promptName}</small>`;

let FirstChild = document.querySelector("ul#list1>li:first-child");
FirstChild.innerHTML = `<span style="color: red">İlk öge değişti</span>`;
let LastChild = document.querySelector("ul#list1>li:last-child");
LastChild.innerHTML = `<span style="color: green">Son öge değişti</span>`;

// listeyi tanımlıyoruz
let ulDOM = document.querySelector("ul#list1");

// liste ögesi yaratıyoruz
let liDOM = document.createElement("li");
liDOM.innerHTML = "Bunu ben ekledim";

// listeye ögeyi ekle (en sona)
// ulDOM.append(liDOM);

// listenin başına öge ekle
ulDOM.prepend(liDOM);

let denemeH3 = document.querySelector(".deneme-h3");

denemeH3.classList.add("text-primary", "bg-dark", "boş-klass");

denemeH3.classList.remove("bg-dark", "olmayan-klass")//olmayan bir klası silmek istediğimzde hata vermiyor.

denemeH3.classList.toggle("text-primary");

denemeH3.classList.toggle("text-primary");

denemeH3.classList.replace("boş-klass", "yerine-gelen-klass");


// Karşılaştırma Operatörleri ve Mantıksal Operatörler

//Koşul yapısı kullanımı
if(FullName.length>0){console.log("tanımlı kullanıcı")}
else{console.log("tanımsız kullanıcı")};

//çoklu koşul kullanımı: if-else
// let userName = prompt("Lütfen adınızı giriniz")
// let age = prompt("lütfen yaşınızı giriniz")
// let infoEhliyet = document.querySelector("#Ehliyet")

// if (userName && age >= 18){
//     infoEhliyet.innerHTML = "ehliyet alabilir"
// } else if (!userName){
//     infoEhliyet.innerHTML = "kullanıcı adı girilmedi"
// } else if (userName && !(age >= 18)){
//     infoEhliyet.innerHTML = "Yaşın tutmuyor"
// }

// Ternary Operatör ( Koşul ? Doğruysa : Yanlışsa) ile If Kullanımı

// let userName = prompt("Lütfen adınızı giriniz");
// let age = prompt("lütfen yaşınızı giriniz");
// let infoEhliyet = document.querySelector("#Ehliyet");

// infoEhliyet.innerHTML = (userName && age >= 18 ? "ehliyet alabilir" : "ehliyet alamaz");

// Bölüm sonu egzersizi

// let notum = prompt("notunu yaz:");
// let derecem;
// let notDoc = document.querySelector("#not");
// const SMILE = `
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
//   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//   <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
// </svg>
// `
// const FROWN = `
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
//   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//   <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
// </svg>
// `

// if(notum <=100 && notum >=0){
//     notDoc.classList.add("text-primary")
//     notDoc.innerHTML = SMILE
//     if(notum >= 90){
//         derecem = "AA"
//     } else if(notum >= 85){
//         derecem = "BA"
//     } else if(notum >= 80){
//         derecem = "BB"
//     } else if(notum >= 75){
//         derecem = "CB"
//     } else if(notum >= 70){
//         derecem = "CC"
//     } else if(notum >= 65){
//         derecem = "DC"
//     } else if(notum >= 60){
//         derecem = "DD"
//     } else if(notum >= 50){
//         derecem = "FD"
//     } else if(notum < 50){
//         derecem = "FF"
//         notDoc.classList.remove("text-primary")
//         notDoc.classList.add("text-danger")
//         notDoc.innerHTML = FROWN
//     }
    
// }else{
//     derecem = "hatalı bilgi"
//     notDoc.classList.add("text-danger")
//     notDoc.innerHTML = `<b>hatalı bir bilgi girdiniz</b> `
// }

// notDoc.innerHTML += `Notunuz ${notum} -> ${derecem}`

// parametre ve return 

let firstName = "lorem";
function greetings(firstName=""){
    console.log(`merhaba ${firstName}`)
}

greetings();

function degistir(id, metin){
    let degissin = document.querySelector(id)
    let depo = "değisti"
    degissin.innerHTML == metin ? degissin.innerHTML = depo : degissin.innerHTML = metin; 
}

// form etkinliği
let color = document.querySelector("#select");
color.addEventListener('change', selectBox);

function selectBox(event){
    var x = document.querySelector("#select").value;
    document.querySelector("#secim").innerHTML = `Seçimim ${x}`;
    console.log("Etkinlik tipi : " + event.type);
    console.log("deger : " + event.target.value);
}


// Kabarcıklanma Etkinliği(Event Bubbling)
const kutu = document.querySelector("#kutu");
const form = document.querySelector("#selectColor");
const label = document.querySelector("#label");


kutu.addEventListener('click' ,function(){
    console.log("kutu");    
    });
form.addEventListener('click' ,function(){
    console.log("form");    
    });
label.addEventListener('click' ,function(){
    console.log("label");    
    });
color.addEventListener('click' ,function(){
    console.log("color");    
    });

// soru 
let yellowball = document.getElementById("yellow");
let purpleBall = document.getElementById("purple");

yellowball.onclick = function() {
purpleBall.style.backgroundColor = "yellow";
}
purpleBall.onclick = function() {
purpleBall.style.backgroundColor = "rebeccapurple";
}

// bölüm sonu egzersizi
// localStorage uygulandı
let arttirDOM = document.querySelector("#arttir");
let azaltDOM = document.querySelector("#azalt");
let counterDOM = document.querySelector("#counter");
let counter = Number(localStorage.getItem("sayaç"))
counterDOM.innerHTML = counter;

arttirDOM.addEventListener("click", tikla)
azaltDOM.addEventListener("click", tikla)

function tikla(){
    
    if(this.id == "arttir"){
        console.log("arttir");
        counter += 1 
    } else if(this.id == "azalt"){
        console.log("azalt")
        counter -= 1 
    }
    counterDOM.innerHTML = counter
    window.localStorage.setItem("sayaç", counter)
}



// form submit örnek 2
let ornekFormDOM = document.querySelector("#ornekForm")
ornekFormDOM.addEventListener("submit", handleSubmit)
let usernameOrnekDOM = document.querySelector("#usernameOrnek")
usernameOrnekDOM.addEventListener("change", handleChange)
let passwordOrnekDOM = document.querySelector("#passwordOrnek")
passwordOrnekDOM.addEventListener("change", handleChange)


function handleSubmit(event) {
    event.preventDefault()
    console.log("username:" + usernameOrnekDOM.value + "-" + "password:" + passwordOrnekDOM.value);
  }
function handleChange(event) {
    if (event.target.name === "usernameOrnek") {
        usernameOrnekDOM.value = event.target.value;
        console.log("yeni username girildi")
    }
    if (event.target.name === "passwordOrnek") {
        passwordOrnekDOM.value = event.target.value;
        console.log("yeni password girildi")
    }
  }
  
// form submit örnek 1

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener("submit", formSubmit)
formDOM.addEventListener("submit", localStorageAdd)

function formSubmit(event){
    event.preventDefault()
    // event.preventDefault() eventin default ayarını iptal eder.
    console.log("işlem gerçekleşti")
    // formdaki veri lokalStorage'a eklendi
}
function localStorageAdd(){

    let infoScoreDOM = document.querySelector("#score")
    console.log(infoScoreDOM.value)
    localStorage.setItem("score", infoScoreDOM.value)
}

// input içinden değer almak örnek 2

let ornekForm2DOM = document.querySelector("#ornekForm2")

ornekForm2DOM.addEventListener("submit", formSubmit)
ornekForm2DOM.addEventListener("submit", ornekSubmit2)




function ornekSubmit2(){
    let fname = document.querySelector("#fname").value
    let age = document.querySelector("#age").value
    let at = document.querySelector("#email").value.indexOf("@")
    submitOK = "true"    
    if(fname.length > 20){
        alert(`adın ${fname.length} olamaz. Olması gerekenden ${fname.length-20} karakter fazla`)
        submitOK = "false"
    }
    if(isNaN(age)||age<1||age>100){
        alert(`sence de yaşa ${age} yazman saçma değil mi`)
        submitOK = "false"
    }
    if(at == -1){
        alert(`mail adresinde @ olmalıdır.`)
        submitOK = "false"
    }
    if(submitOK == "false"){
        return false
    } 

}

// input Böküm Sonu Egzersizi

let userForm2DOM = document.querySelector("#userForm2");
userForm2DOM.addEventListener("submit", formHandler);
let userList2DOM = document.querySelector("#userList2")

// local stroge içinden listeye veri çekmek
let sira = 1
veriDogrulama = localStorage.getItem(`score${sira}`)
if(veriDogrulama){for(i=0; i<1000; i++){
    let username = localStorage.getItem(`username${sira}`)
    let score = localStorage.getItem(`score${sira}`)
    if(!username){break}

    let liDOM = document.createElement("li")
    liDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
    liDOM.innerHTML = `${username} <span class="badge bg-primary rounded-pill">${score}</span>`
    userList2DOM.append(liDOM)
    // if(sira == localStorage.length/2){break}
    sira++
}
}




// hatalı veri alarm işlevi
const alertDOM = document.querySelector("#alert");
const alertFunction = (title, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;



// eklenecek veriyi doğrulama
function formHandler(event){
    event.preventDefault()
    const USER_NAME = document.querySelector("#username2")
    const SCORE = document.querySelector("#score2")

    if(USER_NAME.value&&SCORE.value){
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = ""
        SCORE.value = ""
    } else {
        console.log("hatalı giriş")
        alertDOM.innerHTML = alertFunction(
            "HATA",
            "Eksik bilgi girdiniz"
        )
    }
}



const addItem = (username, score) => {
    
    localStorage.setItem(`username${sira}`, username)
    localStorage.setItem(`score${sira}`, score)
    
    
    let liDOM = document.createElement("li")
    liDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
    liDOM.innerHTML = `${username} <span class="badge bg-primary rounded-pill">${score}</span>`
    userList2DOM.append(liDOM)
    sira ++
}

// listeyi sıfırla
const sifirlamaDOM = document.querySelector("#listeSifirla");
sifirlamaDOM.addEventListener("click", funcLocalSilme);


function funcLocalSilme(){
    let cevap = confirm("liste sıfırlansın mı?")
    if(cevap==true){
        localStorage.clear()
        location.reload();
    }
}

// dizeler ile çalışmak
let dizeAdi = [1, 2, ["aslı", "kerem"], 4, 5]
dizeAdi.forEach((item, index) => {
    if(Array.isArray(item)==false){
        console.log(item, index);
    } else {
        item.forEach((item, index) => {
            console.log(item, index)
        })
    }
});

// object

let newObject = {
    userName: "arslanng",
    parola: 1234,
    memleket: "Kayseri"
}

// try ve catcth kullanımı - throw ile istisna oluşturma örneği
function valid(){
    try {
        if (document.querySelector("#dogumTarihi").value == "") {
            throw 'Doğum tarihini boş geçemezsiniz';
        };
    }catch(err) {
        alert(err);
    }
}

// Fetch API ile Çalışmak
// lokal .json dosyasından veri çekmek
console.log("fetch API")
fetch("data/settings.json").then(
    response => {
        return response.json()
}).then(responseJson=>{
    console.log(responseJson)
    console.log(responseJson.userName)
})

// API üzerinden (online json serverdan) veri çekmek
let userListDOM = document.querySelector("#userListFetch")

fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
    ).then(
        responseJson => {
            console.log(responseJson[0])
            responseJson.forEach(item => {
                console.log(item.id, item.title)
                let liDOM = document.createElement("li")
                liDOM.innerHTML = `<strong>item id:</strong> ${item.id} <strong>item title:</strong> ${item.title}`
                userListDOM.appendChild(liDOM)
            })
        }
        )