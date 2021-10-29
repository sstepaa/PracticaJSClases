/* const alumnos = [
    {
        nombre : 'Emi',
        edad : 23 ,
        hobbies : ['correr' , 'dormir' , 'nadar'],
        amigos : [
            {
                nombre :'Martin',
            },
            {
                nombre : 'Leo',
            }
        ],
    },
    {
        nombre : 'Franco' ,
        edad : 21 , 
        hobbies : ['futbol' , 'golf'],
        amigos : [
            {
                nombre : 'Emi',
            },
            {
                nombre : 'Jimmy',
            },
            {
                nombre : 'Matias'
            }
        ],
    },
];

console.log(alumnos[1]['amigos'][1]) */

/* const persona = {
    nombre : 'seba',
    saludar : function(){
        console.log('Hola ' + this.nombre);
    }
};

persona.nombre = 'Stepa'
console.log(persona.saludar()) */

function saludar(){
    console.log('Hola ' + this['nombre']);
};

const manu = {
    nombre : 'Manu',
    saludar : saludar,
};

const martin = {
    nombre : 'Martin', 
    saludar : saludar,
};

console.log(martin.saludar())