import { BaseElement } from './base-element.js';

export class TitleBar extends BaseElement {
    
    constructor(title) {
        super();
        this.title = title;
        this.links = [];
    }
    
    addLink(title, href) {
        this.links.push({
            title,
            href
        });
    }   
    
    getElementString() {
        let links = '';
        for (let link of this.links)
            links += `<a class="mdl-navigation__link">
                        ${link.title}
                      </a>\n`;
        return `
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header class="mdl-layout__header">
                    <div class="mdl-layout__header-row">
                        <!-- Title -->
                        <span class="mdl-layout-title">${this.title}</span>
                        <!-- Add spacer, to align navigation to the right -->
                        <div class="mdl-layout-spacer"></div>
                        <!-- Navigation. We hide it in small screens. -->
                        <nav class="mdl-navigation mdl-layout--large-screen-only">
                            ${links}
                            <a class="mdl-navigation__link" href="app.html">Vår app</a>
                        </nav>
                    </div>
                </header>
                <div class="mdl-layout__drawer">
                    <span class="mdl-layout-title">${this.title}</span>
                    <nav class="mdl-navigation">
                        ${links}
                        <a class="mdl-navigation__link" href="app.html">Vår app</a>
                    </nav>
                </div>
                <main class="mdl-layout__content">
                    <div class="page-content"><!-- Your content goes here --></div>
                </main>
                <footer class="page-footer font-small blue pt-4">
                    <div class="footer-copyright text-center py-3">© 2020 Copyright Stefan Gillsbro Carrillo</div>
                </footer>
            </div>
        `;
    }
}