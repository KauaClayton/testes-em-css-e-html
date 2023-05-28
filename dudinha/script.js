var fotos = ['fotos/ursofdp.jpg', 'fotos/carolniver.png', 'fotos/biblo.jpg', 'fotos/dia3.jpg', 'fotos/casal.jpg']

var img = document.querySelector('img#imagem')
var numero = document.querySelector('p#Num')
var res = document.querySelector('p#res')
var num = 0

function volta(){
    if(img.src == fotos[0]){
        img.src = fotos[4]
    }
}

function vai(){
    switch(num){
        case 0:
            img.src = fotos[0]
            num += 1
            break;
        case 1:
            img.src = fotos[1]
            num += 1
            break;
        case 2:
            img.src = fotos[2]
            num += 1
            break;
        case 3:
            img.src = fotos[3]
            num += 1
            break;
        case 4: 
            img.src = fotos[4]
            num += 1
            break;
        case 5:
            img.src = fotos[0]
            num = 1
            break;
    }

    
}