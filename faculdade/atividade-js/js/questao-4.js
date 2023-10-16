let entrada = prompt("Digite o nome de uma cor em INGLÊS: ").toLowerCase();

let p = document.getElementById("resultado");

switch (entrada) {
    case "red":
        p.innerText = `Resposta: A cor ${entrada} em português é VERMELHO.`;
        break;
    case "green":
        p.innerText = `Resposta: A cor ${entrada} em português é VERDE.`;
        break;
    case "orange":
        p.innerText = `Resposta: A cor ${entrada} em português é LARANJA.`;
        break;
    case "black":
        p.innerText = `Resposta: A cor ${entrada} em português é PRETO.`;
        break;
    case "white":
        p.innerText = `Resposta: A cor ${entrada} em português é BRANCO.`;
        break;
    case "pink":
        p.innerText = `Resposta: A cor ${entrada} em português é ROSA.`;
        break;
    case "yellow":
        p.innerText = `Resposta: A cor ${entrada} em português é AMARELO.`;
        break;
    case "blue":
        p.innerText = `Resposta: A cor ${entrada} em português é AZUL.`;
        break;
    case "purple":
        p.innerText = `Resposta: A cor ${entrada} em português é ROXO.`;
        break;
    case "gray":
        p.innerText = `Resposta: A cor ${entrada} em português é CINZA.`;
        break;
    case "brown":
        p.innerText = `Resposta: A cor ${entrada} em português é MARROM.`;
        break;
    default:
        p.innerText = `Resposta: Cor desconhecida.`;
        break;
}