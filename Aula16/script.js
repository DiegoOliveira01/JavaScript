function parimpar(n){
    if (n%2 == 0){
        return 'Par!'
    }
    else{
        return'Impar!'
    }
}

function soma(n1 = 0, n2 = 0){
    return n1 + n2
}

var verificador = parimpar(5)
var somador = soma(5,5)
console.log(`${verificador}`)
console.log(`${somador}`)
