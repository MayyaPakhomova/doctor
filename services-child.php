<?php
include $_SERVER['DOCUMENT_ROOT'] . '/head.php';
include $_SERVER['DOCUMENT_ROOT'] . '/header.php';
?>
<main>
<section class="services-hero">
  <div class="container">
    <div class="services-hero__inner">
      <div class="services-hero__content">
        <nav class="breadcrumbs dark" aria-label="Хлебные крошки">
          <ul class="breadcrumbs__list" itemscope itemtype="https://schema.org/BreadcrumbList">
            <li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <a href="index.php" class="breadcrumbs__link" itemprop="item"><span itemprop="name">Главная</span></a>
              <meta itemprop="position" content="1">
            </li>
            <li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <a href="services.php" class="breadcrumbs__link" itemprop="item"><span itemprop="name">Услуги</span></a>
              <meta itemprop="position" content="2">
            </li>
            <li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <span class="breadcrumbs__current" itemprop="name">Челюстно-лицевая хирургия</span>
              <meta itemprop="position" content="3">
            </li>
          </ul>
        </nav>
        <h1 class="services-hero__title text-format">Удаление инородных тел и санация гайморовой пазухи</h1>
        <div class="services-hero__text text-format text-clean">
          Хирургическое лечение заболеваний и состояний челюстно-лицевой области, восстановление мягких и костных тканей.
        </div>
        <a class="button services-hero__button" href="#appointment">Получить кончультацию</a>
      </div>
      <div class="services-hero__visual">
        <div class="services-hero__image">
          <img src="assets/img/servises/dental-crown.webp" alt="Челюстно-лицевая хирургия">
        </div>
      </div>
    </div>
  </div>
</section>
<section class="direction-services">
  <div class="container">
    <div class="direction-services__inner">
      <div class="direction-services__list direction-services__list--4">
        <a class="direction-services__item" href="#">
          <h3 class="direction-services__name h3-small">Имплантация зубов</h3>
          <div class="direction-services__text text-format text-clean">
            Восстановление утраченных зубов с помощью имплантатов и последующего протезирования.
          </div>
          <div class="direction-services__button">Подробнее <i data-lucide="arrow-right"></i></div>
        </a>

        <a class="direction-services__item" href="#">
          <h3 class="direction-services__name h3-small">Удаление зубов</h3>
          <div class="direction-services__text text-format text-clean">
            Бережное удаление зубов по показаниям с сохранением окружающих тканей.
          </div>
          <div class="direction-services__button">Подробнее <i data-lucide="arrow-right"></i></div>
        </a>

        <a class="direction-services__item" href="#">
          <h3 class="direction-services__name h3-small">Удаление зуба мудрости</h3>
          <div class="direction-services__text text-format text-clean">
            Удаление зубов мудрости, в том числе при сложном положении и неполном прорезывании.
          </div>
          <div class="direction-services__button">Подробнее <i data-lucide="arrow-right"></i></div>
        </a>

        <a class="direction-services__item" href="#">
          <h3 class="direction-services__name h3-small">Костная пластика</h3>
          <div class="direction-services__text text-format text-clean">
            Восстановление необходимого объёма костной ткани перед установкой имплантатов.
          </div>
          <div class="direction-services__button">Подробнее <i data-lucide="arrow-right"></i></div>
        </a>

        <a class="direction-services__item" href="#">
          <h3 class="direction-services__name h3-small">Синус-лифтинг</h3>
          <div class="direction-services__text text-format text-clean">
            Увеличение объёма костной ткани в боковых отделах верхней челюсти перед имплантацией.
          </div>
          <div class="direction-services__button">Подробнее <i data-lucide="arrow-right"></i></div>
        </a>

        <a class="direction-services__item" href="#">
          <h3 class="direction-services__name h3-small">Тоннельная пластика</h3>
          <div class="direction-services__text text-format text-clean">
            Малотравматичная коррекция мягких тканей с сохранением естественного контура десны.
          </div>
          <div class="direction-services__button">Подробнее <i data-lucide="arrow-right"></i></div>
        </a>

        <a class="direction-services__item" href="#">
          <h3 class="direction-services__name h3-small">Пластика мягких тканей</h3>
          <div class="direction-services__text text-format text-clean">
            Восстановление объёма и формы мягких тканей вокруг зубов и имплантатов.
          </div>
          <div class="direction-services__button">Подробнее <i data-lucide="arrow-right"></i></div>
        </a>

        <a class="direction-services__item" href="#">
          <h3 class="direction-services__name h3-small">All-on-4/6</h3>
          <div class="direction-services__text text-format text-clean">
            Восстановление зубного ряда на четырёх или шести имплантатах с опорой для несъёмной конструкции.
          </div>
          <div class="direction-services__button">Подробнее <i data-lucide="arrow-right"></i></div>
        </a>
      </div>
    </div>
  </div>
</section>
<section class="service-content section">

  <div class="container">

    <div class="service-content__inner">
      <div class="service-content__main wysiwyg-component text-format">
        <h2>Тестовый заголовок второго уровня</h2>

        <p>Это тестовый текст для проверки отображения контента на странице стоматологической услуги.</p>

        <p>Этот абзац нужен, чтобы оценить ширину строки, межстрочные интервалы, отступы между элементами и общее восприятие длинного текста в информационном блоке.</p>

        <p>Содержание здесь условное и используется только для проверки вёрстки. Финальный текст будет подготовлен отдельно для каждой страницы услуги или направления.</p>

        <h3>Тестовый заголовок третьего уровня</h3>

        <p>Ниже расположены примеры элементов, которые могут встречаться в реальном стоматологическом материале: обычный текст, списки, изображения, подписи и ссылки.</p>

        <p>Этот текст не является медицинской рекомендацией и нужен исключительно для визуальной проверки компонента.</p>

        <h4>Пример подзаголовка четвёртого уровня</h4>

        <p>Маркированный список используется для проверки оформления перечней и расстояний между пунктами:</p>

        <ul>
          <li>короткий пункт;</li>
          <li>пример пункта средней длины для проверки переноса текста;</li>
          <li>более длинный пункт, который занимает заметно больше места и позволяет увидеть, как выглядит список при переносе текста на следующую строку;</li>
          <li>ещё один небольшой пункт;</li>
          <li>пункт с дополнительным пояснением, чтобы элементы списка не выглядели одинаковыми по длине.</li>
        </ul>

        <h3>Проверка нумерованного списка</h3>

        <p>Нумерованный список показывает, как будут выглядеть последовательные этапы лечения или рекомендации:</p>

        <ol>
          <li>Первый этап.</li>
          <li>Второй этап с коротким пояснением.</li>
          <li>Третий этап содержит более подробный текст и нужен для проверки переноса строки внутри нумерованного списка.</li>
          <li>Четвёртый этап.</li>
          <li>Пятый этап с дополнительной информацией для проверки расстояния между строками.</li>
        </ol>

        <p>Также здесь можно проверить оформление обычной <a href="#">текстовой ссылки</a> внутри абзаца.</p>
        <h3>Проверка таблицы</h3>

        <p>Таблица нужна для проверки заголовков, границ, строк разной длины и горизонтального скролла на небольших экранах.</p>

        <table>
          <thead>
            <tr>
              <th>Процедура</th>
              <th>Продолжительность</th>
              <th>Дополнительная информация</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Консультация</td>
              <td>30–40 минут</td>
              <td>Осмотр и обсуждение дальнейших действий.</td>
            </tr>

            <tr>
              <td>Диагностика</td>
              <td>Зависит от исследования</td>
              <td>Может включать снимки, КТ или цифровое сканирование в зависимости от клинической ситуации.</td>
            </tr>

            <tr>
              <td>Лечение</td>
              <td>Индивидуально</td>
              <td>Количество посещений и продолжительность каждого этапа определяются после осмотра.</td>
            </tr>

            <tr>
              <td>Контрольный приём</td>
              <td>Около 20 минут</td>
              <td>Проверка результата лечения.</td>
            </tr>
          </tbody>
        </table>
        <figure>
          <img src="assets/img/servises/dental-crown.webp" alt="Тестовое изображение">
          <figcaption>Тестовая подпись к изображению для проверки оформления.</figcaption>
        </figure>

        <h3>Проверка дополнительных элементов</h3>

        <p>Этот раздел нужен только для оценки того, как разные типы контента сочетаются между собой на одной странице.</p>

        <blockquote>
          <p>Даже при большом объёме информации текст должен оставаться понятным и легко читаться.<br>Для этого важны ширина строки, интервалы и визуальное разделение смысловых блоков.</p>
        </blockquote>

        <p>После согласования дизайна этот демонстрационный текст будет заменён на реальный контент конкретной услуги.</p>
      </div>
      <aside class="service-content__sidebar" id="appointment">
        <div class="service-form">
          <h3 class="service-form__title h3-small">Получить консультацию</h3>
          <div class="service-form__text text-format text-clean">
            Оставьте контакты, администратор свяжется с вами и поможет подобрать удобное время.
          </div>
          <div class="service-form__form">
            <div class="service-form__fields">
              <div class="service-form__field">
                <input type="text" name="name" placeholder="Имя">
              </div>
              <div class="service-form__field">
                <input type="tel" name="phone" placeholder="Телефон">
              </div>
            </div>
            <button class="button service-form__button mini" type="submit">Получить консультацию</button>
            <div class="service-form__policy">
              <label>
                <input type="checkbox">
                <span>Я согласен на <a href="/soglasie-na-obrabotku-personalnyh-dannyh/">обработку персональных данных</a></span>
              </label>
            </div>
            <div class="service-form__policy">
              <label>
                <input type="checkbox">
                <span>Я ознакомлен с <a href="/politika-konfidencialnosti/">политикой конфиденциальности</a></span>
              </label>
            </div>
          </div>
        </div>
      </aside>
    </div>

  </div>
</section>
<section class="faq section">
  <div class="container">
    <div class="faq__title top-title text-format">
      <h2>Часто спрашивают</h2>
      <div class="top-title__text">
        <p>Собрали вопросы, которые чаще всего возникают перед консультацией челюстно-лицевого хирурга.</p>
        <p>Точный план лечения врач определяет только после осмотра и диагностики.</p>
      </div>
    </div>
    <div class="faq-accordion">
      <div class="faq-accordion__item is-open">
        <button class="faq-accordion__head" type="button">
          <span class="faq-accordion__title">Обязательно ли понадобится операция?</span>
          <span class="faq-accordion__icon"></span>
        </button>
        <div class="faq-accordion__content">
          <div class="faq-accordion__inner text-format">
            Нет. Консультация хирурга не означает, что вмешательство обязательно. Сначала врач оценивает ситуацию и результаты диагностики, после чего объясняет возможные варианты лечения и рекомендует операцию только при наличии показаний.
          </div>
        </div>
      </div>
      <div class="faq-accordion__item">
        <button class="faq-accordion__head" type="button">
          <span class="faq-accordion__title">Будет ли больно во время лечения?</span>
          <span class="faq-accordion__icon"></span>
        </button>
        <div class="faq-accordion__content">
          <div class="faq-accordion__inner text-format">
            Хирургические вмешательства проводят с обезболиванием. Врач заранее объясняет, какой вариант анестезии подходит в конкретной ситуации и чего ожидать во время процедуры и после неё.
          </div>
        </div>
      </div>
      <div class="faq-accordion__item">
        <button class="faq-accordion__head" type="button">
          <span class="faq-accordion__title">Сколько времени занимает восстановление?</span>
          <span class="faq-accordion__icon"></span>
        </button>
        <div class="faq-accordion__content">
          <div class="faq-accordion__inner text-format">
            Срок восстановления зависит от вида и объёма вмешательства. После лечения врач даст рекомендации по уходу, питанию и ограничениям, а при необходимости назначит контрольные осмотры.
          </div>
        </div>
      </div>
      <div class="faq-accordion__item">
        <button class="faq-accordion__head" type="button">
          <span class="faq-accordion__title">Насколько безопасно хирургическое лечение?</span>
          <span class="faq-accordion__icon"></span>
        </button>
        <div class="faq-accordion__content">
          <div class="faq-accordion__inner text-format">
            Перед вмешательством врач оценивает состояние пациента, результаты диагностики и возможные риски. Если требуются дополнительные обследования или консультации других специалистов, это обсуждается до начала лечения.
          </div>
        </div>
      </div>
      <div class="faq-accordion__item">
        <button class="faq-accordion__head" type="button">
          <span class="faq-accordion__title">Можно ли заранее узнать стоимость лечения?</span>
          <span class="faq-accordion__icon"></span>
        </button>
        <div class="faq-accordion__content">
          <div class="faq-accordion__inner text-format">
            Ориентировочную стоимость можно обсудить на консультации, но окончательная сумма зависит от диагноза, объёма вмешательства и необходимых этапов лечения. После обследования врач сможет составить более точный план.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</main>
<?php
include $_SERVER['DOCUMENT_ROOT'] . '/footer.php';
?>