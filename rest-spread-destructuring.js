// Rest parameters

function getSum (...args) {
    let total = 0
    for(const arg of args){
        total += arg
    }
    return total
}
console.log(getSum(1,2,3,6))

// Spread operator

const arr = [1, 2, 3]
const arr2 = [...arr, 4]

console.log(arr2)

// Merge arrays

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const mergearrays = [...array1, ...array2]

console.log(mergearrays)


// Destructuring

const carro = {
    marca: "Fiat",
    ano: 2018,
    portas: 4
}

/* const marca = carro.marca
const ano = carro.ano */


const {marca, ano, portas} = carro

console.log(marca)
console.log(ano)
console.log(portas)


const cliente = {
    nome: 'Marcelo',
    compras: {
        digitais:{
            livros:['Dom Casmurro','O Cortiço'],
            filmes:['Senhor dos Anéis','Matrix']
        },
        fisicas:{
            cadernos: ['Caderno']
        }
    }
}

console.log(cliente.compras.digitais.livros)
console.log(cliente.compras.digitais.filmes)

const {livros, filmes} = cliente.compras.digitais

console.log(livros)
console.log(filmes)

frutas = ["banana", "uva", "morango"]

const primeiraFruta = frutas[0]
const segundaFruta = frutas[1]
const terceiraFruta = frutas[2]

console.log (`A primeira fruta é ${primeiraFruta}, já a segunda é ${segundaFruta} e a terceira é ${terceiraFruta}`)

const [primeira, segunda, terceira] = frutas

console.log(primeira)
