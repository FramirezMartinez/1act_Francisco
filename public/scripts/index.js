window.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const nombre = urlParams.get('nombre');
    const email = urlParams.get('email');
  
    document.getElementById('nombre').textContent = nombre;
    document.getElementById('email').textContent = email;
  });