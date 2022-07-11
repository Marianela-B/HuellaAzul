/*!
* Start Bootstrap - Clean Blog v6.0.8 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

function cambiarColor(){
    let selectPFijo = document.getElementById("cantidadFija");
    let selectP2 = document.getElementById("cantidad");
    let contenidoFijo = parseInt(selectPFijo.textContent);
    let contenidoP2 = parseInt(selectP2.textContent);
    let selectlitros = document.getElementById("litrosCantFijo");
    let seleccionarPLimite = document.getElementById("parrafoLimite")
        if (contenidoP2 > contenidoFijo){
            selectlitros.setAttribute("style", "color:red")
            selectPFijo.setAttribute("style", "color:red");
            seleccionarPLimite.setAttribute("style", "display:block")
        }else{
            selectlitros.setAttribute("style", "color:black")
            selectPFijo.setAttribute("style", "color:black");
            seleccionarPLimite.setAttribute("style", "display:none")
    };
  
}


let litrosXPersona = 100;

function personas(){
    let selectP = document.getElementById("cantidadFija");
    let tomarPersonas = document.getElementById("cantPersonas");
    selectP.textContent= 0;
    selectP.textContent = parseInt(tomarPersonas.value) * litrosXPersona;
    cambiarColor()
}


let litrosEn5 = 60;
let litrosEn10 = 120;
let litrosEn15 = 180;
let aMano = 23*2;
let lavavajillas = 40*2;

function ducha(litros){
    let selectP = document.getElementById("cantidad");
    let selectPersonas = document.getElementById("cantPersonas").value;
    selectP.textContent=  parseInt(selectP.textContent)+ (parseInt(litros)*parseInt(selectPersonas));
    cambiarColor()
}


let contador = document.querySelector("contador");

function canilla(litros){
    let selectP = document.getElementById("cantidad");
    let seleccionarInterior = selectP.innerHTML;
    let selectPersonas = document.getElementById("cantPersonas").value;
    selectP.textContent = (parseInt(seleccionarInterior)) + (litros*parseInt(selectPersonas));
    cambiarColor()
}

function canillaLavado(litros){
    let selectP = document.getElementById("cantidad");
    let seleccionarInterior = selectP.innerHTML;
    selectP.textContent = (parseInt(seleccionarInterior)) + (litros);
    cambiarColor()
}

let canillaAbierta3 = 4*3;
let canillaAbierta5 = 4*5;
let canillaAbierta10 = 4*10;
let canillaAbierta20 = 4*20;

let inodoro2 = 8*2;
let inodoro4 = 8*4;
let inodoro8 = 8*8;
function inodoro(litros){
    let selectP = document.getElementById("cantidad");
    let seleccionarInterior = selectP.innerHTML;
    selectP.textContent = (parseInt(seleccionarInterior)) + (litros);
    cambiarColor()
}



    