#1. 设置SQL语句的编码格式
SET NAMES UTF8;
#2. 删除数据库dangdang
DROP DATABASE IF EXISTS dangdang;
#3. 创建数据库dangdang，指定存储数据所用的编码
CREATE DATABASE dangdang CHARSET=UTF8;
#4. 进入数据库
USE dangdang;
#5. 创建表 dd_category(cid, cname, count)
CREATE TABLE dd_category(
    cid INT PRIMARY KEY, 
    cname VARCHAR(8), 
    count INT
    );
#6. 添加三行记录，三个书籍分类(10/20/30)
INSERT INTO dd_category VALUES
(10,'计算机','3'),
(20,'历史','3'),
(30,'没事','3');
#7. 查询出所有的书籍分类
SELECT cid, cname, count FROM dd_category;
#8. 创建表 dd_book(bid,title,pic,price,pubDate,isOnsale,categoryId)
CREATE TABLE dd_book(
    bid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(64),
    pic VARCHAR(32),
    price FLOAT(10,2),
    pubDate BIGINT,
    isOnsale BOOLEAN,
    categoryId INT
    );
#9. 为每种分类添加两三条记录
INSERT INTO dd_book VALUES
(NULL,'JAVA编程指南','IMG/1.JPG','35.5','1234567890123','1','10'),
(NULL,'js编程指南','IMG/2.JPG','35.5','1234567890123','1','10'),
(NULL,'html编程指南','IMG/3.JPG','35.5','1234567890123','1','10'),
(NULL,'三国志','IMG/4.JPG','35.5','1234567890123','1','20'),
(NULL,'西游记','IMG/5.JPG','35.5','1234567890123','1','20'),
(NULL,'水浒传','IMG/6.JPG','35.5','1234567890123','1','20'),
(NULL,'天天美食','IMG/7.JPG','35.5','1234567890123','1','30'),
(NULL,'美食地理','IMG/8.JPG','35.5','1234567890123','1','30'),
(NULL,'中华美食','IMG/9.JPG','35.5','1234567890123','1','30');
#10. 查询出所有的书籍
SELECT * FROM dd_book;
#11. 查询出所有的“计算机”类书籍
SELECT * FROM dd_book
WHERE categoryId=(
    SELECT cid FROM dd_category
    WHERE cname='计算机'
);
#12. 删除10号分类及其下所有的书籍
DELETE FROM dd_category WHERE cid=10;
DELETE FROM dd_book WHERE categoryId=10;
#13. 删除编号为6的书籍，需要修改对应分类的书籍数量
UPDATE dd_category SET count=count-1 
WHERE cid=(
    SELECT categoryId FROM dd_book
    WHERE bid=6
);
DELETE FROM dd_book WHERE bid=6;
