//sortear 20 numeros entre 0 e 10
count = 0
divs = 0
    for (i = 0; i < 21; i++){
        sorteado = Math.floor(Math.random () *10);
        console.log(`Sorteio número ${i}`);
        console.log(`Sorteado ${sorteado}`)
        if (sorteado > 5) {
            count = count + 1;
        }

        if (sorteado % 3 == 0){
            divs = divs + 1;
        }
    }

    console.log(`Neste sorteio foram sorteados ${count} núemros maiores que 5, e ${divs} núemros divisiveis por 3`)
    //mostras quantos são maiores que cinco
    //quantos são divisiveis por 3