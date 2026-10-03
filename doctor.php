<?php
include $_SERVER['DOCUMENT_ROOT'] . '/head.php';
include $_SERVER['DOCUMENT_ROOT'] . '/header.php';
?>
<main>
  <div class="doctors-page">
    <div class="fluid-decor">
      <div class="fluid-glow"></div>
    </div>
    <section class="doctor-single">
      <div class="container">
        <div class="doctor-single__grid">
          <div class="doctor-single__content">
            <nav class="breadcrumbs" aria-label="Хлебные крошки">
              <ul class="breadcrumbs__list" itemscope itemtype="https://schema.org/BreadcrumbList">
                <li
                  class="breadcrumbs__item"
                  itemprop="itemListElement"
                  itemscope
                  itemtype="https://schema.org/ListItem">
                  <a href="index.php" class="breadcrumbs__link" itemprop="item">
                    <span itemprop="name">Главная</span>
                  </a>
                  <meta itemprop="position" content="1">
                </li>

                <li
                  class="breadcrumbs__item"
                  itemprop="itemListElement"
                  itemscope
                  itemtype="https://schema.org/ListItem">
                  <a href="doctors.php" class="breadcrumbs__link" itemprop="item">
                    <span itemprop="name">Врачи</span>
                  </a>
                  <meta itemprop="position" content="2">
                </li>
              </ul>
            </nav>

            <h1 class="doctor-single__title" data-doctor-title>
              Воронов
              <span>Дмитрий Анатольевич</span>
            </h1>

            <div class="doctor-single__text text-format">
              <p>Главный врач клиники, стоматолог-ортопед.</p>
              <p>Занимается комплексным восстановлением зубов, протезированием и эстетической реабилитацией улыбки.</p>
            </div>

            <button type="button" class="button doctor-single__main-button">
              Записаться на прием
            </button>
          </div>

          <aside class="doctor-single__aside">
            <div class="doctor-single__image">
              <img
                src="assets/img/voronov-dmitrij-anatolevich.webp"
                alt="Воронов Дмитрий Анатольевич">
            </div>

            <button type="button" class="button doctor-single__aside-button">
              Записаться на прием
            </button>
          </aside>
        </div>
      </div>

      <div class="doctor-single__facts">
        <div class="doctor-single__fact">
          <i data-lucide="calendar-days"></i>
          <span>18 лет опыта</span>
        </div>

        <div class="doctor-single__fact">
          <i data-lucide="gem"></i>
          <span>Врач высшей категории</span>
        </div>

        <div class="doctor-single__fact">
          <i data-lucide="graduation-cap"></i>
          <span>Кандидат медицинских наук</span>
        </div>

        <div class="doctor-single__fact">
          <i data-lucide="star"></i>
          <span>1 200+ протезирований</span>
        </div>
      </div>
    </section>
  </div>
  <section class="doctor-info section">
    <div class="container">
      <div class="doctor-info__grid">
        <div class="doctor-info__content">
          <section class="doctor-info__section">
            <h2 class="doctor-info__title">Опыт, знания, подход</h2>
            <div class="doctor-info__text text-format">
              <p>
                Главный врач клиники MDC, стоматолог-ортопед, кандидат медицинских наук,
                врач высшей категории, член-корреспондент Академии медико-технических наук.
              </p>

              <p>Опыт работы — 18 лет.</p>

              <p>Опубликовано 28 научных работ и получено 2 патента.</p>
            </div>
          </section>

          <section class="doctor-info__section">
            <h2 class="doctor-info__title">Образование</h2>

            <div class="doctor-info__education">
              <div class="doctor-info__education-item">
                <div class="doctor-info__year">1999–2004 гг.</div>

                <div class="doctor-info__text text-format">
                  <p>
                    Московский государственный медико-стоматологический университет.
                  </p>
                </div>
              </div>

              <div class="doctor-info__education-item">
                <div class="doctor-info__year">2004–2005 гг.</div>

                <div class="doctor-info__text text-format">
                  <p>
                    Интернатура на кафедре ГОС профессора Лебеденко МГМСУ.
                  </p>
                </div>
              </div>

              <div class="doctor-info__education-item">
                <div class="doctor-info__year">2005–2007 гг.</div>

                <div class="doctor-info__text text-format">
                  <p>
                    Ординатура на кафедре ГОС профессора Лебеденко МГМСУ.
                  </p>
                </div>
              </div>

              <div class="doctor-info__education-item">
                <div class="doctor-info__year">2007–2010 гг.</div>

                <div class="doctor-info__text text-format">
                  <p>
                    Аспирантура на кафедре ГОС профессора Лебеденко МГМСУ.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section class="doctor-info__section">
            <h2 class="doctor-info__title">Дополнительное образование</h2>

            <div class="doctor-info__education">
              <div class="doctor-info__education-item">
                <div class="doctor-info__year">2026 г.</div>

                <div class="doctor-info__text text-format">
                  <p>
                    Курс повышения квалификации «Современные подходы
                    к комплексной ортопедической реабилитации пациентов».
                  </p>
                </div>
              </div>

              <div class="doctor-info__education-item">
                <div class="doctor-info__year">2025 г.</div>

                <div class="doctor-info__text text-format">
                  <p>
                    Сертификат «Неинвазивный и минимально-инвазивный подход
                    в эстетической реабилитации».
                  </p>
                </div>
              </div>

              <div class="doctor-info__education-item">
                <div class="doctor-info__year">2024 г.</div>

                <div class="doctor-info__text text-format">
                  <p>
                    Практический мастер-класс «Протезирование на имплантатах:
                    планирование и выбор ортопедических конструкций».
                  </p>
                </div>
              </div>

              <div class="doctor-info__education-item">
                <div class="doctor-info__year">2023 г.</div>

                <div class="doctor-info__text text-format">
                  <p>
                    Участие в международном конгрессе «Квинтессенс Интернешнл»
                    (Москва, Россия).
                  </p>
                </div>
              </div>

              <div class="doctor-info__education-item">
                <div class="doctor-info__year">2021 г.</div>

                <div class="doctor-info__text text-format">
                  <p>
                    Семинар «Цифровое планирование протезирования:
                    внутриротовое сканирование и моделирование реставраций».
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section class="doctor-info__section">
            <h2 class="doctor-info__title">Направления работы</h2>

            <div class="doctor-info__services">
              <a href="#" class="doctor-info__service">
                <i data-lucide="square-check-big"></i>
                <span>Протезирование зубов</span>
              </a>

              <a href="#" class="doctor-info__service">
                <i data-lucide="square-check-big"></i>
                <span>Керамические виниры</span>
              </a>

              <a href="#" class="doctor-info__service">
                <i data-lucide="square-check-big"></i>
                <span>Коронки на зубы</span>
              </a>

              <a href="#" class="doctor-info__service">
                <i data-lucide="square-check-big"></i>
                <span>Комплексное восстановление зубов</span>
              </a>

              <a href="#" class="doctor-info__service">
                <i data-lucide="square-check-big"></i>
                <span>Эстетическая реабилитация улыбки</span>
              </a>
            </div>

          </section>
          <div class="doctor-info__section"> <button class="button trans-white">Вернуться к списку врачей</button></div>
        </div>

        <aside class="doctor-info__aside">
          <div class="doctor-info__doctor">
            <div class="doctor-info__image">
              <img
                src="assets/img/voronov-dmitrij-anatolevich.webp"
                alt="Воронов Дмитрий Анатольевич">
            </div>

            <div class="doctor-info__name">
              Воронов
              <span>Дмитрий Анатольевич</span>
            </div>

            <div class="doctor-info__position">
              Главный врач, стоматолог-ортопед
            </div>

            <button type="button" class="button mini">
              Записаться на прием
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</main>

<?php
include $_SERVER['DOCUMENT_ROOT'] . '/footer.php';
?>