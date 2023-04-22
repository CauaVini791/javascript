let num = [5, 8, 2, 9, 3]
console.log(num)

num[5] = 6
num.push(7) //adicionar
console.log(`Nosso vetor é o ${num}.`)

let t = num.length //tamanho
console.log(`Nosso vetor tem ${t} posições.`)

let pos = num.indexOf(10)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}

let o = num.sort() //ordenar array
console.log(`Nosso vetor ordenado fica assim: ${o}`)