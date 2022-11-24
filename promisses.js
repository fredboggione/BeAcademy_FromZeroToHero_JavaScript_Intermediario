
// setTimeout( () => console.log('Olá, demorei 3segundos'),3000)

/* function show() {
    setTimeout( () => {
console.log('Até logo')
    },2000)

    console.log('Oi')
}

show() */
/* 
const minhaPromisse = new Promise( (resolve, reject) => {

    let n = 11
    if (n > 10) {
        resolve()
    } else {
        reject()
    }
}) */

//Abaixo observamos os métodos de minhaPromisse. A forma como foi digitado um método abaixo do outro é para melhor visualização de código, caso contrario ele ficaria assim:minhaPromisse.then(result => console.log('Resolveu')).catch(err => console.log('Erro')).finally(() => console.log('Finally'))

/* minhaPromisse
.then(result => console.log('Resolveu'))
.catch(err => console.log('Erro'))
.finally(() => console.log('Finally')) */

/* const firstUser = (Id) => {
    let response = fetch(`https://jsonplaceholder.typicode.com/todos/${Id}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

firstUser(2) */

const newAdress = (adressCep) =>{
fetch(`https://viacep.com.br/ws/${adressCep}/json/`)
.then(response => response.json())
.then(cep => {
    console.log(`Logradouro:${cep.logradouro}; Bairro:${cep.bairro} `)
})
}

newAdress(32072120)


