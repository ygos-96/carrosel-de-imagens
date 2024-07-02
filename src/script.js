document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide-carrossel');
    const nextBtn = document.getElementById('proximoBtn');
    const prevBtn = document.getElementById('anteriorBtn');
    const indicatorsContainer = document.getElementById('indicadoresCarrossel');
    let currentIndex = 0;

    const updateSlides = () => {
        const offset = -currentIndex * 100;
        document.querySelector('.slides-carrossel').style.transform = `translateX(${offset}%)`;

        document.querySelectorAll('.indicador-carrossel').forEach((indicator, idx) => {
            indicator.classList.toggle('ativo', idx === currentIndex);
        });
    };

    const createIndicators = () => {
        slides.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicador-carrossel');
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateSlides();
            });
            indicatorsContainer.appendChild(indicator);
        });
    };

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlides();
    });

    createIndicators();
    updateSlides();
});