let p = document.getElementById("resultado");
let entrada;
let fatorial = 1;

do {
    entrada = parseInt(prompt("Digite um número entre 1 e 10: "));
    if (isNaN(entrada) || entrada > 10 || entrada < 1) {
        alert("Digite um número válido!");
    }
} while (isNaN(entrada) || entrada > 10 || entrada < 1)

for (let i = entrada; i > 1; i--) {
    fatorial *= i;
}

p.innerText = `O fatorial de ${entrada} é ${fatorial}.`;