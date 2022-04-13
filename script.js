const calcular = window.document.querySelector('#calcular');
// ---------------------------------------------------------

function imc() {
  const nome = window.document.querySelector('#nome').value;
  const altura = window.document.querySelector('#altura').value;
  const peso = window.document.querySelector('#peso').value;
  const resultado = window.document.querySelector('#resultado');

  // ----------------------------- NOME
  if (nome !== '' && altura !== '' && peso !== '') {
    const valorimc = (peso / (altura * altura)).toFixed(2);

    let classificacao = '';
    if (valorimc < 18.5) {
      classificacao = `abaixo peso.`;
    } else if (valorimc >= 18.6 && valorimc <= 24.9) {
      classificacao = `com o Peso normal, parabens!!!`;
    } else if (valorimc >= 25 && valorimc <= 29.9) {
      classificacao = `com Sobrepeso.`;
    } else if (valorimc >= 30 && valorimc <= 34.9) {
      classificacao = `com Obesidade grau I.`;
    } else if (valorimc >= 35 && valorimc <= 39.9) {
      classificacao = `com Obesidade grau II.`;
    } else if (valorimc >= 40) {
      classificacao = `com Obesidade grau III, cuidado!!!`;
    }

    resultado.textContent = `${nome} seu IMC é ${valorimc} e você está ${classificacao}`;
  } else {
    resultado.textContent = `Preencha todos os campos!!!`;
  }
}

calcular.addEventListener('click', imc);
