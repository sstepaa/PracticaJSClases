//objeto LITERAL
const seba = {
    edad : 23 , 
    altura : 1.69 , 
    profesion : 'programacion' ,
    hobbies : function(){
        console.log('Jugar con ' + this['profesion']);
    },
}


const roberto = {
    edad : 60 , 
    altura : 1.59 , 
    profesion : 'electricidad' ,
    hobbies : function(){
        console.log('Jugar con '+ this['profesion']);
    },
}

const juan = {
    edad : 60 , 
    altura : 1.59 , 
    profesion : 'mecanica' ,
    hobbies : function(){
        console.log('Jugar con ' + this['profesion']);
    },
}

console.log(juan.hobbies())

//Function contructora de clases -- Todas las funciones contructoras de clases tiene que empezar con la primera letra en MAYUSCULA
function Persona(){
    this.nombre = 'erika' ;
    this.apellido = 'fernandez';
}

const erika = new Persona();

console.log(erika);


function Car(marca , cilindrada, comioneta, coupe, color){
    this.marca = marca;
    this.cilindrada = cilindrada;
    this.camioneta = comioneta;
    this.coupe = coupe;
    this.color = color;
}

var peugeot206 = new Car('peugeot', 1.6 , false, true, 'red');
var audi = new Car('A1', 2.0, false, true, 'grey');

console.log(peugeot206);
console.log(audi);