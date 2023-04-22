function fatorial(num) {
    let fat = 1;
    for (let c = num; c > 1; c--) {
        fat *= c
    }
    return `O fatorial de ${num} é ${fat}`
}

console.log(fatorial(5))