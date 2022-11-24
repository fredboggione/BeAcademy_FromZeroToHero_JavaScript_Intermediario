
/* const firstUser = (Id) => {
    let response = fetch(`https://jsonplaceholder.typicode.com/todos/${Id}`)
    .then(res => res.json())
    .then(data => console.log(data))
} */

/* const firstUser = async (Id) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${Id}`)
    let resultJSON = await response.json()
    console.log(typeof(response))

    console.log (resultJSON)
}

firstUser(1) */

async function user () {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        let data = await response.json()
        console.log(data)
    } catch (error) {
    console.log('Error --->',error)
    throw new Error ('Erro no fetch')
    } finally {
        console.log('Acabou')
    }
}

user()