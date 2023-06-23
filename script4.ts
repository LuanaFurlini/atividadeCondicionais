const entrada4 = require("readline-sync");

let palavra: string = entrada4.question("Digite uma palavra qualquer: ");

let palavracontrario = palavra.split('').reverse().join(''); 

    if(palavracontrario == palavra){
        console.log("palindromo");
    }

    else{
        console.log("não palindromo");
    }