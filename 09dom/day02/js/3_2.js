//获得name为username的元素
var txtName = document.getElementsByName("username")[0];
//为txtname绑定获得焦点事件
txtName.onfocus = getFocus;
function getFocus() {//this->txtName
    //为当前文本框穿txt_focus
    this.className = "txt_focus";
    //找到当前文本框的父元素的下一个兄弟元素的第一个子元素，清除其class
    this.parentNode
        .nextElementSibling
        .firstElementChild
        .className = "";
}
//为txtname绑定失去焦点事件
txtName.onblur = function () {//this->txtName
    //定义正则reg：10个字符以内的字母，数字或者_

    vali(this, /^\w{1,10}$/);
}
function vali(txt, reg) {
    //清除txt的class
    txt.className = "";
    //找到txt的父元素的下一个兄弟元素的第一个子元素，保存在div中
    var div = txt.parentNode
        .nextElementSibling
        .firstElementChild
    //如果用reg检测txt的内容通过
    if(reg.test(txt.value))
    //为div穿上vali_success
    div.className="vali_success"
    else//否则
    //为div穿上vali_fail
    div.className="vali_fail"    
}
//获得name为pwd的元素
var txtPwd = document.getElementsByName("pwd")[0];
//为txtPwd绑定获得焦点事件
txtPwd.onfocus = getFocus;
//为txtPwd绑定失去焦点事件
txtPwd.onblur = function () {
    //定义正则：六位数字
    vali(this, /^\d{6}$/);
}