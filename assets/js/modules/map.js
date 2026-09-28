document.addEventListener('DOMContentLoaded', function () {
  const mapElement = document.getElementById('map');
  const mapContainer = document.querySelector('.map');

  if (!mapElement || !mapContainer) return;

  ymaps.ready(function () {
    const myMap = new ymaps.Map('map', {
      center: [55.678913, 37.546616],
      zoom: 17,
      controls: []
    });

    const myPlacemark = new ymaps.Placemark(
      [55.678913, 37.546616],
      {},
      {
        iconLayout: 'default#image',
      iconImageHref: '/wp-content/themes/moscowdentalclinic_theme/assets/img/security-pin.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [-15, -44]
      }
    );

    myMap.geoObjects.add(myPlacemark);
  });

  mapElement.style.pointerEvents = 'none';

  const styleElement = document.createElement('style');

  styleElement.innerHTML = `
    [class*="ground-pane"] {
      filter: grayscale(.6) sepia(.1) saturate(.7) brightness(1.05);
    }
  `;

  document.head.appendChild(styleElement);

  const mapTitle = document.createElement('div');

  mapTitle.className = 'map__title';
  mapTitle.textContent = 'Для активации карты нажмите на нее';

  mapContainer.appendChild(mapTitle);

  mapContainer.onclick = function () {
    mapElement.style.pointerEvents = 'auto';

    mapTitle.remove();
    styleElement.remove();
  };

  mapContainer.onmousemove = function (event) {
    mapTitle.style.display = 'block';
    mapTitle.style.top = `${event.clientY - this.getBoundingClientRect().top + 20}px`;
    mapTitle.style.left = `${event.clientX - this.getBoundingClientRect().left + 20}px`;
  };

  mapContainer.onmouseleave = function () {
    mapTitle.style.display = 'none';
  };
});