const entrada = require("readline-sync");

let l: string = entrada.question("Digite uma letra qualquer: ");

if(l == "a" || l == "e" || l ==  "i" || l == "o" || l == "u"){
    console.log(" é uma vogal");
}

else{
    console.log(" é uma consoante");
}