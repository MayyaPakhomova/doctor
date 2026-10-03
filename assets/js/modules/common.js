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