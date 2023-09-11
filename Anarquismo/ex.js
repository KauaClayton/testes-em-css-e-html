import imagens from "./arrayescolha.js"
import livros from './arraylivros.js'
const selecionado = document.querySelector('#escolha')
const imagem1 = document.querySelector('#imagi')
const mini_texto = document.querySelector('#mini_texto')
const imagem2 = document.querySelector('#livreto')
const hdois = document.querySelector('#hdois')
const texliv = document.querySelector('#TextoLivro')
let c = 0
let painel = 0

selecionado.addEventListener('click', ()=>{
    c++
    if(c >= 2){
        imagem1.style = 'display:block;' 
        imagem2.style = 'display:block;'
        hdois.style = 'display:block;'
        texliv.style = 'display:block;'

    }
    switch(true){
        case selecionado.value == 'Bakunin':
            imagem1.src = imagens[0]
        mini_texto.innerHTML = 'foi um teórico político, sociólogo, filósofo e revolucionário anarquista. É considerado uma das figuras mais influentes do anarquismo e um dos principais fundadores da tradição social anarquista. O enorme prestígio de Bakunin como ativista o tornou um dos ideólogos mais famosos da Europa e sua influência foi substancial entre os radicais da Rússia e da Europa.'
        texliv.innerHTML = 'Escrito em 1871, <a href="https://www.marxists.org/portugues/bakunin/1882/mes/deus.pdf" target="_blank"> Deus e o Estado </a> é um texto fundamental para a compreensão do pensamento de Bakunin. O método dialético, o evolucionismo e o naturalismo, o papel da ciência, os conceitos de liberdade e de livre-arbítrio e o materialismo são comentados no texto, que é fragmento do livro O império cnuto-germânico e a revolução social, extraído e publicado, ainda no século XIX, primeiramente por Carlo Cafiero e Élisée Reclus, e, posteriormente, por Max Nettlau.'
        imagem2.src = livros[0]
            break;
        case selecionado.value == 'Kropotkin':
            imagem1.src = imagens[1]
            mini_texto.innerHTML = 'foi um geógrafo, economista, cientista político, sociólogo, zoólogo, historiador, filósofo e ativista político russo, um dos principais pensadores do anarquismo no fim do século XIX, considerado também o fundador da vertente anarco-comunista. Suas análises profundas da burocracia estatal e do sistema prisional também são relevantes na área de criminologia.'
            texliv.innerHTML = '<a href="https://www.marxists.org/portugues/kropotkin/1892/mes/90.pdf" target="_blank">A Conquista do Pão</a> é um livro escrito pelo anarcocomunista Piotr Kropotkin. Originalmente, era uma série de artigos escritos nos anos 1880, em francês, para os jornais anarquistas Le Révolté e seu sucessor parisiense, La Révolte[1]. Foi publicado pela primeira vez como livro no ano de 1892, em Paris, com prefácio de Élisée Reclus (quem explica que o título não se restringe ao "pão", e sim engloba tudo que é necessário à qualidade de vida do homem[2]). '
            imagem2.src = livros[1]
            painel == 0
            break;
        case selecionado.value == 'Malatesta':
            imagem1.src = imagens[2]
            mini_texto.innerHTML = 'foi um teórico e ativista anarquista italiano. Ele editou diversos jornais radicais e passou a maioria de sua vida exilado e preso, tendo isto acontecido na Itália, Inglaterra, França e Suíça. Originalmente apoiador da propaganda pelo ato revolucionário, Malatesta mais tarde aderiria ao sindicalismo revolucionário. '
            texliv.innerHTML = 'A edição de <a href=https://anarquismopiracicabaeregiao.files.wordpress.com/2010/02/escritos-revolucionarios.pdf"" target="_blank"> Escritos revolucionários </a> reúne alguns dos principais textos de Malatesta, um dos mais ativos e influentes anarquistas. Os artigos evidenciam os mais recorrentes aspectos da construção do pensamento malatestiano, abordando também a importância da vontade, da tática, do combate ao autoritarismo dentro e fora do socialismo, bem como a luta política fora do âmbito da representação parlamentar.'
            imagem2.src = livros[2]
            painel == 0
            break;
        case selecionado.value == 'Makhno':
                imagem1.src = imagens[3]
                mini_texto.innerHTML = 'foi um revolucionário anarco-comunista ucraniano e comandante do Exército Insurgente Makhnovista durante a Revolução Ucraniana e a Guerra de Independência da Ucrânia. Constituiu a Makhnovtchina, movimento social de massas com princípios anarquistas. '
                texliv.innerHTML = '<a href="https://bibliotecaanarquista.org/library/dielo-truda-a-plataforma-organizacional-da-uniao-geral-dos-anarquistas" target="_blank">A Plataforma Organizacional para uma União Geral de Anarquistas</a>  foi escrita em 1926 pelo Grupo de Anarquistas Russos no Estrangeiro, um grupo de anarquistas russos e ucranianos exilados na França e que publicavam o periódico Dielo Truda, no qual publicaram a Plataforma. A Plataforma consistia em uma análise das crenças básicas dos anarquistas, uma visão de uma sociedade anarquista e recomendações sobre como uma organização anarquista deveria ser estruturada.'
                imagem2.src = livros[3]
                painel++
                if(painel >= 5){
                    imagem1. src = 'painelgato.jpg'
                    mini_texto.innerHTML = 'Oi painel seria muito interessante ter você como companheira libertária pois considero você alguém muito inteligente e que se importa com a questão do meio ambiente e isso te qualificaria como uma ótima anarquista.(a foto é você gato)'
                    texliv.innerHTML = 'Te recomendo ler <a href="https://drive.google.com/drive/folders/11L-qha7nLX7Ziduc0ScaHP6GDetDsHvj?fbclid=PAAaZ9N68gNyzKJEoxYtejPiLTzwoFCw5M_CMh-lVSxJ6NKmHsJ4bgwyWHA1Q" target="_blank">Ecologia Social</a>. Esse texto do Bookchin é uma recomendação especial para você pois trata sobre a questão ecológica do ponto de vista de um grande anarquista norte-americano que apesar dos erros faz uma análise muito interessante na questão ambiental em diversos textos seus.'
                    imagem2.src = 'https://www.anarquista.net/wp-content/uploads/2018/08/Da-Ecologia-Social-%C3%A0-Educa%C3%A7%C3%A3o-Ambiental-Murray-Bookchin.jpg'
                }
                break;
        case selecionado.value == 'SubComandante':
                imagem1.src = imagens[4]
                mini_texto.innerHTML = 'O Subcomandante Marcos, é o principal porta-voz do comando militar do grupo indígena mexicano chamado Exército Zapatista de Libertação Nacional (EZLN), que fez a sua aparição pública em 1º de Janeiro em 1994, quando os militares lançaram uma ofensiva na qual conquistou seis municípios, no sulino estado mexicano de Chiapas, exigindo democracia, liberdade, terra, pão e justiça para os indígenas.'
                texliv.innerHTML = '<a href="https://bibliotecaanarquista.org/library/subcomandante-insurgente-marcos-eu-cago-em-todas-as-vanguardas-revolucionarias-desse-planeta" target="_blank"> Eu cago em todas as vanguardas do mundo</a> foi escrita pelo subcomandante marcos e é um dos poucos textoss seus traduzidos para o português e disponibilizados de forma gratuita na internet, importante para conhecer mais alguns pensamentos dos revolucionários de Chiapas sobre a questão da vanguarda.'
                imagem2.src = livros[4]
                painel == 0
                break;
        case selecionado.value == 'RECC':
                imagem1.src = imagens[5]
                mini_texto.innerHTML = 'A RECC é uma organização estudantil surgida em junho de 2009 que pretende, desde a sua fundação, tornar-se de massas. É guiada pelos princípios intransponíveis do anti-governismo, da democracia de base, da autonomia frente a partidos e governos, da combatividade, do anti-reformismo, da ação direta e do classismo – pois compreende o movimento estudantil como uma fração da classe trabalhadora.'
                texliv.innerHTML = '<a href="https://recc.lutafob.org/wp-content/uploads/2023/06/RECC-Cartilha-2022-Construindo-o-movimento-estudantil-classista-e-combativo.pdf" target="_blank">A cartilha da RECC.</a> Essa cartilha não é uma solução mágica ou acabada para a formação política militante. Aqui os camaradas encontrarão algumas informações sobre a história da RECC (Rede Estudantil Classista e Combativa), métodos de trabalho de base, resolução e prevenção de problemas, formas de organizar a resistência e a luta, dentre outras.'
                imagem2.src = livros[5]
                painel == 0
                break;
        case selecionado.value == 'FOB':
                imagem1.src = imagens[6]
                mini_texto.innerHTML = 'A Federação das Organizações Sindicalistas Revolucionárias do Brasil – FOB (antigo Fórum de Oposições pela Base) teve início em 2010 e reúne organizações sindicais, estudantis e populares. Tem como principal estratégia o sindicalismo revolucionário, em oposição ao sindicalismo de Estado e reformismo, hoje predominante no país. '
                texliv.innerHTML = '<a href="https://lutafob.org/principios-estrutura-e-filiacao-da-fob/" target="_blank">Esta cartilha</a> explica os princípios que orientam a FOB, a maneira como nos organizamos e como se filiar ao Sindicalismo Revolucionário.'
                imagem2.src = livros[6]
                painel == 0
                break;
        case selecionado.value == 'Makhnovtchina':
                imagem1.src = imagens[7]
                mini_texto.innerHTML = 'foi uma uma sociedade anarquista e sem estado durante a Guerra de Independência da Ucrânia, que existiu de 1918 até 1921, durante o qual "sovietes livres" e comunas libertárias operavam sob proteção do Exército Insurgente Makhnovista. A população dessa área foi cerca de sete milhões.'
                texliv.innerHTML = '<a href="https://bibliotecaanarquista.org/library/daniel-guerin-anarquismo-na-revolucao-russa#toc4" target="_blank">O anarquismo na revolução Russa</a> é um texto de Daniel Guérin que não trata somente da Makhnovtchina e sim do movimento anarquista e suas influentes participações durante a revolução de 1918, tratando até da revolta de Kronstadt muito atacada pelos marxista de forma desleal contra os anarquistas.'
                imagem2.src = livros[7]
                painel == 0
                break;
        case selecionado.value == 'Chiapas':
                imagem1.src = imagens[8]
                mini_texto.innerHTML = 'O Exército Zapatista de Libertação Nacional (EZLN, em espanhol: Ejército Zapatista de Liberación Nacional), é uma organização armada mexicana de caráter político-militar e composição de maioria indígena. Sua estratégia militar é a guerrilha. Seu objetivo é "subverter a ordem para fazer a revolução socialista e criar uma sociedade mais justa" (ver indigenismo).'
                texliv.innerHTML = 'Esse texto trata sobre os <a href="https://bibliotecaanarquista.org/library/exercito-zapatista-de-libertacao-nacional-municipios-autonomos-zapatistas" target="_blank">Municípios Autônomos Zapatistas</a> e a resistência das comunidades indígenas em resposta á guerra em Chiapas, texto interesante para entender a questão dos municípios autônomos no México e sua luta diária contra a invasão estatal.'
                imagem2.src = livros[8]
                painel == 0
                break;

    }
    console.log(painel)
})