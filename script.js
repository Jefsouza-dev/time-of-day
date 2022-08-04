function carregar () {
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
   if (hora >= 0 && hora  < 12) {
         img.src = `/img/manha.webp`
         document.body.style.background = `#e2cd9f`
   } else if (hora >= 12 && hora < 18) {
        img.src = `/img/tarde.jpeg`
        document.body.style.background = `#e76f51`
   } else {
        img.src = `/img/noite.jpeg`
        document.body.style.background = `#2b2d42`
   }
}


