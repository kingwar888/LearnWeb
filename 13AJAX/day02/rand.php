<?php
//创建一个函数randcolor。返回一个字符串形如‘rgb（220,99,09）’，多次调用函数
$msg = "hello<br>";
function randcolor()
{
    global $msg;
    echo $msg;//申明使用全局变量 函数内是无法是用外部的全局变量的，必须使用global申明一下才可以
    $r = rand(0, 255);
    $g = rand(0, 255);
    $b = rand(0, 255);
    echo "rgb($r,$g,$b)";
}
randcolor();
?>