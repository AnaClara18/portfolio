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
            });
        });



    }
    
}
customElements.define('br-projetos', Projetos);


