let p = document.getElementById("resultado");
let entrada;

do {
    entrada = parseInt(prompt("Digite um número: "));
    if (isNaN(entrada) || entrada < 1) {
        alert("Digite um número válido!");
    }
} while (isNaN(entrada) || entrada < 1)

p.innerHTML = `TABUADA DO ${entrada} <br>`;

for (let i = 1; i <= 10; i++) {
    p.innerHTML += `${entrada} x ${i} = ${entrada * parseInt(i)} <br>`;
}