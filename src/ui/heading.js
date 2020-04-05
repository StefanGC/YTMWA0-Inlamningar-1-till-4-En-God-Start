import { BaseElement } from './base-element.js';

export class Heading extends BaseElement {
    
    constructor(size, text) {
        super();
        this.size = size;
        this.text = text;
    }
    
    getElementString() {     
        return `
            <H${Number.parseInt(this.size)}>${this.text}</H${Number.parseInt(this.size)}>
        `;
    } 
}