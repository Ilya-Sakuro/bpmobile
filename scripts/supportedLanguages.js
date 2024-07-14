export let translations = {};
const supportedLanguages = ['de', 'en', 'es', 'fr', 'ja', 'pt'];
export function getSupportedLanguages(supportedLanguages) {
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

    return lang;
}
export const lang = getSupportedLanguages(supportedLanguages);

export const loadTranslations = async lang => {
    try {
        const response = await fetch(`./data/${lang}.json`);
        const data = await response.json();

        translations = data;
    } catch (error) {
        console.error('Error loading language file:', error);
    }
};
