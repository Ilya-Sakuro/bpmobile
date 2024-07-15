import { lang, loadTranslations, translations } from './supportedLanguages.js';

export class Slides {
    constructor() {}
    template(translations) {
        return `
            <div class="unlimited">${translations['Unlimited Art <br>Creation']}</div>
            <div class="exclusive">${translations['Exclusive <br>Styles']}</div>
            <div class="avatars">${translations['Magic Avatars <br>With 20% Off']}</div>
          `;
    }
    async render() {
        loadTranslations(lang).then(() => {
            document.querySelector('.slides').innerHTML = this.template(translations);
        });
    }
}
