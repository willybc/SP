/* Variables Javasciprt */ 
var color = "blue";
color = 'red';
var fullname = "Bob bobbington";
var age = 37;
var list = [1, 2, 3];

/* Variables Typescript*/
let color1: string= "blue";
color1 = 'red';
let fullName: string = 'Bob Bobbington';
let age1: number = 37;
let list1: Array<number> = [ 1, 2, 3];
let persona: object = { nombre: "Ana", edad:35};

/* Funcion Javascript */
function unaFuncionJavascript(mensaje){
    console.log("El mensaje" + mensaje);
}

/* Funcion Typescript */
function unaFuncionTypescript(mensaje: string){
    console.log("El mensaje" + mensaje);
}

/* Arrays y Tuplas */
let planetas: string[] = ['Mercurio', 'Venus', 'Tierra'];
let masas: number[] = [13,28,15];
let rocosos: boolean[] = [true, false, false, true];
let perdidos: any[] = [9, true, 'asteroides'];
let diametro: [ string, number] = ['Saturno', 116460];

/* Desestructuracion */
var obj = { x:1, y:2, z:3 };
console.log(obj.y);

var array = [1,2,3];
console.log(array[2]);

var array_2 = [1,2,3,5];
var [x,y, ...rest] = array_2;
console.log(rest);
