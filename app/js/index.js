/* fetch header & footer */
fetch('./app/assets/utils/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  })
  .catch(error => console.error('Error al cargar el archivo HTML:', error));
fetch('./app/assets/utils/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  })
  .catch(error => console.error('Error al cargar el archivo HTML:', error));

/* Theme mode */
function changeTheme(event) {
  const theme = event.target.value;
  localStorage.setItem('theme', theme);

  if (theme === 'dark') {
    document.documentElement.classList.remove('light', 'system');
    document.documentElement.classList.add('dark');
  } else if (theme === 'light') {
    document.documentElement.classList.remove('dark', 'system');
    document.documentElement.classList.add('light');
  } else {
    document.documentElement.classList.remove('dark', 'light');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'system';
  document.getElementById('theme-select').value = savedTheme;
  changeTheme({ target: { value: savedTheme } });
});
