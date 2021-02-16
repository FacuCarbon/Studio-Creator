
function empezar(e ){
    e.dataTransfer.setData('Text', this.id);
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
    document.getElementById('item').appendChild(imagen);
    }
    
    document.getElementById('item').ondragover = moverImagen;
    document.getElementById('mover').ondragstart = empezar;
    document.getElementById('item').ondrop = soltar;
    
 