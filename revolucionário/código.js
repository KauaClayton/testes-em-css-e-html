function clickmenu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
        document.querySelector('header#menu').style = 'height:100px'
    }
    else{
    itens.style.display = 'block'
    document.querySelector('header#menu').style = 'height:150px'
    }
    
}

function clicou(){
    var resp = document.body.querySelector('p#res')
    var ima = document.body.querySelector('div#img')
    var num = Math.random()*100
    var num = num.toFixed(0)[0]
    if(num >= 0){
    ima.style = 'Background-image: url("https://lavrapalavra.com/wp-content/uploads/2021/05/capa_lenin_e_um_gato_widexl-1024x576.jpeg")'
    resp.innerHTML = 'foi um revolucionário comunista, político e teórico político russo que serviu como chefe de governo da Rússia Soviética de 1917 a 1924 e da União Soviética de 1922 até sua morte'
    }
}