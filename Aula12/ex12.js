var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} Horas.`)
if(hora <= 12 && hora > 5){
    console.log('Bom Dia')
}
else if(hora <= 18 && hora >=13){
    console.log('Boas Tarde')
}
else if (hora <= 0 || hora >=19){
    console.log('Boa Noite')
}
else{
    console.log('Boa Madrugada')
}