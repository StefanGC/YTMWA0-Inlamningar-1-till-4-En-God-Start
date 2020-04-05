import { fleet } from './fleet-data.js';
import { FleetDataService } from './services/fleet-data-services.js';
import { ApplicationBase } from './framework/application-base.js';
import { HomePage } from './pages/home-page.js';
import { BusinessPage } from './pages/business-plan-page.js';
import { BusinessIdeaPage } from './pages/business-idea-page.js';

export class App extends ApplicationBase {
    
    constructor() {
        super('Digital plattform ');
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);
        
        this.addRoute('Startsida', new HomePage(), null);
        this.addRoute('Affärsplan', new BusinessPage(), null);
        this.addRoute('Projektidé', new BusinessIdeaPage(), null);
        
    }
}

export let application = new App();
application.show($('body'));

$('main').append(`
    <div class="container">
        <p>Hello Word!</p>
        <p>Här kommer mer information senare.</p>
        <p>Klicka <a href="index.html">här</a> för att återgå till startsida</p>
    </div>
`);