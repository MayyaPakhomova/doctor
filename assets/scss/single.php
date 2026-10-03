<?php get_header(); ?>
<?php if (have_posts()) :
  while (have_posts()) :
    the_post();
?>
    <main>
      <section class="page-new">
        <div class="container">
          <div class="page-new__date section__label teal">
            <?php echo get_the_date('d.m.Y'); ?>
          </div>
          <h1 class="h1-title h2 text-format">
            <?php the_title(); ?>
          </h1>
          <article id="page-new-<?php the_ID(); ?>" <?php post_class(); ?>>
            <div class="grid-block">
              <div class="page-new__left block-sticky">
                <?php if (has_post_thumbnail()) : ?>
                  <?php the_post_thumbnail('full'); ?>
                <?php else : ?>
                  <img src="/wp-content/uploads/2026/04/placeholder.webp" alt="<?php the_title(); ?>">
                <?php endif; ?>
              </div>
              <div class="page-new__right">

                <div class="page-new__content entry-content  text-format">
                  <?php the_content(); ?>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section class="page-new-other section">
        <div class="container">
          <div class="h2-top section__label">
            Другие новости
          </div>
          <h2 class="h1-title h2">
            Последние публикации
          </h2>
          <div class="page-new-other__list">
            <?php
            $current_id = get_the_ID();

            $args = array(
              'post_type'      => 'post',
              'posts_per_page' => 3,
              'post__not_in'   => array($current_id),
            );

            $news_query = new WP_Query($args);

            if ($news_query->have_posts()) :
              while ($news_query->have_posts()) : $news_query->the_post();
            ?>
                <article class="page-new-other__item">
                  <a href="<?php the_permalink(); ?>"></a>
                  <div class="page-new-other__image">
                    <?php if (has_post_thumbnail()) : ?>
                      <?php the_post_thumbnail('full'); ?>
                    <?php else : ?>
                      <img src="/wp-content/uploads/2026/04/placeholder.webp" alt="<?php the_title(); ?>">
                    <?php endif; ?>
                  </div>
                  <div class="page-new-other__content">
                    <div class="page-new-other__inner">
                      <div class="page-new-other__date">
                        <?php echo get_the_date('d.m.Y'); ?>
                      </div>
                      <h3 class="page-new-other__title text-format">
                        <?php the_title(); ?>
                      </h3>
                      <div class="page-new-other__excerpt text-format">
                        <?php echo wp_trim_words(get_the_excerpt(), 20, '...'); ?>
                      </div>
                    </div>
                    <a href="<?php the_permalink(); ?>" class="button small blue">
                      Подробнее
                    </a>
                  </div>
                </article>
            <?php
              endwhile;
            endif;
            wp_reset_postdata();
            ?>
          </div>
          <a class="button center" href="<?php echo get_permalink(get_option('page_for_posts')); ?>">
            Смотреть все новости
          </a>
        </div>
      </section>
    </main>
<?php
  endwhile;
endif;
get_footer();
