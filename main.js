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
    
    character.innerHTML = 
    `
    <strong><h2>${persona.nome}</h2></strong>
    <img src="${persona.foto}">
    <h3>${persona.cidadania}</h3>
    <i><blockquote>${persona.frase}</blockquote></i>
    
    
    `;
    
}

function busca(){

    const entrada = pesquisa.value.toLowerCase();
    const saida = persona.find(i => i.nome.toLowerCase() === entrada);

    exibir(saida);
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