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
    for($a=0;$a<10;$a++){
        for($i=0;$i<$a;$i++){
            echo $a."*".$i."=".$a*$i;
        }
        echo("<br>");
    }
    ?>
</body>
</html>