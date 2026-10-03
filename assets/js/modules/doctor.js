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