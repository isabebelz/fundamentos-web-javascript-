//Let tem escopo de bloco e só é vísivel dentro dele

for (let i = 0; i < 10; i++) {
    console.log(i)
}

//console.log(i) //ERRO!

const funcs = [] //Aqui poderia ser usado a palavra reservada 'var', não teria diferença

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

//Pode-se dizer que a palavra reservada 'let' tem uma memória, já que possui escopo diferente de 'var'

funcs[2]()
funcs[8]()