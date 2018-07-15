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
}


})();