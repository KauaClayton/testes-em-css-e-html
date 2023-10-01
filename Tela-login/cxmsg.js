class Cxmsg{
    static cor='#888'
    static destino = null
    static divmsg = null
    static tipo = null
    static comandoS = null
   

    static mostrar=(cor)=>{
        this.cor = cor
        this.texto = 'Esses são os dados corretos?'
        this.titulo = 'Gravando dados...'
        this.destino = document.body
        this.divmsg = document.createElement('div')
        this.divmsg.setAttribute('id', 'divmsg')
        this.destino.prepend(this.divmsg)

        const areacxmsg = document.createElement('div')
        areacxmsg.setAttribute('class', 'areacxmsg')
        this.divmsg.appendChild(areacxmsg)
        
        const titulo1 = document.createElement('div')
        titulo1.setAttribute('id', 'titulo')
        areacxmsg.appendChild(titulo1)

        const corpo = document.createElement('div')
        corpo.setAttribute('id', 'corpo')
        corpo.innerHTML = this.texto
        areacxmsg.appendChild(corpo)

        const rodape = document.createElement('div')
        rodape.setAttribute('id', 'rodape')
        areacxmsg.appendChild(rodape)

        const btn_sim = document.createElement('button')
        btn_sim.setAttribute('class', 'botao')
        btn_sim.innerHTML = 'Sim'
        rodape.appendChild(btn_sim)
        const btn_nao = document.createElement('button')
        btn_nao.setAttribute('class', 'botao')
        btn_nao.innerHTML = 'Não'
        rodape.appendChild(btn_nao)
        btn_sim.addEventListener('click', ()=>{
            corpo.innerHTML = 'Seus dados foram gravados com sucesso'
            const btn_ok = document.createElement('button')
            btn_ok.setAttribute('class','botao')
            rodape.appendChild(btn_ok)

        })
        btn_nao.addEventListener('click',()=>{
            corpo.innerHTML = 'Bote então os dados corretos dessa vez amigo'
            const btn_ok = document.createElement('button')
            btn_ok.setAttribute('class','botao')
            rodape.appendChild(btn_ok)
        })

    }
}
export {Cxmsg}
