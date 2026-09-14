const compares = document.querySelectorAll('.before-after__compare');

compares.forEach(compare => {
  const before = compare.querySelector('.before-after__before');
  const drag = compare.querySelector('.before-after__drag');

  if (!before || !drag) return;

  let active = false;

  const startPosition = 10;

  before.style.clipPath = `inset(0 ${100 - startPosition}% 0 0)`;
  drag.style.left = `${startPosition}%`;

  const move = x => {
    const rect = compare.getBoundingClientRect();

    let position = ((x - rect.left) / rect.width) * 100;

    position = Math.max(0, Math.min(100, position));

    before.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
    drag.style.left = `${position}%`;
  };

  drag.addEventListener('pointerdown', e => {
    active = true;
    drag.setPointerCapture(e.pointerId);
  });

  drag.addEventListener('pointermove', e => {
    if (!active) return;

    move(e.clientX);
  });

  drag.addEventListener('pointerup', () => {
    active = false;
  });

  drag.addEventListener('pointercancel', () => {
    active = false;
  });
});

const resultsSlider = document.querySelector('.results__slider');

if (resultsSlider) {
  new Swiper(resultsSlider, {
  slidesPerView: 'auto',
  spaceBetween: 20,
    noSwiping: true,
    noSwipingClass: 'before-after__compare',

    navigation: {
      nextEl: '.results__next',
      prevEl: '.results__prev',
    },

    pagination: {
      el: '.results__pagination',
      clickable: true,
    },

    breakpoints: {
      768: {
          spaceBetween: 30,
      },
    },
  });
}