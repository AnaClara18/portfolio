export class Projetos extends HTMLElement {

    constructor() {
        super();

        console.log("Constructor do projetos.js");

        console.log(`URL do projetos.js: ${import.meta.url}`)
        fetch('./componentes/projetos/projetos.html').then(resultado => {


            resultado.text().then(texto_pagina => {

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));

                this.dispatchEvent(new CustomEvent("carregou"));

                this.setupAccordion();
            });

        });     
    }

    setupAccordion() {
        const titulos = this.querySelectorAll('.titulo-projeto');
        if (titulos.length === 0) {
            console.warn("Nenhum elemento com a classe 'titulo-projeto' foi encontrado.");
            return;
        }

        titulos.forEach((titulo, index) => {
            titulo.addEventListener('click', () => clickAccordion(index));
        });
    
    }
}
function clickAccordion(t) {
    console.log("inicio clickAccordion");
    const titulos = document.getElementsByClassName('titulo-projeto');
    if (titulos.length <= t) {
        console.warn(`Nenhum elemento 'titulo-projeto' encontrado no índice ${t}.`);
        return;
    }

    const pai = titulos[t].parentElement;
    const icone = pai.querySelector('.fa-solid.fa-chevron-right');
    const conteudo = pai.querySelector('p');

    // Ocultar todos os conteúdos
    const todosConteudos = document.querySelectorAll('.secao p');
    const todosIcones = document.querySelectorAll('.fa-solid.fa-chevron-right');
    todosConteudos.forEach((c, index) => {
        if (index !== t) {
            c.classList.remove('show');
            c.classList.add('hide');
            todosIcones[index].style.transform = "rotate(0deg)";
        }
    });

    // Alternar o conteúdo clicado
    if (conteudo.classList.contains('hide')) {
        conteudo.classList.remove('hide');
        conteudo.classList.add('show');
        icone.style.transform = "rotate(90deg)";
    } else {
        conteudo.classList.remove('show');
        conteudo.classList.add('hide');
        icone.style.transform = "rotate(0deg)";
    }
}

customElements.define('br-projetos', Projetos);


