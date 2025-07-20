document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const navItems = document.querySelectorAll('nav li');
    const music = document.getElementById('bg-music');
    const welcomeScreen = document.getElementById('welcome-screen');

    const startTime = 13; // start at 13 seconds

    // Always show welcome screen first
    welcomeScreen.style.display = 'flex';

    // Start music after clicking welcome screen
    welcomeScreen.addEventListener('click', () => {
        music.currentTime = startTime; 
        music.play();
        welcomeScreen.style.display = 'none';
    });

    // Force loop to always restart at 13 seconds
    music.addEventListener('ended', () => {
        music.currentTime = startTime;
        music.play();
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
