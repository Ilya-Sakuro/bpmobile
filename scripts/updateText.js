export const updateText = (className, text) => {
    const element = document.querySelector(`.${className}`);
    if (element) {
        element.innerHTML = text;
    }
};
