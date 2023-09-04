// CARROUSEL
var imagenes =['../img/IMAGEN1.png', '../img/imagen2.png','../img/imagen3.png'],
    cont = 0;

function carrousel(contenedorcarrousel){
    contenedorcarrousel.addEventListener('click', e => {
        let atras= contenedorcarrousel.querySelector('.boton-atras'),
            adelante = contenedorcarrousel.querySelector('.boton-adelante'),
            img = contenedorcarrousel.querySelector('#imgcarrousel'),
            target = e.target;

    if (target == atras){
        if (cont > 0){
            img.src =imagenes[cont - 1];
            cont--;
        } else {
            img.src =imagenes[imagenes.length - 1];
            cont = imagenes.length - 1;
        }
    } else if (target = adelante){
        if (cont < imagenes.length -1){
            img.src =imagenes[cont + 1];
            cont++;
        } else {
            img.src =imagenes[0];
            cont = 0;
        }
    }

    });

}

document.addEventListener('DOMContentLoaded', () => {
    let contenedorcarrousel = document.querySelector('.contenedorcarrousel');

    carrousel(contenedorcarrousel);

})

//FIN DE CARROUSEL