import imagens from "./arrayescolha.js"
const selecionado = document.querySelector('#escolha')
const imagem1 = document.querySelector('#imagi')
const mini_texto = document.querySelector('#mini_texto')
let c = 0

selecionado.addEventListener('click', ()=>{
    c++
    if(c >= 2){
        imagem1.style = 'display:block;' 
        
    }
    switch(true){
        case selecionado.value == 'Bakunin':
            imagem1.src = imagens[0]
        mini_texto.innerHTML = 'foi um teórico político, sociólogo, filósofo e revolucionário anarquista. É considerado uma das figuras mais influentes do anarquismo e um dos principais fundadores da tradição social anarquista. O enorme prestígio de Bakunin como ativista o tornou um dos ideólogos mais famosos da Europa e sua influência foi substancial entre os radicais da Rússia e da Europa.'
            break;
        case selecionado.value == 'Kropotkin':
            imagem1.src = imagens[1]
            mini_texto.innerHTML = 'foi um geógrafo, economista, cientista político, sociólogo, zoólogo, historiador, filósofo e ativista político russo, um dos principais pensadores do anarquismo no fim do século XIX, considerado também o fundador da vertente anarco-comunista. Suas análises profundas da burocracia estatal e do sistema prisional também são relevantes na área de criminologia.'
            break;
        case selecionado.value == 'Malatesta':
            imagem1.src = imagens[2]
            mini_texto.innerHTML = 'foi um teórico e ativista anarquista italiano. Ele editou diversos jornais radicais e passou a maioria de sua vida exilado e preso, tendo isto acontecido na Itália, Inglaterra, França e Suíça. Originalmente apoiador da propaganda pelo ato revolucionário, Malatesta mais tarde aderiria ao sindicalismo revolucionário. '
            break;
        case selecionado.value == 'Makhno':
                imagem1.src = imagens[3]
                mini_texto.innerHTML = 'foi um revolucionário anarco-comunista ucraniano e comandante do Exército Insurgente Makhnovista durante a Revolução Ucraniana e a Guerra de Independência da Ucrânia. Constituiu a Makhnovtchina, movimento social de massas com princípios anarquistas. '
                break;
        case selecionado.value == 'SubComandante':
                imagem1.src = imagens[4]
                mini_texto.innerHTML = 'O Subcomandante Marcos, é o principal porta-voz do comando militar do grupo indígena mexicano chamado Exército Zapatista de Libertação Nacional (EZLN), que fez a sua aparição pública em 1º de Janeiro em 1994, quando os militares lançaram uma ofensiva na qual conquistou seis municípios, no sulino estado mexicano de Chiapas, exigindo democracia, liberdade, terra, pão e justiça para os indígenas.'
                break;
        case selecionado.value == 'RECC':
                imagem1.src = imagens[5]
                mini_texto.innerHTML = 'A RECC é uma organização estudantil surgida em junho de 2009 que pretende, desde a sua fundação, tornar-se de massas. É guiada pelos princípios intransponíveis do anti-governismo, da democracia de base, da autonomia frente a partidos e governos, da combatividade, do anti-reformismo, da ação direta e do classismo – pois compreende o movimento estudantil como uma fração da classe trabalhadora.'
                break;
        case selecionado.value == 'FOB':
                imagem1.src = imagens[6]
                mini_texto.innerHTML = 'A Federação das Organizações Sindicalistas Revolucionárias do Brasil – FOB (antigo Fórum de Oposições pela Base) teve início em 2010 e reúne organizações sindicais, estudantis e populares. Tem como principal estratégia o sindicalismo revolucionário, em oposição ao sindicalismo de Estado e reformismo, hoje predominante no país. '
                break;
        case selecionado.value == 'Makhnovtchina':
                imagem1.src = imagens[7]
                mini_texto.innerHTML = 'foi uma uma sociedade anarquista e sem estado durante a Guerra de Independência da Ucrânia, que existiu de 1918 até 1921, durante o qual "sovietes livres" e comunas libertárias operavam sob proteção do Exército Insurgente Makhnovista. A população dessa área foi cerca de sete milhões.'
                break;
        case selecionado.value == 'Chiapas':
                imagem1.src = imagens[8]
                mini_texto.innerHTML = 'O Exército Zapatista de Libertação Nacional (EZLN, em espanhol: Ejército Zapatista de Liberación Nacional), é uma organização armada mexicana de caráter político-militar e composição de maioria indígena. Sua estratégia militar é a guerrilha. Seu objetivo é "subverter a ordem para fazer a revolução socialista e criar uma sociedade mais justa" (ver indigenismo).'
                break;

    }
})