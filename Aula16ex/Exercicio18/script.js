var array = []
var tab = window.document.getElementById('tabela')
var res = window.document.getElementById('res')
var p1 = window.document.getElementById('p1')
var p2 = window.document.getElementById('p2')
var p3 = window.document.getElementById('p3')
var p4 = window.document.getElementById('p4')
var p5 = window.document.getElementById('p5')

function validar(){
    var n = window.document.getElementById('fnum')
    num = Number(n.value)
    if(n.value > 0 && n.value <= 100){
        array.push(num)
        var item = document.createElement('option')
        item.text = (`Valor ${num} Adicionado!`)
        tab.appendChild(item)
    }
    else{
        alert('Número Invalido!')
    }
    num.value = ''
    n.value = ''
    n.focus()
}

function finalizar(){
    if(tab.length == 0){
        alert('Tabela Vazia, Impossivel continuar!')
    }
    else{
        var soma = array.reduce(function(acc, valor) {
            return acc + valor;
        }, 0);
        p1.innerHTML = ''
        p2.innerHTML = ''
        p3.innerHTML = ''
        p4.innerHTML = ''
        p5.innerHTML = ''
        p1.append(`Ao todo temos ${array.length} Números cadastrados`)
        p2.append(`O menor valor informado foi: ${Math.min(...array)}`)
        p3.append(`O maior valor informado foi: ${Math.max(...array)}`)
        p4.append(`A soma de todos os valores digitados é: ${soma}`)
        var media = soma / array.length;
        p5.append(`A media dos valores digitados é: ${media}`)
    }
}
