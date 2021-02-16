let button = document.querySelectorAll(".boton-menu")

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click",eventAnimacion)
    function eventAnimacion(e){
        //e.target.classList.remove("active")
        e.target.classList.add("active")
    }    
}