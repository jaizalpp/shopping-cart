let nextButton = document.querySelector(".arrows .next");
let prevButton = document.querySelector(".arrows .prev");
let backButton = document.querySelector(".arrows .back");
let seeMoreButton = document.querySelectorAll(".seeMore");
let carousel = document.querySelector(".carousel");
let listHtml = document.querySelector('.carousel .list');

nextButton.onclick = function() {
    showSlider('next');
};

prevButton.onclick = function() {
    showSlider('prev');
};

let unAcceptClick;
const showSlider = (type) => {
    nextButton.computedStyleMap.pointerEvents = 'none';
    prevButton.computedStyleMap.pointerEvents = 'none';
    carousel.classList.remove('prev', 'next');
    let items = document.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        listHtml.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        let positionLast = items.length - 1;
        listHtml.prepend(items[positionLast]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() =>{
        nextButton.computedStyleMap.pointerEvents = 'auto';
    prevButton.computedStyleMap.pointerEvents = 'auto';
    },2000)
}

seeMoreButton.forEach(button => {
    button.onclick = function(){
        carousel.classList.add('showDetail')
    }
})
backButton.onclick = function(){
    carousel.classList.remove('showDetail')
}
