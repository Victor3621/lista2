const prompt = require("prompt-sync")();

let somaIdades = 0;
let homens = 0;
let mulheres = 0;
let somaHomens = 0;
let mulheres20 = 0;

for (let i = 1; i <= 5; i++) {
    let idade = Number(prompt(`Digite a idade da pessoa ${i}: `));
    let sexo = prompt(`Digite o sexo da pessoa ${i} (M/F): `).toUpperCase();

    somaIdades += idade;

    if (sexo === "M") {
        homens++;
        somaHomens += idade;
    }

    if (sexo === "F") {
        mulheres++;

        if (idade > 20) {
            mulheres20++;
        }
    }
}

console.log(`Quantidade de homens cadastrados: ${homens}`);
console.log(`Quantidade de mulheres cadastradas: ${mulheres}`);
console.log(`Média de idade do grupo: ${somaIdades / 5}`);

if (homens > 0) {
    console.log(`Média de idade dos homens: ${somaHomens / homens}`);
} else {
    console.log("Não há homens cadastrados.");
}

console.log(`Quantidade de mulheres com mais de 20 anos: ${mulheres20}`);