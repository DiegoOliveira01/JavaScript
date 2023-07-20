function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // Bom Dia
        img.src = 'Dia.png'
        document.body.style.background = '#F2E6D0'
    }
    else if(hora >= 12 && hora <= 18){
        // Boa Tarde
        img.src = 'Tarde.png'
        document.body.style.background = '#E6772C'
    }
    else{
        // Boa Noite
        img.src = 'Noite.png'
        document.body.style.background = '#0C32F2'
    }
}
