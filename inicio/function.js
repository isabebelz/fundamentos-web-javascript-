//Function são trechos de códigos que podem ser reaproveitados em outras partes do programa quando solicitados

function escreva() {
    console.log('Olá, Isabel!') // \n = quebra de linha 
}

escreva() //Para chamar a função

function escrevaMensagem(mensagem) {
    console.log(mensagem)
}

escrevaMensagem('Olá Mundo!')
escrevaMensagem('Isabel Oliveira')

function soma(a, b) {
    return a + b
}

let resultadoSoma = soma(10, 5)
console.log(resultadoSoma)

console.log(soma(10,4))

//Criar uma função que passa um array como parâmetro e soma os seus valores

function somaTudo(numeros) {
    let total = 0

    for (let num of numeros) {
        total = total + num
    }
    return total
}

let arrayNumeros = [2, 3, 5, 8]
let resultado = somaTudo(arrayNumeros)
console.log('Soma tudo:', resultado)

//Quando não se sabe quantos parâmetros a função ira receber (parâmero rest)

function dadosPessoais(nome, idade, pais, cidade, ...complemento) {
    console.log(nome)
    console.log(idade)
    console.log(pais)
    console.log(cidade)
    console.log(complemento) //Variável de array
}

//dadosPessoais('Isabel', 20, 'Brasil', 'Praia Grande', 'Cor Preferida: Verde', 'Bairro: Quietude')

//Funções auto invocáveis 

(function autoExecutavel(identificador) { //(function(identificador) {
    console.log('Executei corretamente,', identificador)
}('Isabel'))

let subtraiDoisNumeros = function subtrai(a, b) {
    return a - b
}

console.log(subtraiDoisNumeros(10, 3))

//Função Anônima (sem nome)

let subtraiTresNumeros = function(a, b, c) {
    return a - b - c
}

console.log(subtraiTresNumeros(15, 7, 3))

//Funções de Callback: função como parâmetro de outra função

function somaCallback (a, b, fnCallback) {
    return fnCallback(a + b)
}

console.log(somaCallback(3, 4, function(total) {
    return total * 2
}))

//A função poderia ser atribuida a uma variável também

function somaCallback (a, b, fnCallback) {
    return fnCallback(a + b)
}

let divide = function(total) {
    return total / 2
}

console.log(somaCallback(10, 4, divide))

//Valor padrão: assume um valor pré definido caso as variáveis não estejam definidas

function nome(nome = 'Oliveira') {
    console.log(nome)
}

nome()
nome('Isabel') 