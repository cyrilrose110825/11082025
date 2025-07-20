document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const navItems = document.querySelectorAll('nav li');
    const music = document.getElementById('bg-music');
    const welcomeScreen = document.getElementById('welcome-screen');

    // Always show welcome screen first
    welcomeScreen.style.display = 'flex';

    // Start music after clicking welcome screen
    welcomeScreen.addEventListener('click', () => {
        music.play();
        welcomeScreen.style.display = 'none';
    });

    // Navigation logic
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === target) page.classList.add('active');
            });
        });
    });
});
