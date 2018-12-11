document.getElementById("pop").onclick = function () {
    alert("约么");
}
var Game = {
    div: null,//保存主角div
    PSIZE: 0,//保存div的大小
    MAXTOP: 0, MAXLEFT: 0,//保存最大的top和left的值
    init() {//
        //查找id为pop的div保存在div属性中
        this.div = document.getElementById("pop");
        //获得div计算后的宽，转为浮点数保存在PSIZE属性
        this.PSIZE = parseFloat(getComputedStyle(this.div).width)
        //计算MAXTOP:innerHeight-PSIZE
        this.MAXTOP = innerHeight - this.PSIZE;
        //计算MAXLEFT:innerWidth-PSIZE
        this.MAXLEFT = innerWidth - this.PSIZE;
        //生成随机top和left保存在变量posi中
        this.setPosi(this.randomPosi());//将posi设置为div的位置
        //为图片绑定mouseOver事件
        this.div.onmouseover = function (e) {
            while (true) {//反复计算随机位置
                var posi = this.randomPosi();
                //获得鼠标相对于文档显示区的位置
                var x = e.clientX, y = e.clientY;
                //如果新位置不包含x和y坐标
                if (!(x >= posi.left && x <= posi.left + this.PSIZE && y >= posi.top && y < posi.top + this.PSIZE)) {
                    this.setPosi(posi);//才将posi设置为div的新位置
                    break;//退出循环
                }
            }
        }.bind(this);
    },
    setPosi(posi) {//将生成的posi对象设置为div的位置
        //设置div的top为posi的top+px
        this.div.style.top = posi.top + "px";
        //设置div的left为posi的left+px
        this.div.style.left = posi.left + "px";
    },
    randomPosi() {//生成随机top和left
        //返回一个新对象：
        return {
            //top：在0-MAXTOP之间生成随机整数
            top: Math.floor(Math.random() * (this.MAXTOP + 1)),
            //left：在0-MAXLEFT之间生成随机整数
            left: Math.floor(Math.random() * (this.MAXLEFT + 1)),
        }
    },
}
Game.init();