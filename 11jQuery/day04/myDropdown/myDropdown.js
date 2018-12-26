//如果没有jQuery
if(window.jQuery===undefined)
  //报错: myDropdown部件依赖于jQuery
  throw new Error("myDropdown部件依赖于jQuery");
//为jQuery查询结果对象添加实例方法myDropdown
jQuery.fn.myDropdown=function(){
  //this->$("d1")
  //为当前元素添加class dropdown
  this.addClass("dropdown");
  //为当前元素下的a元素添加data-trigger="dropdown"
  //为a的下一个兄弟添加class: dropdown-menu和fade
  this.children("a")
      .attr("data-trigger","dropdown")
      .next().addClass("dropdown-menu fade");
  //绑定事件:已实现
  $('[data-trigger="dropdown"]').click(
        function(e){
          e.preventDefault();
          $(this).next().toggleClass("in");
        }
      );
}