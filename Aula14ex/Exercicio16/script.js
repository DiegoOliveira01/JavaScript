function enviar(){
    var inicio = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('ERRO! Preencha todos os dados.')
    }
    else{
        alert('Contando!!!')
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        res.innerHTML = ''
        if(p <= 0){
            window.alert('Passo Invalido! Considerando Passo 1')
            p = 1
        }
        if(i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        else{
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
        }
        }
        res.innerHTML += ' Fim da contagem!'
    }
}