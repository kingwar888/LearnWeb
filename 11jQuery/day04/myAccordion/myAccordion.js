if(window.jQuery===undefined)
  throw new Error("myAccordion插件依赖于jQuery")
jQuery.fn.myAccordion=function(){//this->$("#d1")
  var $parent=this;
  $parent.addClass("accordion");
  //为1,3,5div侵入: class title data-toggle='title'
  $parent.children(":nth-child(odd)")
      .addClass("title")
      .attr("data-toggle","title");
  //为2,4,6div侵入class content
  $parent.children(":nth-child(even)")
      .addClass("content")
  $parent.children(":nth-child(even):first")
      .addClass("open");
  //绑定行为
  $(".accordion").on(
  "click","[data-toggle='title']",
  function(){
    $(this).next().toggleClass("open")
      .siblings(".open")
      .removeClass("open");
  }
);
}
