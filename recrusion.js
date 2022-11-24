function contDown (number){
    console.log(number)
    const newNumber = number --

    if (newNumber > 0){
        contDown(number)
    }
}

/* contDown (10) */

// Defaut parameters

function sayHi (message = 'Oi'){
    console.log (message)
}

console.log(sayHi())