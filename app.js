let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeoMaximo =10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

   if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
    document.getElementById ('reiniciar').removeAttribute('disabled');
   } else {
    //El usuario no acertó
        if ( numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        }
        else {
            asignarTextoElemento ('p', 'El número secreto es mayor');
        }
        intentos ++;
        limpiarCaja();       
   }
    return;
}

function limpiarCaja(){
 document.querySelector('#valorUsuario').value = '';
  }

function generarNumeroSecreto () {
   let numeroGenerado = Math.floor(Math.random()*numeoMaximo)+1;  
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   //si ya sorteamos todos los números
   if (listaNumerosSorteados.length == numeoMaximo){
        asignarTextoElemento ('p', 'Ya se sortearon todos los números posibles')
   } else {

   //si el número generado está en la lista 
   if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
   } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }
}
}

function condicionesIniciales () {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento ('p', `Indica un número del 1 al ${numeoMaximo}`);
    numeroSecreto = generarNumeroSecreto
    ();
    intentos = 1;

}

function reiniciarJuego() {
    //limpiar la caja 
    limpiarCaja();
    //Inidicar mensaje de intervalo de números 
    // Generar el número aleatorio 
    //Inicialziar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

condicionesIniciales();


