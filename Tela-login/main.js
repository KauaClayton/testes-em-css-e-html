import {Cxmsg} from './cxmsg.js'
const config={
    cor:'#4Bf' }
const body = document.body
const main = document.createElement('main')
main.setAttribute('class', 'main')
body.appendChild(main)
const form = document.createElement('form')
const input_nome = document.createElement('input')
input_nome.minLength = '4'
input_nome.maxLength = '15'
input_nome.placeholder = 'Digite seu nome'
const input_senha = document.createElement('input')
input_senha.type = 'password'
input_senha.minLength = '6'
input_senha.maxLength = '12'
input_senha.placeholder ='Digite sua senha'
const btn = document.createElement('button')
btn.setAttribute('id', 'betao')

main.appendChild(form)
form.appendChild(input_nome)
form.appendChild(input_senha)
form.appendChild(btn)
btn.innerHTML = 'OK'
btn.addEventListener('click', ()=>{
    Cxmsg.mostrar(config.cor)
})