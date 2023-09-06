function mostrarTabuada() {
  var numero = parseInt(prompt("Digite um número:"));

  if (isNaN(numero)) {
    alert("Por favor, digite um número válido.");
    return;
  }

  var tabuada = "";
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    tabuada += numero + " x " + i + " = " + resultado + "\n";
  }

  alert("Tabuada de " + numero + ":\n\n" + tabuada);
}

mostrarTabuada();
