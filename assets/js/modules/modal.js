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
    if (this.modal) {
      this.modal.querySelectorAll('.feedback-form').forEach(function (form) {
        form.reset();
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
