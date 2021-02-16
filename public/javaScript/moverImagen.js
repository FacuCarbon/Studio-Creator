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
    
 