prompt = require("prompt-sync")();

idades = [];
soma = 0;
maior = 0;
menor = 0;

for(i = 1; i <= 10; i++) {
    idades.push((Number(prompt(`Digite a idade da pessoa ${i}: `))));
}
  console.log(idades);

for (i = 0; i < idades.length; i++) {
    soma = soma + idades[i];
    if (idades[i] >= 18) {
        maior = maior + 1;
    }
    if (idades[i] < 5) {
        menor = menor + 1;
    }
}
console.log(`A média das idades é: ${ soma / idades.length}`)

console.log(`A quantidade de maiores de idade é: ${maior}`)

console.log(`A quantidade de menores de 5 anos é: ${menor}`)
console.log(Math.max(...idades), Math.min(...idades));
