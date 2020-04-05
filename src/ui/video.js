import { BaseElement } from './base-element.js';

export class Video extends BaseElement {
    
    constructor(fileName) {
        super();
        this.fileName = fileName;
    }
    
    getElementString() {
        return `
        <video width="1110 " height="624" controls>
            <source src="${this.fileName}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        `;
    }
}