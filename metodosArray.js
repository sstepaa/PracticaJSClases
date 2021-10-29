/* let array = [1 , 2 , 'seba' , ['dos' , 5] , true , 6, function Hola (){console.log('Hola')}];

console.log(array[6]) */
//Primera forma de agregar elementos a un arreglo
var lista = [];

lista[0] = 'Primer elemento';
lista[1] = 'Segundo elemento'
lista;

//Segunda forma de agregar elementos a un array
var arrayPush = ['posicion nativa'];
arrayPush.push('Ultima posicion'); //push es una funcion que hace , recibir un argumento y ponerlo en la ultima posicion de array;

arrayPush;

//forma de obtener elementos de un array , y sacarselo.
var arrayPop = ['Posicion inicial' , 2 , 3];

var str = arrayPop.pop();
arrayPop;


str;//La funcion pop agarro el ultimo elemento del array , lo tomo , y se lo llevo a la variable.

//usamos funcion push y pop para agregar y sacar elementos del array
var arregloVacio = [];

//agregamos elementos con push.
arregloVacio.push('Primer elemento');
arregloVacio.push('Segundo elemento');

arregloVacio;

//Sacamos los elementos con pop.
arregloVacio.pop();
arregloVacio.pop();

arregloVacio;

//Recorrer un arreglo

var arrayRecorrido = [0, 1, 2, 3, 4, 5];

/* for(var i = 0; i < arrayRecorrido.length; i++){
    console.log(arrayRecorrido[i]);
} */

//Otra forma de recorrer un array es con un while
while(arrayRecorrido.length > 0){
    console.log(arrayRecorrido.pop());
}

arrayRecorrido
