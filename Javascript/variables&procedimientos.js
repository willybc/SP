// Ejercicio 5 

imprimir("Tirando dados");
imprimir("La primera tirada dio " + tirarDado());
imprimir("La segunda tirada dio " + tirarDado());
imprimir("La tercera tirada dio " + tirarDado());

// Ejercicio 6: Coerciciones

function elefantesEquilibristas(numEle){
    return ( numEle + " elefantes se balanceaban")
}

// Ejercicio 7: El circulo de la vida
function perimetroCirculo(radio){
    return (3.14159265358979*2)*radio
  }
  
  function areaCirculo(radio){
    return (3.14159265358979)*radio*radio
  }

// Ejercicio 8: Pienso que asi es mas facil

let pi = 3.14159265358979;

function perimetroCirculo(radio){
  return (pi*2)*radio
}

function areaCirculo(radio){
  return (pi)*radio*radio
}

// Ejercicio 10: Variables globales
let cargaMaximaEnKilogramos = 300

function ascensorSobrecargado(cantPersonas){
  
  return (pesoPromedioPersonaEnKilogramos * cantPersonas) > cargaMaximaEnKilogramos
}

// Ejercicio 11: La buena fortuna

function aumentarFortuna (){
    pesosEnMiBilletera = pesosEnMiBilletera * 2
  }


