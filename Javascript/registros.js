// Ejercicio 2: Tu propio monumento
let torreAzadi = { 
    nombre: "torre Azadi",
    locacion: "Teherán, Irán",
    anioDeConstruccion: 1971
  }
  
  let monumentoNacionalALaBandera = {
    nombre: "Monumento Nacional a la Bandera",
    locacion: "Rosario, Argentina",
    anioDeConstruccion: 1957
}

// Ejercicio 4: Temperatura de planeta
function temperaturaDePlaneta(registro){
    return registro.nombre + " tiene una temperatura promedio de " + registro.temperaturaPromedio + " grados";
}

// Ejercicio 5: Movimiendo archivos
function moverArchivo( registro, nueva_ruta ){
    registro.ruta = nueva_ruta
}

// Ejercicio 6: Registros de dos milenios
function esDelMilenioPasado(archivo){
    return anio(archivo.creacion) < 2000
}

// Ejercicio 7: Postres complejos
function masDificilDeCocinar(registro1, registro2){  
    if ( longitud(registro1.ingredientes) > longitud(registro2.ingredientes) ){
      return registro1
    }
    else{
      return registro2
    }
}

// Ejercicio 9: 60 dulces minutos
function agregarAPostresRapidos( lista, postre ){
    if(postre.tiempoDeCoccion <= 60){
      agregar(lista, postre)
    }
}

// Ejercicio 11: Azucar!
function endulzarMenu( registro ){
    agregar( registro.postre.ingredientes, "azucar")
}
