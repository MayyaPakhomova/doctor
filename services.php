<?php
include $_SERVER['DOCUMENT_ROOT'] . '/head.php';
include $_SERVER['DOCUMENT_ROOT'] . '/header.php';
?>
<section class="services-hero">
  <div class="container">
    <div class="services-hero__inner">
      <div class="services-hero__content">
        <h1 class="services-hero__title"> Направления лечения </h1>
        <div class="services-hero__text text-format text-clean"> Комплексная стоматологическая помощь для взрослых и детей: от диагностики и лечения до имплантации, протезирования и исправления прикуса. </div><a class="button services-hero__button" href="#appointment"> Записаться на приём </a>
      </div>
      <div class="services-hero__visual">
        <div class="swiper services-hero__slider" data-services-slider>
          <div class="swiper-wrapper">
            <div class="swiper-slide services-hero__slide"><img src="assets/img/servises/dentistry.webp" alt="Лечение зубов"></div>
            <div class="swiper-slide services-hero__slide"><img src="assets/img/servises/implants.webp" alt="Имплантация зубов"></div>
            <div class="swiper-slide services-hero__slide"><img src="assets/img/servises/dental-crown.webp" alt="Протезирование"></div>
            <div class="swiper-slide services-hero__slide"><img src="assets/img/servises/braces.webp" alt="Ортодонтия"></div>
            <div class="swiper-slide services-hero__slide"><img src="assets/img/servises/diagnostics.webp" alt="Диагностика и рентген"></div>
            <div class="swiper-slide services-hero__slide"><img src="assets/img/servises/children.webp" alt="Детская стоматология"></div>
          </div>
        </div>
        <div class="services-hero__pagination"></div>
      </div>
    </div>
  </div>
</section>
<section class="advantages">
  <div class="container">
    <h2 class="advantages__heading visually-hidden">
      Возможности клиники
    </h2>

    <div class="advantages__list">
      <div class="advantages__item">
        <div class="advantages__top">
          <div class="advantages__icon">
            <i data-lucide="baby"></i>
          </div>

          <div class="advantages__title text-format">
            Взрослым и детям
          </div>
        </div>

        <div class="advantages__text text-format">
          Стоматологическая помощь для пациентов любого возраста
        </div>
      </div>

      <div class="advantages__item">
        <div class="advantages__top">
          <div class="advantages__icon">
            <i data-lucide="scan-eye"></i>
          </div>

          <div class="advantages__title text-format">
            Диагностика в клинике
          </div>
        </div>

        <div class="advantages__text text-format">
          Снимки, КТ и 3D-сканирование без поездок в другие центры
        </div>
      </div>

      <div class="advantages__item">
        <div class="advantages__top">
          <div class="advantages__icon">
            <i data-lucide="network"></i>
          </div>

          <div class="advantages__title text-format">
            Смежные направления
          </div>
        </div>

        <div class="advantages__text text-format">
          Гнатология, ЛОР-стоматология и челюстно-лицевая хирургия
        </div>
      </div>

      <div class="advantages__item">
        <div class="advantages__top">
          <div class="advantages__icon">
            <i data-lucide="clock-3"></i>
          </div>

          <div class="advantages__title text-format">
            Ежедневно до 22:00
          </div>
        </div>

        <div class="advantages__text text-format">
          Можно подобрать удобное время для консультации и лечения
        </div>
      </div>
    </div>
  </div>
</section>
<section class="services-catalog section">
  <div class="container">
    <div class="services-catalog__heading top-title">
      <h2>
        Услуги клиники
      </h2>

      <div class="top-title__text text-format text-clean">
        Все основные направления стоматологической помощи в одной клинике.
      </div>
    </div>

    <div class="services-catalog__groups">
      <div class="services-catalog__group">
        <h3 class="services-catalog__group-title">
          С чего начать
        </h3>

        <div class="services-catalog__items">
          <div class="services-catalog-card">
            <a class="services-catalog-card__link" href="#" aria-label="Приём и консультация"></a>

            <div class="services-catalog-card__top">
              <h3 class="services-catalog-card__title h3-small h3-small">
                Приём и консультация
              </h3>

              <div class="services-catalog-card__icon">
                <i data-lucide="arrow-up-right"></i>
              </div>
            </div>

            <ul class="services-catalog-card__links">
              <li><a href="#">Терапевт</a></li>
              <li><a href="#">Хирург</a></li>
              <li><a href="#">Ортопед</a></li>
              <li><a href="#">Ортодонт</a></li>
            </ul>
          </div>

          <div class="services-catalog-card">
            <a class="services-catalog-card__link" href="#" aria-label="Диагностика и рентген"></a>

            <div class="services-catalog-card__top">
              <h3 class="services-catalog-card__title h3-small">
                Диагностика и рентген
              </h3>

              <div class="services-catalog-card__icon">
                <i data-lucide="arrow-up-right"></i>
              </div>
            </div>

            <ul class="services-catalog-card__links">
              <li><a href="#">Прицельный снимок</a></li>
              <li><a href="#">ОПТГ</a></li>
              <li><a href="#">КТ</a></li>
              <li><a href="#">3D-сканирование</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="services-catalog__group">
        <h3 class="services-catalog__group-title">
          Лечение и здоровье зубов
        </h3>

        <div class="services-catalog__items">
          <div class="services-catalog-card">
            <a class="services-catalog-card__link" href="#" aria-label="Терапия и эндодонтия"></a>

            <div class="services-catalog-card__top">
              <h3 class="services-catalog-card__title h3-small">
                Терапия и эндодонтия
              </h3>

              <div class="services-catalog-card__icon">
                <i data-lucide="arrow-up-right"></i>
              </div>
            </div>

            <ul class="services-catalog-card__links">
              <li><a href="#">Лечение кариеса</a></li>
              <li><a href="#">Лечение пульпита</a></li>
              <li><a href="#">Лечение каналов</a></li>
              <li><a href="#">Лечение под микроскопом</a></li>
            </ul>
          </div>

          <div class="services-catalog-card">
            <a class="services-catalog-card__link" href="#" aria-label="Гигиена и пародонтология"></a>

            <div class="services-catalog-card__top">
              <h3 class="services-catalog-card__title h3-small">
                Гигиена и пародонтология
              </h3>

              <div class="services-catalog-card__icon">
                <i data-lucide="arrow-up-right"></i>
              </div>
            </div>

            <ul class="services-catalog-card__links">
              <li><a href="#">Профессиональная гигиена</a></li>
              <li><a href="#">Отбеливание зубов</a></li>
              <li><a href="#">Лечение дёсен</a></li>
              <li><a href="#">Лечение на аппарате Vector</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="services-catalog__group">
        <h3 class="services-catalog__group-title">Хирургия</h3>

        <div class="services-catalog__items">
          <div class="services-catalog-card">
            <a class="services-catalog-card__link" href="#" aria-label="Хирургия"></a>

            <div class="services-catalog-card__top">
              <h3 class="services-catalog-card__title h3-small">Хирургическая стоматология</h3>

              <div class="services-catalog-card__icon">
                <i data-lucide="arrow-up-right"></i>
              </div>
            </div>

            <ul class="services-catalog-card__links">
              <li><a href="#">Удаление зубов</a></li>
              <li><a href="#">Удаление зубов мудрости</a></li>
              <li><a href="#">Синус-лифтинг</a></li>
              <li><a href="#">Костная пластика</a></li>
            </ul>
          </div>

          <div class="services-catalog-card">
            <a class="services-catalog-card__link" href="#" aria-label="Челюстно-лицевая хирургия"></a>

            <div class="services-catalog-card__top">
              <h3 class="services-catalog-card__title h3-small">Челюстно-лицевая хирургия</h3>

              <div class="services-catalog-card__icon">
                <i data-lucide="arrow-up-right"></i>
              </div>
            </div>

            <ul class="services-catalog-card__links">
              <li><a href="#">Пластика десны</a></li>
              <li><a href="#">Пластика альвеолярного гребня</a></li>
              <li><a href="#">Удаление кист</a></li>
              <li><a href="#">Костная регенерация</a></li>
            </ul>
          </div>


        </div>
      </div>
      <div class="services-catalog__group">
        <h3 class="services-catalog__group-title">Восстановление зубов</h3>

        <div class="services-catalog__items">

          <div class="services-catalog-card">
            <a class="services-catalog-card__link" href="#" aria-label="Имплантация"></a>

            <div class="services-catalog-card__top">
              <h3 class="services-catalog-card__title h3-small">Имплантация</h3>

              <div class="services-catalog-card__icon">
                <i data-lucide="arrow-up-right"></i>
              </div>
            </div>

            <ul class="services-catalog-card__links">
              <li><a href="#">Straumann</a></li>
              <li><a href="#">Dentium</a></li>
              <li><a href="#">All-on-4</a></li>
              <li><a href="#">All-on-6</a></li>
            </ul>
          </div>

          <div class="services-catalog-card">
            <a class="services-catalog-card__link" href="#" aria-label="Протезирование"></a>

            <div class="services-catalog-card__top">
              <h3 class="services-catalog-card__title h3-small">Протезирование</h3>

              <div class="services-catalog-card__icon">
                <i data-lucide="arrow-up-right"></i>
              </div>
            </div>

            <ul class="services-catalog-card__links">
              <li><a href="#">Коронки</a></li>
              <li><a href="#">Виниры</a></li>
              <li><a href="#">Съёмное протезирование</a></li>
              <li><a href="#">Протезирование на имплантах</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="appointment section" id="appointment">
  <div class="container">
    <div class="appointment__inner">
      <div class="appointment__img"><img src="assets/img/appointment.webp" alt="Интерьер Moscow Dental Clinic"></div>
      <div class="appointment__content">
        <h2 class="appointment__title text-format"> Запишитесь на прием </h2>
        <p class="appointment__text text-format"> Оставьте контакты, администратор свяжется с вами и подберет удобное время. </p>
        <form class="appointment__form">
          <div class="appointment__fields"><label class="appointment__field"><span>Ваше имя</span><input type="text" name="name" placeholder="Имя"></label><label class="appointment__field"><span>Телефон</span><input type="tel" name="phone" placeholder="+7"></label>
            <div class="appointment__field appointment__field--wide"><span>Услуга</span>
              <div class="custom-select" data-custom-select><button class="custom-select__trigger" type="button" data-custom-select-trigger aria-expanded="false"><span data-custom-select-value> Выберите направление </span><i data-lucide="chevron-down"></i></button>
                <div class="custom-select__dropdown" data-custom-select-dropdown><button type="button" class="custom-select__option" data-value="Лечение зубов"> Лечение зубов </button><button type="button" class="custom-select__option" data-value="Имплантация"> Имплантация </button><button type="button" class="custom-select__option" data-value="Протезирование"> Протезирование </button><button type="button" class="custom-select__option" data-value="Ортодонтия"> Ортодонтия </button><button type="button" class="custom-select__option" data-value="Диагностика и рентген"> Диагностика и рентген </button><button type="button" class="custom-select__option" data-value="Детская стоматология"> Детская стоматология </button></div><input type="hidden" name="service" data-custom-select-input>
              </div>
            </div>
          </div>
          <button class="button appointment__button mini" type="submit"> Записаться на прием </button>
          <label class="appointment__policy"><input type="checkbox" name="policy" required><span> Я согласен с <a href="/politika-konfidencialnosti/"> политикой конфиденциальности </a></span></label>
        </form>
      </div>
      <div class="appointment__benefits text-format">
        <div class="appointment__benefit"><i data-lucide="square-check-big"></i><span>Подберем специалиста под вашу задачу</span></div>
        <div class="appointment__benefit"><i data-lucide="square-check-big"></i><span>Согласуем удобные дату и время приема</span></div>
        <div class="appointment__benefit"><i data-lucide="square-check-big"></i><span>Заранее напомним о предстоящем визите</span></div>
        <div class="appointment__benefit"><i data-lucide="square-check-big"></i><span>Ответим на вопросы перед посещением клиники</span></div>
      </div>
    </div>
  </div>
</section>
<?php
include $_SERVER['DOCUMENT_ROOT'] . '/footer.php';
?>