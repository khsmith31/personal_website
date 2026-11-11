// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {

//1. Accent Color Switcher
//Adds interactive element for viewers
const heroTitle = document.querySelector('.hero h1');

if (heroTitle) {
    const themeContainer = document.createElement('div');
    themeContainer.style.margin = '20px 0';
    themeContainer.innerHTML = `
        <button id="twitch-theme" style="padding 5px 15px; margin: 5px; cursor: pointer; border-radius: 15px; border: none; background: #9146ff; color: white;">Twitch Purple</button>
        <button id="youtube-theme" style="padding: 5px 15px; margin: 5px; cursor: pointer; border-radius: 15px; border: none; background: #FF0000; color: white;">YouTube Red</button>
`;
    heroTitle.insertAdjacentElement('afterend', themeContainer);

    // Event listeners to change CSS variables
    document.getElementById('twitch-theme').addEventListener('click', function() {
        document.documentElement.style.setProperty('--accent-color', '#9146ff');
    });
    //stopped here
    

        }