<?php
get_header();
?>
<main>
  <section class="page-new">
    <div class="container">
      <div class="page-new__date section__label teal">
        Полезно знать
      </div>
      <h1 class="h1-title h2 is-visible">
        Обзоры, статьи и события отрасли
      </h1>

      <ul class="archive-filter">
        <?php
        $current_year = get_query_var('year');
        $active_class = (!$current_year) ? ' class="active"' : '';

        echo '<li' . $active_class . '><a href="' . get_permalink(get_option('page_for_posts')) . '">Все</a></li>';

        global $wpdb;
        $years = $wpdb->get_col("
          SELECT DISTINCT YEAR(post_date)
          FROM $wpdb->posts
          WHERE post_type = 'post'
          AND post_status = 'publish'
          ORDER BY post_date DESC
        ");

        foreach ($years as $year) {
          $active_class = ($year == $current_year) ? ' class="active"' : '';
          echo '<li' . $active_class . '><a href="/' . $year . '/">' . $year . '</a></li>';
        }
        ?>
      </ul>

      <div class="grid-block">
        <div class="page-new__last">
          <?php
          $year = get_query_var('year');

          $args = array(
            'post_type'      => 'post',
            'posts_per_page' => 1,
          );

          if ($year) {
            $args['date_query'] = array(
              array(
                'year' => (int)$year,
              ),
            );
          }

          $news_query = new WP_Query($args);

          if ($news_query->have_posts()) :
            while ($news_query->have_posts()) : $news_query->the_post();
          ?>
              <div class="main-new-left__item">
                <a class="main-new-left__link" href="<?php the_permalink(); ?>"></a>

                <div class="main-new-left__image">
                  <?php if (has_post_thumbnail()) : ?>
                    <?php the_post_thumbnail('full'); ?>
                  <?php else : ?>
                    <img src="/wp-content/uploads/2026/04/placeholder.webp" alt="<?php the_title(); ?>">
                  <?php endif; ?>
                </div>

                <div class="main-new-left__date"><?php echo get_the_date('d.m.y'); ?></div>

                <div class="main-new-left__content text-format">
                  <h3 class="main-new-left__title"><?php the_title(); ?></h3>
                  <div class="main-new-left__excerpt"><?php echo wp_trim_words(get_the_excerpt(), 30, '...'); ?></div>
                </div>
              </div>
          <?php
            endwhile;
          endif;

          wp_reset_postdata();
          ?>
        </div>

        <div class="page-new__right">
          <div class="main-news-list">
            <?php
            $first_query = new WP_Query(array(
              'post_type'      => 'post',
              'posts_per_page' => 1,
            ));

            $first_post_id = 0;

            if ($first_query->have_posts()) {
              $first_query->the_post();
              $first_post_id = get_the_ID();
            }

            wp_reset_postdata();

            $year  = get_query_var('year');
            $paged = get_query_var('paged') ?: 1;

            $args = array(
              'post_type'      => 'post',
              'posts_per_page' => 6,
              'paged'          => $paged,
              'post__not_in'   => array($first_post_id),
            );

            if ($year) {
              $args['date_query'] = array(
                array(
                  'year' => (int)$year,
                ),
              );
            }

            $news_query = new WP_Query($args);

            if ($news_query->have_posts()) :
              while ($news_query->have_posts()) : $news_query->the_post();
            ?>
                <div class="main-news-list__item">
                  <a href="<?php the_permalink(); ?>"></a>

                  <div class="main-news-list__date"><?php echo get_the_date('d.m.y'); ?></div>

                  <div class="main-news-list__content text-format">
                    <h3 class="main-news-list__title"><?php the_title(); ?></h3>
                    <p class="main-news-list__excerpt"><?php echo wp_trim_words(get_the_excerpt(), 25, '...'); ?></p>
                  </div>
                </div>
            <?php
              endwhile;
            else :
              echo '<p>Записей пока нет.</p>';
            endif;

            wp_reset_postdata();
            ?>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    let currentPage = 1;
    let isFetching = false;
    let hasMore = true;

    const postContainer = document.querySelector('.main-news-list');
    const year = window.location.pathname.match(/(\d{4})\/?$/)?.[1] || '';
    const firstPostId = <?php echo (int)$first_post_id; ?>;

    function fetchArticles(page) {
      if (isFetching || !hasMore) return;

      isFetching = true;

      fetch('/wp-admin/admin-ajax.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: `action=load_more_posts&page=${page}&year=${year}&exclude=${firstPostId}`
        })
        .then(res => res.text())
        .then(data => {
          if (data.trim()) {
            const temp = document.createElement('div');
            temp.innerHTML = data;

            const items = temp.children;

            Array.from(items).forEach((el, i) => {
              el.classList.add('is-hidden');
              postContainer.appendChild(el);

              setTimeout(() => {
                el.classList.remove('is-hidden');
              }, i * 100);
            });

            isFetching = false;
          } else {
            hasMore = false;
            window.removeEventListener('scroll', handleScroll);
          }
        });
    }

    function handleScroll() {
      const scroll = window.innerHeight + window.scrollY;
      const trigger = document.body.offsetHeight - 200;

      if (scroll >= trigger) {
        currentPage++;
        fetchArticles(currentPage);
      }
    }

    window.addEventListener('scroll', handleScroll);
  });
</script>

<?php
get_footer();
