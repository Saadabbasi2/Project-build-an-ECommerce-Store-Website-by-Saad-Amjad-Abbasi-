
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    function updateThemeIcon(isDark) {
        const icon = themeToggleBtn.querySelector('i');
        icon.className = isDark ? 'bi bi-moon-stars' : 'bi bi-sun';
        themeToggleBtn.title = `Switch to ${isDark ? 'light' : 'dark'} mode`;
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlElement.setAttribute('data-bs-theme', newTheme);
        updateThemeIcon(newTheme === 'dark');

        // Optional: Save theme preference
        localStorage.setItem('theme', newTheme);
    });

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-bs-theme', savedTheme);
        updateThemeIcon(savedTheme === 'dark');
    }
});