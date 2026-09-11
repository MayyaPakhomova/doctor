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