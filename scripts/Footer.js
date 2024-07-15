import { lang, loadTranslations, translations } from './supportedLanguages.js';

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
    async render() {
        loadTranslations(lang).then(() => {
            document.querySelector('.footer').innerHTML = this.template(translations);
        });
    }
}
