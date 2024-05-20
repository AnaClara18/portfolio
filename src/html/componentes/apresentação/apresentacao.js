export class Apresentacao extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor do apresentacao.js");

        console.log(`URL do apresentacao.js: ${import.meta.url}`)
        fetch('./componentes/apresentação/apresentacao.html').then(resultado => {
            

            resultado.text().then(texto_pagina => {                            

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));
                
                this.dispatchEvent(new CustomEvent("carregou"));                
            });
        });

        

    }
}
customElements.define('br-apresentacao', Apresentacao);