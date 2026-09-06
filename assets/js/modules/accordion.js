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
