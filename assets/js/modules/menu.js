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

let lockedScrollY = 0;
let megaScrollLocked = false;

const scrollKeys = [
  'ArrowUp',
  'ArrowDown',
  'PageUp',
  'PageDown',
  'Home',
  'End',
  ' '
];

const preventMegaScroll = event => {
  event.preventDefault();
};

const preventMegaScrollKeys = event => {
  if (scrollKeys.includes(event.key)) {
    event.preventDefault();
  }
};

const keepMegaScrollPosition = () => {
  if (!megaScrollLocked) {
    return;
  }

  window.scrollTo(0, lockedScrollY);
};

const lockMegaMenuScroll = () => {
  if (megaScrollLocked) {
    return;
  }

  lockedScrollY = window.scrollY;
  megaScrollLocked = true;

  window.addEventListener('wheel', preventMegaScroll, {
    passive: false
  });

  window.addEventListener('touchmove', preventMegaScroll, {
    passive: false
  });

  window.addEventListener('keydown', preventMegaScrollKeys);

  window.addEventListener('scroll', keepMegaScrollPosition, {
    passive: true
  });

  document.body.classList.add('mega-menu-lock');
};

const unlockMegaMenuScroll = () => {
  megaScrollLocked = false;

  window.removeEventListener('wheel', preventMegaScroll);
  window.removeEventListener('touchmove', preventMegaScroll);
  window.removeEventListener('keydown', preventMegaScrollKeys);
  window.removeEventListener('scroll', keepMegaScrollPosition);

  document.body.classList.remove('mega-menu-lock');
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

  megaGrid?.addEventListener('mouseleave', () => {
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
    burger.setAttribute('aria-expanded', isOpen);
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