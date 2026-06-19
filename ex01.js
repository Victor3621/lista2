function sortearVariosNumeros(quantidade, min, max) {
    const numerosSorteados = [];
    while (numerosSorteados.length < quantidade) {
        const numero = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numerosSorteados.includes(numero)) {
            numerosSorteados.push(numero);
        }
    }
    return numerosSorteados.sort((a, b) => a - b); // Ordena os números
}

console.log(sortearVariosNumeros(20, 1, 100));