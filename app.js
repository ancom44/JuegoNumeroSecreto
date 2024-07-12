let numeroMaximo=10;
let listaNumeroUsado=[];
let numeroSecreto= generarNumeroSecreto();
console.log(numeroSecreto);
let intentos=1;
let maxIntentos=3;


function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

function verificarIntento(){
    if(intentos<maxIntentos){
        let numeroDeUsuario=parseInt(document.getElementById('numeroUsuario').value);
        if(numeroDeUsuario==numeroSecreto){
            asignarTextoElemento('h1',`Numero de intento ${intentos} ${intentos==1? 'vez': 'veces'}`)
            asignarTextoElemento('p','ACERTASTE!!!')
            habilitarBoton();

        }
        else{
            if(numeroDeUsuario>numeroSecreto){
                asignarTextoElemento('p','Numero secreto es menor al ingresado');
            }
            else{
                asignarTextoElemento('p','Numero secreto es mayor al ingresado');
            }
        }
    }

    else{
        asignarTextoElemento('h1', `EXCEDISTE EL NUMERO DE INTENTOS, realizaste ${intentos} intentos`)
        habilitarBoton();
    }
    
    intentos++;
    limpiarInput();
}

function generarNumeroSecreto(){
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumeroUsado)
    if(listaNumeroUsado.length==numeroMaximo){
        console.log('correcto')
        asignarTextoElemento('p','Se sortearon todos los numeros posibles')

    }
    else{
        if(listaNumeroUsado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            listaNumeroUsado.push(numeroGenerado);
            return numeroGenerado
        }
        

    }


}

function reiniciarJuego(){
   intentos=1;
   numeroSecreto=generarNumeroSecreto();
   console.log(numeroSecreto);
   asignarTextoElemento('h1','Juego de numero secreto');
   
   deshabilitarBoton();
}

function habilitarBoton(){
    document.getElementById('reiniciar').removeAttribute('disabled');
    

}

function deshabilitarBoton(){
    document.getElementById('reiniciar').setAttribute('disabled',"true");
}

function limpiarInput(){
    document.querySelector('input').value='';
    //asignarTextoElemento('input','');
}




asignarTextoElemento('h1','Juego de numero secreto');
asignarTextoElemento('p', 'Ingrese un numero del 1 al 10')

let numeroDoble = x => 2*x;
let numeroduplicado = function(y){return y*2;}