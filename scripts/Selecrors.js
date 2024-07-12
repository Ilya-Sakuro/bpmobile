import createElement from './createElement';
import { lang, loadTranslations, translations } from './supportedLanguages';

export class Selecrors {
    constructor() {}
    template(translations, lang) {
        const formatPrice = (price, lang) => {
            return new Intl.NumberFormat(lang, { style: 'currency', currency: 'USD' }).format(
                price,
            );
        };

        const yearlyPrice = formatPrice(39.99, lang);
        const weeklyPrice = formatPrice(6.99, lang);
        const bestOfferPrice = formatPrice(0.48, lang);

        return `
          <div class="header__title">${translations['YEARLY ACCESS']}</div>
          <div class="header__title">${translations['BEST OFFER']}</div>
          <div class="header__title">${translations['Just {{price}} per year'].replace(
              '{{price}}',
              yearlyPrice,
          )}</div>
          <div class="header__title">${translations['Just {{price}} per year'].replace(
              '{{price}}',
              bestOfferPrice,
          )}</div>
          <div class="header__title">${translations['WEEKLY ACCESS']}</div>
          <div class="header__title">${translations['{{price}} <br>per week'].replace(
              '{{price}}',
              weeklyPrice,
          )}</div>
          <button class="button">${translations['Continue']}</button>
          `;
    }

    async render() {
        loadTranslations(lang).then(() => {
            document.querySelector('.selecrors').innerHTML = this.template(translations, lang);
        });
    }
}
