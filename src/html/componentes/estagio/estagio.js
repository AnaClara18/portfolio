export class Estagio extends HTMLElement{
    
    constructor(){
        super();
        console.log(`URL do estagio.js: ${import.meta.url}`)
        fetch('./componentes/estagio/estagio.html').then(resultado => {
            resultado.text().then(texto_pagina => {
            
                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));

                this.dispatchEvent(new CustomEvent("carregou"));
            });
        });



    }
        
   
}
customElements.define('br-estagio', Estagio);