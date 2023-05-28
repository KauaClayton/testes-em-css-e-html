var fotos = ['fotos/ursofdp.jpg', 'fotos/carolniver.png', 'fotos/biblo.jpg', 'fotos/dia3.jpg', 'fotos/casal.jpg']
var sapos = ['fotos/casal-de-sapos-fofos-do-dia-dos-namorados_23-2148789306.avif']
var img = document.querySelector('img#imagem')
var numero = document.querySelector('p#Num')
var res = document.querySelector('p#res')
var num = -1

function volta(){

    if(num == 4){
        num--
        numero.innerHTML = '2-'
        res.innerHTML = 'Não temos nenhuma foto do dia mas eu fui muito feliz para casa depois, a gente ficou jogando o jogo daquele cachorro narigudo HORRÍVEL e depois ficou se encarando em silêncio'
    }
    else if(num == 3){
        num--
        numero.innerHTML = '3-'
        res.innerHTML = 'Foi o primeiro dia que passamos um almoço junto, ficamos vendo os livros de auto ajuda e eu te explicando algumas coisas que sabia de livros. Foi a primeira vez que você me deu um fora muito feio.'
        
    }
    else if(num == 2){
        num--
        numero.innerHTML = '4-'
        res.innerHTML = 'Foi um dia incrível junto de você, me diverti muito te derrubando do negócio de bolinha e depois mostrando todas minhas habilidades em basquete.'
    }
    else if(num == 1){
        num--
        numero.innerHTML = '5-'
        res.innerHTML = 'Foi no dia do aniversário da Carol e eu consegui com o meu único real pegar esse ursinho e em nenhum momento duvidei em te dar ele, fico muito feliz que você ande com ele na sua bolsa.'
    }
    else if(num == 0){
        num = 4
        numero.innerHTML = '1-'
        res.innerHTML = 'O dia dessa foto pois foi a primeira que tiraram de nós e eu realmente gostei dele, mostra muito bem como foi a gente ficando de casalzinho no inicio do ano.'
        
    }
    else if(num == -1){
        num = 4
        numero.innerHTML = '1-'
        res.innerHTML = 'O dia dessa foto pois foi a primeira que tiraram de nós e eu realmente gostei dele, mostra muito bem como foi a gente ficando de casalzinho no inicio do ano.'
    }
    
    
    img.src = fotos[num]
}

function vai(){
    if(num == -1){
        num++
        numero.innerHTML = '5-'
        res.innerHTML = 'Foi no dia do aniversário da Carol e eu consegui com o meu único real pegar esse ursinho e em nenhum momento duvidei em te dar ele, fico muito feliz que você ande com ele na sua bolsa.'
    }
    else if(num == 0){
        numero.innerHTML = '4-'
        res.innerHTML = 'Foi um dia incrível junto de você, me diverti muito te derrubando do negócio de bolinha e depois mostrando todas minhas habilidades em basquete.'
        num++
    }
    else if(num == 1){
        numero.innerHTML = '3-'
        res.innerHTML = 'Foi o primeiro dia que passamos um almoço junto, ficamos vendo os livros de auto ajuda e eu te explicando algumas coisas que sabia de livros. Foi a primeira vez que você me deu um fora muito feio.'
        num++
    }
    else if(num == 2){
        num++
        numero.innerHTML = '2-'
        res.innerHTML = 'Não temos nenhuma foto do dia mas eu fui muito feliz para casa depois, a gente ficou jogando o jogo daquele cachorro narigudo HORRÍVEL e depois ficou se encarando em silêncio'
    }
    else if(num == 3){
        num++
        numero.innerHTML = '1-'
        res.innerHTML = 'O dia dessa foto pois foi a primeira que tiraram de nós e eu realmente gostei dele, mostra muito bem como foi a gente ficando de casalzinho no inicio do ano.'
        
    }
    else if(num == 4){
        num = 0
        numero.innerHTML = '5-'
        res.innerHTML = 'Foi no dia do aniversário da Carol e eu consegui com o meu único real pegar esse ursinho e em nenhum momento duvidei em te dar ele, fico muito feliz que você ande com ele na sua bolsa.'
    }
    img.src = fotos[num]
}