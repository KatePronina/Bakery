(function () {

var titles = document.querySelectorAll('.list-faq__name');

var onTitlesClick = function (evt) {
	evt.target.parentElement.classList.toggle('list-faq__item--active');
}

for (var i = 0; i < titles.length; i++) {
	titles[i].addEventListener('click', onTitlesClick);
}


})();
(function () {

ymaps.ready(init);
var myMap,
	myPlacemark;

function init(){
	myMap = new ymaps.Map("contacts", {
    	center: [59.9011,30.4219],
    	zoom: 11
    });

    myPlacemark = new ymaps.Placemark([59.8980,30.4163], {
        hintContent: 'г. Санкт-Петербург, Большой Смоленский проспект, 10',
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pin.png',
        iconImageSize: [42, 59]
    });

    myMap.geoObjects.add(myPlacemark);
}

})();
(function () {

var navLinks = document.querySelectorAll('.site-list__link');
var menuLink = document.querySelector('.menu__link');
var sliderButtons = document.querySelectorAll('.content__order-btn');

var scrollTo = function (evt) {
	evt.preventDefault();
	var id = evt.target.getAttribute('href').slice(1);//id элемента, к которому скроллим
	var elem = document.querySelector('#' + id);//элемент, к которому скроллим

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
(function () {

var buttonNext = document.querySelector('#next');
var buttonPrev = document.querySelector('#prev');
var tape = document.querySelector('.content__items'); //лента
var controls = document.querySelector('.cupcake-slider__controls');

var translate = 0;

var onButtonClick = function (direction) {
	if (direction === 'next' || direction === undefined) {
		translate -= 100;
	} else if (direction === 'prev') {
		translate += 100;
	}

	if (translate > 0 || translate < -500) {
		translate = 0;
	}

	document.querySelector('.cupcake-slider__controls-item--active').classList.remove('cupcake-slider__controls-item--active');
	document.querySelector('[data-id="' + translate + '"]').classList.add('cupcake-slider__controls-item--active');

	tape.style.transform = 'translateX(' + translate + '%)';
}

buttonNext.addEventListener('click', function () {
	onButtonClick('next');
});

buttonPrev.addEventListener('click', function () {
	onButtonClick('prev');
});


var onControlClick = function (evt) {
	if (evt.target.classList.contains('cupcake-slider__controls-item')) {
		evt.preventDefault();
		document.querySelector('.cupcake-slider__controls-item--active').classList.remove('cupcake-slider__controls-item--active');

		evt.target.classList.add('cupcake-slider__controls-item--active');
		translate = +evt.target.dataset.id;
		tape.style.transform = 'translateX(' + translate + '%)';
	}
}

controls.addEventListener('click', onControlClick);

setInterval(onButtonClick, 5000);

})();
(function () {

var tabsHeaders = document.querySelectorAll('.members__item');
var tabsBody = document.querySelectorAll('.member-description');

var onTabsHeadersClick = function (evt) {
	var dataTab = +(evt.currentTarget.getAttribute('data-tab'));
	for (var i = 0; i < tabsHeaders.length; i++) {
		if (dataTab === i) {
			document.querySelector('.members__item--active').classList.remove('members__item--active');
			tabsHeaders[i].classList.add('members__item--active');

			document.querySelector('.member-description--active').classList.remove('member-description--active');
			tabsBody[i].classList.add('member-description--active');
		}
	}
}

for (var i = 0; i < tabsHeaders.length; i++) {
	tabsHeaders[i].addEventListener('click', onTabsHeadersClick);
	tabsHeaders[i].addEventListener('keydown', function (evt) { 
		if (evt.keyCode === 13) { 
			onTabsHeadersClick(evt); 
		} 
	});
}



})();