let contador = 0;
let notaAtual = 0;
let somaNotas = 0;

do {
    notaAtual = parseFloat(prompt(`Qual a ${contador + 1}a nota? `));
    if (isNaN(notaAtual) || notaAtual < 0 || notaAtual > 10) {
        alert("Digite uma nota válida!");
    }
    else {
        contador++;
        somaNotas += notaAtual;
    }
} while (contador < 4)

const mediaNotas = somaNotas / 4;
let p = document.createElement("p");

if (mediaNotas < 7) {
    p.innerText = `Resposta: Sua média é ${mediaNotas}. Você está reprovado!`;
}
else {
    p.innerText = `Resposta: Sua média é ${mediaNotas}. Você está aprovado!`;
}

let documento = document.body;
documento.appendChild(p);