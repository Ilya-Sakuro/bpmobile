import { Footer } from './scripts/footer.js';
import { Header } from './scripts/header.js';
import { Selectors } from './scripts/selectors.js';
import { Slides } from './scripts/slides.js';
import './css/reset.scss';
import './css/style.scss';
import './css/selectors.scss';
import './css/footer.scss';

document.getElementById('app').innerHTML = `  
        <header class="header"></header>
        <main class="main">
        <section class="slides"></section>
        <section class="selecrors"></section>
        </main>
        <footer class="footer"></footer>
`;

const components = [new Header(), new Slides(), new Selectors(), new Footer()];

components.forEach(component => component.render());
