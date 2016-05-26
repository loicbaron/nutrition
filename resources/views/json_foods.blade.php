<?php
$f = array();
foreach ($foods as $food) {
    $f[] = $food->name;
}
print(json_encode($f));
?>
