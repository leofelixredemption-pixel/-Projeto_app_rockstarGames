const slider = document.querySelectorAll('.card2');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currItem = 3 ;


function sliderShow(){

slider.forEach ( (card2 , i) => {

const distancia =i - currItem;
const contador = Math.abs(distancia);


card2.style.position = "absolute";
card2.style.left = "50%";
card2.style.top = "50%";
card2.style.transition = "0.5s ease";
card2.style.zIndex = 10-contador;
card2.style.opacity = contador >2 ?0:1;

card2.style.filter = contador ===0? "none" : "brightness(70%)";

card2.style.transform = `translate(calc(-50% + ${distancia * 160}px), -50%)

scale(${1-contador*0.2})

`;





});


}


sliderShow();


next.onclick = () => {
if (currItem < slider.length -1){
currItem++;
sliderShow();
}

};

prev.onclick = () => {
if (currItem >0 ) {

currItem --;
sliderShow();

}


}

