// Funcion para mover la imagen
function empezar(e){
  e.dataTransfer.setData('Text', e.target.src);
  e.dataTransfer.effectAllowed = 'move';
}
  
function moverImagen(e) {
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function soltar (e) {
  e.preventDefault();
  imagen = new Image();
  imagen.src = e.dataTransfer.getData('Text');
  imagen.style.width = "100%"
  //document.getElementById('item').appendChild(imagen);
  document.querySelector('.plantilla').appendChild(imagen);
}
  
//document.getElementById('plantilla').ondragover = moverImagen;
document.querySelector('.plantilla').ondragover = moverImagen;
document.getElementById('mover').ondragstart = empezar;
//document.getElementById('item').ondrop = soltar;
document.querySelector('.plantilla').ondrop = soltar;
  

// Ocultar div photos
function showHide(){
  var ocultar=document.getElementById('div-invisible') 
  ocultar.style.display=(ocultar.style.display=='none')?'inline':'none' } 

  //
  // Ocultar div videos
function showVideo(){
  var ocultar=document.getElementById('div-video') 
  ocultar.style.display=(ocultar.style.display=='none')?'inline':'none' } 


// Funcion para agrandar y disminuir

let iten = document.querySelector(".iten")
let isResizer = false;

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
