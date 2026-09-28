<?php
include $_SERVER['DOCUMENT_ROOT'] . '/head.php';
include $_SERVER['DOCUMENT_ROOT'] . '/header.php';
?>
<main class="doctors-page">
      <div class="fluid-decor">
      <div class="fluid-glow"></div>
    </div>
  <section class="doctors">

    <div class="container">

     <nav class="breadcrumbs" aria-label="Хлебные крошки">
          <ul class="breadcrumbs__list" itemscope itemtype="https://schema.org/BreadcrumbList">
            <li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <a href="index.php" class="breadcrumbs__link" itemprop="item"><span itemprop="name">Главная</span></a>
              <meta itemprop="position" content="1">
            </li>
            <li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <span class="breadcrumbs__current" itemprop="name">Врачи</span>
              <meta itemprop="position" content="3">
            </li>
          </ul>
        </nav>
      <div class="doctors__title top-title text-format">
        <h1>Врачи</h1>

        <div class="top-title__text">
          <p>В Moscow Dental Clinic работают специалисты разных направлений. При необходимости врачи подключаются к лечению совместно, чтобы учитывать все особенности клинической ситуации.</p>
        </div>
      </div>

  <div class="doctors__grid">
  <article class="doctor-card doctor-card--founder">
    <a class="doctor-card__link" href="#" aria-label="Подробнее о Воронове Дмитрии Анатольевиче"></a>

    <div class="doctor-card__image">
      <img src="assets/img/voronov-dmitrij-anatolevich.webp" alt="Воронов Дмитрий Анатольевич">
    </div>

    <div class="doctor-card__main">
      <h3 class="doctor-card__name">Воронов<br>Дмитрий Анатольевич</h3>
      <div class="doctor-card__position text-format text-clean">Главный врач,к.м.н., Стоматолог-ортопед</div>
    </div>

    <div class="doctor-card__badge">Врач высшей категории</div>

    <div class="doctor-card__info">
      <div class="doctor-card__fact">
        <i data-lucide="gem"></i>
        <span>Стаж работы более 18 лет</span>
      </div>

      <div class="doctor-card__fact">
        <i data-lucide="users-round"></i>
        <span>Приём взрослых</span>
      </div>
    </div>

    <div class="doctor-card__bottom">
      <span>Подробнее о враче</span>
      <div class="doctor-card__icon"><i data-lucide="arrow-up-right"></i></div>
    </div>
  </article>

  <article class="doctor-card">
    <a class="doctor-card__link" href="#" aria-label="Подробнее о враче"></a>

    <div class="doctor-card__image">
      <img src="assets/img/doctor.webp" alt="Воронов Никита Анатольевич">
    </div>

    <div class="doctor-card__main">
      <h3 class="doctor-card__name">Воронов<br>Никита Анатольевич</h3>
      <div class="doctor-card__position text-format text-clean">Хирург-имплантолог</div>
    </div>

    <div class="doctor-card__badge">Врач высшей категории</div>

    <div class="doctor-card__info">
      <div class="doctor-card__fact">
        <i data-lucide="gem"></i>
        <span>Стаж работы более 12 лет</span>
      </div>

      <div class="doctor-card__fact">
        <i data-lucide="users-round"></i>
        <span>Приём взрослых</span>
      </div>
    </div>

    <div class="doctor-card__bottom">
      <span>Подробнее о враче</span>
      <div class="doctor-card__icon"><i data-lucide="arrow-up-right"></i></div>
    </div>
  </article>

  <article class="doctor-card">
    <a class="doctor-card__link" href="#" aria-label="Подробнее о враче"></a>

    <div class="doctor-card__image">
      <img src="assets/img/doctor.webp" alt="Реут Анастасия Федоровна">
    </div>

    <div class="doctor-card__main">
      <h3 class="doctor-card__name">Реут<br>Анастасия Федоровна</h3>
      <div class="doctor-card__position text-format text-clean">Стоматолог-терапевт</div>
    </div>

    <div class="doctor-card__badge">Врач высшей категории</div>

    <div class="doctor-card__info">
      <div class="doctor-card__fact">
        <i data-lucide="gem"></i>
        <span>Стаж работы более 15 лет</span>
      </div>

      <div class="doctor-card__fact">
        <i data-lucide="users-round"></i>
        <span>Приём взрослых</span>
      </div>
    </div>

    <div class="doctor-card__bottom">
      <span>Подробнее о враче</span>
      <div class="doctor-card__icon"><i data-lucide="arrow-up-right"></i></div>
    </div>
  </article>

  <article class="doctor-card">
    <a class="doctor-card__link" href="#" aria-label="Подробнее о враче"></a>

    <div class="doctor-card__image">
      <img src="assets/img/doctor.webp" alt="Арустамов Христофор Александрович">
    </div>

    <div class="doctor-card__main">
      <h3 class="doctor-card__name">Арустамов<br>Христофор Александрович</h3>
      <div class="doctor-card__position text-format text-clean">Стоматолог-ортодонт</div>
    </div>

    <div class="doctor-card__badge">Врач высшей категории</div>

    <div class="doctor-card__info">
      <div class="doctor-card__fact">
        <i data-lucide="gem"></i>
        <span>Стаж работы более 11 лет</span>
      </div>

      <div class="doctor-card__fact">
        <i data-lucide="users-round"></i>
        <span>Приём взрослых и детей</span>
      </div>
    </div>

    <div class="doctor-card__bottom">
      <span>Подробнее о враче</span>
      <div class="doctor-card__icon"><i data-lucide="arrow-up-right"></i></div>
    </div>
  </article>


</div>
    </div>
  </section>
</main>
<section class="appointment section" id="appointment">
  <div class="container">
    <div class="appointment__inner">
      <div class="appointment__img"><img src="assets/img/appointment.webp" alt="Интерьер Moscow Dental Clinic"></div>
      <div class="appointment__content">
        <h3 class="appointment__title text-format"> Запишитесь на прием </h3>
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