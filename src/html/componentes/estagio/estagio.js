export class Estagio extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor estagio.js")

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
