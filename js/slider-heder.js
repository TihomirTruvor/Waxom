
document.querySelector(".arrow-right").onclick = buttonRight; // Берём кнопки
let buttonLeft = document.querySelector(".arrow-left");

let sliderItem = document.querySelectorAll(".slider-item"); // Берём слайды

let i = 0; // Объявляем переменную i 

//let setIndex = up => i = (i + up + sliderItem.length) % sliderItem.length;

let setIndex = function(up){ 

    return i = (i + up + sliderItem.length) % sliderItem.length;}

 function buttonRight() { // Функция нажатия на кнопку вправо

    sliderItem[i].classList.remove("block");

    setIndex(1);

    sliderItem[i].classList.add("block")

    autoSlider(); // вызываем автопрокрутку повторно для зацикливания слайдера

};


buttonLeft.addEventListener("click", function () { // Функция нажатия на кнопку влево

    sliderItem[i].classList.remove("block");

    setIndex(-1);

    sliderItem[i].classList.add("block")
});

function autoSlider() { // функция автопрокрутки слайдера

setTimeout(buttonRight, 5000);
}

autoSlider();







 
// Функция нажатия на кнопку вправо
/*buttonRight.addEventListener("click", function () {

    ++i;
    
    if (i >= sliderItem.length) { // Условие если переменная i больше или равна количеству слайдов
        
        sliderItem[i-1].classList.remove("block"); // Удаляем класс block предыдущему слайду
        
        i = 0; // Присваиваем переменной i ноль
        
        sliderItem[i].classList.add("block"); // Добавляем класс block следующему слайду
    } else { 
        
        sliderItem[i-1].classList.remove("block"); // Удаляем класс block предыдущему слайду
        
        sliderItem[i].classList.add("block"); // Добавляем класс block следующему слайду
    }
})

// Функция нажатия на кнопку влево
buttonLeft.addEventListener("click", function () {

    ++i;
    
    if (i >= sliderItem.length) { // Условие если переменная i больше или равна количеству слайдов
        
        
        sliderItem[i].classList.add("block"); // Добавляем класс block следующему слайду
        i = 0; // Присваиваем переменной i ноль
        sliderItem[i-1].classList.remove("block"); // Удаляем класс block предыдущему слайду

    } else { 
        sliderItem[i].classList.add("block"); // Добавляем класс block следующему слайду
        sliderItem[i-1].classList.remove("block"); // Удаляем класс block предыдущему слайду
        

    }
})*/