// функция показать поиск
document.querySelector('.main-search').onclick = function() {
	
	let searchContent = document.querySelector('.search-content');
	searchContent.style.display = 'block'; // Открываем поле ввода

	document.querySelector('.close-search').style.display = 'block'; // Открываем кнопку закрытия поиска

	document.querySelector('.close-search').onclick = function(){ // Закрываем поле ввода
		if (searchContent.style.display = 'block') {
			searchContent.style.display = 'none';
			document.querySelector('.close-search').style.display = 'none';
		}
	}
	$(".close-search").click(function(){ // Убираем подсветку при нажатии
		$('body').removeHighlight();
	})
};

// функция поиска на странице
$(document).ready(function(){

	$(".search-button").click(function(){ // Обрабатка нажатия на кнопку

		// Переменная для вводимого текста
		let text = "";
 
		// Убираем всю подсветку из прошлого поиска
		$('body').removeHighlight();

		// Берем текст из поля ввода и кладем в переменную text
		text = $('.search-text').attr('value');

		// Если строка поиска пустая
		if ($('.search-text').val() == ""){

			//То ничего не происходит ;)

			return false;

		} else {
			//Подсвечиваем все найденные совпадения
			$('body').highlight(text);

			return false;

    	}
	});      
});

