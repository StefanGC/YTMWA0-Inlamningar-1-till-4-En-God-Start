import { BaseElement } from './base-element.js';

export class Paragraph extends BaseElement {
    
    constructor(text) {
        super();
        this.text = text;
    }
    
    getElementString() {     
        return `
            <p>${this.text}</p>
        `;
    }   
}