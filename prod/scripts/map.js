let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [59.935139, 30.311747],
        zoom: 12,
        controls: []
    });

    const coords = [
        [59.927667, 30.320548],
        [59.956967, 30.318150],
        [59.942849, 30.279388],
        [59.914592, 30.350911]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "./img/icons/marker.svg",
        iconImageSize: [46, 57],
        iconImageOffset: [-35, -35]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);