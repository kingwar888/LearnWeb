var adv = {
    DISTANCE: 0,//总距离：动态获得adv的高
    DURATION: 2000,//总时间
    STEPS: 400,//总步数
    step: 0,//步长：总距离/总步数 
    interval: 0,//间隔：总时间/总步数 >5ms
    div: null,//保存id为msg的div
    timer: null,//保存定时器序号
    moved: 0,//保存已经走的步数
    WAIT: 3000,//保存下移结束后，等到一段时间继续上移
    init() {//初始化adv对象
        //获得id为msg的div保存在div的属性中
        this.div = document.getElementById("msg");
        //获得div计算后的样式中的height，转为浮点数保存在DISTANCE属性中
        this.DISTANCE = parseFloat(getComputedStyle(this.div).height);
        //计算step：DISTANCE/STEPS
        this.step = this.DISTANCE / this.STEPS;
        //计算interval：DURATION/STEPS
        this.interval = this.DURATION / this.STEPS;
        this.move(1);//启动移动
        //为div的第一个子元素绑定单击事件
        this.div.firstElementChild.onclick =
            this.move.bind(this, -1);
    },
    move(dir) {//启动移动
        if (this.timer == null)//加判断条件防止动画叠加
            //启动周期性定时器，设置任务为moveStep，设置时间间隔为interval，将序号保存在timer属性中
            this.timer = setInterval(this.moveStep.bind(this, dir), this.interval);
    },
    moveStep(dir) {//任务函数：修改div的bottom+step
        //获得div计算后的bottom
        var bottom = parseFloat(getComputedStyle(this.div).bottom);
        //设置div的bottom为bottom+step
        this.div.style.bottom = bottom + dir * this.step + "px";//用dir参数的正负来控制加减
        this.moved++;//将moved加一
        if (this.moved == this.STEPS) {
            //停止定时器，清除timer
            clearInterval(this.timer);
            this.timer = null;
            this.moved = 0;//moved归零
            if (dir == -1)//如果dir等于-1说明刚刚下移了
                //启动一次性定时器，等待WAIT毫秒后，自动执行move（1）
                setTimeout(this.move.bind(this, 1), this.WAIT);
        }
    }
}
adv.init();