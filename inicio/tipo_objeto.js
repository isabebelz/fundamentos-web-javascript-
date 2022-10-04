//Testando sentenças de códigos do tipo objeto
//Objeto é uma vaviável que armazena diversas variáveis. É representado por {}

let pessoa = {
    nome:'Isabel',
    idade: 20,
    'ultimo-nome':'Oliveira'
}

console.log(pessoa)
console.log(pessoa.idade) //Busca dentro do objeto algo especifico 
console.log(pessoa.nome)
console.log(pessoa['ultimo-nome']) //Mais usado quando uma variável dentro do objeto possui algum caractere especial. Ex: ultimo-nome

pessoa.aniversario = '19/04/2002'
console.log(pessoa) //Consegue adicionar mais informação ao objeto, fora do objeto

delete pessoa['ultimo-nome']
console.log(pessoa) //Deleta o que quiser do objeto

pessoa.hobbies = ['Ouvir música', 'Assistir série', 'Andar de bicicleta', 'Pular corda'] //É possível criar array dentro do objeto
pessoa.comidasPreferidas = {
    fruta: ['Mexirica', 'Melancia', 'Goiaba', 'Pera'],
    comida: ['Pizza', 'Lasanha', 'Strogonoff', 'Batata frita']
} //É possível criar um objeto dentro do objeto, fora ou dentro do objeto.

console.log(pessoa)

let pessoa2 = { //É possível criar uma função dentro de um objeto
    digaOi: function(nome) { //Aqui poderia ser escrito somente: digaOi(nome) {
        return `Olá ${nome}` 
    } 
    } 

console.log(pessoa2.digaOi('Isabel'))

let cor = 'Verde'
let idade = 21
let pessoa3 = {
    nome: 'Matheus',
    cor: cor, // Aqui pode ser escrito somente 'cor', já que os nomes são os mesmos
    idade
}

console.log(pessoa3)

//Merge entre dois objetos distintos 

let cachorro = {
    nome: 'Nina',
    idade: 3 + ' anos'
}

let extraInfo = {
    raça: 'Vira-lata',
    pelo: 'Preto',
    sexo: 'F'
}

//let RG_canino = Object.assign({}, cachorro, extraInfo) //O par de chaves vazias quer dizer que irá gerar um objeto novo 
//let RG_canino = Object.assign(cachorro, extraInfo) ---> assim o objeto 'extraInfo' é jogado para dentro do 'cachorro'. EVITAR pois modifica o objeto dessa maneira

let RG_canino = {
    ...cachorro, 
    ...extraInfo //... é o spread: significa que as propriedades dos objetos serão espalhados para a variável, no caso,   RG_canino
}

console.log(RG_canino)

let nacionalidade = 'País'
let nome = 'Último nome'

let pessoa4 = {
    nome: 'Isabel',
    [nacionalidade]: 'Brasil' //Ao invés de aparecer dentro do objeto a palavra 'nacionalidade', aparece o valor da variável, por causa do []
}

console.log(pessoa4)

//Getters (tem função de retornar um valor) e Setters (serve para atribuir um valor)

let chamada = [
    {
        nome: 'Isabel',
        sexo: 'F'
    },
    {
        nome: 'Matheus',
        sexo: 'M'
    },
    {
        nome: 'Dwight',
        sexo: 'M'
    },
    {
        nome: 'Stanley',
        sexo: 'M'
    }
]
console.log(chamada[0])
console.log(chamada[1].nome)

//Objeto que serve para navegar no array da chamada

// let usuarios = {
//     posicao: 0,
//     get atual() {
//         return usuarios[this.posicao]
//     },
//     set atual(posicao) {
//         this.posicao = posicao
//     },
//     proximo() {
//         ++this.posicao
//     },
//     anterior() {
//         --this.posicao
//     }
// }

// console.log(usuarios.atual) //Isabel
// usuarios.proximo()

// console.log(usuarios.atual) //Matheus
// usuarios.proximo()

// console.log(usuarios.atual) //Dwight
// usuarios.proximo()

// console.log(usuarios.atual) //Stanley
// usuarios.anterior()

// console.log(usuarios.atual) //Dwight
// usuarios.anterior()

// console.log(usuarios.atual) //Matheus

// usuarios.atual = 0
// console.log(usuarios.atual) //Isabel