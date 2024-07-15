import { lang, loadTranslations, translations } from './supportedLanguages.js';

export class Header {
    constructor() {}
    template(translations) {
        return `
        <a class="close" href='#' lang="${lang}"></a>
          <h1 class="header__title" lang="${lang}">${translations['Get Unlimited <br>Access']}</h1>
          `;
    }
    async render() {
        loadTranslations(lang).then(() => {
            document.querySelector('.header').innerHTML = this.template(translations);
        });
    }
}
