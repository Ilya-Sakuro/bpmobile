import { lang, loadTranslations, translations } from './supportedLanguages';

export class Footer {
    constructor() {}
    template(translations) {
        return `
          <div class="header__title">${translations['Terms of Use']}</div>
          <div class="header__title">${translations['Privacy Policy']}</div>
          <div class="header__title">${translations['Restore']}</div>
          `;
    }
    async render() {
        loadTranslations(await lang).then(() => {
            document.querySelector('.footer').innerHTML = this.template(translations);
        });
    }
}
