// Ejercicio 3: Todas las ganancias, la ganancia
function gananciaTotal4(balancesDeUnPeriodo){
    let sumatoria = 0;
    sumatoria = sumatoria + balancesDeUnPeriodo[0].ganancia;
    sumatoria = sumatoria + balancesDeUnPeriodo[1].ganancia;
    sumatoria = sumatoria + balancesDeUnPeriodo[2].ganancia;
    sumatoria = sumatoria + balancesDeUnPeriodo[3].ganancia;
    return sumatoria;
}

// Ejercicio 5: Cuentas claras
function cantidadDeBalancesPositivos(balancesDeUnPeriodo) {
    let cantidad = 0;
    for (let balance of balancesDeUnPeriodo) {
      if (balance.ganancia > 0){
        cantidad += 1
      }
    }
    return cantidad;
}

// Ejercicio 6: La ganancia promedio
function gananciaPromedio(conjunto){
    gananciaTotal(conjunto)
    
    return gananciaTotal(conjunto) / longitud(conjunto)
}

// Ejercicio 7: Quien gana, quien pierde
function gananciaPositiva( balancesDeUnPeriodo ){
    let acu = 0
    for ( let balance of balancesDeUnPeriodo){
      if ( balance.ganancia > 0){
        acu = acu + balance.ganancia
      }
        
    }
    return acu
  }
  
  function promedioGananciasPositivas( balancesDeUnPeriodo){
    return gananciaPositiva(balancesDeUnPeriodo) / cantidadDeBalancesPositivos(balancesDeUnPeriodo) 
}

// Ejercicio 8: Soy el mapa, soy el mapa
function ganancias(balancesDeUnPeriodo) {
    let ganancias = [];
    for (let balance of balancesDeUnPeriodo) {
      agregar(ganancias, balance.ganancia)
    }
    return ganancias;
}

// Ejercicio 9: A filtrar, a filtrar cada cosa en su lugar
function balancesPositivos(balancesDeUnPeriodo) {
    let balances = [];
    for (let balance of balancesDeUnPeriodo) {
      if ( balance.ganancia > 0){
        agregar(balances, balance )
      }
      
    }
    return balances;
}

// Ejercicio 10: Un promedio mas positivo
function gananciasDeBalancesPositivos(balances){
    return ganancias(balancesPositivos(balances))
  }
  
  function promedioDeBalancesPositivos(ganancias){
    return promedio(gananciasDeBalancesPositivos(ganancias))
}

// Ejercicio 11: Esto es lo maximo
function maximaGanancia ( ganancia ) {
    return maximo(ganancias(ganancia)) 
}

// Ejercicio 12: Como minimo
function minimaGananciaPositiva( ganancia ) {
    return minimo(gananciasDeBalancesPositivos(ganancia))
} 

// Ejercicio 13: Los mejores meses del anio
/*
> meses([
    { mes: "enero", ganancia: 870 }, 
    { mes: "febrero", ganancia: 1000 }, 
    { mes: "marzo", ganancia: 1020 }, 
    { mes: "abril", ganancia: 2300 }, 
    { mes: "mayo", ganancia: -10 }
  ])
["enero", "febrero", "marzo", "abril", "mayo"]

> afortunados([
      { mes: "enero", ganancia: 870 }, 
      { mes: "febrero", ganancia: 1000 }, 
      { mes: "marzo", ganancia: 1020 }, 
      { mes: "abril", ganancia: 2300 }, 
      { mes: "mayo", ganancia: -10 }
    ])
[ { mes: "marzo", ganancia: 1020 }, { mes: "abril", ganancia: 2300 }]

> mesesAfortunados([
    { mes: "enero", ganancia: 870 }, 
    { mes: "febrero", ganancia: 1000 }, 
    { mes: "marzo", ganancia: 1020 }, 
    { mes: "abril", ganancia: 2300 }, 
    { mes: "mayo", ganancia: -10 }
  ])
["marzo", "abril"]

*/

function meses(listaMeses){
    //Dada una lista con registros devuelve una lista de meses
    let meses = []
    for(let mes of listaMeses){
      agregar(meses, mes.mes)
    }
    return meses
}
function afortunados(listas){
    //Filtra aquellos registros que tuvieron una ganancia mayor a $1000
    let afortunados = []
    for( let lista of listas){
      if (lista.ganancia > 1000){
        agregar(afortunados, lista)
      }
    }
    return afortunados
  }
function mesesAfortunados(lista){
    //Devuelve aquellos meses que fueron afortunados
    return meses(afortunados(lista))
}
