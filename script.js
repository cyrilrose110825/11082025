document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const navItems = document.querySelectorAll('nav li');
    const music = document.getElementById('bg-music');
    const welcomeScreen = document.getElementById('welcome-screen');
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');

    const startTime = 13; // Start music at 13 seconds
    let currentPage = 0;

    // Show only the first page by default
    function showPage(index) {
        pages.forEach((page, i) => {
            page.classList.remove('active');
            if (i === index) page.classList.add('active');
        });

        // Update arrow visibility
        leftArrow.style.display = index === 0 ? 'none' : 'flex';
        rightArrow.style.display = index === pages.length - 1 ? 'none' : 'flex';

        currentPage = index;
    }

    // Welcome screen
    welcomeScreen.style.display = 'flex';
    welcomeScreen.addEventListener('click', () => {
        music.currentTime = startTime;
        music.play();
        welcomeScreen.style.display = 'none';
        showPage(0);
    });

    // Loop music from 13s
    music.addEventListener('ended', () => {
        music.currentTime = startTime;
        music.play();
    });

    // Navigation menu clicks
    navItems.forEach((item, i) => {
        item.addEventListener('click', () => {
            showPage(i);
        });
    });

    // Arrow navigation
    leftArrow.addEventListener('click', () => {
        if (currentPage > 0) showPage(currentPage - 1);
    });

    rightArrow.addEventListener('click', () => {
        if (currentPage < pages.length - 1) showPage(currentPage + 1);
    });

    // Initialize arrows correctly
    showPage(0);
});
