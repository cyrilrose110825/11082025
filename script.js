document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const navItems = document.querySelectorAll('nav li');
    const music = document.getElementById('bg-music');
    const welcomeScreen = document.getElementById('welcome-screen');

    // Try autoplay hack
    let autoplayWorked = false;
    music.volume = 0;
    const playAttempt = music.play();
    if (playAttempt !== undefined) {
        playAttempt.then(() => {
            setTimeout(() => { music.volume = 1; }, 1000);
            autoplayWorked = true;
            welcomeScreen.style.display = 'none';
        }).catch(() => {
            welcomeScreen.style.display = 'flex';
        });
    }

    // Welcome screen click (if autoplay fails)
    welcomeScreen.addEventListener('click', () => {
        music.play();
        welcomeScreen.style.display = 'none';
    });

    // Navigation
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
