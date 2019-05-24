<?php get_header(); ?>


<div class="card column">
  <h3 class="header-center">Axenu does this</h3>
  <div className="card-body">
    <div class="item4x4">
      <p>
        We do this
      </p>
      <img src="#" />
    </div>
    <div class="item4x4">
      <p>
        We do this
      </p>
      <img src="#" />
    </div>
    <div class="item4x4">
      <p>
        We do this
      </p>
      <img src="#" />
    </div>
    <div class="item4x4">
      <p>
        We do this
      </p>
      <img src="#" />
    </div>
  </div>
</div>

<div class="card">
  <div class="column column-vertical">
    <h3>About Axenu</h3>
    <img src="#" alt="Icon divider" />
    <p>
      vawe Duis egestas luctus tellus non sollicitudin. Morbi rutrum, risus a varius luctus, ipsum orci porta quam, ac eleifend felis orci blandit elit. Nunc blandit cursus dui, quis placerat risus elementum id. Donec ullamcorper placerat
    </p>
    <img src="#" alt="Icon divider" />
    <p>
      vawe Duis egestas luctus tellus non sollicitudin. Morbi rutrum, risus a varius luctus, ipsum orci porta quam, ac eleifend felis orci blandit elit. Nunc blandit cursus dui, quis placerat risus elementum id. Donec ullamcorper placerat
    </p>
    <button type="button" name="button">Read our story</button>
  </div>
  <div class="column full-image">
    <img src="#" alt="Image of founer"/>
    <p class="image-text">
      Simon Nilsson, CEO and founder of Axenu
    </p>
  </div>
</div>

<?php if(have_posts()) : ?>
    <?php while(have_posts())  : the_post(); ?>
      <?php the_content(); ?>
    <?php endwhile; ?>
<?php endif; ?>

<?php get_footer(); ?>
