// Aguarda o conteúdo da página carregar completamente antes de executar os scripts
document.addEventListener("DOMContentLoaded", function() {

    // Inicializa a biblioteca de animações (AOS)
    AOS.init({
        duration: 800,       // Duração da animação
        once: true,          // Anima só uma vez
        offset: 50,          // Gatilho da animação um pouco antes
        easing: 'ease-in-out', // Deixa a animação mais suave
    });

});