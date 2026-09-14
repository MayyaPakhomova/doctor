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
