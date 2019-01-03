<?php
$list = [21,54,25,60];
foreach($list as $num){
    echo "$num <br>";
}
echo '<hr>';
foreach($list as $key=>$num){
    echo "$key - $num<br>";
}
echo '<hr>';

//关联数组只能使用foreach
$emp = ['pid'=>'101','pname'=>'tom'];
foreach($emp as $k=>$v){
    echo "$k - $v<br>";
}

?>