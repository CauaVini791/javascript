let valores = [8, 1, 7, 4, 2, 9]

for (let c = 0; c < valores.length; c++) {
    console.log(`Na posição ${c} temos o ${valores[c]}`)
}

for (let c in valores) {
    console.log(`Na posição ${c} temos o ${valores[c]}`)
}