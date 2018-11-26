//获得id为unsel的元素的内容，去掉开头的空字符<option>和结尾</option>空字符，按照</option>空字符<option>切割，保存到变量unselCts中
var unselCts =
    document.getElementById("unsel")
        .innerHTML
        .replace(/^\s*<option>|<\/option\s*$>/g, "")
        .split(/<\/option>\s*<option>/);
//创建空数组selCts
var selCts = [];
//获得4个button元素,存到btns中
var btns = document.getElementsByTagName("button");
//遍历btns，为每个btn绑定单击事件
for (var i = 0, len = btns.length; i < len; i++) {
    btns[i].onclick = move;
}
function move() {//定义move函数
    switch (this.innerHTML) {
        //如果当前按钮的内容为>>
        case "&gt;&gt;":
            //将unselCts拼接到selCts结尾
            selCts = selCts.concat(unselCts);
            //清空unselCts
            unselCts = [];
            break;
        case "&lt;&lt;":
            //将selCts拼接到unselCts结尾
            unselCts = unselCts.concat(selCts)
            //清空selCts
            selCts = [];
        case "&gt;":
            //获得unsel元素下所有option，保存在opts
            var opts = unsel.getElementsByTagName("option");
            //从后向前遍历opts中每个opt
            for (var i = opts.length - 1; i >= 0; i--) {
                //如果当前opt的selected为true
                if (opts[i].selected)
                    //删除unseCts数组中当前位置的元素，追加到selCts
                    selCts.push(unselCts.splice(i, 1)[0])
            }//将selCts数组按国家名称升序排列
            //排序sort
            selCts.sort();
        case "&lt;":
            //获得sel元素下所有option，保存在opts
            var opts = sel.getElementsByTagName("option");
            //从后向前遍历opts中每个opt
            for (var i = opts.length - 1; i >= 0; i--) {
                //如果当前opt的selected为true
                if (opts[i].selected)
                    //删除seCts数组中当前位置的元素，追加到unselCts
                    unselCts.push(selCts.splice(i, 1)[0])
            }//将selCts数组按国家名称升序排列
            //排序sort
            selCts.sort();


    }
    //将unselCts更新到unsel的元素上
    updateView(unselCts, unsel);
    //将selCts更新到sel的元素上
    updateView(selCts, sel);
}
//专门将一个数组更新到sel元素
function updateView(arr, sel) {
    //设置sel的内容为：
    //arr按</Option><Option>拼接，再开头拼<Option>,结尾拼</option>
    sel.innerHTML = arr.length != 0 ? "<option>" +
        arr.join("</option><option>")
        + "</option>" : "";
}