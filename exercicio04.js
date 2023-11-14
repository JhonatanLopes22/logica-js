// Altere o programa anterior para mostrar no final a soma dos números.


function gerarNumerosESomar(numeroInicial, numeroFinal) {
    if (!Number.isInteger(numeroInicial) || !Number.isInteger(numeroFinal)) {
        console.log("Por favor, insira números inteiros.");
        return;
  }

  const inicio = Math.min(numeroInicial, numeroFinal);
  const fim = Math.max(numeroInicial, numeroFinal);
  let soma = 0;

  for (let i = inicio; i <= fim; i++) {
    console.log(i);
    soma += i;
  }

  console.log("A soma dos números no intervalo é: " + soma);
}

gerarNumerosESomar(5, 10);


