// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {

//1. Accent Color Switcher
//Adds interactive element for viewers
const heroTitle = document.querySelector('.hero h1');

if (heroTitle) {
    const themeContainer = document.createElement('div');
    themeContainer.style.margin = '20px 0';
    themeContainer.innerHTML = `
        <button id="twitch-theme" style="padding: 5px 15px; margin: 5px; cursor: pointer; border-radius: 15px; border: none; background: #9146ff; color: white;">Twitch Purple</button>
        <button id="youtube-theme" style="padding: 5px 15px; margin: 5px; cursor: pointer; border-radius: 15px; border: none; background: #FF0000; color: white;">YouTube Red</button>
`;
    heroTitle.insertAdjacentElement('afterend', themeContainer);

    // Event listeners to change CSS variables
    document.getElementById('twitch-theme').addEventListener('click', function() {
        document.documentElement.style.setProperty('--accent-color', '#9146ff');
    });

    document.getElementById('youtube-theme').addEventListener('click', function() {
        document.documentElement.style.setProperty('--accent-color', '#FF0000');

     });

    }

    // Simulated Twitch Status Check
    // In production, you would fetch() from backend API interacting with Twitch
    async function checkStreamStatus() {
        const twitchButton = document.querySelector('a[href*="twitch.tv"]');
        if (!twitchButton) return;

        //Visual indicator logic placeholder
        const isLive = false; // Toggle to true to see effect

        if (isLive) {
            twitchButton.innerHTML = '<span style="color: #9146ff; font-weight: bold;">LIVE</span>';
            twitchButton.style.animation = 'pulse 1s infinite';
        }
    }
    checkStreamStatus();
});