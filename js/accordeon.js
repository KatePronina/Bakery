(function () {

var titles = document.querySelectorAll('.list-faq__name');

var onTitlesClick = function (evt) {
	evt.target.parentElement.classList.toggle('list-faq__item--active');
}

for (var i = 0; i < titles.length; i++) {
	titles[i].addEventListener('click', onTitlesClick);
	titles[i].addEventListener('keydown', function (evt) { 
		if (evt.keyCode === 13) { 
			onTitlesClick(evt); 
		} 
	});
}


})();