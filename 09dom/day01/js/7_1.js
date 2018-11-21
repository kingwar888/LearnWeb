//找class为tree的ul下的span，保存在spans中
var spans = document.querySelectorAll("ul.tree span");
for (var i = 0; i < spans.length; i++) {//遍历spans中每个span
    //为当年span绑定单击事件toggle
    spans[i].onclick = toggle;
}
function toggle() {//定义函数toggle
    if (this.className == "open") {//如果当前span的className为open
        //修改当前span的className为closed
        this.className = "closed";
        //获取当年span的下一个兄弟，修改其className为hide
        this.nextElementSibling.className = "hide";
    } else {//否则
        //找到class为tree的ul下class为open的span
        var span = document.querySelector("ul.tree span.open");//两个选择一起表示而且
        if (span) {//如果span不是null   //if条件会自动转bool
            //修改span的className为closed
            span.className = "closed";
            //获取span的下一个兄弟，修改其class为hide
            span.nextElementSibling.className = "hide";
        }//修改当前span的className为open
        this.className = "open";
        //获取当前span的下一个兄弟，修改其className为show
        this.nextElementSibling.className = "show";
    }
}         