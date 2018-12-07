function task(){//计算当前时间的三个指针角度
    //获得当前时间now
    var now=new Date();
    //获得now中的秒s
    var s=now.getSeconds();
    //计算s的角度sDeg
    var sDeg=s/60*360;
    //获得now中的秒m
    var m=now.getMinutes();
    //计算m的角度mDeg
    var mDeg=(m*60+s)/3600*360;
    //获得now中的时h
    var h=now.getHours();
    //计算h的角度hDeg
    var hDeg=(h*3600+m*60+s)/(3600*12)*360;
    //设置divS的style的transform为“rotate（sDegdeg）”
    document.getElementById("s").style.transform="rotate("+sDeg+"deg)";
    //设置divM的style的transform为“rotate（mDegdeg）”
    document.getElementById("m").style.transform="rotate("+mDeg+"deg)";
    //设置divH的style的transform为“rotate（hDegdeg）”
    document.getElementById("h").style.transform="rotate("+hDeg+"deg)";
}
task();
setInterval(task,5000);