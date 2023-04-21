function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor! Digite um número.')
    }
    else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''

        do {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        } while (c <= 10)
    }
}