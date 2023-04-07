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
        artig.style = 'height:470px'
        ima.style = 'Background-image: url("https://jacobin.com.br/wp-content/uploads/2021/05/GettyImages-151356608.jpeg")'
        resp.innerHTML = 'Thomas Isidore Noël Sankara foi um militar, revolucionário marxista, pan-africanista e líder político de Burkina Faso. Foi um popular capitão e o primeiro-ministro quando o país ainda se chamava República do Alto Volta.'
    }
    else if(num == 2){
        artig.style = 'height:480px'
        ima.style = 'Background-image: url("https://upload.wikimedia.org/wikipedia/commons/2/2b/Marighella_foto3_deputado_46-47_apeerj_%28cropped%29.jpg")'
        resp.innerHTML = 'Carlos Marighella foi um político, escritor e guerrilheiro comunista marxista-leninista brasileiro. Um dos principais organizadores da luta armada contra a ditadura militar brasileira, Marighella chegou a ser considerado o inimigo "número um" do regime.'
    }
    else if(num == 3){
        artig.style = 'height:490px'
        ima.style = 'Background-image: url("https://averdade.org.br/wp-content/uploads/2012/04/karl_marx_cropped.png")'
        resp.innerHTML = 'Karl Marx foi um filósofo, economista, historiador, sociólogo, teórico político, jornalista, e revolucionário socialista alemão. Nascido em Tréveris, Prússia, Marx estudou direito e filosofia nas universidades de Bona e Berlim. Casou-se com a crítica de teatro e ativista política alemã Jenny von Westphalen em 1843.' 
    }
    else if(num == 4){
        artig.style = 'height:490px'
        ima.style = 'Background-image: url("https://boitempoeditorial.files.wordpress.com/2017/10/che-economia-e-revolucao.jpg?w=620&h=459")'
        resp.innerHTML = 'Ernesto Guevara de la Serna, mais conhecido como Che Guevara, foi um revolucionário marxista, médico, autor, guerrilheiro, diplomata e teórico militar argentino. Uma figura importante da Revolução Cubana, seu rosto estilizado tornou-se um símbolo contracultural de rebeldia e insígnia global na cultura popular'
    }
    else if(num == 5){
        artig.style = 'height:470px'
        ima.style = 'Background-image: url("https://upload.wikimedia.org/wikipedia/commons/f/f1/Kim_Il_Sung_Portrait-4.jpg")'
        resp.innerHTML = 'Kim Il-sung foi o líder da Coreia do Norte desde a fundação do país em 1948 até à data da sua morte. Sucedeu-lhe como líder o seu filho, Kim Jong-il. Exerceu o cargo de primeiro-ministro de 1948 a 1972 e de presidente de 1972 até à sua morte. '
    }
    else if(num == 6){
        artig.style = 'height:450px'
        ima.style = 'Background-image: url("https://ichef.bbci.co.uk/news/640/cpsprodpb/38EB/production/_124717541_gettyimages-104416848.jpg")'
        resp.innerHTML = 'Ho Chi Minh foi um revolucionário, político, escritor, poeta e jornalista vietnamita. Também conhecido por seu nome de batismo Nguyễn Sinh Cung e pelo pseudônimo Nguyen Ai Quoc, foi um revolucionário e estadista vietnamita.'
    }
    else if(num == 7){
        artig.style = 'height:460px'
        ima.style = 'Background-image: url("https://upload.wikimedia.org/wikipedia/commons/a/a9/Mao_Zedong_1959.jpg")'
        resp.innerHTML = 'Mao Tsé-Tung, em chinês tradicional: 毛澤東; chinês simplificado: 毛泽东; Mao Tsé-Tung pela transliteração Wade-Giles, ou Máo Zédōng, pela pinyin; foi um político, teórico, líder comunista e revolucionário chinês.'
    }
    else if(num == 8){
        artig.style = 'height:430px'
        ima.style = 'Background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuodHNm-PoMjiB4zwO_9TpCg__X0e6DnSlaU5GXZQevpdoJtRyWYRjlx9iPJvGXP1a79Y&usqp=CAU")'
        resp.innerHTML = 'Virgílio Gomes da Silva foi um operário, sindicalista e guerrilheiro brasileiro que se destacou na luta armada de esquerda no Brasil contra a ditadura militar na década de 1960'
    }
    else if(num == 9){
        artig.style = 'height:490px'
        ima.style = 'background-image: url("https://s1.static.brasilescola.uol.com.br/be/2021/03/rosa-luxemburgo.jpg")'
        resp.innerHTML = 'Rosa Luxemburgo foi uma filósofa e economista marxista polaco-alemã. Tornou-se mundialmente conhecida pela militância revolucionária ligada à Social-Democracia da Polônia, ao Partido Social-Democrata da Alemanha e ao Partido Social-Democrata Independente da Alemanha.'
    }
}
