/* (function helloWorld (){
    alert("Hello,World");
}
)() */

/* (function (message){
    alert(message);
}
)("Olá,Mundo!") */

// Exemplos de arrow functions

/* const sum = (a) => {
    return a + 100;
}

console.log(sum(3))

const sum2 = b =>  b + 100;

console.log(sum2(3)) */

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
]

const newArray = materials.map(
    function showLength(materials) {
        return materials.length
    }
);

const newArray = materials.map(material => material.length)

console.log(newArray)

