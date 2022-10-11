//for: é usado em laços de repetição

console.log('Dentro do laço de repetição')

for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('Fora do laço de repetição')
console.log(i)

//Var não tem escopo de bloco então é vísivel fora dele. Dentro do laço o 'i' vai até 9, de acordo com a condição. Fora do laço ele incrementa 1 e mostra o resultado, que no caso é 10.

var funcs = [] //Aqui poderia ser usado a palavra reservada 'const', não teria diferença

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

//O método push é utilizado para manipulçao de arrays, ele adiciona novos elementos no array

funcs[2]()
funcs[8]()

//Como var não possui escopo o resultado será sempre o mesmo




