//Desestruturação, tira da estrutura(objeto, array, etc.) alguma informação

const pessoa = {
    nome: 'Ana',
    idade: 10,
    endereco: {
        rua: 'Rua Bonita',
        numero: 1300
    }
}

//Em objetos {}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

//Está tirando do objeto pessoa o 'nome' e a 'idade'

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {rua, numero, cep}} = pessoa
console.log(rua, numero, cep)

const {conta: {ag, num}} = pessoa
console.log(ag, num) //ERRO!