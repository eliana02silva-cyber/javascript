// 1. Definição do array fornecido
const numerosDaSorte = [37, 14, 26, 5, 94, 87];

// 2. Loop para avaliar cada elemento do array
for (let i = 0; i < numerosDaSorte.length; i++) {
    let x = numerosDaSorte[i];

    // Avaliação das condições
    if (x % 2 === 0 && x < 50) {
        console.log(x + " é par e menor que 50");
    } else if (x < 50) {
        console.log(x + " é menor que 50");
    } else {
        console.log(x + " é maior que 50");
    }
}
