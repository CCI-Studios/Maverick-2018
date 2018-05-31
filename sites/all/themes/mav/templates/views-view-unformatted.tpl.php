<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<div class="views-row-container">
<?php
if (!empty($title)) {
  ?>
  <h2 class="views-row-title"><?php print $title;?></h2>
<?php
}
foreach ($rows as $id => $row) {
  ?>
  <div<?php
  if ($classes_array[$id]) {
    ?> class="<?php print $classes_array[$id];?>"<?php
  }
  ?>>
    <?php print $row; ?>
  </div>
<?php
}
?>
</div>
