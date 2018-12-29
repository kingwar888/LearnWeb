#1)设置SQL编码方式S
SET NAMES UTF8;
#2)删除数据库-jd，如何存在的话
DROP DATABASE IF EXISTS jd;
#3)创建数据库-jd，指定字符编码方式
CREATE DATABASE jd CHARSET=UTF8;
#4)开始使用数据库-jd
USE jd;
#5)创建产品信息表-product(pid-编号, pname-名称, price-单价,isOnSale-是否特价, pic-产品图片文件路径)
CREATE TABLE product(
    pid INT PRIMARY KEY,
    pname VARCHAR(32),
    price FLOAT(5,2),
    isOnSale VARCHAR(3),
    pic VARCHAR(32)
);
#6)向产品表中插入3行记录
INSERT INTO product VALUE
('10','莫斯利安','50','YES','IMG/10.JPG'),
('20','安慕希','60','YES','IMG/20.JPG'),
('30','纯甄','60','NO','IMG/30.JPG');
#7)创建产品评论表-comment(cid, userName-用户名, phone-用户联系电话, content-评论内容, pubTime-发布时间, productId-所评论的产品编号)
CREATE TABLE comment(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    userName VARCHAR(32),
    phone VARCHAR(11),
    content VARCHAR(32),
    pubTime BIGINT,
    productId INT
);
#8)为每个产品添加两三条评论
INSERT INTO comment VALUE
(NULL,'tom','13222000609','不错~','1234567890123','10'),
(NULL,'jack','13222000609','不错~','1234567823123','10'),
(NULL,'jerry','13222000609','不错~','1234567890123','10'),
(NULL,'kobe','13222000609','不错~','1234566789023','20'),
(NULL,'allen','13222000609','不错~','1234567890123','20'),
(NULL,'james','13222000609','不错~','1234567390123','20'),
(NULL,'rose','13222000609','不错~','1234567810123','30'),
(NULL,'white','13222000609','不错~','1234517890123','30'),
(NULL,'tim','13222000609','不错~','1334567890123','30');
#9)查询所有产品
SELECT * FROM product;
#10)查询出价格大于1000且小于5000的所有商品(提示：两个查询条件可以使用AND或OR进行组合)
#SELECT 
#11)查询所有评论
SELECT * FROM comment;
#12)查询出10号产品的所有评论
SELECT * FROM comment WHERE productId=10;
#13)删除10号商品及所有评论
DELETE FROM product WHERE pid=10;
DELETE FROM comment WHERE productId=10;
#14)修改20号商品编号为200,同时修改其所对应的所有评论
UPDATE product SET pid=200 WHERE pid=20;
UPDATE comment SET productId=200 WHERE productId=20;
