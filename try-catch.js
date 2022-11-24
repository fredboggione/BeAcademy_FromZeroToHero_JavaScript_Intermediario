

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