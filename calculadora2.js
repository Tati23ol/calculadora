// Obtém os elementos HTML
const numeros = document.querySelectorAll('.numeros');
const operadores = document.querySelectorAll('.operadores');
const btnCalcular = document.querySelector('.btn_resultado');
const resultadoElemento = document.querySelector('.resultado');
const botaLimpar = document.querySelector(".btn_limpar")

// Array para armazenar os valores digitados
let valores = [];

// Adiciona os ouvintes de evento aos números
numeros.forEach(numero => {
  numero.addEventListener('click', function() {
    valores.push(parseFloat(numero.innerHTML));
    resultadoElemento.innerHTML = valores.join(' ');
  });
});

// Adiciona os ouvintes de evento aos operadores
operadores.forEach(op => {
  op.addEventListener('click', function() {
    const operador = op.innerHTML;
    valores.push(operador);
    resultadoElemento.innerHTML = valores.join(' ');
  });
});

// Ouve o clique no botão "CALCULAR"
btnCalcular.addEventListener('click', function() {
  let resultado = valores[0];

  for (let i = 1; i < valores.length; i += 2) {
    const operador = valores[i];
    const valor = valores[i + 1];

    switch (operador) {
      case '+':
        resultado += valor;
        break;
      case '-':
        resultado -= valor;
        break;
      case '*':
        resultado *= valor;
        break;
      case '/':
        resultado /= valor;
        break;
      default:
        resultado = 'Erro: operador inválido';
    }
  }

  resultadoElemento.innerHTML = 'Resultado: ' + resultado;

});


botaLimpar.addEventListener('click', function() {
    resultadoElemento.innerHTML = "O seu resultado vai aparecer aqui";
    resultado = '';
    valores = '';
    

})