let somador = 0;

let p = document.getElementById("resultado");

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        somador += i;
    }
}

p.innerText = `Resposta: A soma dos números pares entre 1 e 100 é igual a ${somador}.`