<?php
if (array_key_exists("query",$_GET)){
    $query = $_GET['query'];
    $r = array();
    foreach ($foods as $food) {
        if (stripos($food->name, $query) !== false) {
            $r[] = $food;
        }
    }
    $res = json_encode($r);
}else{
    $res = $foods;
}
print($res);
?>
