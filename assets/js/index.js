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
  document.addEventListener('DOMContentLoaded', function () {
    initTextFormatting();
    initBackToTop();
  });
  const emblem = document.querySelector('.header__emblem');
  const emblemRotate = emblem?.querySelector('.header__emblem-rotate');
  const emblemPath = emblem?.querySelector('#emblem-circle');
  const emblemItems = emblem?.querySelectorAll('.header__emblem-item textPath');
  if (emblem && emblemRotate && emblemPath && emblemItems.length) {
    const duration = 38000;
    let startTime = null;
    let pausedAt = null;
    const distributeItems = () => {
      const pathLength = emblemPath.getTotalLength();
      const widths = [...emblemItems].map((item) => {
        return item.getComputedTextLength();
      });
      const totalWidth = widths.reduce((sum, width) => sum + width, 0);
      const gap = (pathLength - totalWidth) / emblemItems.length;
      let position = 0;
      emblemItems.forEach((item, index) => {
        position += widths[index] / 2;
        item.setAttribute('startOffset', `${(position / pathLength) * 100}%`);
        position += widths[index] / 2 + gap;
      });
    };
    const rotateEmblem = (time) => {
      if (startTime === null) {
        startTime = time;
      }
      if (pausedAt === null) {
        const angle = (((time - startTime) % duration) / duration) * 360;
        emblemRotate.setAttribute('transform', `rotate(${angle} 50 50)`);
      }
      requestAnimationFrame(rotateEmblem);
    };
    emblem.addEventListener('mouseenter', () => {
      pausedAt = performance.now();
    });
    emblem.addEventListener('mouseleave', () => {
      if (pausedAt !== null) {
        startTime += performance.now() - pausedAt;
        pausedAt = null;
      }
    });
    document.fonts.ready.then(distributeItems);
    window.addEventListener('resize', distributeItems);
    requestAnimationFrame(rotateEmblem);
  }

});
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
  const fixedOffset = 300;

  let closeTimer;
  let megaScrollLocked = false;

  const setHeaderSizes = () => {
    const topHeight = headerTop?.offsetHeight || 0;
    const bottomHeight = headerBottom?.offsetHeight || 0;

    document.documentElement.style.setProperty(
      '--header-height',
      `${topHeight + bottomHeight}px`
    );

    document.documentElement.style.setProperty(
      '--header-bottom-height',
      `${bottomHeight}px`
    );
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
      let paddingOffset = window.innerWidth - document.body.offsetWidth + "px";
      this.fixBlocks.forEach((el) => {
        if (el) el.style.paddingRight = paddingOffset;
      });
      document.body.style.paddingRight = paddingOffset;
      document.body.classList.add("disable-scroll");
    };

    this.enableScroll = () => {
      document.body.classList.remove("disable-scroll");
      if (this.fixBlocks && this.fixBlocks.length) {
        this.fixBlocks.forEach((el) => {
          if (el) el.style.paddingRight = "0px";
        });
      }
      document.body.style.paddingRight = "0px";
    };

    this.events();
  }

  events() {
    document.querySelectorAll('[data-path]').forEach(btn => {
      const anim = btn.getAttribute('data-animation');
      if (anim === null || anim.trim() === '') {
        btn.setAttribute('data-animation', 'fadeIn');
      }
    });

    if (this.modal) {
      document.addEventListener(
        "click",
        (e) => {
          const clickedElement = e.target.closest("[data-path]");
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

          if (e.target.closest(".popup-close")) {
            this.close();
            return;
          }
        }
      );

      this.modal.addEventListener(
        "click",
        (e) => {
          if (
            !e.target.classList.contains("popup-card") &&
            !e.target.closest(".popup-card") &&
            this.isOpen
          ) {
            this.close();
          }
        }
      );
    }
  }

  open() {
    if (!this.modal) return;
    this.previousActiveElement = document.activeElement;
    this.modal.style.setProperty("--transition-time", `${this.speed / 1000}s`);
    this.modal.classList.add("is-open");
    this.disableScroll();

    if (this.modalContainer) {
      this.modalContainer.classList.remove(this.options.closeAnimation);
      this.modalContainer.classList.add("modal-open", this.animation);
    }

    this.options.isOpen(this);
    this.isOpen = true;
  }

  close() {
    if (this.modalContainer) {
      this.modalContainer.classList.remove(this.animation);
      this.modalContainer.classList.add(this.closeAnimation);
    }
    if (this.modal) this.modal.classList.remove("is-open");

    // Сброс формы
    if (this.modal) {
      this.modal.querySelectorAll('.feedback-form').forEach(function (form) {
        form.reset();
      });
    }

    setTimeout(() => {
      if (this.modalContainer) {
        this.modalContainer.classList.remove("modal-open", this.closeAnimation);
      }
      this.enableScroll();
      this.options.isClose(this);
      this.isOpen = false;
    }, this.speed);
  }
}

const modal = new Modal();

