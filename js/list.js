

// temel tanımlar
const listDOM = document.querySelector("#list");
let sira = 1
siraString = localStorage.getItem("siraNumarasi")
sira = Number(siraString)

// --> localStorage içinde bilgi varsa çek
if(localStorage.getItem("listem")){
    let listem = JSON.parse(localStorage.getItem("listem"))
    listDOM.innerHTML = listem
}

const formDOM = document.querySelector("#form");
formDOM.addEventListener("submit", gonder);

// gönder butonu
function gonder(event){
    event.preventDefault()
    let notDOM = document.querySelector("#not")
    if(notDOM.value){
        addItem(notDOM.value)
        notDOM.value=""
        depola()

    } else {
        uyariFunc(
            "HATA",
            "not boş olamaz",
            "danger"
        )
    }
    
}

// eklenecek öge

const addItem = function(not){
let checkControl   
    let liDOM = document.createElement("li")
    liDOM.classList.add('list-group-item')
    liDOM.innerHTML=`
    <div class="row">
    <div class="col-1">

    <input class="form-check-input" type="checkbox" value="" id="checkBox${sira}" onclick="checkBox(${sira})">
    </div>
    <div class="col-8">
    <label class="form-check-label ps-1" for="flexCheckDefault" id="not${sira}" style="max-width:260px; overflow: auto;">
    ${not}</label>
    </div>
    <div class="col-2">
    <button type="button" class="btn-close" id="buton${sira}" onclick="notuSil(${sira})"></button>
    </div>
    </div>
    `
    liDOM.id = `lidom${sira}`
    listDOM.append(liDOM)
    sira ++
    localStorage.setItem("siraNumarasi", sira)
}

// öge yok uyarısı
const uyariDOM = document.querySelector("#uyari");
const uyariFunc = function(title, message, className="warning"){
    uyariDOM.innerHTML = `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`};

// local storage
function depola(){
    let listem = listDOM.innerHTML
    localStorage.setItem("listem",JSON.stringify(listem))

}

// notu sil
function notuSil(numara){
    let x = document.querySelector(`#lidom${numara}`)
    listDOM.removeChild(x)
    depola()
}

// listeyi sıfırla
const sifirlamaDOM = document.querySelector("#listeSifirla");
sifirlamaDOM.addEventListener("click", funcLocalSilme);
function funcLocalSilme(){
    let cevap = confirm("liste sıfırlansın mı?")
    if(cevap==true){
        localStorage.removeItem("listem")
        location.reload();
    }
}

// checked
function checkBox(numara){
    let checkBoxDOM = document.querySelector(`#checkBox${numara}`)
    let notDOM = document.querySelector(`#not${numara}`)
    if (checkBoxDOM.checked == true){
        notDOM.style.textDecoration = "line-through";
        notDOM.style.color = "grey";
        checkBoxDOM.value = 1
        checkBoxDOM.setAttribute("checked", "checked");
    } else if(checkBoxDOM.checked == false){
        notDOM.style.textDecoration = "none"
        notDOM.style.color = "black";
        checkBoxDOM.value = 0
        checkBoxDOM.removeAttribute("checked");
    }
    depola()
}

