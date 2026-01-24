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

document.addEventListener("DOMContentLoaded", function() {

    // Verifica se a div da constelação existe na página
    if (document.getElementById('particles-js')) {

        // Configuração da Constelação
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80, // Quantidade de estrelas
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": {
                    "value": "#ffffff" // Cor das estrelas (Branco)
                },
                "shape": {
                    "type": "circle", // Formato redondo
                },
                "opacity": {
                    "value": 0.5,
                    "random": false
                },
                "size": {
                    "value": 3, // Tamanho das estrelas
                    "random": true
                },
                "line_linked": {
                    "enable": true,       // Habilita as linhas (Constelação)
                    "distance": 150,      // Distância máxima para conectar
                    "color": "#00f2ff",   // Cor da linha (Seu Azul Neon)
                    "opacity": 0.4,       // Transparência da linha
                    "width": 1            // Espessura da linha
                },
                "move": {
                    "enable": true,
                    "speed": 2, // Velocidade do movimento
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab" // Ao passar o mouse, as linhas se conectam ao cursor
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push" // Ao clicar, cria mais estrelas
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": { "opacity": 1 }
                    }
                }
            },
            "retina_detect": true
        });
    }
});
