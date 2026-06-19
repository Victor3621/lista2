const prompt = require("prompt-sync")();

let pesos = [];
let alturas = [];
let somaAlturas = 0;
let mais90 = 0;
let menos50e160 = 0;
let mais190e100 = 0;

for (let i = 1; i <= 7; i++) {
    pesos.push(Number(prompt(`Digite o peso da pessoa ${i}: `)));
    alturas.push(Number(prompt(`Digite a altura da pessoa ${i}: `)));
}

console.log(pesos);
console.log(alturas);

for (let i = 0; i < 7; i++) {
    somaAlturas += alturas[i];

    if (pesos[i] > 90) {
        mais90++;
    }

    if (pesos[i] < 50 && alturas[i] < 1.60) {
        menos50e160++;
    }

    if (alturas[i] > 1.90 && pesos[i] > 100) {
        mais190e100++;
    }
}

console.log(`A média de altura do grupo é: ${somaAlturas / alturas.length}`);
console.log(`Quantidade de pessoas que pesam mais de 90 kg: ${mais90}`);
console.log(`Quantidade de pessoas que pesam menos de 50 kg e têm menos de 1.60 m: ${menos50e160}`);
console.log(`Quantidade de pessoas que medem mais de 1.90 m e pesam mais de 100 kg: ${mais190e100}`);