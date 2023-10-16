let p = document.getElementById("resultado");
let entrada;

do {
    entrada = parseInt(prompt("Digite um número: "));
    if (isNaN(entrada)) {
        alert("Por favor, digite um número válido.");
    }
} while (isNaN(entrada))

if (entrada % 2 == 0) {
    p.innerText = `Resultado: O número ${entrada} é par!`;
}
else {
    p.innerText = `Resultado: O número ${entrada} é ímpar!`;
}