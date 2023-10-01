const ul = document.querySelector('.black-box ul');
const liList = document.querySelectorAll('.black-box ul li');

let currentIndex = 0;

function nextSlide() {
    ul.style.transform = `translateX(-${currentIndex * 100}%)`;
    currentIndex = (currentIndex + 1) % liList.length;
}

// Cambia el slide cada 3 segundos (ajusta según tus preferencias)
setInterval(nextSlide, 3000);

// Puedes ajustar el tiempo de pausa en cada elemento aquí (en milisegundos)
const pausa = 3000; // 1 segundo

function pausarCarrusel() {
    clearInterval(interval);
    setTimeout(() => {
        interval = setInterval(nextSlide, 3000);
    }, pausa);
}

let interval = setInterval(pausarCarrusel, 3000 + pausa); // 3 segundos de cambio + 1 segundo de pausa
