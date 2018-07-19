(function () {

var navLinks = document.querySelectorAll('.site-list__link');
var menuLink = document.querySelector('.menu__link');
var sliderButtons = document.querySelectorAll('.content__order-btn');

var scrollTo = function (evt) {
	evt.preventDefault();
	var id = evt.target.getAttribute('href');//id элемента, к которому скроллим
	var elem = document.querySelector(id);//элемент, к которому скроллим

	window.scroll({
		behavior: 'smooth',
		left: 0,
		top: elem.offsetTop
	});
}

for (var i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener('click', scrollTo);
}

for (var i = 0; i < sliderButtons.length; i++) {
	sliderButtons[i].addEventListener('click', scrollTo)
}

menuLink.addEventListener('click', scrollTo);

})();