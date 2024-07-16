import { lang } from './supportedLanguages.js';

export class Header {
    constructor() {}
    template(translations) {
        return `
        <a class="close" href='#' lang="${lang}"></a>
          <h1 class="header__title" lang="${lang}">${translations['Get Unlimited <br>Access']}</h1>
          `;
    }
    render(translations) {
        document.querySelector('.header').innerHTML = this.template(translations);
    }
}
