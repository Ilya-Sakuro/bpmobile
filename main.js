import { Footer } from './scripts/Footer';
import { Header } from './scripts/Header';
import { Selecrors } from './scripts/Selecrors';
import { Slides } from './scripts/Slides';
import './style.scss';

document.getElementById('app').innerHTML = `  
        <header class="header"></header>
        <main class="main">
        <section class="slides"></section>
        <section class="selecrors"></section>
        </main>
        <footer class="footer"></footer>
`;

const components = [new Header(), new Slides(), new Selecrors(), new Footer()];

components.forEach(component => component.render());
