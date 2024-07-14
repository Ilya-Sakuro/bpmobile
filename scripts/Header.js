import { lang, loadTranslations, translations } from './supportedLanguages';

export class Header {
    constructor() {}
    template(translations) {
        return `
          <h1 class="header__title">${translations['Get Unlimited <br>Access']}</h1>
          `;
    }
    async render() {
        loadTranslations(lang).then(() => {
            document.querySelector('.header').innerHTML = this.template(translations);
        });
    }
}
