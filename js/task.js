function filtre(y){
    let allYazi = document.querySelectorAll(".yazi")
    x = allYazi.length
    if(y == "noFilter"){
        for(i=0; i<x; i++) {
            allYazi[i].classList.remove("d-none");
        }
    }else if(y != "noFilter"){

        
        for(i=0; i<x; i++) {
            allYazi[i].classList.add("d-none");
        }
        let gorunenYazi = document.querySelectorAll(`.${y}`)
        y = gorunenYazi.length
        for(i=0; i<y; i++) {
            gorunenYazi[i].classList.remove("d-none")
        }
    }
}
