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