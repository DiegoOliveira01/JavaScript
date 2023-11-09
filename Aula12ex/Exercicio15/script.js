function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("Verifique os dados e tente novamente!")
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'Foto_Crianca_Homem.jpg')
            }
            else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'Foto_Jovem_Homem.jpg')
            }
            else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'Foto_Adulto_Homem.jpg')
            }
            else{
                // Idoso
                img.setAttribute('src', 'Foto_Idoso_Homem.jpg')
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'Foto_Crianca_Mulher.jpg')
            }
            else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'Foto_Jovem_Mulher.jpg')
            }
            else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'Foto_Adulta_Mulher.jpg')
            }
            else{
                // Idoso
                img.setAttribute('src', 'Foto_Idoso_Mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
