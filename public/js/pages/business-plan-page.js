import { Page } from '../framework/page.js';
import { Paragraph } from "../ui/paragraph.js";

export class BusinessPage extends Page {
    
    constructor() {
        super('Affärsplan');
    }
    
    createElement() {
        super.createElement();
        
        let p1 = new Paragraph (`<strong><u>Idé</u></strong>`);
        p1.appendToElement(this.element);

        let p2 = new Paragraph (`Digital plattform för kontrollerad användning av mobiltelefoner i skolmiljön.`);
        p2.appendToElement(this.element);

        let p3 = new Paragraph (`<strong><u>Sammanfattning</u></strong>`);
        p3.appendToElement(this.element);
        
        let p4 = new Paragraph (`
            Med min affärsidé löser jag ett stort problem som för närvarande finns i skolor, 
            den massiva användningen av mobiltelefoner i skolorna förvärrar problemen med mobbing och uppmärksamhetunder lektioner.`
            );
        p4.appendToElement(this.element);

        let p5 = new Paragraph (`<strong><u>Bakgrund</u></strong>`)
        p5.appendToElement(this.element);

        let p6 = new Paragraph (`
            I början, när jag måste tänka på en bra affärsidé, blev jag blockerad och ingen bra idé kommer ut. 
            Då börjar jag ägna mer uppmärksamhet åt människors problem och det var hur min affärsidé kom upp. 
            Det var just att prata med min fru som är språklärare, hon berättade för mig hur sin dag hade gått i skolan. 
            Mellan jag lyssnade på henne då kom jag på av min affärsidé, att utveckla ett system som gör möjlighet att använda mobiltelefoner i skolorna men i en kontrollerad miljön.
        `)
        p6.appendToElement(this.element);

        let p7 = new Paragraph (`<strong><u>Syfte</u></strong>`)
        p7.appendToElement(this.element);

        let p8 = new Paragraph (`
            Syfte med min idé är att hitta en balans mellan att helt förbjuda användningen av mobiltelefoner i skolan eller att låta elever använda den utan gränser. 
            Är att begränsa dem på ett intelligent sätt och dra nytta av de fördelar som mobiltelefoner erbjuder.
        `)
        p8.appendToElement(this.element);
    }
    
    getElementString() {
        return `
        <div class="container">
            <h1 class="text-primary">Affärsplan</h1>
        </div>
        `;
    }
}