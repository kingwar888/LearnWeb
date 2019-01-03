<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
    <?php
    $list=[
    ['pid'=>101,'pname'=>'kele','price'=>'3.5','birthday'=>'1234567890123','isOnsale'=>true,'pic'=>'img/101.jpg'],
    ['pid'=>102,'pname'=>'xuebi','price'=>'3.0','birthday'=>'1234567890123','isOnsale'=>true,'pic'=>'img/102.jpg'],
    ['pid'=>103,'pname'=>'fenda','price'=>'3.5','birthday'=>'1234567890123','isOnsale'=>true,'pic'=>'img/103.jpg'],
    ['pid'=>104,'pname'=>'meinianda','price'=>'3.5','birthday'=>'1234567890123','isOnsale'=>true,'pic'=>'img/104.jpg']
    
    ];
    $list[]=['pid'=>105,'pname'=>'wanglaoji','price'=>'4.5','birthday'=>'1234567890123','isOnsale'=>true,'pic'=>'img/105.jpg'];
    //var_dump($list);
    echo '<table width="100%" border="1">';
    echo '<thead><tr><th>编号</th><th>名称</th><th>单价</th><th>生产日期</th><th>是否特价</th><th>图片</th></tr></thead>';
    echo '<tbody>';
    for($i=0;$i<count($list);$i++){
        $p=$list[$i];
        echo '<tr>';
        echo "<td>$p[pid]</td>";
        echo "<td>$p[pname]</td>";
        echo "<td>$p[price]</td>";
        echo "<td>$p[birthday]</td>";
        echo "<td>$p[isOnsale]</td>";
        echo "<td>$p[pic]</td>";
        echo '</tr>';
    }
    echo '</tbody>';
    echo '</table>'

    ?>
</body>
</html>