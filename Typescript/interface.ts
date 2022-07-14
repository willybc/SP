interface a {
    b: number;
}

interface b extends a {
    c: string;
}

class test implements b{
    b: number;
    c: string;
    constructor (b: number, c: string){
        this.b = b;
        this.c = c;
    }
}

/* Ejemplo interfaz Persona */

interface IPersona {
    nombre: string;
    edad: number;
    direccion: {
        calle: string;
        pais: string;
        ciudad: string;
    },
    mostrarDireccion:() => string;
}

/* Instanciando objeto en funcion de interfaz tenemos: */
const persona: IPersona ={
    nombre: 'Jose',
    edad: 30,
    direccion: {
        calle: 'San Martin',
        pais: 'Argentina',
        ciudad: 'Cordoba'
    },
    mostrarDireccion(){
        return this.nombre + ',' + this.direccion.ciudad + ',' + this.direccion.pais;
    }   
}
console.log(persona.mostrarDireccion());

/* Otro Ejm*/ 
interface IPersona{
    nombre: string;
    edad: number;
    direccion: IDireccion,
    mostrarDireccion:()=> string;
}

interface IDireccion{
    calle: string;
    pais: string;
    ciudad: string;
}

const persona2: IPersona ={
    nombre: 'Jose',
    edad: 30,
    direccion: {
        calle: 'San Martin',
        pais: 'Argentina',
        ciudad: 'Cordoba'
    },
    mostrarDireccion(){
        return this.nombre + ',' + this.direccion.ciudad + ',' + this.direccion.pais;
    }
};

console.log(persona.mostrarDireccion());