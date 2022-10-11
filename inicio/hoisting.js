//Hoisting significa algo como "içar" ou "jogar para cima"

//EM VAR

// console.log('a =', a)
// var a = 2
// console.log('a =', a)

//Basicamente o var foi 'jogado' para cima do primeiro console

var a 
console.log('a =', a)
a = 2
console.log('a =', a)

//Dentro de uma função acontece o hoisting também

function teste() {
    console.log('a =', a)
    var a = 2 
    console.log('a =', a)
}

teste()

//Em let o hoisting da erro

// console.log('a =', a)
// let a = 2
// console.log('a =', a)

// function teste2() {
//     console.log('a =', a)
//     let a = 2 
//     console.log('a =', a)
// }

// teste2()