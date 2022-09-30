//Aula 29, seção 3: Trocar o valor das variáveis.

let a = 7;
let b = 94;
let temp = a;

// [a,b] = [b,a] MANEIRA PRÁTICA
a = b;
b = temp;

    console.log("O valor de a é: " + a);
    console.log("O valor de b é: " + b);