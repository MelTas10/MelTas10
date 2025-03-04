document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector('.loader');
    const container = document.querySelector('.container');

    setTimeout(() => {
        loader.style.opacity = 0;
        setTimeout(() => {
            loader.style.display = 'none';
            container.style.display = 'block';
            container.style.animation = 'fadeIn 0.5s';
        }, 500);
    }, 2000);

    const infoButtons = document.querySelectorAll('.info-button');
    infoButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#7b1fa2';
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#4a148c';
        });
    });
});
