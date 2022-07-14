/* Agregacion y Composicion */ 
class Helice{

}

class TrenDeAterrizaje{
    private numTrenAterrizaje:number = 0;
    public constructor ( pNumTrenAterrizaje:number){
        this.numTrenAterrizaje = pNumTrenAterrizaje;
    }
    public toString(){
        return this.numTrenAterrizaje + " Tren de Aterrizaje/s";
    }
}

class Alas{
    private numAlas:number = 0;
    public constructor( n: number){
        this.numAlas = n;
    }

    public toString(){
        return this.numAlas + " Ala/s";
    }
}

class Turbina{
    private numTurbinas:number = 0;
    public constructor(n : number){
        this.numTurbinas = n;
    }

    public toString(){
        return this.numTurbinas + " Turbina/s";
    }
}

class Cubierta{
    private cabinaTripulacion:boolean = false;
    private cabinaVuelo:boolean = false;
    private sistemaEmergencia:boolean = false;
    private numTanquesCombustible:number = 0;
    private numPuertasSalidas:number = 0;

    public constructor( pCabinaTripulacion:boolean, pCabinaVuelo:boolean, pSistemaEmergencia:boolean, pTanquesCombustible:number, pPuertasSalida:number){
        this.cabinaTripulacion = pCabinaTripulacion;
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numTanquesCombustible = pTanquesCombustible;
        this.numPuertasSalidas = pPuertasSalida;
    }

    public toString(){
        let mensaje = "Cubierta compuesta de: ";
        if (this.cabinaVuelo){
            mensaje += " Cubierta de Vuelo, ";
        }
        if (this.cabinaTripulacion){
            mensaje += " Cubierta de Tripulacion, ";
        }
        if ( this.sistemaEmergencia){
            mensaje += " Sistema de Emergencia, ";
        }
        mensaje += this.numTanquesCombustible + " Tanques de Combustible, ";
        mensaje += this.numPuertasSalidas + " Puertas de Salida.";
        return mensaje;
    }
}

class Aeroplano{
    private helice: Helice;
    private trenAterrizaje:TrenDeAterrizaje;
    private alas: Alas ;
    private cubierta: Cubierta;

    constructor( phelice:Helice, pTrenAterrizaje:TrenDeAterrizaje, pAlas:Alas, pCubierta:Cubierta){
        this.helice = phelice;
        this.trenAterrizaje = pTrenAterrizaje;
        this.alas = pAlas;
        this.cubierta = pCubierta;
    }
    public toString(){
        let mensaje = "Aeroplano compuesto por : ";
        mensaje += this.helice.toString();
        mensaje += this.alas.toString();
        mensaje += this.trenAterrizaje.toString();
        mensaje += this.cubierta.toString();
        return mensaje;
    }
}
