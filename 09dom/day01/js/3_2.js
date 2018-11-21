//定义函数: 先遍历给定父元素的直接子节点
function getChildren1(parent){
  //如果parent不是文本节点，就输出节点名，否则输出节点值
  console.log(parent.nodeType!=3?parent.nodeName:parent.nodeValue);
  //遍历parent下所有直接子节点
  var children=parent.childNodes;
  for(var i=0,len=children.len;i<len;i++){//直接在前面定义len长度，提高效率
      getChildren1(children[i]);//递归遍历（深度优先） 效率低
  }
}
//使用节点迭代器
function getChildren2(parent){
  //创建迭代器对象
  var iterator=document.createNodeIterator(
      parent,NodeFilter.SHOW_ALL,null,false
  );
  //用循环反复调用迭代器的nextNode（）跳向下一个节点
  var node;
  while((node=iterator.nextNode())!=null){
    console.log(node.nodeType!=3?node.nodeName:node.nodeValue);
  }
}
getChildren2(document.body);




