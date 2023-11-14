// Faça um programa que receba dois números inteiros
// e gere os números inteiros que estão no intervalo compreendido por eles.


function gerarNumerosNoIntervalo(numeroInicial, numeroFinal) {
    if (!Number.isInteger(numeroInicial) || !Number.isInteger(numeroFinal)) {
        console.log("Por favor, insira números inteiros.");
        return;
  }

  const inicio = Math.min(numeroInicial, numeroFinal);
  const fim = Math.max(numeroInicial, numeroFinal);
  for (let i = inicio; i <= fim; i++) {
    console.log(i);
  }
}

gerarNumerosNoIntervalo(5, 10);
