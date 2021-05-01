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


//---------------------Tipos de datos 
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


// //-----------Tipos booleanos 

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



// //--------------prompt

// let nombreCapturado = prompt('Ingrese el nombre', 'Hola');
// //regresa un undefined al no ingresar nada


// prompt("ingrese el nombre")
// prompt("ingrese el nombre", '') //solo para internet explorer


// //----------------confirm

// //devuelve un booleano, true or false
// let confirmacion = confirm("Te gusta el helado??");

// console.log(confirmacion);


//------------------Conversion de tipos

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




//---------------------Operadores basicos


//operadores unarios y binarios


//binarios
// +, -, /, *, ^

//unarios
//en numeros enteres no se presenta ningun cambio
let a = 1;
console.log(+a);


//entonces el operador + los convierte en tipo number con su respectivo valor
//y con - niega los valores
// +
console.log(+true)
console.log(+false)
console.log(+NaN)

// -
console.log(-true)
console.log(-false)
console.log(-NaN)




//---------Comparaciones

let resultado = 3 > 1
console.log(resultado);

//cadenas
//1.la letra minuscula es mayor que la mayuscula
//2.la palabra con mas letras es mayor que la de menos letras
//ademas como prioridad toma la primera letra sin importar la canitdad de caracteres que tenga
console.log( 'Z' > 'A' );//true
console.log( 'Showxxx' > 'show' );//false
console.log( 'casa' > 'casas' );//false
console.log()


//comparacion de diferentes tipos

//-al compararar valores de diferentes tipos, javascript por defecto cambia los valores a numero
//-Toda comparacion con NaN es false
//las comparaciones del null y undefined actuan de forma diferente: son igulaes entre si pero no son iguales al otro valor


//string
console.log('******* String ********')
console.log('2' > 1);//true
console.log('01' == 1);//true
console.log(true == 1);//true
console.log(false == 0);//true

//NaN
console.log('******* NaN ********')
console.log('hola' > 0);//false
console.log('hola' < 0 );//false
console.log('hola' == 0 );//false


//undefined
console.log('******* undefined ********')
console.log(undefined > 0);//flase
console.log(undefined < 0);//flase
console.log(undefined == 0);//flase

//null
console.log('******* Null ********')
console.log(null > 0);//flase
console.log(null < 0);//flase
console.log(null >= 0);//true

console.log(null == 0);//flase


//no diferencia de 0 de falso
console.log('*******no diferencia de 0 de falso********')

console.log(0 == false);//true
console.log('' == false);//true


//Booleano
console.log('******* Booleanos ********')
a = 0;
let b = '0';

let boolean_a = Boolean(a);
let boolean_b = Boolean(b);

console.log(a == b);//true
/*

Tabla de conversiones de numero

undefined -> NaN
null -> 0
true -> 1
false -> 0
string '' ->0
string 'hola' -> NaN
*/

/*
Tabla de conversion de Booleanos

undefined -> false
null -> false 
string '' -> false
NaN -> false
0 -> false

'0' -> true
'  ' -> true
*/



//------------------------sentencia if
//if de una linea
if(5>4)console.log("Verdadero")

if(3>5){

}


//oprador ternario

let edad = 20
let result = edad > 10 ? x=5 : x=7

console.log(result);


//--------------------------Operador OR
console.log(true || true);//true
console.log(true || false);//true
console.log(false || true);//true
console.log(false || false);//flase

if( 4==4 || 2>5 ){
    console.log("Verdadero")
}


/*
resultado = valor_uno || valor_dos || valor_tres
1. evaluar los operando de izquierda a derecha
2. por cada operand, convirte el valor a booleano. si el resultado es true se detiene y devulve el valor original de ese operando
3. si todos los operando son falsos devuelve el ultimo operando

*/


let comparacion_booleana = true || false || true;//true
comparacion_booleana = '0' || '0';//'0'
comparacion_booleana = undefined || null || NaN || '';//''
comparacion_booleana = undefined || null || 3 || '';//3
comparacion_booleana = undefined || 'hola' || 3 || '';//'hola'

//resumen: devuelve el primer valor verdadero o el ultimo si todos son falsos


/*
Tabla de conversion de Booleanos

undefined -> false
null -> false 
string '' -> false
NaN -> false
0 -> false

'0' -> true
'  ' -> true
*/



//-----------------Operador AND
console.log(true && true);//true
console.log(true && false);//true
console.log(false && true);//true
console.log(false && false);//flase

if( 4==4 && 2>5 ){
    console.log("Verdadero")
}


/*
resultado = valor_uno || valor_dos || valor_tres
1. evaluar los operando de izquierda a derecha
2. por cada operand, convirte el valor a booleano. si el resultado es true se detiene y devulve el valor original de ese operando
3. si todos los operando son falsos devuelve el ultimo operando

*/


comparacion_booleana = true && false && true;//false
comparacion_booleana = '0' && '0';//'0'
comparacion_booleana = undefined && null && NaN && '';//undefined
comparacion_booleana = undefined && null && 3 && '';//undefined
comparacion_booleana = undefined && 'hola' && 3 && '';//undefined

//resumen: devuelve el primer valor falso o el ultimo si todos son falsos

//presedencia de los AND y OR 
//el and tiene prioridad frente al OR, si no hay ningun parentesis

//a && b || c && d == (a && b) || ( c && d )

//negacion

console.log(!true);//false
console.log(!false);//true
console.log(!!undefined);//false == Boolean(undefined)


//Nullish o fusion de nulos

/*
resultado = valor_uno || valor_dos || valor_tres
1. evaluar los operando de izquierda a derecha
2. por cada operando revusa si es null o undefined y regresa el primero que no sea ni nulo ni undefined
3. si todos los operando han sido evaluados son nulos o undefined regresa el ultimo

*/

a = null ?? undefined ?? undefined ?? null ?? 'hola' ?? null ?? undefined;//'hola'

a = undefined ?? undefined ?? null ?? null ?? undefined;//null