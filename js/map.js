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