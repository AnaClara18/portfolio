export class Inicio extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor do inicio.js");

        console.log(`URL do inicio.js: ${import.meta.url}`)
        fetch('./componentes/pagina_inicial/inicio.html').then(resultado => {
            

            resultado.text().then(texto_pagina => {                            

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));
                
                this.dispatchEvent(new CustomEvent("carregou")); 
                
            
            });
        });

        

    }
}
customElements.define('br-inicio', Inicio);