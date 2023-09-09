import imagens from "./array.js"
const selecionado = document.querySelector('#escolha')
const imagem1 = document.querySelector('#imagi')
let c = 0

selecionado.addEventListener('click', ()=>{
    c++
    if(c%2 == 0){
        imagem1.style = 'display:block;'
        imagem1.src = imagens[0]
        
    }
})