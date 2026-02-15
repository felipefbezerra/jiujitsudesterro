const menuBtn = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    const icon = menuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        const icon = menuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    });
});

const modal = document.getElementById('lightbox-modal');
const modalImg = document.getElementById('img-ampliada');
const captionText = document.getElementById('caption');
const closeModal = document.querySelector('.lightbox-close');

document.querySelectorAll('.foto-item img').forEach(imagem => {
    imagem.onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt; 
    }
});

closeModal.onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


const slides = document.querySelectorAll('.regra-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicatorsContainer = document.getElementById('indicators');
let currentSlide = 0;

slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
    
    indicatorsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(n) {

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (n + slides.length) % slides.length; 
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

if(prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });
}

let slideInterval = setInterval(() => {
    goToSlide(currentSlide + 1);
}, 5000);

const carouselContainer = document.querySelector('.carousel-container');
if(carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    carouselContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('btn-load-more');
    const inicialFotos = 8; 
    const fotosPorClique = 4; 
    
    const todasFotos = document.querySelectorAll('.foto-item');

    todasFotos.forEach((foto, index) => {
        if (index >= inicialFotos) {
            foto.classList.add('hidden');
        }
    });

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            const fotosEscondidas = document.querySelectorAll('.foto-item.hidden');
            
            for (let i = 0; i < fotosPorClique; i++) {
                if (fotosEscondidas[i]) {
                    fotosEscondidas[i].classList.remove('hidden');
                }
            }

            if (document.querySelectorAll('.foto-item.hidden').length === 0) {
                loadMoreBtn.parentElement.style.display = 'none';
            }
        });
    }
});