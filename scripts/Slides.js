import { lang, loadTranslations, translations } from './supportedLanguages';

export class Slides {
    constructor() {}
    template(translations) {
        return `
          <div class="header__title">${translations['Unlimited Art <br>Creation']}</div>
          <div class="header__title">${translations['Exclusive <br>Styles']}</div>
          <div class="header__title">${translations['Magic Avatars <br>With 20% Off']}</div>
          `;
    }
    async render() {
        loadTranslations(await lang).then(() => {
            document.querySelector('.slides').innerHTML = this.template(translations);
        });
    }
}
