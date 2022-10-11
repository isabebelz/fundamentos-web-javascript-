//Escopo é o local onde a variável é vísivel 

//VAR: vísivel dentro e fora de blocos/escopo 

{
    {
        {
            var sera = 'Será???'
            console.log(sera)
        }
    }
}

console.log(sera)

//Quando se define uma variável dentro de uma função, ela só é vísivel dentro do escopo da função

function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local) //ERRO!

//EVITE VARIÁVEIS GLOBAIS quando se cria uma variável fora de uma função ela é global, ou seja, vísivel em todo código
//Dentro do mesmo escopo tenha variáveis com nomes diferentes

//LET: diferente do VAR, let só é vísivel dentro do escopo

var numero = 1 

 {
    let numero = 2
    console.log('Dentro do escopo(let): ', numero)
 }

 console.log('Fora do escopo(var): ', numero)

//O escopo de CONST é igual ao de let

//Em const não se pode modificar tipos simples

// const a = 30
// a = 20 //ERRO!
// console.log(a)

const a = { nome: 'Isabel'}
a.nome = 'Matheus' //E NÃO a = {nome: 'Matheus'}
console.log(a) 