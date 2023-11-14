function enviar(){
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')
    var r = 0
    if(num.value.length == 0){
        alert('ERRO!')
    }
    else{
        var n = Number(num.value)
        tab.innerHTML = ''
        for(var c = 1; c <= 10; c += 1){
            var item = document.createElement('option')
            r = n * c
            item.text = (`${n} X ${c} = ${r}`)
            item.value = `tab${c}`
            tab.appendChild(item)
            
        }
    }
}