// alert("!Soy JavaScript!")


// let mensaje;
// mensaje = "Hola mundo";

// // alert(mensaje);



// let a = 5;
// let b = 6;
// let suma = a+ b;
// console.log("El resultado de la suma es : " + suma);


// const PI = 3.14126;
// const RED_COLOR = "#FFFFF";

// pi_dos = pi;
// pi_dos = 7;
// console.log(PI);
// console.log(pi_dos);



// let mensaje = "Hola";
// mensaje = 1232;


//Tipos de datos 
// //numero
// let n = 1222;
// n = 12.5434;


// //infinity 
// console.log(1/0);
// console.log(Infinity);


// //NaN: o not a number

// console.log("no es un numero / 2");


// //tipo de dato Bigint (2^53-1) numeros bastante grandes

// let numero_grande = 12323234234234234234234;
// console.log(numero_grande)

//Tipo string

// let nomb = 'gabriel';
// console.log(`Hola ${nomb}`);


// //Tipos booleanos 

// //true y false


// let verdadero = true;
// let falso = false;

// //el valor null no significa un objeto no existente

// let edad = null;

// es un valor especial que representa el vacio/nada


//El operador typeof: devuelve el tipo de dato de una variable
// console.log(typeof 0);
// console.log(typeof undefined);
// console.log(typeof "hola");
// console.log(typeof true);
// console.log(typeof 10n);



// //prompt

// let nombreCapturado = prompt('Ingrese el nombre', 'Hola');
// //regresa un undefined al no ingresar nada


// prompt("ingrese el nombre")
// prompt("ingrese el nombre", '') //solo para internet explorer


// //confirm

// //devuelve un booleano, true or false
// let confirmacion = confirm("Te gusta el helado??");

// console.log(confirmacion);


//Conversion de tipos

//existen dos tipos de conversiones explicitas e inplicitas

//converit a string

let valor = true;
console.log(typeof valor);

let nuevoValor = String(valor);
console.log(typeof nuevoValor)

//convertir un numero

let numero = '123'
console.log(Number(numero));//Number

console.log(Number('hola'))//NaN

//tabla de conversiones de number

/*
undefined -> NaN
null -> 0
true -> 1
false -> 0
string '' ->0
string 'hola' -> NaN

*/


//Convertir a booleano

console.log(Boolean("hola"));

/*
undefined -> false
null -> false 
string '' -> false
NaN -> false
0 -> false

'0' -> true
'  ' -> true
*/

console.log(Boolean(String(0)));
console.log(Boolean(0));


//

// const texto = document.getElementById("texto")

// function cambioTexto(){
//     texto.innerHTML = "!Soy JavaScript!"
// }