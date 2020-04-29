import { Page } from '../framework/page.js';
import { Paragraph } from "../ui/paragraph.js";
import { Video } from '../ui/video.js';

export class BusinessIdeaPage extends Page {
    
    constructor() {
        super('Projektidé');
    }
    
    createElement() {
        super.createElement();
        
        let p1 = new Paragraph (`
            I början, när jag måste tänka på en bra affärsidé, blir jag blockerad och ingen bra idé kommer ut. 
            Då börjar jag ägna mer uppmärksamhet åt människors problem och det var hur min affärsidé kom upp. 
            Det var just att prata med min fru som är språklärare, hon berättade för mig hur sin dag hade gått i skolan. 
            Mellan jag lyssnade på henne då kom jag på av min affärsidé, att utveckla ett system som gör möjlighet att använda mobiltelefoner i skolorna men i en kontrollerad miljön.
        `);
        p1.appendToElement(this.element);

        let p2 = new Paragraph (`
            Så min lösning är en digital plattform som gör att mobiltelefoner kan användas på ett kontrollerat miljön genom att spärra dataöverföring på sociala nätverk. 
            Eleverna kommer att kunna använda sina mobiltelefoner för att ringa och ta emot samtal, samt söka efter material på nätet.
        `);
        p2.appendToElement(this.element);

        let v1 = new Video('./video/Stefans Hisspresentation.mp4');
        v1.appendToElement(this.element);

    }
    
    getElementString() {
        return `
        <div class="container">
            <h1 class="text-primary">Projektidé</h1>
        </div>
        `;
    }
}