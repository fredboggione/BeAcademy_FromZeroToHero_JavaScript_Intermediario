// Exemplo de criação de um prototype.
// Uma função construtora é elaborada para criar objetos.
// Atenção a algumas mudanças na forma como é invocada: 1-O nome da função inicia-se com letra maíuscula;2-O this é utilizado para referenciar os atributos.

function Pessoa(nome, idade, peso){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
}

// Para criar um novo objeto a partir da função protótipo, utiliza-se o termo New + nome função prototype

const marcelo = new Pessoa('Marcelo',19,54);
console.log(marcelo)

const notebook = {
    cor: 'preto',
    ano: 2022,
    specifications: function(value) {
        return `Este notebook custa ${value},00; cor ${this.cor}; ano ${this.ano}.`
    }
}

const newNote = console.log(notebook.specifications(5000))

const dell = {
    marca: 'Dell',
}

Object.setPrototypeOf(dell,notebook)

const newDell = console.log(dell.specifications(10000))

