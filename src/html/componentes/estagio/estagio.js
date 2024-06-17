export class Estagio extends HTMLElement {

    constructor() {
        super();

        console.log("Constructor estagio.js")

        console.log(`URL do estagio.js: ${import.meta.url}`)
        fetch('./componentes/estagio/estagio.html').then(resultado => {

            resultado.text().then(texto_pagina => {

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));

                this.dispatchEvent(new CustomEvent("carregou"));

                this.initAdditionalFeatures();

            });
        });



    }

    initAdditionalFeatures() {
        console.log("Inicializando funcionalidades adicionais...");
    
        // Código adicional
        this.count = 1;
        const radio1 = this.querySelector("#radio1");
    
        if (radio1) {
            radio1.checked = true;
    
            setInterval(() => {
             this.nextImage();
            }, 8000);
        }
        console.log("O código vem ate aqui 1!");
    }
    
    nextImage() {
        console.log("O código vem ate aqui 2!");
        this.count++;
        if (this.count > 4) {
            this.count = 1;
        }
        console.log("O código vem ate aqui 3!");
    
        const radio = this.querySelector("#radio" + this.count);
        if (radio) {
            radio.checked = true;
        }
        console.log("O código vem ate aqui 4!");

    }

}

customElements.define('br-estagio', Estagio);