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
    var artig = document.body.querySelector('article#artigo')
    var num = Math.random()*100
    var num = num.toFixed(0)[1]
    if(num == 0){
        artig.style = 'height:450px'
        ima.style = 'Background-image: url("https://lavrapalavra.com/wp-content/uploads/2021/05/capa_lenin_e_um_gato_widexl-1024x576.jpeg")'
        resp.innerHTML = 'foi um revolucionário comunista, político e teórico político russo que serviu como chefe de governo da Rússia Soviética de 1917 a 1924 e da União Soviética de 1922 até sua morte'
    }
    else if(num == 1){
        artig.style = 'height:450px'
        ima.style = 'Background-image: url("https://jacobin.com.br/wp-content/uploads/2021/05/GettyImages-151356608.jpeg")'
        resp.innerHTML = 'Thomas Isidore Noël Sankara foi um militar, revolucionário marxista, pan-africanista e líder político de Burkina Faso. Foi um popular capitão e o primeiro-ministro quando o país ainda se chamava República do Alto Volta.'
    }
    else if(num == 2){
        artig.style = 'height:450px'
        ima.style = 'Background-image: url("https://upload.wikimedia.org/wikipedia/commons/2/2b/Marighella_foto3_deputado_46-47_apeerj_%28cropped%29.jpg")'
        resp.innerHTML = 'Carlos Marighella foi um político, escritor e guerrilheiro comunista marxista-leninista brasileiro. Um dos principais organizadores da luta armada contra a ditadura militar brasileira, Marighella chegou a ser considerado o inimigo "número um" do regime.'
    }
    else if(num >= 3){
        artig.style = 'height:480px'
        ima.style = 'Background-image: url("https://averdade.org.br/wp-content/uploads/2012/04/karl_marx_cropped.png")'
        resp.innerHTML = 'Karl Marx foi um filósofo, economista, historiador, sociólogo, teórico político, jornalista, e revolucionário socialista alemão. Nascido em Tréveris, Prússia, Marx estudou direito e filosofia nas universidades de Bona e Berlim. Casou-se com a crítica de teatro e ativista política alemã Jenny von Westphalen em 1843.'
        
    }
}
