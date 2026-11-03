function  clicar(){
document.getElementById('art1').style.display = "block";
}


const slider = document.querySelectorAll('.card');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currItem = 3;

function sliderShow() {
    slider.forEach((card, i) => {
        const distancia = i - currItem;
        const contador = Math.abs(distancia);

        card.style.position = "absolute";
        card.style.left = "50%";
        card.style.top = "50%";
        card.style.transition = "0.5s ease";
        card.style.zIndex = 10 - contador;
        card.style.opacity = contador > 2 ? 0 : 1;
        card.style.filter = contador === 0 ? "none" : "brightness(70%)";

        card.style.transform = `
            translate(calc(-50% + ${distancia * 160}px), -50%)
            scale(${1 - contador * 0.2})
        `;
    });
}

sliderShow();

next.onclick = () => {
    if (currItem < slider.length - 1) {
        currItem++;
        sliderShow();
    }
};

prev.onclick = () => {
    if (currItem > 0) {
        currItem--;
        sliderShow();
    }
};