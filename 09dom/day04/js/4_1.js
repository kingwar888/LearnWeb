var span = document.getElementById("time");
function task() {
    var now = new Date();
    var target = new Date("2019/01/01");
    var s = parseInt((target - now) / 1000);
    if (s >= 0) {//判断临界条件
        var days = parseInt(s / 3600 / 24);
        var hs = parseInt(s / 3600 % 24);
        var ms = parseInt(s / 60 % 60);
        var ss = s % 60;
        span.innerHTML =
            `${days}天${hs}小时${ms}分${ss}秒`;
    }else{//如果达到临界条件就执行
        clearInterval(timer);//到时间自动停止定时器
        span.innerHTML="happy new year";
    }
}
task();
var timer = setInterval(task, 1000);
//找到id为btn的按钮，绑定单击事件
document.getElementById("btn").onclick = function () {
    if (this.innerHTML == "||") {
        clearInterval(timer);
        this.innerHTML = "|&gt;";
    } else {
        timer = setInterval(task, 1000);
        this.innerHTML = "||";
    }
}
