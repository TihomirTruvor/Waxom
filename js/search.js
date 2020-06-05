document.getElementById('main-search').onclick = function() { // функция скрыть и показать поиск
	
	let searchText = document.getElementById('search-text');
	searchText.style.display = 'block' // Открываем поле ввода

	let searchButton = document.getElementById('search-button');
	searchButton.style.display = 'block' // Открываем кнопку поиска

	let searchButtonHead = document.getElementById('search-button-head');
	searchButtonHead.style.background = 'none'; // Скрываем кнопку в основном меню
};

$(document).ready(function(){ // функция поиска на странице

  $("#search-button").click(function(){ // Обрабатка нажатия на кнопку

    // Очищаем переменную, в которой будет поисковый запрос
    var text = "";
 
    // Убираем всю подсветку из прошлого поиска
    $('body').removeHighlight();

    // Берем текст из поля ввода и кладем в переменную text
    text = $('#search-text').attr('value');

    // Если строка поиска пустая
    if ($('#search-text').val() == ""){

      //То ничего не происходит ;)

      return false;

     // Иначе
    } else {

      //Подсвечиваем все найденные совпадения
      $('body').highlight(text);

      return false;

    }
  });      
});

