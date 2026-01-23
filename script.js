document.addEventListener("DOMContentLoaded", function() {

    // Agora selecionamos apenas o botão e o menu que existe (direita)
    const menuToggle = document.querySelector('#mobile-menu');
    const menuDireita = document.querySelector('#menu-direita');

    if (menuToggle && menuDireita) {
        menuToggle.addEventListener('click', function() {
            // Ativa/desativa a classe que mostra o menu
            menuDireita.classList.toggle('active');
        });

        // Fecha o menu ao clicar em qualquer link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuDireita.classList.remove('active');
            });
        });
    } else {
        console.error("IDs não encontrados no HTML.");
    }
});
