/*let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        console.log('Acertaste el número!');
    } 
    return;
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);*/

let numeroSecreto = 0;
let listaNumerosSorteados = [];
let intentos = 0;
let numeroMaximo = 10;



    function asignarTextoElemento(elemento, texto){ //Aqui estamos utilziando parámetros
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
        return;
    }


    function verificarIntento(){
        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
       console.log(intentos);
        if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // el usuario no acerto.
            if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'número secreto es menor');
            } else {
                asignarTextoElemento('p', 'El número secreto es mayor');
            }
            intentos++;
            limpiarCaja();

    }
    return;
}


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
   
    
}
  
    function condicionesIniciales() {
        asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
        
    }

    function generarNumeroSecreto() {
            let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
            console.log(numeroGenerado);
            console.log(listaNumerosSorteados);
            // 
            if(listaNumerosSorteados.length == numeroMaximo){
                asignarTextoElemento('p', ' Ya se sortearon todos los números posibles');
            }else {
                    // si el numeor generado esta incluido en la lista
                if (listaNumerosSorteados.includes(numeroGenerado)){
                    return generarNumeroSecreto();
                    
                }else{
                    listaNumerosSorteados.push(numeroGenerado);
                    return numeroGenerado;
                }
            }
    }

    function reiniciarJuego() {
        //limpiar la caja
        limpiarCaja();
        //indicar mensaje de inicio
  
        //generar el número aleatorio|
        //Inicializar el número intentos
        condicionesIniciales();
         //Deshabilitar el boton de njuego nuevo
     document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    }




    condicionesIniciales ();
//=== igual en valor e igual en tipo de datos
