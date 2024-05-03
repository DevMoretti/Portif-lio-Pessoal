document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    if (menuHamburguer) {
        menuHamburguer.addEventListener('click', function() {
            const nav = document.querySelector('.nav-responsive');
            this.classList.toggle('change');

            if (this.classList.contains('change')) {
                nav.style.display = 'block';
            } else {
                nav.style.display = 'none';
            }
        });
    }
});