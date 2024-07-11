const supportedLanguages = ['de', 'en', 'es', 'fr', 'ja', 'pt'];

const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get('lang');

const systemLang = navigator.language.slice(0, 2);

let lang;
if (supportedLanguages.includes(langParam)) {
    lang = langParam;
} else if (supportedLanguages.includes(systemLang)) {
    lang = systemLang;
} else {
    lang = 'en';
}

const formatPrice = (price, lang) => {
    return new Intl.NumberFormat(lang, { style: 'currency', currency: 'USD' }).format(price);
};

fetch(`./data/${lang}.json`)
    .then(response => response.json())
    .then(translations => {
        const updateText = (className, text) => {
            const element = document.querySelector(`.${className}`);
            if (element) {
                element.innerHTML = text;
            }
        };

        const yearlyPrice = formatPrice(39.99, lang);
        const weeklyPrice = formatPrice(6.99, lang);
        const bestOfferPrice = formatPrice(0.48, lang);

        updateText('Get_Unlimited_Access', translations['Get Unlimited <br>Access']);
        updateText('Unlimited_Art_Creation', translations['Unlimited Art <br>Creation']);
        updateText('Exclusive_Styles', translations['Exclusive <br>Styles']);
        updateText('Magic_Avatars_With_20_Off', translations['Magic Avatars <br>With 20% Off']);
        updateText('YEARLY_ACCESS', translations['YEARLY ACCESS']);
        updateText('best_offer', translations['BEST OFFER']);
        updateText(
            'Just_price_per_year',
            translations['Just {{price}} per year'].replace('{{price}}', yearlyPrice),
        );

        updateText(
            'price_per_week',
            translations['{{price}} <br>per week'].replace('{{price}}', bestOfferPrice),
        );
        updateText('WEEKLY_ACCESS', translations['WEEKLY ACCESS']);
        updateText(
            'price_per_week_weekly',
            translations['{{price}} <br>per week'].replace('{{price}}', weeklyPrice),
        );
        updateText('Terms_of_Use', translations['Terms of Use']);
        updateText('Privacy_Policy', translations['Privacy Policy']);
        updateText('Restore', translations['Restore']);
        updateText('Continue', translations['Continue']);
    })
    .catch(error => {
        console.error('Error loading language file:', error);
    });
