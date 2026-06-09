// Elements
const themeToggle = document.getElementById('theme-toggle');
const clickMeBtn = document.getElementById('click-me');
const message = document.getElementById('message');

// Check for saved theme preference on load
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggle.textContent = '☀️ Light Mode';
    }
}

// Toggle Theme Function
themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    }
});

// Reveal Hidden Message Function
clickMeBtn.addEventListener('click', () => {
    message.classList.toggle('hidden');
});
