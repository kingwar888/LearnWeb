#1.设置下面的SQL语句所有字符编码为UTF8
SET NAMES UTF8;
#2.删除数据库danei(如果存在的话)
DROP DATABASE IF EXISTS danei;
#3.创建数据库danei，保存数据时所用字符编码为UTF8
CREATE DATABASE danei CHARSET=UTF8;
#4.进入数据库danei
USE danei;
#5.创建保存部门信息的表 dept(did,dname,location)
CREATE TABLE dept(
    did INT PRIMARY KEY,
    dname VARCHAR(32),
    location VARCHAR(32));
#6.向部门表中插入三行记录(三个部门的信息)
INSERT INTO dept VALUE('01','开发部','北京');
INSERT INTO dept VALUE('02','市场部','上海');
INSERT INTO dept VALUE('03','运营部','武汉');
#7.创建保存员工信息的表 
#emp(eid,ename,sex,birthday,salary,deptId)
CREATE TABLE emp(
    eid INT PRIMARY AUTO_INCREMENT,
    ename VARCHAR(32),
    sex VARCHAR(1),
    birthday BIGINT,
    salary FLOAT(8,2),
    deptId INT);
#8.向员工表中插入9行记录(每个部门各有三个员工)
INSERT INTO emp VALUE
(NULL,'TOM','F','1234567890123','45646.23','01'),
(NULL,'MARY','M','1234567890123','1354.11','01'),
(NULL,'IVERSON','M','1234567890123','465465','01'),
(NULL,'JAMES','M','1234567890123','56456','02'),
(NULL,'KOBE','M','1234567890123','45634','02'),
(NULL,'NICO','F','1234567890123','43241','02'),
(NULL,'WHITE','M','1234567890123','5435','03'),
(NULL,'ZOYI','F','1234567890123','678678','03'),
(NULL,'KENS','F','1234567890123','23123','03');
#9.删除01号部门及该部门下所有员工
DELETE FROM dept WHERE did=01;
DELETE FROM emp WHERE deptId=01
#10.修改02号部门的编号为200，同时修改该部门对应的员工的部门编号
UPDATE dept SET did=200 WHERE did=02;
UPDATE emp SET deptId=200 WHERE deptId=02;
#11.查询出所有的部门信息
SELECT did,dname,location FROM dept;
#12.查询出所有的员工信息
SELECT eid,ename,sex,birthday,salary,deptId FROM emp;
#13.查询出03号部门所有的员工
SELECT * FROM emp WHERE deptId=03;
#14.查询出研发部所有员工的信息—— 子查询   
SELECT * FROM emp WHERE deptId=(SELECT did FROM dept WHERE dname='开发部');