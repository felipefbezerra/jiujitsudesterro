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