//Testando sentenças de códigos do tipo string 

const escola = 'Cod3r'

console.log(escola.charAt(4)) //Irá buscar o caractere na posição 4

console.log(escola.charCodeAt(3)) //Busca no unicode o código relacinado ao caractere na posição 3 

console.log(escola.indexOf('d')) //Busca na string/array a posição valor digitado

const idade = ['20', '35', '24', '50', '22']
const numero = '2'
const filtraNumero = idade.filter( (num) => {
    if(num.indexOf(numero) !== -1) {
        return num
    }
})
console.log('Números que começam com 2: '.concat(filtraNumero))
console.log(idade.indexOf('20')) //Procurar inteiro em array

const valor = 'amora, abacate, amanda, azul, agrupamento'
const quantidade = valor.split('').filter(valor1 => valor1.indexOf('a') != -1) //Quantidade de vezes que uma letra aparece na string
console.log('A letra a aparece: '.concat(quantidade.length).concat(' vezes'))

const frase = 'Olá Isabel!'
console.log(frase.indexOf('Isabel')) //Retorna a quantidade de caracteres antes do inicio do valor digitado

const frase2 = 'vamos fazer um teste e esse teste dirá se vai dar certo'
console.log(frase2.indexOf('teste')) 
console.log(frase2.indexOf('teste', 16)) //Buscou dentro da string a posição do segundo 'teste', a partir do caractere 16

let filtro = 'I'
let nomes = ['Amanda', 'Ismael', 'Carla', 'Isabel', 'Jose', 'Iracema'] 
let nomesFiltrados = nomes.filter( (nome) => {
    if(nome.indexOf(filtro) != -1) {
        return nome 
    }
})
    console.log(nomesFiltrados)

    let array = ['a', 'b', 'c'];
    let copiaArray = array.concat(); //concat gerou uma copia do array
    array.push = 'd';
    copiaArray.push = 'e';
    console.log(copiaArray);
    console.log(array);

    console.log(escola.substring(1)) //Imprime do indice 1 ao último da string 

    console.log(escola.substring(0, 3)) //Imprime do indice 0 até o 3, mas não exibe no console a string na posição 3

    console.log(escola.replace('C', 'e')) //Substitui o C por e

    console.log(escola.replace(/\d/, 'e')) //Substitui todos os digitos no texto por 'e'

    console.log(escola.replace(/\w/g, 'f')) //Substitui tudo por 'f'

    //TEMPLATE STRING

    let pessoa = 'Maria';
    let mensagem = 'Como vai?';

    console.log(`Bom dia, ${pessoa}! ${mensagem}`) //Imprime vaviaveis diretamente dentro da string sem precisar concatear com + ou concat