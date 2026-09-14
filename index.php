<?php
include $_SERVER['DOCUMENT_ROOT'] . '/head.php';
include $_SERVER['DOCUMENT_ROOT'] . '/header.php';
?>
<main>
  <section class="hero">
    <div class="container">
      <div class=" hero__wrapper">
        <div class="hero__content">
          <h1 class="hero__title">
            Экспертная стоматология
            <span>для сложных случаев
              и&nbsp;эстетики</span>
          </h1>
          <p class="hero__text">
            Комплексное лечение, имплантация и эстетическая реабилитация
            под руководством доктора Дмитрия Воронова
          </p>
          <div class="hero__actions hero__actions-desc">
            <a href="#" class="button">
              получить консультацию
            </a>
            <a href="#about" class="button trans">
              Познакомиться с клиникой
            </a>
          </div>
        </div>
        <div class="hero__visual">
          <div class="fluid-decor">
            <div class="fluid-glow"></div>
          </div>
          <img
            class="hero__doctor"
            src="assets/img/voronov-dmitrij-anatolevich.webp"
            alt="Дмитрий Воронов">
          <div class="hero__actions hero__actions-mob">
            <a href="#" class="button">
              получить консультацию
            </a>
            <a href="#about" class="button trans">
              Познакомиться с клиникой
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="advantages">
    <div class="container">
      <h2 class="advantages__heading visually-hidden">
        Преимущества клиники
      </h2>
      <div class="advantages__list">
        <div class="advantages__item">
          <div class="advantages__top">
            <div class="advantages__icon">
              <i data-lucide="scan-search"></i>
            </div>
            <div class="advantages__title text-format">
              Сложные случаи
            </div>
          </div>
          <div class="advantages__text text-format">
            Комплексное лечение в нестандартных ситуациях
          </div>
        </div>
        <div class="advantages__item">
          <div class="advantages__top">
            <div class="advantages__icon">
              <i data-lucide="file-text"></i>
            </div>
            <div class="advantages__title text-format">
              Единый план лечения
            </div>
          </div>
          <div class="advantages__text text-format">
            Все этапы связаны в одну последовательную стратегию
          </div>
        </div>
        <div class="advantages__item">
          <div class="advantages__top">
            <div class="advantages__icon">
              <i data-lucide="handshake"></i>
            </div>
            <div class="advantages__title text-format">
              Командный подход
            </div>
          </div>
          <div class="advantages__text text-format">
            Специалисты разных направлений работают вместе
          </div>
        </div>
        <div class="advantages__item">
          <div class="advantages__top">
            <div class="advantages__icon">
              <i data-lucide="smile"></i>
            </div>
            <div class="advantages__title text-format">
              Красота и комфорт
            </div>
          </div>
          <div class="advantages__text text-format">
            Естественный результат и удобство каждый день
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="services section">
    <div class="container">
      <div class="services__top">
        <div class="results__title top-title text-format">
          <h2> Наши направления</h2>
          <div class="top-title__text text-format">
            <p> Мы занимаемся лечением взрослых и детей, работаем как с распространёнными стоматологическими проблемами, так и со сложными клиническими случаями.</p>
            <p> После осмотра врач составляет план лечения и объясняет, какие этапы нужны и почему. </p>
          </div>
        </div>
        <a class="services__all" href="/uslugi/">
          Смотреть все
          <i data-lucide="arrow-up-right"></i>
        </a>
      </div>
      <div class="services__items">
        <a href="#" class="services-item">
          <div class="services-item__wrapper">
            <div class="services-item__img">
              <img src="assets/img/servises/dentistry.webp" alt="">
            </div>
            <div class="services-item__content text-format">
              <h3 class="services-item__title">
                Лечение зубов
              </h3>
              <div class="services-item__text">
                <p>
                  Лечение кариеса, пульпита и корневых каналов, в том числе под микроскопом.
                </p>
              </div>
            </div>
          </div>
          <div class="services-item__more">
            Подробнее
            <i data-lucide="arrow-up-right"></i>
          </div>
        </a>
        <a href="#" class="services-item">
          <div class="services-item__wrapper">
            <div class="services-item__img">
              <img src="assets/img/servises/implants.webp" alt="">
            </div>
            <div class="services-item__content text-format">
              <h3 class="services-item__title">
                Имплантация зубов
              </h3>
              <div class="services-item__text">
                <p>
                  Восстановление отсутствующих зубов с использованием современных имплантационных систем.
                </p>
              </div>
            </div>
          </div>
          <div class="services-item__more">
            Подробнее
            <i data-lucide="arrow-up-right"></i>
          </div>
        </a>
        <a href="#" class="services-item">
          <div class="services-item__wrapper">
            <div class="services-item__img">
              <img src="assets/img/servises/dental-crown.webp" alt="">
            </div>
            <div class="services-item__content text-format">
              <h3 class="services-item__title">
                Протезирование
              </h3>
              <div class="services-item__text">
                <p>
                  Коронки, виниры, съемные конструкции и протезирование на имплантах.
                </p>
              </div>
            </div>
          </div>
          <div class="services-item__more">
            Подробнее
            <i data-lucide="arrow-up-right"></i>
          </div>
        </a>
        <a href="#" class="services-item">
          <div class="services-item__wrapper">
            <div class="services-item__img">
              <img src="assets/img/servises/braces.webp" alt="">
            </div>
            <div class="services-item__content text-format">
              <h3 class="services-item__title">
                Ортодонтия
              </h3>
              <div class="services-item__text">
                <p>
                  Исправление прикуса и положения зубов с помощью брекетов и элайнеров.
                </p>
              </div>
            </div>
          </div>
          <div class="services-item__more">
            Подробнее
            <i data-lucide="arrow-up-right"></i>
          </div>
        </a>
        <a href="#" class="services-item">
          <div class="services-item__wrapper">
            <div class="services-item__img">
              <img src="assets/img/servises/diagnostics.webp" alt="">
            </div>
            <div class="services-item__content text-format">
              <h3 class="services-item__title">
                Диагностика и рентген
              </h3>
              <div class="services-item__text">
                <p>
                  Прицельные снимки, ОПТГ, компьютерная томография и 3D-сканирование в клинике.
                </p>
              </div>
            </div>
          </div>
          <div class="services-item__more">
            Подробнее
            <i data-lucide="arrow-up-right"></i>
          </div>
        </a>
        <a href="#" class="services-item">
          <div class="services-item__wrapper">
            <div class="services-item__img">
              <img src="assets/img/servises/children.webp" alt="">
            </div>
            <div class="services-item__content text-format">
              <h3 class="services-item__title">
                Детская стоматология
              </h3>
              <div class="services-item__text">
                <p>
                  Лечение, профилактика, профессиональная гигиена и ортодонтическая помощь детям.
                </p>
              </div>
            </div>
          </div>
          <div class="services-item__more">
            Подробнее
            <i data-lucide="arrow-up-right"></i>
          </div>
        </a>
      </div>
      <button class="button">Все услуги</button>
    </div>
  </section>
  <section class="results section">
    <div class="container">
      <div class="results__title top-title text-format">
        <h2>Результаты лечения</h2>
        <div class="top-title__text">
          <p> Здесь собраны примеры лечения с фотографиями до и после. </p>
          <p> В каждом случае видно, с какой задачей обратился пациент и какого результата удалось добиться. </p>
        </div>
      </div>
      <div class="results__inner">
        <div class="results__slider swiper">
          <div class="swiper-wrapper">
            <div class="results__slide swiper-slide">
              <article class="result-card">
                <div class="result-card__content text-format">
                  <h3 class="result-card__title"> Восстановление зубов при полной потере </h3>
                  <div class="result-card__text"> Провели комплексное лечение и восстановили функцию и эстетику зубного ряда. </div>
                </div>
                <div class="before-after__compare">
                  <div class="before-after__after"><img src="assets/img/results/result-after.webp" alt="Результат после лечения"></div>
                  <div class="before-after__before"><img src="assets/img/results/result-before.webp" alt="Состояние до лечения"></div>
                  <div class="before-after__label before-after__label--after"> После </div>
                  <div class="before-after__label before-after__label--before"> До </div><button class="before-after__drag" type="button" aria-label="Сравнить результат до и после"><i data-lucide="chevrons-left-right"></i></button>
                </div>
              </article>
            </div>
            <div class="results__slide swiper-slide">
              <article class="result-card">
                <div class="result-card__content text-format">
                  <h3 class="result-card__title"> Восстановление переднего зуба </h3>
                  <div class="result-card__text"> Восстановили повреждённый зуб, сохранив естественную форму, цвет и прозрачность эмали. </div>
                </div>
                <div class="before-after__compare">
                  <div class="before-after__after"><img src="assets/img/results/result-after.webp" alt="Результат после лечения"></div>
                  <div class="before-after__before"><img src="assets/img/results/result-before.webp" alt="Состояние до лечения"></div>
                  <div class="before-after__label before-after__label--after"> После </div>
                  <div class="before-after__label before-after__label--before"> До </div><button class="before-after__drag" type="button" aria-label="Сравнить результат до и после"><i data-lucide="chevrons-left-right"></i></button>
                </div>
              </article>
            </div>
            <div class="results__slide swiper-slide">
              <article class="result-card">
                <div class="result-card__content text-format">
                  <h3 class="result-card__title"> Исправление скученности зубов </h3>
                  <div class="result-card__text"> Скорректировали положение зубов и прикус, добившись ровного и гармоничного зубного ряда. </div>
                </div>
                <div class="before-after__compare">
                  <div class="before-after__after"><img src="assets/img/results/result-after.webp" alt="Результат после лечения"></div>
                  <div class="before-after__before"><img src="assets/img/results/result-before.webp" alt="Состояние до лечения"></div>
                  <div class="before-after__label before-after__label--after"> После </div>
                  <div class="before-after__label before-after__label--before"> До </div><button class="before-after__drag" type="button" aria-label="Сравнить результат до и после"><i data-lucide="chevrons-left-right"></i></button>
                </div>
              </article>
            </div>
            <div class="results__slide swiper-slide">
              <article class="result-card">
                <div class="result-card__content text-format">
                  <h3 class="result-card__title"> Осветление эмали и выравнивание оттенка </h3>
                  <div class="result-card__text"> Провели профессиональное отбеливание и сделали оттенок зубов светлее и равномернее. </div>
                </div>
                <div class="before-after__compare">
                  <div class="before-after__after"><img src="assets/img/results/result-after.webp" alt="Результат после лечения"></div>
                  <div class="before-after__before"><img src="assets/img/results/result-before.webp" alt="Состояние до лечения"></div>
                  <div class="before-after__label before-after__label--after"> После </div>
                  <div class="before-after__label before-after__label--before"> До </div><button class="before-after__drag" type="button" aria-label="Сравнить результат до и после"><i data-lucide="chevrons-left-right"></i></button>
                </div>
              </article>
            </div>
            <div class="results__slide swiper-slide">
              <article class="result-card">
                <div class="result-card__content text-format">
                  <h3 class="result-card__title"> Восстановление зубов при полной потере </h3>
                  <div class="result-card__text"> Провели комплексное лечение и восстановили функцию и эстетику зубного ряда. </div>
                </div>
                <div class="before-after__compare">
                  <div class="before-after__after"><img src="assets/img/results/result-after.webp" alt="Результат после лечения"></div>
                  <div class="before-after__before"><img src="assets/img/results/result-before.webp" alt="Состояние до лечения"></div>
                  <div class="before-after__label before-after__label--after"> После </div>
                  <div class="before-after__label before-after__label--before"> До </div><button class="before-after__drag" type="button" aria-label="Сравнить результат до и после"><i data-lucide="chevrons-left-right"></i></button>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="results__bottom">
          <div class="results__pagination swiper-pagination"></div>
          <div class="results__navigation"><button class="results__prev" type="button" aria-label="Предыдущий отзыв"><i data-lucide="arrow-left"></i></button><button class="results__next" type="button" aria-label="Следующий отзыв"><i data-lucide="arrow-right"></i></button></div>
        </div>
      </div>
      <button class="button center">все работы</button>
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
  <section class="about" id="about">
    <div class="container">
      <div class="about__inner">
        <div class="about__media" data-video-block>
          <img class="about__preview" src="assets/img/video.webp" alt="Moscow Dental Clinic" data-video-preview>
          <video class="about__video" controls playsinline preload="none" data-video data-src="assets\img\about.mp4"></video>
          <button class="about__play" type="button" aria-label="Воспроизвести видео" data-video-play>
            <i data-lucide="play"></i>
          </button>
        </div>
        <div class="about__content text-format">
          <div class="about__title text-format">
            <h2> Современная клиника экспертного уровня</h2>
          </div>
          <div class="about__text text-format">
            <p> Moscow Dental Clinic — семейная стоматология, где опыт нескольких поколений сочетается с современным подходом к лечению. </p>
            <p> Здесь занимаются разными задачами — от профилактики и лечения до сложных случаев, требующих совместной работы нескольких специалистов.</p>
          </div>
          <div class="about__advantages">
            <div class="about__advantage"><i data-lucide="settings"></i>
              <div> Современное <span>оборудование</span> </div>
            </div>
            <div class="about__advantage"><i data-lucide="shield-check"></i>
              <div> Стандарты <span>безопасности</span> </div>
            </div>
            <div class="about__advantage"><i data-lucide="users"></i>
              <div> Врачи разных <span>специальностей</span> </div>
            </div>
            <div class="about__advantage"><i data-lucide="map-pin"></i>
              <div> Удобное расположение <span>в&nbsp;центре Москвы</span> </div>
            </div>
          </div>
        </div>
      </div>
      <a class="button center" href="/o-klinike/">
        Подробнее о клинике
      </a>
  </section>
  <div class="reviews-faq">
    <div class="fluid-decor">
            <div class="fluid-glow"></div>
          </div>
  <section class="reviews section">
    <div class="container">
      <div class="reviews__title top-title text-format">
        <h2>Отзывы пациентов</h2>
        <div class="top-title__text">
          <p>Здесь собраны отзывы пациентов о врачах, лечении и самой клинике, а также их впечатления после посещения.</p>
          <p>Оригиналы отзывов можно посмотреть на независимых площадках.</p>
        </div>
      </div>
      <div class="reviews__items">
        <article class="reviews-card">
          <div class="reviews-card__top">
            <a
              class="reviews-card__source"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Посмотреть отзыв на Яндекс Картах">
              <?php include 'svg/logo-yandex.php'; ?>
            </a>
            <div class="reviews-card__rating" aria-label="Оценка 5 из 5">
              ★★★★★
            </div>
          </div>
          <div class="reviews-card__text text-format">
            <p>Воронов Дмитрий Анатольевич Виртуоз своего дела, разобрался с очень сложной ситуацией, которую не смог решить челюстно лицевой хирург.</p>
            <p>Рекомендую доктора и данную клинику в целом!!!!!</p>
          </div>
          <h3 class="reviews-card__author">
            Ксения Корниенко
          </h3>
        </article>
        <article class="reviews-card">
          <div class="reviews-card__top">
            <a
              class="reviews-card__source"
              href="https://go.2gis.com/UPXTe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Посмотреть отзыв в 2ГИС">
              <?php include 'svg/logo-2gis.php'; ?>
            </a>
            <div class="reviews-card__rating" aria-label="Оценка 5 из 5">
              ★★★★★
            </div>
          </div>
          <div class="reviews-card__text text-format">
            <p>Отличные врачи, все было сделано быстро и качественно.</p>
          </div>
          <h3 class="reviews-card__author">
            Элеонора Путинцева
          </h3>
        </article>
        <article class="reviews-card">
          <div class="reviews-card__top">
            <a
              class="reviews-card__source"
              href="https://prodoctorov.ru/moskva/lpu/77901-moscow-dental-clinic/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Посмотреть отзыв на ПроДокторов">
              <?php include 'svg/logo-prodoctorov.php'; ?>
            </a>
            <div class="reviews-card__rating" aria-label="Оценка 5 из 5">
              ★★★★★
            </div>
          </div>
          <div class="reviews-card__text text-format">
            <p>Устанавливал имплантат. Все прошло очень быстро и безболезненно. Очень понравилось отношение доктора и профессионализм!</p>
            <p>Хожу с новым зубом и радуюсь!</p>
          </div>
          <h3 class="reviews-card__author">
            Пациент
          </h3>
        </article>
        <article class="reviews-card">
          <div class="reviews-card__top">
            <a
              class="reviews-card__source"
              href="https://go.2gis.com/UPXTe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Посмотреть отзыв в 2ГИС">
              <?php include 'svg/logo-2gis.php'; ?>
            </a>
            <div class="reviews-card__rating" aria-label="Оценка 5 из 5">
              ★★★★★
            </div>
          </div>
          <div class="reviews-card__text text-format">
            <p>Клиника очень понравилась. Крутое оборудование и материалы. Вылечили зубки, поставили имплантанты, виниры и коронки. Боялась жутко, но зря).</p>
            <p>Не навязывают никаких доп услуг. Рассказывают, что надо сделать и выбор остается за тобой.</p>
          </div>
          <h3 class="reviews-card__author">
            Светлана
          </h3>
        </article>
        <article class="reviews-card">
          <div class="reviews-card__top">
            <a
              class="reviews-card__source"
              href="https://prodoctorov.ru/moskva/lpu/77901-moscow-dental-clinic/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Посмотреть отзыв на ПроДокторов">
              <?php include 'svg/logo-prodoctorov.php'; ?>
            </a>
            <div class="reviews-card__rating" aria-label="Оценка 5 из 5">
              ★★★★★
            </div>
          </div>
          <div class="reviews-card__text text-format">
            <p>Врач ведёт меня с мезиальным прикусом. Было проведено удаление трёх восьмёрок и установлены ортодонтические минивинты — всё быстро и безболезненно.</p>
            <p>Очень располагает к себе, бережное отношение и действительно убирает страх перед хирургическими вмешательствами.</p>
          </div>
          <h3 class="reviews-card__author">
            Пациент
          </h3>
        </article>
        <article class="reviews-card">
          <div class="reviews-card__top">
            <a
              class="reviews-card__source"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Посмотреть отзыв на Яндекс Картах">
              <?php include 'svg/logo-yandex.php'; ?>
            </a>
            <div class="reviews-card__rating" aria-label="Оценка 5 из 5">
              ★★★★★
            </div>
          </div>
          <div class="reviews-card__text text-format">
            <p>Записался заранее к врачу по рекомендации. Сделали слепок, поставили временную коронку, а через 4 дня вернулся за своей постоянной коронкой.</p>
            <p>От своего зуба не отличить. Сильно благодарен.</p>
          </div>
          <h3 class="reviews-card__author">
            Максим А.
          </h3>
        </article>
      </div>
    </div>
  </section>
  <section class="faq section-big">
    <div class="container">
      <div class="faq__title top-title text-format">
        <h2>Часто спрашивают</h2>

        <div class="top-title__text">
          <p>Отвечаем на основные вопросы о приёме, лечении и подготовке к посещению клиники.</p>
          <p>Если вашего вопроса здесь нет, его можно задать врачу на консультации.</p>
        </div>
      </div>

      <div class="faq-accordion">
        <div class="faq-accordion__item is-open">
          <button class="faq-accordion__head" type="button">
            <span class="faq-accordion__title">
              Сколько стоит лечение?
            </span>

            <span class="faq-accordion__icon"></span>
          </button>

          <div class="faq-accordion__content">
            <div class="faq-accordion__inner text-format">
              Стоимость зависит от состояния зубов, выбранного метода лечения и объёма необходимых процедур. Точную стоимость врач сможет определить после осмотра и диагностики.
            </div>
          </div>
        </div>

        <div class="faq-accordion__item">
          <button class="faq-accordion__head" type="button">
            <span class="faq-accordion__title">
              Что происходит на первом приёме?
            </span>

            <span class="faq-accordion__icon"></span>
          </button>

          <div class="faq-accordion__content">
            <div class="faq-accordion__inner text-format">
              Врач проводит осмотр, уточняет жалобы и при необходимости назначает дополнительную диагностику. После этого обсуждаются возможные варианты лечения, последовательность процедур и ориентировочная стоимость
            </div>
          </div>
        </div>

        <div class="faq-accordion__item">
          <button class="faq-accordion__head" type="button">
            <span class="faq-accordion__title">
              Нужно ли делать снимок перед лечением?
            </span>

            <span class="faq-accordion__icon"></span>
          </button>

          <div class="faq-accordion__content">
            <div class="faq-accordion__inner text-format">
              Не всегда. Необходимость рентгеновского снимка или другой диагностики определяет врач после осмотра. Исследование назначается, если без него нельзя точно оценить состояние зубов и окружающих тканей
            </div>
          </div>
        </div>

        <div class="faq-accordion__item">
          <button class="faq-accordion__head" type="button">
            <span class="faq-accordion__title">
              Больно ли лечить зубы?
            </span>

            <span class="faq-accordion__icon"></span>
          </button>

          <div class="faq-accordion__content">
            <div class="faq-accordion__inner text-format">
              Большинство стоматологических процедур проводится с обезболиванием. Вид анестезии и необходимость её применения врач подбирает с учётом предстоящего лечения и индивидуальных особенностей пациента
            </div>
          </div>
        </div>

        <div class="faq-accordion__item">
          <button class="faq-accordion__head" type="button">
            <span class="faq-accordion__title">
              Сколько времени занимает лечение?
            </span>

            <span class="faq-accordion__icon"></span>
          </button>

          <div class="faq-accordion__content">
            <div class="faq-accordion__inner text-format">
              Продолжительность зависит от задачи. Некоторые процедуры выполняются за один приём, а комплексное лечение, протезирование, имплантация или ортодонтическая коррекция могут проходить в несколько этапов
            </div>
          </div>
        </div>

        <div class="faq-accordion__item">
          <button class="faq-accordion__head" type="button">
            <span class="faq-accordion__title">
              Что делать, если зуб заболел внезапно?
            </span>

            <span class="faq-accordion__icon"></span>
          </button>

          <div class="faq-accordion__content">
            <div class="faq-accordion__inner text-format">
              Свяжитесь с клиникой и опишите симптомы администратору. Мы постараемся подобрать ближайшее доступное время для осмотра, чтобы врач смог определить причину боли и необходимое лечение
            </div>
          </div>
        </div>

        <div class="faq-accordion__item">
          <button class="faq-accordion__head" type="button">
            <span class="faq-accordion__title">
              Можно ли обратиться только за консультацией?
            </span>

            <span class="faq-accordion__icon"></span>
          </button>

          <div class="faq-accordion__content">
            <div class="faq-accordion__inner text-format">
              Да. Можно записаться на консультацию, получить мнение врача, обсудить результаты диагностики и возможные варианты лечения. Решение о дальнейшем лечении остаётся за пациентом
            </div>
          </div>
        </div>

        <div class="faq-accordion__item">
          <button class="faq-accordion__head" type="button">
            <span class="faq-accordion__title">
              Как подготовиться к приёму?
            </span>

            <span class="faq-accordion__icon"></span>
          </button>

          <div class="faq-accordion__content">
            <div class="faq-accordion__inner text-format">
              Специальная подготовка обычно не требуется. Если у вас есть результаты предыдущих исследований, снимки или сведения о проведённом лечении, их можно взять с собой. Также важно сообщить врачу о принимаемых препаратах и особенностях здоровья
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</main>

<?php
include $_SERVER['DOCUMENT_ROOT'] . '/footer.php';
?>