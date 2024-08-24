
const modal = document.querySelector('.modal');
const modalContent = modal.querySelector('.modal-content img');
const modalClose = document.querySelector('.modal-close');
const modalDescription = document.querySelector('.modal-description');
const modalLink = document.querySelector('.modal-link');


function openModal(imgSrc, description, link) {
    modal.style.display = 'flex';
    modal.classList.add('show');
    modalContent.src = imgSrc;
    modalDescription.textContent = description;
    modalLink.href = link;
}


function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 400); 
}


document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const img = card.querySelector('img');
        const description = card.getAttribute('data-description');
        const link = card.getAttribute('data-link');
        openModal(img.src, description, link);
    });
});


modalClose.addEventListener('click', closeModal);


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');

    function revealSection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }

    const observer = new IntersectionObserver(revealSection, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const background = document.querySelector('#bem-vindo .backgroundimagem img');
    background.style.transform = `translateY(${scrolled * 0.5}px)`;
});

document.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const background = document.querySelector('#bem-vindo .backgroundimagem img');
    const welcomeText = document.querySelector('#bem-vindo h1');
    
    
    
    background.style.transform = `translateY(${scrolled * 0.5}px)`;
    
    
    if (scrolled > 100) { 
        welcomeText.classList.add('hidden');
    } else {
        welcomeText.classList.remove('hidden');
    }
    if (scrolled < 100) { 
        welcomeText.classList.add('show');
    } else {
        welcomeText.classList.remove('show');
    }

});

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const indicator = document.querySelector('.scroll-indicator');
    
    
    if (scrollY > 350) {
        indicator.classList.add('hide');
    } else {
        indicator.classList.remove('hide');
    }
    if (scrollY < 350) {
        indicator.classList.add('show');
    } else {
        indicator.classList.remove('show');
    }
    

})

