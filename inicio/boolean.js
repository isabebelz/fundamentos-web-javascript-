//Testando sentenças de códigos do tipo booleano 

let isAtivo = true 
console.log(isAtivo)

isAtivo = false
console.log(isAtivo) 

isAtivo = 1
console.log(!!isAtivo) //O símbolo ! quer dizer 'não', quando colocado duas vezes !! vira verdadeiro 
console.log(!isAtivo) 

console.log('Os verdadeiros dentro do JavaScript...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar: ')
console.log(!!('' || null || 0 || ' ')) //Retorna true pois pelo menos um dos valores é verdadeiro. No caso, o ' '

console.log(('' || null || 0 || 'texto')) // || significa 'ou'

let nome = ''
console.log(nome || 'Não identificado') //Se o nome estiver vazio, o programa retornará 'Não identificado'

nome = 'Matheus'
console.log(nome || 'Não identificado')