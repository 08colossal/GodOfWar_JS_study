/*------------------------------------------------------------------------------*/
/*              Procurar personagem na 'tabela' personas!                       */

import persona from "./socorro.js";

const pesquisa = document.getElementById('pesquisa');
const btn = document.getElementById('btn');
const character = document.getElementById('character');

function exibir(persona){
    if (!persona){
        character.innerHTML = `<p>Personagem não encontrado.</p>`;
        return;
    }
    
    //converte a array em texto
    const fotos = JSON.stringify(persona.foto);


    character.innerHTML = 
    `
    <strong><h2>${persona.nome}</h2></strong>
    <div class="carrossel">
        <button onclick="mudar(this, -1)">&#10094;</button>
        <img id="foto-c" src="${persona.foto[0]}" data-index=0 data-ft='${fotos}'>
        <button onclick="mudar(this, +1)">&#10095;</button>
    </div>
    <h3>${persona.cidadania}</h3>
    <i><blockquote onclick="traduz(this)" data-pt="${persona.frase_pt}">"${persona.frase}"</blockquote></i>
    
    `;
    
}


function busca(){

    const entrada = pesquisa.value.toLowerCase();
    const saida = persona.find(i => i.id.toLowerCase() === entrada);

    exibir(saida);
}

window.traduz = function(elemento){
    const ingles = elemento.innerText;
    const pt = elemento.getAttribute('data-pt');
    const en = elemento.getAttribute('data-en');
    
    /* g = em todo o texto; procure /" / -> aspas, troque por '' -> vazio; RemovaEspaçosInicioEFim();*/
    if (elemento.textContent.replace(/"/g, '').trim() !== pt){
        elemento.innerText = `"${pt}"`;
        elemento.setAttribute('data-en', ingles);
    }
    else{
        elemento.innerText = `${en}`;
    }
};

window.mudar = function(botao, direcao){    
    const container = botao.parentElement;
    const img = container.querySelector('#foto-c');

    const stringJ = img.getAttribute('data-ft'); 
    const ListarF = JSON.parse(stringJ);
    if (!ListarF) return;

    let index = Number(img.getAttribute('data-index'));

    index += direcao;

    if (index >= ListarF.length){
        index = 0;
    }

    if (index < 0 ){
        index = ListarF.length - 1;
    }

    img.src = ListarF[index];
    img.setAttribute('data-index', index);
}

//botão funcionar com Enter
btn.addEventListener('click', busca);
pesquisa.addEventListener('keypress', function(event){
    if (event.key === 'Enter' && pesquisa.value != null){
        btn.click();
    }
});

/*------------------------------------------------------------------------------*/
/*                                                                             */