var vidasJugador = 3;
var vidasPC = 3;


function iniciarJuego() {
    let btnIniciarJuego = document.getElementById('btn-iniciar-juego');
    btnIniciarJuego.addEventListener('click', ocultarinicio);
    let btnMonster = document.getElementById('btn-monster');
    btnMonster.addEventListener('click',btnElegirMonster);
    let btnAtaque = document.querySelectorAll('.btn-atq'); 
    btnAtaque.forEach(boton => {
        //Agregar listener
        boton.addEventListener("click", ataque);
    });
    let btnReiniciar = document.getElementById('reiniciar');
    btnReiniciar.addEventListener('click',reiniciar);
}

var checkbox = document.getElementsByName("monster")
var cantMonster = checkbox.length

function ocultarinicio() {
    let seccionInicio = document.getElementById('inicio');
    let titulo = document.getElementById('titulo');
    let seccionElegirMonstruo = document.getElementById('eleccion-personaje');
   
    seccionInicio.style.display = 'none';
  
    titulo.style.position = 'absolute';
    titulo.style.top = '-150px';
    titulo.style.left = '-200px';
    titulo.style.transform = 'translate(100px, 100px)';
    titulo.style.transform = 'scale(0.3)';
    
    seccionElegirMonstruo.style.display = 'flex';

}

function ocultarpersonajes() {
    let seccionElegirMonstruo = document.getElementById('eleccion-personaje');
    let seccionCombate = document.getElementById('combate');
    seccionElegirMonstruo.style.display = 'none';
    seccionCombate.style.display = 'flex';    
}


function btnElegirMonster() {
   let monsterJ 
     for(i=0;i<cantMonster;i++){
        if(checkbox[i].checked){
            monsterJ = checkbox[i]           
        }
     }

     document.getElementById('pjeJugador').children[0].innerHTML =  monsterJ.value
  
     document.getElementById('img-campeon').src = monsterJ.nextElementSibling.children[1].src;

     eleccionPersonajePc()
    
     ocultarpersonajes()
        
    }

function aleatorio() {    
    return Math.floor(Math.random() * (cantMonster - 1) + 1);     

}

function eleccionPersonajePc() {
  let nro = aleatorio()
  let monsterPC = checkbox[nro]

  document.getElementById('pjePc').children[0].innerHTML =  monsterPC.value
  
  document.getElementById('img-pc').src = monsterPC.nextElementSibling.children[1].src;

}

function ataque() {
    
    atqJugador = this

    let nro = aleatorio()
    let atqPC = document.querySelectorAll('.btn-atq')[nro]

    resultado = ''

    switch (atqJugador.value) {
        case 'AGUA':
                    switch (atqPC.value) {
                        case 'AGUA':
                            resultado = 'EMPATE'
                            break;
                        case 'MADERA':
                            resultado = 'GANASTE'
                            break;                            
                        case 'FUEGO':
                            resultado = 'GANASTE'
                            break;                            
                        case 'TIERRA':
                            resultado = 'GANASTE'
                            break; 
                    
                        default:
                            resultado = 'PERDISTE'
                            break;
                    }
            break;

        case 'MADERA':
            
                    switch (atqPC.value) {
                        case 'MADERA':
                            resultado = 'EMPATE'
                            break;
                        case 'ELECTRICIDAD':
                            resultado = 'GANASTE'
                            break;                            
                        case 'OSCURIDAD':
                            resultado = 'GANASTE'
                            break;                            
                        case 'TIERRA':
                            resultado = 'GANASTE'
                            break;                                                       
                        case 'HIELO':
                            resultado = 'GANASTE'
                            break; 
                    
                        default:
                            resultado = 'PERDISTE'
                            break;
                    }
            break;

        case 'BESTIA':            
            
                    switch (atqPC.value) {
                        case 'BESTIA':
                            resultado = 'EMPATE'
                            break;
                        case 'AGUA':
                            resultado = 'GANASTE'
                            break;                            
                        case 'MADERA':
                            resultado = 'GANASTE'
                            break;                            
                        case 'TIERRA':
                            resultado = 'GANASTE'
                            break; 
                    
                        default:
                            resultado = 'PERDISTE'
                            break;
                    }
            
            break;

        case 'FUEGO':            
            
                    switch (atqPC.value) {
                        case 'FUEGO':
                            resultado = 'EMPATE'
                            break;
                        case 'MADERA':
                            resultado = 'GANASTE'
                            break;                            
                        case 'BESTIA':
                            resultado = 'GANASTE'
                            break;                            
                        case 'OSCURIDAD':
                            resultado = 'GANASTE'
                            break; 
                        case 'HIELO':
                            resultado = 'GANASTE'
                            break; 
                            
                        case 'ELECTRICIDAD':
                            resultado = 'EMPATE'
                            break; 
                    
                        default:
                            resultado = 'PERDISTE'
                            break;
                    }
            
            break;     

        case 'HIELO':            
                        
                    switch (atqPC.value) {
                        case 'HIELO':
                            resultado = 'EMPATE'
                            break;
                        case 'AGUA':
                            resultado = 'GANASTE'
                            break;                            
                        case 'BESTIA':
                            resultado = 'GANASTE'
                            break;                            
                        case 'TIERRA':
                            resultado = 'GANASTE'
                            break; 
                    
                        default:
                            resultado = 'PERDISTE'
                            break;
                    }
            
            break;

        case 'OSCURIDAD':            
                        
                     switch (atqPC.value) {
                        case 'OSCURIDAD':
                            resultado = 'EMPATE'
                            break;
                        case 'AGUA':
                            resultado = 'GANASTE'
                            break;                            
                        case 'BESTIA':
                            resultado = 'GANASTE'
                            break;                            
                        case 'HIELO':
                            resultado = 'GANASTE'
                            break; 
                    
                        default:
                            resultado = 'PERDISTE'
                            break;
                    }            
            break;   

        case 'ELECTRICIDAD':

                  switch (atqPC.value) {
                        case 'ELECTRICIDAD':
                            resultado = 'EMPATE'
                            break;
                        case 'AGUA':
                            resultado = 'GANASTE'
                            break;                            
                        case 'BESTIA':
                            resultado = 'GANASTE'
                            break;                            
                        case 'HIELO':
                            resultado = 'GANASTE'
                            break; 
                        case 'OSCURIDAD':
                            resultado = 'GANASTE'
                            break; 
                        case 'FUEGO':
                            resultado = 'EMPATE'
                            break; 
                    
                        default:
                            resultado = 'PERDISTE'
                            break;
                    } 
            
            break;

        case 'TIERRA':
                    switch (atqPC.value) {
                        case 'TIERRA':
                            resultado = 'EMPATE'
                            break;
                        case 'FUEGO':
                            resultado = 'GANASTE'
                            break;                            
                        case 'ELECTRICIDAD':
                            resultado = 'GANASTE'
                            break; 
                        case 'OSCURIDAD':
                            resultado = 'GANASTE'
                            break;
                    
                        default:
                            resultado = 'PERDISTE'
                            break;
                    }  
            
            break;
    
        default:
            break;
    }
    
 
    document.getElementById('vs').innerHTML =  resultado
    document.getElementById('atq-jugador').style.transform =  'scale(0.5)'
    document.getElementById('atq-jugador').innerHTML =  atqJugador.innerText
    document.getElementById('atq-jugador').style.transform =  'scale(1.5)'
    
    document.getElementById('atq-PC').innerHTML =  atqPC.innerText
    document.getElementById('atq-PC').style.transform =  'scale(1.5)'
    if (resultado == 'GANASTE') {
        vidasPC --
        document.getElementById('vida-pc').innerHTML = 'Vidas: ' + vidasPC

        final()
    } else {
        if (resultado == 'PERDISTE') {
          
            vidasJugador --
            document.getElementById('vida-jugador').innerHTML = 'Vidas: ' + vidasJugador
            final()
        }
    }
    
    


}



function final() {
    if (vidasJugador == 0  || vidasPC == 0) {
        let seccionAtaque = document.getElementById('seccionataques');   
        seccionAtaque.style.display = 'none';
        document.getElementById('atq-jugador').style.display =  'none'
        document.getElementById('atq-PC').style.display =  'none'
        document.getElementById('reiniciar').style.display =  'flex'   

        if (vidasJugador == 0) {
            document.getElementById('vs').innerHTML =  "LOOOOOOOOSER.. PERDISTE PERO PODES VOLVER A INTERTARLO"
            document.getElementById('subtitulo-combate').innerHTML = 'PERDISTE'
            document.getElementById('subtitulo-2-combate').innerHTML = 'NI ESO PODES HACER BIEN'

        }
        if (vidasPC == 0) {
            document.getElementById('vs').innerHTML =  "EHHHHHHHH PAPU.. GANASTE...CRACK..GENIO DE LA ATACASION.. TE AMO"
            document.getElementById('subtitulo-combate').innerHTML = 'GANASTE'
            document.getElementById('subtitulo-2-combate').innerHTML = 'VAMOOOOO'
        }

    } 

}

function reiniciar() {
    window.location.reload()
}

window.addEventListener('load', iniciarJuego)

