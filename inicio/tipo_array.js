//Testando sentenças de código do tipo Array. Em JS um Array é um objeto, ele agrupa mais de um dado, como um vetor. A partir de um único identificador. 

const frutas = ['Melancia', 'Pera', 'Banana', 'Maça']
console.log(frutas[0]) //Busca dentro do array o elemento na determinada posição
console.log(frutas[4]) //Quando tenta acessar um indice que não existe, ele retornará 'undefined'
frutas[4] = 'Goiaba' //Pode adicionar mais elementos ao array
console.log(frutas) 
frutas.push('Tomate', 'Laranja', 'Jabuticaba') //Outra maneira de adicionar mais elementos ao array
console.log(frutas)
console.log(frutas.length) //Mostra a quantidade de elementos dentro de um array
console.log(frutas.pop()) //Irá retirar e depois retornar o último elemento do array e sua posição
delete frutas[5] //Deleta o elemento da posição determinada 
console.log(frutas)

