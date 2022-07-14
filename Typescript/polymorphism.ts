/* Polimorfismo por herencia*/ 
class Forma{
    nombre: string="";
    Dibujar(){
        console.log("Implementacion metodo Dibujar clase base");
    }
}

class Rectangulo extends Forma{
    base: number=0;
    altura:number=0;
    Dibujar(){
        console.log("Implementacion metodo Dibujar clase hija Rectangulo");
    }
}

class Circulo extends Forma{
    radio:number=0;
    Dibujar(){
        console.log("Implementacion metodo Dibujar clase hija Circulo");
    }
}

/* Polimorfismo por abstraccion */
abstract class Operacion{
    protected valorA:number;
    protected valorB:number;
    protected resultado:number;
    abstract Operar():void;

    set ValorA(value:number){
        this.valorA = value;
    }

    set ValorB(value:number){
        this.valorB = value;
    }

    get Resultado():number{
        return this.resultado;
    }
}

class Suma extends Operacion{
    Operar(){
        this.resultado = this.valorA + this.valorB;
    }
}

class Resta extends Operacion{
    Operar(){
        this.resultado = this.valorA - this.valorB;
    }
}

/* Polimorfismo por interfaces */

interface IOperacion{
    Operar(a:number, b:number):number;
}

class ISuma implements IOperacion{
    Operar(a:number, b:number):number{
        return a+b;
    }
}

class IResta implements IOperacion{
    Operar(a:number, b:number):number{
        return a-b;
    }
}