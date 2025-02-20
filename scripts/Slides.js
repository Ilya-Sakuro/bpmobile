export class Slides {
    constructor() {}
    template(translations) {
        return `
            <div class="unlimited">${translations['Unlimited Art <br>Creation']}</div>
            <div class="exclusive">${translations['Exclusive <br>Styles']}</div>
            <div class="avatars">${translations['Magic Avatars <br>With 20% Off']}</div>
          `;
    }
    render(translations) {
        document.querySelector('.slides').innerHTML = this.template(translations);
    }
}
