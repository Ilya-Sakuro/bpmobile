import { Footer } from './scripts/Footer';
import { Header } from './scripts/Header';
import { Selectors } from './scripts/Selectors';
import { Slides } from './scripts/Slides';
import './css/reset.scss';
import './css/style.scss';
import './css/selectors.scss';
import './css/footer.scss';
import { lang } from './scripts/supportedLanguages';

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
