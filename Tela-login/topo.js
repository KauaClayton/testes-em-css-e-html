const head = document.head
const body = document.body
const estilo = '<link rel="stylesheet" type="text/css" href="estilo.css">'
head.innerHTML += estilo
const header = document.createElement('header')
header.setAttribute('id', 'header')
header.setAttribute('class', 'header')
header.innerHTML = 'Tela de login'
body.prepend(header)