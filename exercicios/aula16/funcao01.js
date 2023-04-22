function parimpar(n) {
    if (n % 2 == 0) {
        return `O número ${n} é par.`
    }
    else {
        return `O número ${n} é ímpar.`
    }
}

console.log(parimpar(10))
console.log(parimpar(7))
console.log(parimpar(53))
console.log(parimpar(28))
console.log(parimpar(119))