import { lang, loadTranslations, translations } from './supportedLanguages';
export class Selectors {
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
        <button id='btn1' class="selecrors__btn ">
        <div class='yearly__per-year'>
            <div class="access">${translations['YEARLY ACCESS']}</div>
            <div class="price">${translations['Just {{price}} per year'].replace(
                '{{price}}',
                yearlyPrice,
            )}</div>
         </div>
            <div class="yearly__best-price">${translations['{{price}} <br>per week'].replace(
                `{{price}}`,
                bestOfferPrice,
            )}</div>
            <div class="yearly__best-offer">${translations['BEST OFFER']}</div>
        </button> 
        <button id='btn2' class="selecrors__btn  align-center">
        <div class='yearly__per-year'>
            <div class="access ">${translations['WEEKLY ACCESS']}</div>
            </div>
            <div class="price">${translations['{{price}} <br>per week'].replace(
                '{{price}}',
                weeklyPrice,
            )}</div>
        </button>
          <button class="button" >${translations['Continue']}</button>
          `;
    }

    async render() {
        loadTranslations(lang).then(() => {
            document.querySelector('.selecrors').innerHTML = this.template(translations, lang);

            const button1 = document.getElementById('btn1');
            const button2 = document.getElementById('btn2');
            const btnContinue = document.querySelector('.button');

            button1.addEventListener('click', function () {
                button1.classList.add('active');
                button2.classList.remove('active');
            });

            button2.addEventListener('click', function () {
                button2.classList.add('active');
                button1.classList.remove('active');
            });
            btnContinue.addEventListener('click', function () {
                if (button1.classList.contains('active')) {
                    window.location.href = 'https://apple.com';
                } else if (button2.classList.contains('active')) {
                    window.location.href = 'https://google.com';
                }
            });
        });
    }
}
