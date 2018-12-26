//先判断是否提前引入了jQuery库
if(window.jQuery===undefined)
  throw new Error("dongLib插件依赖jquery.js")
//添加jQuery全局函数sum，对类数组对象中所有元素求和
$.dong={//对象,命名空间的作用
  sum:function(elems){
    var sum=0;
    $.each(elems,function(){
      sum+=parseFloat(this.innerHTML)
    });
    return sum;
  }
}
//为jQuery添加实例函数sum
jQuery.fn.sum=function(){//this->$(...)
  var sum=0;
  $.each(this,function(){//this->elem
    sum+=parseFloat(this.innerHTML)
  });
  return sum;
}