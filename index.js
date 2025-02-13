const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const mensajeAmor = document.querySelector('#mensajeAmor');
const corazonesContainer = document.querySelector('.corazones');
const musica = document.querySelector('#musica');

yesBtn.addEventListener('click', function () {
    document.querySelector('.contenedor').style.display = 'none';
    mensajeAmor.style.display = 'block';

    musica.play();
    musica.volume = 0.5;

    for (let i = 0; i < 20; i++) {
        let corazon = document.createElement('div');
        corazon.classList.add('corazon');
        corazon.innerHTML = '❤️';

        corazon.style.left = `calc(50% + ${Math.random() * 100 - 50}px)`;
        corazon.style.bottom = "-20px";
        corazon.style.animationDuration = Math.random() * 2 + 2 + 's';

        corazonesContainer.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 10000);
    }
});

noBtn.addEventListener('mouseover', function () {
    const randomX = Math.random() * 70 + 10;
    const randomY = Math.random() * 70 + 10;
    noBtn.style.position = "absolute";
    noBtn.style.top = `${randomY}%`;
    noBtn.style.left = `${randomX}%`;
});
