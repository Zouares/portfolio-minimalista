const slides = document.querySelectorAll('.slide-item');
const dotsContainer = document.querySelector('.nav-dots');
let currentIndex = 0;

function updateSlidePosition() {
    const slideTrack = document.querySelector('.slide-track');
    slideTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.nav-dots .dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlidePosition();
        });
        dotsContainer.appendChild(dot);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
}

document.querySelector('.nav-button.next').addEventListener('click', nextSlide);
document.querySelector('.nav-button.prev').addEventListener('click', prevSlide);

createDots();
updateSlidePosition();


setInterval(nextSlide, 20000); 


const modal = document.querySelector('.modal');
const modalContent = modal.querySelector('.modal-content img');
const modalClose = document.querySelector('.modal-close');

document.querySelectorAll('.slide-item img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalContent.src = img.src;
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        Email.send({
            SecureToken: "F45FD676AB9A561A194D6A2EAA596E6089FB", // Substitua pelo seu SecureToken do SMTPJS
            To: 'gabrielssoaress02@gmail.com', 
            From: email,
            Subject: `Nova mensagem de ${name}`,
            Body: `Nome: ${name}<br>Email: ${email}<br>Mensagem: ${message}`
        }).then(
            message => alert("Mensagem enviada com sucesso!")
        ).catch(
            error => alert("Erro ao enviar a mensagem. Tente novamente.")
        );
    });
});