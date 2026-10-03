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



const pageServicesSlider = document.querySelector('[data-services-slider]');

if (pageServicesSlider) {
  new Swiper(pageServicesSlider, {
    effect: 'creative',
    speed: 1300,
    grabCursor: true,
        loop: true,

creativeEffect: {
  prev: {
    translate: ['-35%', '25%', 0],
    opacity: 0,
  },

  next: {
    translate: ['35%', '-25%', 0],
    opacity: 0,
  },
},

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.services-hero__pagination',
      clickable: true,
    },
  });
}


const reviewsSlider = document.querySelector('.reviews__slider');

if (reviewsSlider) {
  const mobile = window.matchMedia('(max-width: 768px)');
  let reviewsSwiper = null;

  const initReviewsSlider = () => {
    if (mobile.matches && !reviewsSwiper) {
      reviewsSwiper = new Swiper(reviewsSlider, {
        slidesPerView: 1.1,
        spaceBetween: 16,
        speed: 700,
        pagination: {
          el: '.reviews__pagination',
          clickable: true,
        },
        navigation: {
          prevEl: '.reviews__prev',
          nextEl: '.reviews__next',
        },
      });
    }

    if (!mobile.matches && reviewsSwiper) {
      reviewsSwiper.destroy(true, true);
      reviewsSwiper = null;
    }
  };

  initReviewsSlider();
  mobile.addEventListener('change', initReviewsSlider);
}