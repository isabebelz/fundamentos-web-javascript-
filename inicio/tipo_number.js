//Testando sentenças de códigos do tipo number

const peso1 = 2.0
const peso2 = Number('2.5') //A função Number transforma a constante peso2 de string em number

console.log(typeof peso2)

console.log(Number.isInteger(peso1)) //Para saber se um número é inteiro ou não 
console.log(Number.isInteger(peso2))

const nota1 = 9.0
const nota2 = 7.5
const media = (nota1 * peso1 + nota2 * peso2) / peso1 + peso2

console.log(media)

console.log(media.toFixed(2)) //Determina o número de casas decimais 

console.log(Number.isInteger(media)) //Para saber se um número é ou não inteiro

console.log(nota1.toString) //Transforma um number em string 

console.log(media.toString(2)) //Transforma o valor em número binário 

console.log(7/0) //Qualquer número dividido por 0 resulta em infinito 

console.log("show!" * 2) //Em algumas linguagens isso resultaria em 'show! show!'

console.log(0.1 + 0.7) //Gera uma imprecisão 

console.log((10).toString) //Para passar um valor literal number para string e não (10.toString)

console.log((10.456).toFixed(2))

console.log('3' + 2) //Irá concatenar e não somar

console.log('8'/ 2) //Irá dividir a string

console.log('3' - 2) //Irá subtrair a string 

const raio = 2
console.log(Math.PI * Math.pow(raio, 3)) //Use o objeto Math para operações aritméticas mais complexas 
