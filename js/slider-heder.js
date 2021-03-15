
let buttonRight = document.querySelector(".arrow-right"); // Берём кнопки
let buttonLeft = document.querySelector(".arrow-left");

let sliderItem = document.querySelectorAll(".slider-item"); // Берём слайды
let sliderIndicator = document.querySelectorAll(".slider-indicator-item"); // Берем индикаторы

let i = 0;
let j = 0;

//let setIndex = up => i = (i + up + sliderItem.length) % sliderItem.length;

let setIndex = function(up){ 

    return i = (i + up + sliderItem.length) % sliderItem.length;
};

let setIndicator = function(up){

    return j = (j + up + sliderIndicator.length) % sliderIndicator.length;
};

buttonRight.addEventListener("click", function () { // Функция нажатия на кнопку вправо

    sliderItem[i].classList.remove("block");
    sliderIndicator[j].classList.remove("active");

    setIndex(1);
    setIndicator(1);

    sliderItem[i].classList.add("block");
    sliderIndicator[j].classList.add("active");

});

buttonLeft.addEventListener("click", function () { // Функция нажатия на кнопку влево

    sliderItem[i].classList.remove("block");
    sliderIndicator[j].classList.remove("active");

    setIndex(-1);
    setIndicator(-1);

    sliderItem[i].classList.add("block");
    sliderIndicator[j].classList.add("active");
});




/*function autoSlider() { // функция автопрокрутки слайдера

setTimeout(buttonRight, 5000);
}

autoSlider();
*/