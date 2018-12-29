-- 试着删除数据库taobao（如果存在的话）
DROP DATABASE IF EXISTS taobao;
-- 重新创建数据库taobao，指定保存数据所有字符集为utf8
CREATE DATABASE taobao CHARSET=UTF8;
-- 查询服务器当前已有数据库
SHOW DATABASES;
-- 开始使用指定的数据库/进入指定的数据库
USE taobao;

-- 创建用户信息的表
CREATE TABLE tb_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,#用户编号主键列不允许出现重复值或者空,自增列
    uname VARCHAR(16),#variable character 十六位
    upwd VARCHAR(32),#用户密码
    pic VARCHAR(32),#用户头像图片的路劲
    score FLOAT(10,2),#用户积分 999999999.99
    regTime BIGINT
);
SET NAMES UTF8;
-- 向表中插入记录行（row）
INSERT INTO tb_user VALUES(
    101,'tom','123456','img/101.jpg','111','1234567890123'
);
INSERT INTO tb_user VALUES(
    102,'mary','123456','img/102.jpg','111231','1434567890123'
);
INSERT INTO tb_user VALUES(
    NULL,'tomtomtom','123456','img/103.jpg','33','1534567890123'
);
INSERT INTO tb_user VALUES(
    201,'汤姆','123456','img/201.jpg','111','1233567890123'
);
INSERT INTO tb_user VALUES(
    202,'一二三四五六','123456','img/202.jpg','111231','1434557890123'
);
INSERT INTO tb_user VALUES(
    206,'一二三四五六七','123456','img/203.jpg','33','1534367890123'
);

-- 删除一行指定的记录
#DELETE FROM tb_user;#删除所有行
#DELETE FROM tb_user WHERE uid===1;#语法错误
#DELETE FROM tb_user WHERE uid==1;#语法错误
DELETE FROM  tb_user WHERE uid=1;#语法错误

-- 修改一行指定的记录
UPDATE tb_user SET uname='玛利亚',upwd='456789'
WHERE uid=102;

-- 查询出表中的数据
SELECT uid,uname,upwd,score,regTime 
FROM tb_user;

SELECT * FROM tb_user WHERE uid=102;