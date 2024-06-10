export class Fotoinicio extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor do foto_inicio.js");

        console.log(`URL do inicio.js: ${import.meta.url}`)
        fetch('./componentes/pagina_inicial/foto_inicio.html').then(resultado => {
            

            resultado.text().then(texto_pagina => {                            

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));
                
                this.dispatchEvent(new CustomEvent("carregou")); 
                
            
            });
        });

        

    }
    
}
customElements.define('br-fotoinicio', Fotoinicio);
