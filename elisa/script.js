const fotos = ['fotos/charroteador.jpg', 'fotos/judithmimindo.jpeg', 'fotos/judithbraba.jpg', 'fotos/charbrava.jpg', 'fotos/judithsla.jpg']

const img = document.querySelector('img#imagem')
const numero = document.querySelector('p#Num')
const res = document.querySelector('p#res')
var num = -1

function volta(){

    if(num == 4){
        num--
        numero.innerHTML = '2-'
        res.innerHTML = 'Charlotte com cara de quem vai te matar e jogar seu corpo dentro de um I-05 vazio'
    }
    else if(num == 3){
        num--
        numero.innerHTML = '3-'
        res.innerHTML = 'Judith com cara de quem está querendo te degolar viva e culpar a charlotte pela sua morte'
        
    }
    else if(num == 2){
        num--
        numero.innerHTML = '4-'
        res.innerHTML = 'Judith dormindo muito fofa na cama parecendo uma criança pequena depois de bagunçar'
    }
    else if(num == 1){
        num--
        numero.innerHTML = '5-'
        res.innerHTML = 'Charlotte em cima do roteador muito linda estragando as coisas da sua casa'
    }
    else if(num == 0){
        num = 4
        numero.innerHTML = '1-'
        res.innerHTML = 'Judith parecendo que usou aquelas maconhas feitas para gato, muito fofo'
        
    }
    else if(num == -1){
        num = 4
        numero.innerHTML = '1-'
        res.innerHTML = 'Judith parecendo que usou aquelas maconhas feitas para gato, muito fofo'
    }
    
    
    img.src = fotos[num]
}

function vai(){
    if(num == -1){
        num++
        numero.innerHTML = '5-'
        res.innerHTML = 'Charlotte em cima do roteador muito linda estragando as coisas da sua casa'
    }
    else if(num == 0){
        numero.innerHTML = '4-'
        res.innerHTML = 'Judith dormindo muito fofa na cama parecendo uma criança pequena depois de bagunçar'
        num++
    }
    else if(num == 1){
        numero.innerHTML = '3-'
        res.innerHTML = 'Judith com cara de quem está querendo te degolar viva e culpar a charlotte pela sua morte'
        num++
    }
    else if(num == 2){
        num++
        numero.innerHTML = '2-'
        res.innerHTML = 'Charlotte com cara de quem vai te matar e jogar seu corpo dentro de um I-05 vazio'
    }
    else if(num == 3){
        num++
        numero.innerHTML = '1-'
        res.innerHTML = 'Judith parecendo que usou aquelas maconhas feitas para gato, muito fofo'
        
    }
    else if(num == 4){
        num = 0
        numero.innerHTML = '5-'
        res.innerHTML = 'Charlotte em cima do roteador muito linda estragando as coisas da sua casa'
    }
    img.src = fotos[num]
}