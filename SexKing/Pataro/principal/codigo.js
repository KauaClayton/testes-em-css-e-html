var num = 0

function mudar(){
    var resp = document.querySelector('p#res')
    var foto = document.querySelector('img#img')
    if(num == 0){
        foto.src = 'imagem/Pataroeeu.jpg'
        resp.innerHTML = 'Parabéns Pataro! A gente é amigo a pouco mais de 1 ano mas você já é top parceiras que conheço. Você é definitivamente a melhor estudante de design de interiores de cabelo pintado e daddy issues que só vê filme legendado do ABC. Fiz esse site quase apanhando pro coitado do meu PC da Dell mas valeu a pena pra nn deixar seu aniversário em branco. Feliz 12 anos!!!'
        num++
    }
    else if(num == 1){
        foto.src = 'imagem/PataroMiguel.jpg'
        resp.innerHTML = 'Pataro, vc é pessoa de cabelo pintado mais boba que conheço Boba é elogio, te amo e te acho top 3 fãs de jojo, brincadeiras a parte vc é incrível e merece o mundo'
        num++
    }
    else if(num ==2){
        foto.src = 'imagem/PataroBianca.jpg'
        resp.innerHTML = "Para a pessoa mais engraçada que eu já conheci Com certeza eu não seria a mesma e não teria tomado decisões tão boas sem você na minha vida, eu não estaria completa sem a minha gêmea siamesa A vida ta cheia de fases ruins, escolhas horríveis, 2019's e Raissas mas se a gente tiver juntas a gente vai passar por tudo isso Obrigada por ser a minha parceira🤞 de mudanças, sejam elas no cabelo, no jeito, nas piadas e na escola, a gente ta junta Eu não poderia ser mais grata por ter você como a minha soulmate Feliz aniversário Pataro Imagem Pública do Casquel🫶"
        num++
    }
    else if(num == 3){
        foto.src = 'imagem/PataroGian.jpg'
        resp.innerHTML = 'oi feia, feliz aniversário!!🤕❤️ \n mano tem noção q fez 5 anos q a gente se conhece? aconteceu tanta coisa e me impressiona a gente ainda ser amigo, mesmo com eu implicando tanto com vc em 2018, sla é bom ainda ser seu amigo, enfim aproveita seu dia. adoro vc!!🤍'
        num++
    }
    else if(num == 4){
        foto.src = 'imagem/PataroPeter.jpg'
        resp.innerHTML = 'feliz aniversário pataro, muitos anos de vida pra voce, espero que ce tenha um dia mto daora legal, papai do céu te abençoe e aproveita seu dia, amo vc🫶'
        num++
    }
    else if(num == 5){
        foto.src = 'imagem/PataroEmily.jpg'
        resp.innerHTML = 'pataro crack você é mto mto foda, todas as vezes que a gente tá junta eu dou umas risadas sinceras(mesmo me sentindo uma fudida de rir de umas bobagemkkkkkkkkk). Amo dividir armário com vc, uma organização imensa, ainda mais com as nossas profissões coladas na porta do armário:pedreira e uber🤍 feliz aniversário eu até gosto de vc fumante de pod.'
        num++
    }
    else if(num == 6){
        foto.src = 'imagem/PataroDeb.jpg'
        resp.innerHTML = 'Feliz aniversário de todo SexKing Pataro!!!!!! Clique novamente no botão para recomeçar os textos.'
        num = 0
    }
}