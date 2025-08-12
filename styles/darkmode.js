document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Check localStorage or OS preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedTheme = localStorage.getItem('theme');

  // Apply initial theme
  const darkModeOn = storedTheme === 'dark' || (!storedTheme && prefersDark);
  if (darkModeOn) {
    body.classList.add('dark-mode');
    toggle.textContent = '🌞';
  } else {
    toggle.textContent = '🌙';
  }

  // Toggle on click
  toggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    toggle.textContent = isDark ? '🌞' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
