const entrada3 = require("readline-sync");

let nota: number = parseFloat(entrada3.question("Digite sua nota: "));

if(nota >= 7){
    console.log("Aprovado");
}

else{
    console.log('Reprovado');
}