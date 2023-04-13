'use strict';
// Funcion que difiere la carga del cóigoJS
function downloadJSAtOnload() {
    const btnCompartir=document.getElementById('compartir');
    const barraRedes=document.getElementById('redes-group');
    btnCompartir.addEventListener('click',()=>{
        barraRedes.classList.toggle('ocultar');
    })





















    
}

if (window.addEventListener)
    window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
    window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;
