//Poniendo topes
// Math.max(100 - 30, 0)
// 70 // da el máximo entre 70 y 0, que es 70  

// Math.max(100 - 120, 0)
// 0 // da el máximo entre -20 y 0, que es 0

function extraer(saldo, monto) {
    return Math.max(saldo- monto, 0);
}

function cuantoSaleAproximadamente(precio, impuestos) {
    return Math.round(precio * impuestos);
}

//Booleanos
function estaEntre(a, b , c){
    return a> b && a < c
  }
  
  function estaFueraDeRango(a, b, c){
    return a < b || a > c
}

//Operando Strings

function longitudNombreCompleto(nombre, apellido){
    return longitud(nombre) + longitud(" ") + longitud(apellido)
  }

//Y q tal si?

function maximo(numero1, numero2){
    if(numero1 > numero2){
      return numero1;
    }
    else{
      return numero2
    }
  }

// De q signo sos?

function signo( unNumero ){
    if( unNumero > 0){
      return 1
    }
    else if( unNumero < 0){
      return -1
    }
    else{
      return 0
    }
  }

// Los premios

function medallaSegunPuesto(puesto){
    if (puesto === 1){
      return "oro";
    }
    else if (puesto === 2){
      return "plata";
    }
    else if (puesto === 3){
      return "bronce";
    }
    else{
      return "nada";
    }
  }

// Ejercicio 2: Me conviene?
function meConviene(pulgadas, memoria){ 
  let costo = cuantoCuesta(pulgadas,memoria);
  return costo<6000 && pulgadas>= 32 && memoria >= 8;
  
}
meConviene(38,9)

// Ejercicio 3: Triangulos
function perimetroTriangulo(lado1, lado2, lado3){
  return lado1 + lado2 + lado3
}

function areaTriangulo(base, altura){
  return (base*altura)/2
}

// Ejercicio 4: Cuadrados
function perimetroCuadrado(lado){
  return lado * 4
}

function areaCuadrado(lado){
  return lado*lado
}

// Ejercicio 5: Esta afinado?
function estaAfinado(frecuencia){
  return frecuencia === 440
}

// Ejercicio 6: Esta cerca?
function estaCerca(frecuencia){
  return frecuencia >= 437 && frecuencia <= 443 && frecuencia !== 440
}

// Ejercicio 7: Cartelitos
function escribirCartelito(titulo, nombre, apellido){
  return titulo + " " + nombre + " " + apellido ;
}

// Ejercicio 8: Mas cartelitos
function escribirCartelito(titulo, nombre, apellido, flag){
  if (flag) {
    return titulo + " " + apellido ;
  }
  else{
    return titulo + " " + nombre + " " + apellido ;
  } 
}

// Ejercicio 9: Cartelitos optimos
function escribirCartelitoOptimo(titulo, nombre, apellido){
  
  return escribirCartelito(titulo,
                          nombre,
                          apellido,
                          (longitud(nombre+apellido) > 15)
                          )
 
}

// Ejercicio 10: Cara o ceca
function decisionConMoneda(moneda, comida1, comida2){
  
  if ( moneda === "cara"){
    return comida1
  }
  
  else{
    return comida2
  }
}

// Ejercicio 11: Envido!
function valorEnvido(numCartas){
  
  if( numCartas >= 1 && numCartas <= 7){
    return numCartas
  }
  
  else if ( numCartas >= 10 && numCartas <= 12)
    return 0  
}

// Ejercicio 12: Quiero retruco!
function puntosDeEnvidoTotales(valor1, palo1, valor2, palo2){
  if (palo1 ===  palo2) {
    return valorEnvido(valor1) + valorEnvido(valor2) + 20
  }
  
  else{
    return Math.max(
                      valorEnvido(valor1),
                      valorEnvido(valor2)
                    )
  }
}

// Ejercicio 13: Quiero vale cuatro!
function valorCantoTruco(canto){
  if (canto === "truco"){
    return 2
  }
  
  else if ( canto === "retruco"){
    return 3
  }
  
  else{
    return 4
  }  
}



