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
      // Удаляем классы у сообщений
      const messages = document.querySelectorAll('.wpcf7-response-output');
      messages.forEach((message) => {
        message.classList.add('transparent-background', 'transparent-background-hidden');
        setTimeout(function () {
          message.textContent = '';
          message.classList.remove('transparent-background', 'transparent-background-hidden');
        }, 3500);
      })
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
  const btn = e.target.closest('[data-path="modal-form"]');

  if (!btn) return;

  const modal = document.querySelector('.modal-form');

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