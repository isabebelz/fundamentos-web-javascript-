//A partir de uma função se cria um objeto usando a palavra reservada 'new'

console.log(typeof Object)
console.log(typeof new Object())

const cliente = function() {}
    console.log(typeof cliente)
    console.log(typeof new cliente)

    //New está instanciando a função cliente a tornando um objeto

    class Produto{}
        console.log(typeof Produto)
        console.log(typeof new Produto())