//Entendendo o null e o undefined

//Atribuição por referência 

const a = {nome: 'TESTE'}

//A constante 'a' está armazenando o endereço no qual o objeto se encontra na memória

const b = a

//Agora, 'b', assim como 'a', apontam para o mesmo endereço onde o objeto se encontra na memória

console.log(b)

b.nome = 'MUDEI'

//Ao mudar o conteúdo do objeto apartir do 'b', o 'a' também percebe essa mudança. Ambos passam a apontar para o objeto {nome: 'MUDEI'}

console.log(a)
console.log(b)

//Cópia por valor

let c = 3
let d = c

console.log(d)

d++ //o ++ está incrementando/somando 1 ao d

console.log(c)
console.log(d)

//Quando a atribuição é feita em variáveis ou constantes de tipos primitivos, não há alteração no valor individual de cada um

let valor //Variável não inicializada/definida recebe undefined como resposta 
console.log(valor)

valor = null //Ao atribuir null a variável, estou dizendo que a mesma não possui valor, não aponta para nenhum lugar na memória 
console.log(valor)

//console.log(valor.toString()) //ERRO! Não tem como buscar algo dentro de uma variável/constante que não possui valor

const produto = {}
console.log(produto.preco) //Resultará em undefined pois o valor de 'preco' não foi definido 

produto.preco = 3.5
console.log(produto)

produto.preco = 0
console.log(produto)
console.log(produto.preco)

produto.preco = undefined //Evite atribuir undefined 
console.log(produto)
console.log(!!produto) 
console.log(!!produto.preco)

delete produto.preco 
console.log(produto)


produto.preco = null //Quer dizer que o preço é nulo, não possui valor
console.log(!!produto.preco)
console.log(produto)

//Para zerar uma variável por referência, use null