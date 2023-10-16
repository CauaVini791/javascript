let entrada;
let saida = "";

do {
    entrada = parseInt(prompt("Digite um número entre 0 e 100: "));
    if (isNaN(entrada) || entrada < 0 || entrada > 100) {
        alert("Digite um número válido!")
    }
}
while (isNaN(entrada) || entrada < 0 || entrada > 100)

if (entrada < 60) {
    saida += "F";
}
else if (entrada >= 60 && entrada < 70) {
    saida += "D";
}
else if (entrada >= 70 && entrada < 80) {
    saida += "C";
}
else if (entrada >= 80 && entrada < 90) {
    saida += "B";
}
else {
    saida += "A";
}

let p = document.getElementById("resultado");

switch (saida) {
    case "F": 
        p.innerText = `Resposta: ${saida}`;
        break;
    case "D": 
        p.innerText = `Resposta: ${saida}`;
        break;
    case "C": 
        p.innerText = `Resposta: ${saida}`;
        break;
    case "B": 
        p.innerText = `Resposta: ${saida}`;
        break;
    default:
        p.innerText = `Resposta: ${saida}`;
        break;
}