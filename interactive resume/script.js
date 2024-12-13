document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Pop-up details
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const closePopup = document.querySelector('.close-popup');

    function showPopup(text) {
        popupText.textContent = text;
        popup.style.display = 'block';
    }

    function hidePopup() {
        popup.style.display = 'none';
    }

    document.querySelectorAll('.experience-item, .skills-list li').forEach(item => {
        item.addEventListener('click', () => {
            showPopup(item.getAttribute('data-info'));
        });
    });

    closePopup.addEventListener('click', hidePopup);
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            hidePopup();
        }
    });

    // Animation on scroll
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    function checkScroll() {
        animateOnScrollElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                el.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on load
});

