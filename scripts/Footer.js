import { lang, loadTranslations, translations } from './supportedLanguages';

export class Footer {
    constructor() {}
    template(translations) {
        return `
        <div class="link__block">
          <a class="footer__link" href="#">${translations['Terms of Use']}</a>
          <a class="footer__link" href="#">${translations['Privacy Policy']}</a>
          <a class="footer__link" href="#">${translations['Restore']}</a>
        </div>  
          `;
    }
    async render() {
        loadTranslations(lang).then(() => {
            document.querySelector('.footer').innerHTML = this.template(translations);
        });
    }
}
