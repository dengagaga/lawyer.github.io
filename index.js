const sectionSixBtn = document.querySelector('.section_six-list-btn')
const sectionSixRightTitle4 = document.querySelector('.section_six-right-title-4')
const sectionSixRightTitle3 = document.querySelector('.section_six-right-title-3')
const sectionSixItem2 = document.querySelector('.section_six-item-2')
const sectionSixItem = document.querySelectorAll('.section_six-item')
// const section_six-right-title-3-none = document.querySelector('.section_six-right-title-3-none')

// sectionSixBtn.addEventListener('click', () => {
//     sectionSixRightTitle3.classList.toggle('section_six-right-title-3-none')
//     sectionSixRightTitle4.classList.toggle('section_six-right-title-3-none')
//     sectionSixItem2.classList.toggle('section_six-right-title-3-none')
//     sectionSixItem.forEach(item => {
//         item.classList.toggle('section_six-right-title-3-none')
//     })
// })


document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');
    let currentNumber = 0;
    const targetNumber = 500;
    const duration = 2000; // Время анимации в миллисекундах
    const startTime = performance.now();

    function animateCounter(timestamp) {
        // Рассчитываем, сколько времени прошло с начала анимации
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1); // Нормализованное значение (от 0 до 1)
        
        // Интерполяция числа
        currentNumber = Math.floor(progress * targetNumber);
        counterElement.textContent = currentNumber + '+';

        // Продолжаем анимацию, если еще не достигли целевого числа
        if (progress < 1) {
            requestAnimationFrame(animateCounter);
        }
    }

    requestAnimationFrame(animateCounter);
});

document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter-2');
    let currentNumber = 0;
    const targetNumber = 15;
    const duration = 2000; // Время анимации в миллисекундах
    const startTime = performance.now();

    function animateCounter(timestamp) {
        // Рассчитываем, сколько времени прошло с начала анимации
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1); // Нормализованное значение (от 0 до 1)
        
        // Интерполяция числа
        currentNumber = Math.floor(progress * targetNumber);
        counterElement.textContent = currentNumber + ' лет';

        // Продолжаем анимацию, если еще не достигли целевого числа
        if (progress < 1) {
            requestAnimationFrame(animateCounter);
        }
    }

    requestAnimationFrame(animateCounter);
});
document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter-3');
    let currentNumber = 0;
    const targetNumber = 450;
    const duration = 1950; // Время анимации в миллисекундах
    const startTime = performance.now();

    function animateCounter(timestamp) {
        // Рассчитываем, сколько времени прошло с начала анимации
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1); // Нормализованное значение (от 0 до 1)
        
        // Интерполяция числа
        currentNumber = Math.floor(progress * targetNumber);
        counterElement.textContent = currentNumber + '+';

        // Продолжаем анимацию, если еще не достигли целевого числа
        if (progress < 1) {
            requestAnimationFrame(animateCounter);
        }
    }

    requestAnimationFrame(animateCounter);
});

const burger = document.querySelector('.burger')
const navLinkMobil = document.querySelectorAll('.nav_link-mobil')
const navLinksMobil  = document.querySelector('.nav_links-mobil ')

burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active')
    navLinksMobil.classList.toggle('nav_links-mobil--none')
    
})
navLinkMobil.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.toggle('burger--active')
        navLinksMobil.classList.toggle('nav_links-mobil--none')
    })
})