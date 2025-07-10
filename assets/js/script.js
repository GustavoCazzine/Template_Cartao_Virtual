// Aguarda o conteúdo da página carregar completamente antes de executar os scripts
document.addEventListener("DOMContentLoaded", function() {

    // 1. Inicializa a biblioteca de animações (AOS)
    AOS.init({
        duration: 800, // Duração da animação
        once: true,    // Anima só uma vez
        offset: 50,    // Começa a animar um pouco antes do elemento aparecer na tela
    });

    // 2. Lógica para o botão "Salvar Contato"
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const contactButtonText = document.getElementById('save-contact-text');
    if (contactButtonText) {
        contactButtonText.textContent = isMobile ? 'Salvar na Agenda' : 'Baixar Contato (VCF)';
    }

    // 3. Lógica para o botão "Compartilhar"
    const shareButton = document.getElementById('share-btn');
    if (shareButton) {
        shareButton.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    text: `Conheça o cartão de visitas de ${document.querySelector('.profile-name').textContent}!`,
                    url: window.location.href
                }).catch(console.error);
            } else {
                alert('A função de compartilhar não é suportada neste navegador. Você pode copiar o link da página.');
            }
        });
    }

});