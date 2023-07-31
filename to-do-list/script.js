

const lugar_tarefas = document.querySelector('#lugar_tarefas')

class Tarefa{
    constructor(){
        
        
        this.botao_add =  document.querySelector('#botao')
        this.botao_add.addEventListener('click', ()=>{
            this.tarefa = document.querySelector('#itarefa').value
            this.caixa_tarefa = document.querySelector('#itarefa')
            this.createCaixao()
            this.TestaBox()
            this.caixa_tarefa.focus()
            this.caixa_tarefa.value = ''
            this.caixao = [...document.querySelectorAll('.caixao')]
            this.taf = [...document.querySelectorAll('.taf')]
            this.caixinhas = [...document.querySelectorAll('.caixinha')]
           
        })
        // tenho que ver uma forma de fazer a caixinha ser apagada
    }
    createCaixao=()=>{
        const caixao = document.createElement('div')
        caixao.setAttribute('class', 'caixao')
        lugar_tarefas.appendChild(caixao)
        const caixinha = document.createElement('input')
        caixinha.type = 'checkbox'
        caixinha.checked = false
        caixinha.setAttribute('class', 'caixinha')
        caixao.appendChild(caixinha)
        let tarefa_a_fazer = document.createElement('p')
        tarefa_a_fazer.innerText = this.tarefa
        tarefa_a_fazer.setAttribute('class', 'taf')
        caixao.appendChild(tarefa_a_fazer)
    }
    TestaBox = ()=>{setInterval(() => {
        this.caixinhas.map((el)=>{
            el.addEventListener('click', ()=>{
                el.classList.add('clicado')
                el.parentElement.parentElement.removeChild(el.parentElement)
            })
        })
    }, 1);}
   
}

const nova_tarefa = new Tarefa()

