function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.getElementById('imagem')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente.')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'HOMEM'
            if (idade >= 0 && idade < 10) {
                img.src = 'imagens/bebe-m.png'
            }
            else if (idade < 21) {
                img.src = 'imagens/jovem-m.png'
            }
            else if (idade < 50) {
                img.src = 'imagens/homem.png'
            }
            else {
                img.src = 'imagens/idoso.png'
            }
        }
        else if (fsex[1].checked) {
            genero = 'MULHER'
            if (idade >= 0 && idade < 10) {
                img.src = 'imagens/bebe-f.png'
            }
            else if (idade < 21) {
                img.src = 'imagens/jovem-f.png'
            }
            else if (idade < 50) {
                img.src = 'imagens/mulher.png'
            }
            else {
                img.src = 'imagens/idosa.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
    }
}