//Tipos de datos en JavaScript

//Tipos de datos primitivos.Son primitivos debido a que no son objetos y no tienen métodos, ademas de que son inmutables, es decir, no se pueden cambiar una vez creados. Los tipos de datos
//String: Cadena de texto
let nombre = "Juan"; //Variable de tipo string que almacena el nombre "Juan", que se refiere a que es una cadena de texto, es decir, un conjunto de caracteres que se encuentran entre comillas simples o dobles.

//Number: Número
let edad = 30; //Variable de tipo number que almacena el número 30. Y como su nombre lo indica, permite guardar valores numericos en la variable, yas sea enteros o decimales, positivos o negativos.

//Boolean: Verdadero o falso
let esMayorDeEdad = true; //Variable de tipo boolean que almacena el valor true. Es decir, almacena una valor ya sea falso o verdadero,

//Undefined: Variable declarada pero no inicializada
let direccion; //Variable de tipo undefined que no tiene valor asignado, es decir, se declaro la variable, pero no se ha inicializado 

//Null: Valor nulo
let telefono = null; //Variable de tipo null que indica que no tiene valor



//Imprimiendo en pantalla los tipos de datos con Typeof, que es el que nos permite saber que tipo de datos estamos usando en nuestras variables

//Strings
console.log(typeof nombre); //Imprime en pantalla "string", ya que como sabemos esto es una cadena de texto

//Numbers
console.log(typeof edad); //Imprime en pantalla "number", ya que como sabemos esto es un número

//Boolean
console.log(typeof esMayorDeEdad); //Imprime en pantalla "boolean", ya que como sabemos esto es un valor verdadero o falso

//Undefined
console.log(typeof direccion); //Imprime en pantalla "undefined", ya que como sabemos esto es una variable que no tiene valor asignado

//Null
console.log(typeof telefono); //Imprime en pantalla "object", ya que como sabemos esto es un valor nulo