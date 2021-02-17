let boton = document.getElementsByClassName("boton")


for (let i = 0; i < boton.length; i++) {
        boton[i].addEventListener("click",(e)=>{
            for (let i = 0; i < boton.length; i++) {
                boton[i].parentElement.classList.remove("active")
                boton[i].parentElement.parentElement.classList.remove("active")
                console.log(e.target.parentElement.parentElement);
            }
            e.preventDefault()
            e.target.parentElement.classList.add("active") 
            e.target.parentElement.parentElement.classList.add("active")
        })
    
    
}
