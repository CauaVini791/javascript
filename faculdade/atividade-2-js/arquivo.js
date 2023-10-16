let entrada = 0;
let contador = 0;
var num = Math.floor(Math.random() * 10) + 1;
let p = document.getElementById("resultado");

do {
    entrada = parseInt(prompt("Digite um número de 1 a 10: "));
    if (isNaN(entrada) || entrada < 1 || entrada > 10) {
        alert("Digite um número válido!");
    }
    else {
        if (entrada < num) {
            contador++;
            alert(`O número sorteado é maior que ${entrada}.`);
        }
        else if (entrada > num) {
            contador++;
            alert(`O número sorteado é menor que ${entrada}.`);
        }
        else {
            contador++;
            break;
        }
    }
} while (true)

p.innerText = `Resposta: Parabéns! Você acertou. O número aleatório era o ${num}. Você precisou de ${contador} tentativa(s) para conseguir esse feito.`;

let body = document.body;
body.appendChild(p);