const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json' //definimos o caminho para poder acessar a rede social/link

//função assincrona com await, para esperar e fetch para realizar a requisão, que no caso é o url
async function vizualizarInformacoesGlobais(){
    const resposta = await fetch(url) //aqui faz a requisição
    const dados = await resposta.json() //aqui espera tudo ser convertido para jason, seleciona a parte da resposta das url, converte em json 
    const paragrafo = document.createElement('p') //criamos um elemento de parágrafo para colocarmos os dados API
    paragrafo.classList.add('graficos-container__texto') //adicionamos uma class a const paragrafo
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas}</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas conectadas.`
    
    const container = document.getElementById('graficos-container')//selecionamos o espaço no HTML destinado a construção dos gráficos
    container.appendChild(paragrafo)//dizemos que o container vai receber o parágrafo
}

vizualizarInformacoesGlobais() //pode-se observar com console que gera uma promise