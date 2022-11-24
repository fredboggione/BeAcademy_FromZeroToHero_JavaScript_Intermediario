function hello (name){
    console.log(name)
}

hello('Fred')

function helloUser (callback){
    callback('Marcelo')
}

helloUser(hello)

const callback = e => alert('Alerta criado')

window.addEventListener('click',callback)