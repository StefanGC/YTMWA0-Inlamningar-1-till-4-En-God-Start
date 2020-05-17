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
            links += `<li class="nav-item"> <a class="nav-link">
                        ${link.title}
                      </a></li>\n`;
        return `
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header class="mdl-layout__header">
                    <nav class="navbar fixed-top navbar-expand-lg navbar navbar-dark" style="height: 64px;"
                    }>
                        <a class="navbar-brand" href="#"><strong>${this.title}</strong></a>
                        
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                ${links}
                                <li class="nav-item"> <a class="nav-link" href="./app.html">Vår app</a></li>
                                <li class="nav-item"> <a class="nav-link" href="./schools-available.html">Skolor Tillgängliga</a></li>
                                <li class="nav-item"> <a class="nav-link" href="./calendar.html">Din kalender</a></li>
                            </ul>
                            <ul class="navbar-nav nav-flex-icons">
                                <li class="nav-item">
                                    <a class="nav-link"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"><i class="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
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

// Gamla kod
{/* <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <!-- Title -->
                <span class="mdl-layout-title">${this.title}</span>
                <!-- Add spacer, to align navigation to the right -->
                <div class="mdl-layout-spacer"></div>
                <!-- Navigation. We hide it in small screens. -->
                <nav class="mdl-navigation mdl-layout--large-screen-only">
                    ${links}
                    <a class="mdl-navigation__link" href="./app.html">Vår app</a>
                    <a class="mdl-navigation__link" href="./schools-available.html">Skolor Tillgängliga</a>
                    <a class="mdl-navigation__link" href="./calendar.html">Din kalender</a>
                </nav>
            </div>
        </header>
        <main class="mdl-layout__content">
            <div class="page-content"><!-- Your content goes here --></div>
        </main>
        <footer class="page-footer font-small blue pt-4">
            <div class="footer-copyright text-center py-3">© 2020 Copyright Stefan Gillsbro Carrillo</div>
        </footer>
    </div> */}