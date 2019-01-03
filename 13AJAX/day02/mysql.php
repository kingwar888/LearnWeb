<?php
//使用php代码操作mysql服务器
$i=$_REQUEST['cid'];
$n=$_REQUEST['cname'];
$c=$_REQUEST['count'];
//1连接到mysql服务器
$conn =mysqli_connect('127.0.0.1','root',"",'dangdang',3306);
//var_dump($conn);
//2发送sql命令到mysql服务器
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql="INSERT INTO dd_category VALUES('$i','$n','$c')";
$result=mysqli_query($conn,$sql);
//3查看mysql服务器返回的执行结果
if($result){echo "连接数据库成功。执行成功";}
    else{echo "执行失败，检查sql语句";}

?>