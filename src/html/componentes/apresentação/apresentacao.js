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
class BRCard {
    /**
     * Instancia do componente
     * @property {string} name - Nome do componente em minúsculo
     * @property {object} component - Objeto referenciando a raiz do componente DOM
     * @property {string} id - nome da id do componente
     */
    constructor(name, component, id) {
        this.name = name;
        this.component = component;
        this.component.setAttribute('id', `card${id}`);
        this._setBehavior();
    }

    /**
     * Define o comportamento do componente
     * @private
     */
    _setBehavior() {
        this._setFlipBehavior();
        // this._setExpandBehavior(); // Se necessário, descomente esta linha e implemente o comportamento expand
        this._setDragBehavior();
        this._setDisableBehavior();
        this._collapseBehavior();
    }

    /**
     * Define o comportamento de comprimir (collapse)
     * @private
     */
    _collapseBehavior() {
        this.component.querySelectorAll('[data-toggle="collapse"]').forEach((trigger) => {
            const config = {
                iconToHide: 'fa-chevron-up',
                iconToShow: 'fa-chevron-down',
                trigger,
                useIcons: true,
            };
            const collapse = new Collapse(config);
            collapse.setBehavior();
        });
    }

    /**
     * Desabilita o componente
     * @private
     */
    _setDisableBehavior() {
        if (this.component.classList.contains('disabled')) {
            this.component.setAttribute('aria-hidden', 'true');
            const buttons = this.component.querySelectorAll('button');
            const inputs = this.component.querySelectorAll('input');
            const selects = this.component.querySelectorAll('select');
            const textareas = this.component.querySelectorAll('textarea');
            for (const button of buttons) {
                button.setAttribute('disabled', 'disabled');
            }
            for (const input of inputs) {
                input.setAttribute('disabled', 'disabled');
            }
            for (const select of selects) {
                select.setAttribute('disabled', 'disabled');
            }
            for (const textarea of textareas) {
                textarea.setAttribute('disabled', 'disabled');
            }
        }
    }

    /**
     * Define o comportamento de girar (flip)
     * @private
     */
    _setFlipBehavior() {
        for (const flip of this.component.querySelectorAll('button.flip')) {
            flip.addEventListener('click', () => {
                if (this.component.getAttribute('flipped') === 'off') {
                    this.component.setAttribute('flipped', 'on');
                } else {
                    this.component.setAttribute('flipped', 'off');
                }
            });
        }
    }

    /**
     * Define o comportamento de arrastar (drag)
     * @private
     */
    _setDragBehavior() {
        for (const img of this.component.querySelectorAll('img')) {
            img.setAttribute('draggable', 'false');
        }
        for (const link of this.component.querySelectorAll('a')) {
            link.setAttribute('draggable', 'false');
        }
        this.component.addEventListener('dragstart', (event) => {
            event.stopPropagation();
            event.dataTransfer.setData('text/plain', this.component.getAttribute('id'));
            event.dropEffect = 'move';
        });
    }
}

export default BRCard;