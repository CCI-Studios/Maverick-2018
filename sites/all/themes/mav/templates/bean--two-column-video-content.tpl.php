<?php
/**
 * @file
 * Default theme implementation for beans.
 *
 * Available variables:
 * - $content: An array of comment items. Use render($content) to print them all, or
 *   print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $title: The (sanitized) entity label.
 * - $url: Direct url of the current entity if specified.
 * - $page: Flag for the full page state.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. By default the following classes are available, where
 *   the parts enclosed by {} are replaced by the appropriate values:
 *   - entity-{ENTITY_TYPE}
 *   - {ENTITY_TYPE}-{BUNDLE}
 *
 * Other variables:
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 *
 * @see template_preprocess()
 * @see template_preprocess_entity()
 * @see template_process()
 */
$classes .= ' video-' . $content['field_image_alignment']['#items'][0]['value'];

// make the path to video file
$url = file_create_url($content['field_video'][0]['#file']->uri);
$url = parse_url($url);
$path = $url['path'];
?>
<div class="<?php print $classes; ?> clearfix"<?php print $attributes; ?> >
  <div class="content"<?php print $content_attributes; ?>><div>
    <?php if ($title): ?><h2 class="block-title"><?php print $title; ?></h2><?php endif; ?>
    <?php print render($content['field_body']); ?>
  </div></div>
  <div class="video">
    <video controls>
      <source src="<?php print $path; ?>" type="video/mp4">
      <p><?php print t('Your browser does not support embedded videos.'); ?></p>
    </video>
  </div>
</div>
