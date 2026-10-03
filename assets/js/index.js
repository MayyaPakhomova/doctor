function initAccordion(accordionSelector,itemClass,contentClass) {
  document.querySelectorAll(accordionSelector).forEach(container => {
    const items = container.querySelectorAll(itemClass);

    items.forEach(item => {
      const content = item.querySelector(contentClass);

      item.addEventListener('click',function (e) {
        if (e.target.closest(contentClass)) return;

        const isOpen = item.classList.contains('is-open');

        items.forEach(other => {
          if (other !== item) {
            other.classList.remove('is-open');
            const otherContent = other.querySelector(contentClass);
            otherContent.style.maxHeight = "0";
          }
        });




        if (isOpen) {
          content.style.maxHeight = content.scrollHeight + "px";
          setTimeout(() => {
            content.style.maxHeight = "0";
          },10);
          item.classList.remove('is-open');
        } else {
          item.classList.add('is-open');
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });

      if (item.classList.contains('is-open')) {
        setTimeout(() => {
          content.style.maxHeight = content.scrollHeight + "px";
        },100);
      } else {
        content.style.maxHeight = "0";
      }
    });
  });
}



// Инициализация
document.addEventListener('DOMContentLoaded',function () {
  // FAQ
  initAccordion('.faq-accordion','.faq-accordion__item','.faq-accordion__content');
});

document.addEventListener('DOMContentLoaded', function () {
  /* -------------------------
     1. Типографика .text-format
     Заменяет пробелы после коротких слов на неразрывные,
     фиксит инициалы и кавычки
  -------------------------- */
  function processNode(node) {
    if (node.nodeType === 3) {
      let text = node.textContent;
      if (!text.trim()) return;
      text = text.replace(/(\s|^)([А-Яа-яЁё]{1,2})\s+([А-Яа-яЁё]{1,2})(\s|$)/g, '$1$2\u00A0$3\u00A0');
      text = text.replace(/(\s|^)([А-Яа-яЁё]{1,2})\s/g, '$1$2\u00A0');
      text = text.replace(/([А-ЯЁ])\.\s+([А-ЯЁ])\./g, '$1.\u00A0$2.').replace(/([А-ЯЁ])\.\s+([А-ЯЁ][а-яё]+)/g, '$1.\u00A0$2');
      text = text.replace(/"([^"]+)"/g, '«$1»');
      node.textContent = text;
    } else if (node.nodeType === 1) {
      node.childNodes.forEach(processNode);
    }
  }
  document.querySelectorAll('.text-format').forEach((el) => processNode(el));
  /* -------------------------
     1. Типографика .text-clean
     Удаление точек
       -------------------------- */
  document.querySelectorAll('.text-clean').forEach((item) => {
  const walker = document.createTreeWalker(item, NodeFilter.SHOW_TEXT);
  const nodes = [];

  while (walker.nextNode()) {
    if (walker.currentNode.textContent.trim()) {
      nodes.push(walker.currentNode);
    }
  }

  const lastNode = nodes.at(-1);

  if (lastNode) {
    lastNode.textContent = lastNode.textContent.replace(/\.(\s*)$/, '$1');
  }
});

  /* -------------------------
    Кнопка "наверх"
  -------------------------- */
  function initBackToTop() {
    const backTopButton = document.querySelector('.back-top');
    if (!backTopButton) {
      return;
    }
    const toggleButtonState = () => {
      const isVisible = window.pageYOffset > 200;
      backTopButton.classList.toggle('active', isVisible);
    };
    window.addEventListener('scroll', toggleButtonState);
    backTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    toggleButtonState();
  }
    initBackToTop();

    const doctor = document.querySelector('.hero__doctor');
  const visual = document.querySelector('.hero__visual');
  if (doctor && visual) {
    const setDoctorWidth = () => {
      const doctorWidth = doctor.getBoundingClientRect().width;
      visual.style.setProperty('--doctor-width', `${doctorWidth}px`);
    };
    const observer = new ResizeObserver(setDoctorWidth);
    observer.observe(doctor);
    if (doctor.complete) {
      setDoctorWidth();
    } else {
      doctor.addEventListener('load', setDoctorWidth);
    }
  }
const about = document.querySelector('.about');

if (about) {
  const aboutTitle = about.querySelector('.about__title h2');

  if (aboutTitle) {
    const setAboutTitleHeight = () => {
      about.style.setProperty(
        '--about-title-height',
        `${aboutTitle.offsetHeight}px`
      );
    };

    setAboutTitleHeight();

    const titleObserver = new ResizeObserver(setAboutTitleHeight);

    titleObserver.observe(aboutTitle);
  }
}


});

const wysiwygImages = document.querySelectorAll('.wysiwyg-component img');
const wysiwygVideos = document.querySelectorAll('.wysiwyg-component video');

wysiwygImages.forEach((wysiwygImage) => {
  const setWysiwygImageType = () => {
    if (wysiwygImage.naturalWidth > wysiwygImage.naturalHeight) {
      wysiwygImage.classList.add('is-landscape');
    } else {
      wysiwygImage.classList.add('is-vertical');
    }
  };

  if (wysiwygImage.complete) {
    setWysiwygImageType();
  } else {
    wysiwygImage.addEventListener('load', setWysiwygImageType);
  }
});

wysiwygVideos.forEach((wysiwygVideo) => {
  const setWysiwygVideoType = () => {
    if (wysiwygVideo.videoWidth > wysiwygVideo.videoHeight) {
      wysiwygVideo.classList.add('is-landscape');
    } else {
      wysiwygVideo.classList.add('is-vertical');
    }
  };

  if (wysiwygVideo.readyState >= 1) {
    setWysiwygVideoType();
  } else {
    wysiwygVideo.addEventListener('loadedmetadata', setWysiwygVideoType);
  }
});


window.addEventListener('load', () => {
  const lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
const doctorSingle = document.querySelector('.doctor-single');
const doctorInfoAside = document.querySelector('.doctor-info__aside');
if (doctorSingle && doctorInfoAside) {
  let ticking = false;
  const toggleDoctorAside = () => {
    const headerHeight = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--header-height')
    ) || 0;
    const doctorBottom = doctorSingle.getBoundingClientRect().bottom;
    doctorInfoAside.classList.toggle(
      'is-visible',
      doctorBottom <= headerHeight
    );
    ticking = false;
  };
  const handleDoctorScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(toggleDoctorAside);
  };
  toggleDoctorAside();
  window.addEventListener('scroll', handleDoctorScroll, { passive: true });
  window.addEventListener('resize', toggleDoctorAside);
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-education-toggle]').forEach((button) => {
    const section = button.closest('.doctor-info__section');
    const list = section.querySelector('.doctor-info__education');
    const items = list.querySelectorAll('.doctor-info__education-item');
    if (items.length <= 4) return;
    const extraItems = Array.from(items).slice(4);
    let expanded = false;
    extraItems.forEach((item) => {
      item.hidden = true;
    });
    button.hidden = false;
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', async () => {
      if (button.disabled) return;
      button.disabled = true;
      const startHeight = list.getBoundingClientRect().height;
      const previousOverflow = list.style.overflow;
      expanded = !expanded;
      extraItems.forEach((item) => {
        item.hidden = !expanded;
      });
      const endHeight = list.getBoundingClientRect().height;
      extraItems.forEach((item) => {
        item.hidden = false;
      });
      list.style.overflow = 'hidden';
      const animation = list.animate(
        [
          { height: `${startHeight}px` },
          { height: `${endHeight}px` }
        ],
        {
          duration: 350,
          easing: 'ease-in-out'
        }
      );
      extraItems.forEach((item) => {
        item.animate(
          [
            { opacity: expanded ? 0 : 1 },
            { opacity: expanded ? 1 : 0 }
          ],
          {
            duration: 350,
            easing: 'ease-in-out'
          }
        );
      });
      await animation.finished;
      extraItems.forEach((item) => {
        item.hidden = !expanded;
      });
      list.style.overflow = previousOverflow;
      button.setAttribute('aria-expanded', String(expanded));
      button.textContent = expanded ? 'Свернуть' : 'Смотреть все';
      button.disabled = false;
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let selectors = document.querySelectorAll('input[type="tel"]');
if (typeof Inputmask !== 'undefined') {
  let im = new Inputmask('+7 (999) 999-99-99');
  setTimeout(() => {
    if (selectors && selectors.length) {
      selectors.forEach(function(selector) {
        im.mask(selector);
      });
    }
  }, 500);
}
document.addEventListener(
  'wpcf7mailsent',
  function (response) {
    const messages = document.querySelectorAll('.wpcf7-response-output');
    const button = response.target.querySelector('.button');

    button?.classList.add('button--no-shadow');

    messages.forEach((message) => {
      message.classList.add(
        'transparent-background',
        'transparent-background-hidden'
      );

      setTimeout(function () {
        message.textContent = '';
        message.classList.remove(
          'transparent-background',
          'transparent-background-hidden'
        );

        button?.classList.remove('button--no-shadow');
      }, 3500);
    });
  },
  false
);
  const forms = document.querySelectorAll('.wpcf7-submit');
  const messages = document.querySelectorAll('.wpcf7-response-output');
  forms.forEach((form) => {
    form.addEventListener('click',() => {
      messages.forEach((message) => {
        if (message.textContent === '') {
          message.classList.add('transparent-background');
          setTimeout(() => {
            messages.forEach((message) => {
              message.textContent = '';
              message.classList.remove('transparent-background');
            });
          },4000);
        }
      });
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.modal-form');

  if (!modal) return;

  const title = modal.querySelector('.modal-form__title');
  const desc = modal.querySelector('.modal-form__desc');

  if (title) {
    modal.dataset.defaultTitle = title.innerHTML;
  }

  if (desc) {
    modal.dataset.defaultDesc = desc.innerHTML;
  }
});

document.addEventListener('click', e => {
const btn = e.target.closest('[data-path="modal-form"], [data-path="doctor-appointment"]');

  if (!btn) return;

const modal = document.querySelector(`.modal-form[data-target="${btn.dataset.path}"]`);
  if (!modal) return;

  const title = modal.querySelector('.modal-form__title');
  const desc = modal.querySelector('.modal-form__desc');
  const submitBtn = modal.querySelector('.feedback__btn');

  const hasTitle = btn.dataset.title?.trim();
  const hasDesc = btn.dataset.desc?.trim();
  const hasBtn = btn.dataset.btn?.trim();

  if (title) {
    title.innerHTML = hasTitle
      ? btn.dataset.title
      : modal.dataset.defaultTitle;
  }

  if (desc) {
    desc.innerHTML = hasDesc
      ? btn.dataset.desc
      : modal.dataset.defaultDesc;
  }

  if (submitBtn) {
    submitBtn.textContent = hasBtn
      ? btn.dataset.btn
      : 'Отправить';
  }

  const inputTitle = modal.querySelector('input[name="form_title"]');

  if (inputTitle) {
    inputTitle.value = title?.textContent.trim() || '';
  }
});
document.addEventListener('DOMContentLoaded', function () {
  document.cookie = 'cf7_start_time=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
  const cf7Forms = document.querySelectorAll('.wpcf7 form');
  if (!cf7Forms.length) {
    return;
  }
  cf7Forms.forEach(function (form) {
    let timeCookieSet = false;
    function setStartTime() {
      if (timeCookieSet) {
        return;
      }
      timeCookieSet = true;
      document.cookie = 'cf7_start_time=' + Math.floor(Date.now() / 1000) + '; path=/';
    }
    form.querySelectorAll('input, textarea, select').forEach(function (field) {
      field.addEventListener('input', setStartTime, { once: true });
      field.addEventListener('paste', setStartTime, { once: true });
      field.addEventListener('change', setStartTime, { once: true });
    });
  });

    const formUid = document.getElementById('form-uid');

    if (formUid) {
        formUid.value = Math.floor(Date.now() / 1000);
    }
});

const customSelects = document.querySelectorAll('[data-custom-select]');

customSelects.forEach(select => {
  const trigger = select.querySelector('[data-custom-select-trigger]');
  const value = select.querySelector('[data-custom-select-value]');
  const dropdown = select.querySelector('[data-custom-select-dropdown]');
  const input = select.querySelector('[data-custom-select-input]');
  const options = select.querySelectorAll('.custom-select__option');

  trigger.addEventListener('click', () => {
    const isOpen = select.classList.toggle('is-open');

    trigger.setAttribute('aria-expanded', String(isOpen));
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      value.textContent = option.textContent.trim();
      input.value = option.dataset.value;

      options.forEach(item => {
        item.classList.toggle('is-selected', item === option);
      });

      select.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    });
  });
});


const appointmentLinks = document.querySelectorAll('[data-appointment-link]');
const appointment = document.querySelector('#appointment');
const pageTitle = document.querySelector('h1');

if (pageTitle) {
  document.querySelectorAll('[name="consult-page-title"]').forEach((input) => {
    input.value = pageTitle.textContent.trim();
  });
}

if (!appointment) {
  appointmentLinks.forEach((link) => {
    link.setAttribute('href', '#');
    link.setAttribute('data-path', 'appointment');

    link.addEventListener('click', (event) => {
      event.preventDefault();
    });
  });
}


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
      mapContainer.setAttribute('data-lenis-prevent-wheel', '');

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
const header = document.querySelector('[data-header]');

if (header) {
  const headerTop = header.querySelector('.header__top');
  const headerBottom = header.querySelector('[data-header-bottom]');
  const burger = header.querySelector('[data-header-burger]');
  const services = header.querySelector('[data-services]');
  const submenuToggle = services?.querySelector('[data-submenu-toggle]');
  const mega = header.querySelector('[data-mega]');
  const megaContainer = header.querySelector('[data-mega-container]');
  const megaGrid = header.querySelector('.header__grid');
  const mobile = window.matchMedia('(max-width: 1160px)');
  const hero = document.querySelector('.hero');
  const fixedOffset = 300;

  let closeTimer;
  let megaScrollLocked = false;

const setHeaderSizes = () => {
  const topHeight = headerTop?.offsetHeight || 0;
  const bottomHeight = headerBottom?.offsetHeight || 0;

  document.documentElement.style.setProperty(
    '--header-bottom-height',
    `${bottomHeight}px`
  );

  if (
    !header.classList.contains('fixed') &&
    !headerBottom?.classList.contains('fixed')
  ) {
    document.documentElement.style.setProperty(
      '--header-height',
      `${topHeight + bottomHeight}px`
    );
  }
};
  const lockMegaMenuScroll = () => {
    if (megaScrollLocked) {
      return;
    }

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.documentElement.style.setProperty(
      '--scrollbar-width',
      `${scrollbarWidth}px`
    );

    megaScrollLocked = true;
    document.documentElement.classList.add('mega-menu-lock');
  };

  const unlockMegaMenuScroll = () => {
    if (!megaScrollLocked) {
      return;
    }

    megaScrollLocked = false;

    document.documentElement.classList.remove('mega-menu-lock');
    document.documentElement.style.removeProperty('--scrollbar-width');
  };

  const openServices = () => {
    clearTimeout(closeTimer);

    services?.setAttribute('data-open', '');
    submenuToggle?.setAttribute('aria-expanded', 'true');

    if (!mobile.matches) {
      lockMegaMenuScroll();
    }
  };

  const closeServices = (delay = 250) => {
    clearTimeout(closeTimer);

    closeTimer = setTimeout(() => {
      services?.removeAttribute('data-open');
      submenuToggle?.setAttribute('aria-expanded', 'false');
      unlockMegaMenuScroll();
    }, delay);
  };

  const closeMobileMenu = () => {
    header.removeAttribute('data-open');
    burger?.setAttribute('aria-expanded', 'false');
    document.body.removeAttribute('data-menu-lock');

    services?.removeAttribute('data-open');
    submenuToggle?.setAttribute('aria-expanded', 'false');
  };

const handleHeaderScroll = () => {
  const fixedOffset = hero
    ? hero.offsetHeight - (headerBottom?.offsetHeight || 0)
    : 300;

  const isFixed = window.scrollY > fixedOffset;

  if (mobile.matches) {
    headerBottom?.classList.remove('fixed');
    header.classList.toggle('fixed', isFixed);
    return;
  }

  header.classList.remove('fixed');
  headerBottom?.classList.toggle('fixed', isFixed);
};

  services?.addEventListener('mouseenter', () => {
    if (mobile.matches) {
      return;
    }

    openServices();
  });

  services?.addEventListener('mouseleave', () => {
    if (mobile.matches) {
      return;
    }

    closeServices();
  });

  services?.addEventListener('focusin', () => {
    if (mobile.matches) {
      return;
    }

    openServices();
  });

  services?.addEventListener('focusout', event => {
    if (
      mobile.matches ||
      services.contains(event.relatedTarget)
    ) {
      return;
    }

    closeServices();
  });
megaGrid?.addEventListener('mouseenter', () => {
  if (mobile.matches) {
    return;
  }

  clearTimeout(closeTimer);
});

megaGrid?.addEventListener('mouseleave', () => {
  if (mobile.matches) {
    return;
  }

  closeServices();
});
  mega?.addEventListener('click', event => {
    if (
      mobile.matches ||
      megaContainer?.contains(event.target)
    ) {
      return;
    }

    closeServices(0);
  });

  submenuToggle?.addEventListener('click', () => {
    if (!mobile.matches) {
      return;
    }

    const isOpen = !services.hasAttribute('data-open');

    services.toggleAttribute('data-open', isOpen);
    submenuToggle.setAttribute('aria-expanded', isOpen);
  });

  burger?.addEventListener('click', () => {
    const isOpen = !header.hasAttribute('data-open');

    header.toggleAttribute('data-open', isOpen);
    burger?.setAttribute('aria-expanded', isOpen);
    document.body.toggleAttribute('data-menu-lock', isOpen);

    if (!isOpen) {
      services?.removeAttribute('data-open');
      submenuToggle?.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') {
      return;
    }

    closeServices(0);
    closeMobileMenu();
  });

  mobile.addEventListener('change', () => {
    clearTimeout(closeTimer);

    closeMobileMenu();
    unlockMegaMenuScroll();

    header.classList.remove('fixed');
    headerBottom?.classList.remove('fixed');

    setHeaderSizes();
    handleHeaderScroll();
  });

  window.addEventListener(
    'scroll',
    handleHeaderScroll,
    {
      passive: true
    }
  );

  window.addEventListener('resize', () => {
    setHeaderSizes();
    handleHeaderScroll();
  });

  const headerResizeObserver = new ResizeObserver(() => {
    setHeaderSizes();
  });

  if (headerTop) {
    headerResizeObserver.observe(headerTop);
  }

  if (headerBottom) {
    headerResizeObserver.observe(headerBottom);
  }

  setHeaderSizes();
  handleHeaderScroll();
}
class Modal {
  constructor(options) {
    let defaultOptions = {
      isOpen: () => {},
      isClose: () => {},
      openAnimation: 'slideInRight',
      closeAnimation: 'slideOutRight',
    };
    this.options = Object.assign(defaultOptions, options);
    this.fixBlocks = document.querySelectorAll('.fix-block');
    this.modal = this.fixBlocks.length ? this.fixBlocks[0] : null; // Первый или null

    this.speed = false;
    this.animation = false;
    this.isOpen = false;
    this.modalContainer = false;
    this.previousActiveElement = false;

    this.disableScroll = () => {
      if (!this.fixBlocks || !this.fixBlocks.length) return;
      let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
      this.fixBlocks.forEach((el) => {
        if (el) el.style.paddingRight = paddingOffset;
      });
      document.body.style.paddingRight = paddingOffset;
      document.body.classList.add('disable-scroll');
      const header = document.querySelector('.header');

      if (header) {
        header.style.paddingRight = paddingOffset;
      }
    };

    this.enableScroll = () => {
      document.body.classList.remove('disable-scroll');
      if (this.fixBlocks && this.fixBlocks.length) {
        this.fixBlocks.forEach((el) => {
          if (el) el.style.paddingRight = '0px';
        });
      }
      document.body.style.paddingRight = '0px';
      const header = document.querySelector('.header');

      if (header) {
        header.style.paddingRight = '0px';
      }
    };

    this.events();
  }

  events() {
    document.querySelectorAll('[data-path]').forEach((btn) => {
      const anim = btn.getAttribute('data-animation');
      if (anim === null || anim.trim() === '') {
        btn.setAttribute('data-animation', 'fadeIn');
      }
    });

    if (this.modal) {
      document.addEventListener('click', (e) => {
        const clickedElement = e.target.closest('[data-path]');
        if (clickedElement) {
          let target = clickedElement.dataset.path;
          let animation = clickedElement.dataset.animation;
          let speed = clickedElement.dataset.speed;

          this.animation = animation ? animation : this.options.openAnimation;
          this.closeAnimation = this.animation.replace('In', 'Out');
          this.speed = speed ? parseInt(speed) : 400;
          this.modalContainer = document.querySelector(`[data-target="${target}"]`);

          this.open();
          return;
        }

        if (e.target.closest('.popup-close')) {
          this.close();
          return;
        }
      });

      this.modal.addEventListener('click', (e) => {
        if (!e.target.classList.contains('popup-card') && !e.target.closest('.popup-card') && this.isOpen) {
          this.close();
        }
      });
    }
  }

  open() {
    if (!this.modal) return;
    this.previousActiveElement = document.activeElement;
    this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
    this.modal.classList.add('is-open');
    this.disableScroll();

    if (this.modalContainer) {
      this.modalContainer.classList.remove(this.options.closeAnimation);
      this.modalContainer.classList.add('modal-open', this.animation);
    }

    this.options.isOpen(this);
    this.isOpen = true;
  }

  close() {
    if (this.modalContainer) {
      this.modalContainer.classList.remove(this.animation);
      this.modalContainer.classList.add(this.closeAnimation);
    }
    if (this.modal) this.modal.classList.remove('is-open');

    // Сброс формы
if (this.modalContainer) {
  this.modalContainer.querySelectorAll('form').forEach((form) => {
    form.reset();

    form.classList.remove('invalid', 'sent', 'failed', 'aborted', 'spam', 'unaccepted', 'submitting');

    form.querySelectorAll('.wpcf7-not-valid').forEach((field) => {
      field.classList.remove('wpcf7-not-valid');
      field.removeAttribute('aria-invalid');
      field.removeAttribute('aria-describedby');
    });

    form.querySelectorAll('.wpcf7-not-valid-tip').forEach((error) => error.remove());

    const response = form.querySelector('.wpcf7-response-output');

    if (response) response.textContent = '';
  });
}

    setTimeout(() => {
      if (this.modalContainer) {
        this.modalContainer.classList.remove('modal-open', this.closeAnimation);
      }
      this.enableScroll();
      this.options.isClose(this);
      this.isOpen = false;
    }, this.speed);
  }
}

const modal = new Modal();

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
const videoBlock = document.querySelector('[data-video-block]');

if (videoBlock) {
  const video = videoBlock.querySelector('[data-video]');
  const preview = videoBlock.querySelector('[data-video-preview]');
  const playButton = videoBlock.querySelector('[data-video-play]');

  videoBlock.addEventListener('click', () => {
    video.src = video.dataset.src;

    preview.style.display = 'none';
    playButton.style.display = 'none';
    video.style.display = 'block';

    video.play();
  }, { once: true });
}