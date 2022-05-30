// Ejercicio 7: Trasladar

function agregar(unaLista, unElemento) /* ... */
// Inserta unElemento al final de unaLista.
// Este es un procedimiento que no retorna nada pero modifica a unaLista:
//
//  > let cancionesFavoritas = ["La colina de la vida", "Zamba por vos"]
//  > agregar(cancionesFavoritas, "Seminare")
//  > cancionesFavoritas
//  ["La colina de la vida", "Zamba por vos", "Seminare"]


function remover(unaLista, unElemento) /* ... */
// Quita unElemento de unaLista. En caso de que no esté, no hace nada.
// Este es un procedimiento que no retorna nada pero modifica a unaLista:
//
//  > let listaDeCompras = ["leche", "pan", "arroz", "aceite", "yerba"]
//  > remover(listaDeCompras, "pan")
//  > listaDeCompras
//  ["leche", "arroz", "aceite", "yerba"]



function trasladar (lista1, lista2, elemento){
    remover(lista1, elemento)
    agregar(lista2, elemento)
}

// Ejercicio 9: Contiene

function posicion(unaLista, unElemento) /* ... */
// Retorna la posición en que se encuentra unElemento en unaLista.
// Si el elemento no está en la lista, retorna -1
//
//  > let premios = ["dani", "agus", "juli", "fran"]
//  > posicion(premios, "dani")
//  0
//  > posicion(premios, "juli")
//  2
//  > posicion(premios, "feli")
//  -1

function contiene(lista, elemento){
    return posicion(lista, elemento) >= 0
  }

// Ejercicio 11
function medallaSegunPuesto(puesto){
    let medallas = ['nada', 'oro', 'plata', 'bronce']
    
    if (puesto === -1 || puesto > 3){
      return medallas[0]
    }
    else{
      return medallas[puesto]
    }
    
    
  }
medallaSegunPuesto(1)

// Ejercicio 12: No te olvides de saludar
function saludar(personas) {
    for(let persona of personas) {
      imprimir("hola " + persona)
    }
}