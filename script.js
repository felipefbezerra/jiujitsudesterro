// Seleciona os elementos do DOM
const menuBtn = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

// Função para abrir/fechar o menu e trocar o ícone
menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Seleciona o ícone dentro do botão
    const icon = menuBtn.querySelector('i');
    
    // Alterna entre o ícone de barras e o de fechar (X)
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

// Função para fechar o menu automaticamente ao clicar em um link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        // Remove a classe active para esconder o menu
        navMenu.classList.remove('active');
        
        // Garante que o ícone volte a ser o de "barras"
        const icon = menuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    });
});

// Lógica do Lightbox
const modal = document.getElementById('lightbox-modal');
const modalImg = document.getElementById('img-ampliada');
const captionText = document.getElementById('caption');
const closeModal = document.querySelector('.lightbox-close');

// Seleciona todas as imagens da galeria
document.querySelectorAll('.foto-item img').forEach(imagem => {
    imagem.onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt; // Usa o 'alt' da imagem como legenda
    }
});

// Fecha a modal ao clicar no X
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Fecha a modal ao clicar fora da imagem
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}