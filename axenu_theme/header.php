<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo get_bloginfo( 'name' ); ?></title>
    <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="<?php echo get_bloginfo('template_directory'); ?>/css/stylesheet.css">
    <?php wp_head(); ?>
  </head>
  <body>
    <!-- <h1><a href="<?php echo get_bloginfo( 'wpurl' );?>"><?php echo get_bloginfo( 'name' ); ?></a></h1> -->

    <nav>
      <ul>
        <?php wp_list_pages( '&title_li=' ); ?>
      </ul>
      <h2>About Axenu</h2>
    </nav>
    <!-- <img class="header_image" alt="Axenu header image" src="<?php echo get_bloginfo('template_directory'); ?>/images/header_image.jpg"/> -->
