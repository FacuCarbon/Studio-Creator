let iten = document.querySelector(".iten")
let isResizer = false;
// Funcion para mover la imagen


// Funcion para agrandar y disminuir
const resizers = document.querySelectorAll(".resizer")
let currentResizer;
for (const resizer of resizers) {
    resizer.addEventListener("mousedown", imgMouseDown)
    function imgMouseDown(e){
        currentResizer = e.target
        isResizer = true
        let prevX = e.clientX
        let prevY = e.clientY

        window.addEventListener("mousemove",imgMouseMove)
        window.addEventListener("mouseup",imgMouseUp)
        function imgMouseMove(e){
            console.log("funciona");
            const rect = iten.getBoundingClientRect()

            if (currentResizer.classList.contains("se")) {
                iten.style.width = rect.width - (prevX - e.clientX) + "px";
                iten.style.height = rect.height - (prevY - e.clientY) + "px";
              } else if (currentResizer.classList.contains("sw")) {
                iten.style.width = rect.width + (prevX - e.clientX) + "px";
                iten.style.height = rect.height - (prevY - e.clientY) + "px";
                iten.style.left = rect.left - (prevX - e.clientX) + "px";
              } else if (currentResizer.classList.contains("ne")) {
                iten.style.width = rect.width - (prevX - e.clientX) + "px";
                iten.style.height = rect.height + (prevY - e.clientY) + "px";
                iten.style.top = rect.top - (prevY - e.clientY) + "px";
              } else {
                iten.style.width = rect.width + (prevX - e.clientX) + "px";
                iten.style.height = rect.height + (prevY - e.clientY) + "px";
                iten.style.top = rect.top - (prevY - e.clientY) + "px";
                iten.style.left = rect.left - (prevX - e.clientX) + "px";
              }

            prevX = e.clientX
            prevY = e.clientY
        }
        
        function imgMouseUp(){
            window.removeEventListener("mousemove",imgMouseMove)
            window.removeEventListener("mouseup",imgMouseUp)
            isResizer = false
        }
    }
}
