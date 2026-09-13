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

            <a href="#cases" class="button trans">
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

            <a href="#cases" class="button trans">
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
      <h2 class="services__title">
        Наши направления
      </h2>

      <div class="services__items">

        <a href="#" class="services-item">
          <div class="services-item__wrapper">
            <div class="services-item__img">
              <img src="assets/img/servises/dentistry.webp" alt="">
            </div>

            <div class="services-item__content text-format">
              <h3 class="services-item__title">
                Лечение и профилактика
              </h3>

              <div class="services-item__text">
                <p>
                  Диагностика, лечение, хирургия и профессиональная гигиена.
                </p>

                <p>
                  Помогаем сохранить здоровье зубов и предупредить заболевания.
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
                  Восстановление функции и эстетики зубов современными конструкциями.
                </p>
                <p>
                  Подбираем решение с учетом клинической ситуации и задач восстановления.
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
                  Восстановление отсутствующих зубов с помощью имплантов.
                </p>
                <p>
                  Планируем лечение с учетом состояния кости и вида протезирования.
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
                Исправление прикуса
              </h3>

              <div class="services-item__text">
                <p>
                  Коррекция положения зубов и прикуса ортодонтическими системами.
                </p>

                <p>
                  Учитываем особенности зубного ряда и пожелания пациента.
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
    </div>
  </section>
</main>
<!-- <section class="section" style="min-height: 100vh;"></section>
<section class="section" style="min-height: 100vh; background: var(--dark);"></section>
<section class="section" style="min-height: 100vh; background: var(--dark);"></section>
<section class="section" style="min-height: 100vh; background: var(--dark);"></section>
<section class="section" style="min-height: 100vh; background: var(--dark);"></section>
<section class="section" style="min-height: 100vh; background: var(--dark);"></section>
<section class="section" style="min-height: 100vh; background: var(--dark);"></section>
<section class="section" style="min-height: 100vh;"></section>
<section class="section" style="min-height: 100vh; "></section>
<section class="section" style="min-height: 100vh; "></section>
<section class="section" style="min-height: 100vh; "></section>
<section class="section" style="min-height: 100vh; background: var(--dark);"></section>
<section class="section" style="min-height: 100vh; background: var(--dark);"></section>
<section class="section" style="min-height: 100vh; background: var(--dark);"></section> -->


<?php
include $_SERVER['DOCUMENT_ROOT'] . '/footer.php';
?>