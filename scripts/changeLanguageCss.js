import { lang } from './supportedLanguages';

export default function (className) {
    document.querySelector(`.${className}`).classList.add(`${lang}`);
}
