import { lang } from './supportedLanguages.js';

export class Footer {
    constructor() {}
    template(translations) {
        return `
        <div class="link__block" lang="${lang}">
          <a class="footer__link" href="#" lang="${lang}">${translations['Terms of Use']}</a>
          <a class="footer__link" href="#" lang="${lang}">${translations['Privacy Policy']}</a>
          <a class="footer__link" href="#" lang="${lang}">${translations['Restore']}</a>
        </div>  
          `;
    }
    render(translations) {
        document.querySelector('.footer').innerHTML = this.template(translations);
    }
}
