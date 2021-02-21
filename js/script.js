$(function () {	

	var $popup = $('.js-popup');

	//popup-close
	var hideContainer = function () {
		$popup.closest(".content").find('.js-popup-box').removeClass('is-active');
	};

	//popup
	$('[data-popup-link]').on('click', function (e) {
		var $ddLink = $(e.currentTarget).data('popup-link');
		var $ddBox = $('[data-popup-box= "'+ $ddLink +'"]');
		e.stopPropagation();
		$ddBox.addClass('is-active');
	});

	//popup-close
  $('body').on('click', '.js-popup-close-btn', function () {
    hideContainer();
  });

	$('body').on('click', function (e) {
		if ($(e.target).closest($popup).length == 0 ) {
			hideContainer();
		}
	});
});

let menu_button = document.querySelector('.header__burger');
let menu_itself = document.querySelector('.header__menu');
let menu_list = document.querySelector('.header__list');
let body = document.querySelector('body');

menu_button.onclick = function() {
  menu_button.classList.toggle('active');
  menu_itself.classList.toggle('active');
};

menu_list.onclick = function() {
  menu_button.classList.toggle('active');
  menu_itself.classList.toggle('active');
};

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });;
/*с подключением библиотеки jquery:

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// закрытие меню при клике на ссылку
$(document).ready(function() {
    $('.header__list').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});*/


