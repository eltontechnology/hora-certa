
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var fav = document.getElementById('favicon')
    var momento = document.getElementById('h1')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if(hora >= 0 && hora < 12){
        //bom dia
        momento.innerHTML = 'Bom Dia!'
        img.src = 'imagens/manha.png'
        fav.href = 'imagens/favicon-sol.png'
        document.body.style.background = '#e8cbad'
    }else if(hora > 12 && hora < 18){
        //boa tarde
        momento.innerHTML = 'Boa Tarde!'
        img.src = 'imagens/tarde.png'
        fav.href = 'imagens/favicon-sol.png'
        document.body.style.background = '#637c9b'
    }else{
        //boa noite
        momento.innerHTML = 'Boa Noite!'
        img.src = 'imagens/noite.png'
        fav.href = 'imagens/favicon-lua.png'
        document.body.style.background = '#142c36'
    }
}


