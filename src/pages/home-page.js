import { Page } from '../framework/page.js';
import { Paragraph } from "../ui/paragraph.js";
import { Heading } from '../ui/heading.js';


export class HomePage extends Page {
    
    constructor() {
        super('Startsida');
    }
    
    createElement() {
        super.createElement();

        let h1 = new Heading ('5', 'Hej och välkommen.');
        h1.appendToElement(this.element);

        let p1 = new Paragraph (`
            Här hittar du all information relaterad till vår affärsidé från hur idén uppstod, 
            hur vi vill implementera den och vad som krävs för att den ska fungera.
        `);
        p1.appendToElement(this.element);
    }
    
    getElementString() {
        return `
        <div class="container">
            <h1 class="text-primary">Startsida</h1>
        </div>
        `;
    }
}