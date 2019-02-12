set names utf8;
drop database if exists yly;
create database yly charset=utf8;
use yly;
drop table if exists users;

#用户表
#id 用户名 密码 性别 手机号 邮箱 真实姓名 备注
create table users(
    uid int primary key auto_increment,
    uname varchar(16),
    upwd varchar(20),
    sex smallint,
    phone varchar(11),
    email varchar(32),
    user_name varchar(8),
    remark varchar(128)
);

#作品分类表
#id 分类名称 备注
create table classify(
    cid int primary key auto_increment,
    cname varchar(16),
    remark varchar(128)
);


#作品表
#id 名称 分类编号 图片位置 zip 备注
create table products(
    pid int primary key auto_increment,
    cid int,
    pname varchar(16),
    addr varchar(128),
    zip varchar(128),
    remark varchar(128)
);

#留言表
#id 用户id 名字 邮箱 标题 内容 备注
create table messages(
    mid int primary key auto_increment,
    uid int,
    mname varchar(16),
    email varchar(32),
    title varchar(16),
    content varchar(256),
    remark varchar(128)
);


#插入用户数据
insert into users values(null,"admin",123456,1,"13133332222","xiyi@126.com","张三",null);

#插入作品分类数据

insert into classify values(null,"网页",null);
insert into classify values(null,"logo",null);
insert into classify values(null,"banner",null);
insert into classify values(null,"海报/易拉宝",null);
insert into classify values(null,"三折页",null);
insert into classify values(null,"图标",null);
insert into classify values(null,"临摹",null);

#插入作品数据
insert into products values(null,1,"中海物业","images/webpage01.png",null,null);
insert into products values(null,1,"宏宝光电-首页","images/webpage02-1.png",null,null);
insert into products values(null,1,"宏宝光电-新闻","images/webpage02-2.png",null,null);
insert into products values(null,1,"宏宝光电-项目","images/webpage02-3.png",null,null);
insert into products values(null,1,"通用机械","images/webpage03.png",null,null);
insert into products values(null,1,"鑫聚源机械","images/webpage04.png",null,null);

insert into products values(null,2,"砥力","images/dili.png",null,null);
insert into products values(null,2,"华伟致远1","images/huawei.png",null,null);
insert into products values(null,2,"华伟致远2","images/HW.png",null,null);
insert into products values(null,2,"木屋烧烤","images/shaokao.png",null,null);
insert into products values(null,2,"树蛙科技1","images/shuwa.png",null,null);
insert into products values(null,2,"树蛙科技2","images/sw.png",null,null);
insert into products values(null,2,"鲜果宝贝","images/XIANGUO.png",null,null);
insert into products values(null,2,"蜥蜴","images/xiyi.png",null,null);
insert into products values(null,2,"玉龙吟","images/yly.png",null,null);


insert into products values(null,3,"banner01","images/banner01.png",null,null);
insert into products values(null,3,"banner02","images/banner02.png",null,null);
insert into products values(null,3,"banner03","images/banner03.png",null,null);
insert into products values(null,3,"banner04","images/banner04.png",null,null);
insert into products values(null,3,"banner05","images/banner05.png",null,null);
insert into products values(null,3,"banner06","images/banner06.png",null,null);
insert into products values(null,3,"banner07","images/banner07.png",null,null);
insert into products values(null,3,"banner08","images/banner08.png",null,null);
insert into products values(null,3,"banner09","images/banner09.png",null,null);
insert into products values(null,3,"banner10","images/banner10.png",null,null);
insert into products values(null,3,"banner11","images/banner11.png",null,null);
insert into products values(null,3,"banner12","images/banner12.png",null,null);
insert into products values(null,3,"banner13","images/banner13.png",null,null);
insert into products values(null,3,"banner14","images/banner14.png",null,null);
insert into products values(null,3,"banner15","images/banner15.png",null,null);
insert into products values(null,3,"banner16","images/banner16.png",null,null);
insert into products values(null,3,"banner17","images/banner17.png",null,null);
insert into products values(null,3,"banner18","images/banner18.png",null,null);
insert into products values(null,3,"banner19","images/banner19.png",null,null);
insert into products values(null,3,"banner20","images/banner20.png",null,null);
insert into products values(null,3,"banner21","images/banner21.png",null,null);
insert into products values(null,3,"banner22","images/banner22.png",null,null);
insert into products values(null,3,"banner23","images/banner23.png",null,null);
insert into products values(null,3,"banner24","images/banner24.png",null,null);
insert into products values(null,3,"banner25","images/banner25.png",null,null);
insert into products values(null,3,"banner26","images/banner26.png",null,null);
insert into products values(null,3,"banner27","images/banner27.png",null,null);
insert into products values(null,3,"banner28","images/banner28.png",null,null);
insert into products values(null,3,"banner29","images/banner29.png",null,null);
insert into products values(null,3,"banner30","images/banner30.png",null,null);

insert into products values(null,4,"poster01","images/poster01.png",null,null);
insert into products values(null,4,"poster01","images/poster02.png",null,null);
insert into products values(null,4,"poster01","images/poster03.png",null,null);
insert into products values(null,4,"poster01","images/poster04.png",null,null);
insert into products values(null,4,"poster01","images/poster05.png",null,null);
insert into products values(null,4,"poster01","images/poster06.png",null,null);

insert into products values(null,5,"派特森1","images/psg01.png",null,null);
insert into products values(null,5,"派特森2","images/psg02.png",null,null);
insert into products values(null,5,"天太世统1","images/ttst01.png",null,null);
insert into products values(null,5,"天太世统2","images/ttst02.png",null,null);

insert into products values(null,6,"图标01","images/tubiao01.png",null,null);
insert into products values(null,6,"图标02","images/tubiao02.png",null,null);
insert into products values(null,6,"图标03","images/tubiao03.png",null,null);
insert into products values(null,6,"图标04","images/jishiben.png",null,null);
insert into products values(null,6,"图标05","images/shouzhuo.png",null,null);
insert into products values(null,6,"图标06","images/shuye.png",null,null);

insert into products values(null,7,"旅游01","images/lvyou01.png",null,null);
insert into products values(null,7,"旅游02","images/lvyou02.png",null,null);
insert into products values(null,7,"旅游03","images/lvyou03.png",null,null);
insert into products values(null,7,"旅游04","images/lvyou04.png",null,null);
insert into products values(null,7,"旅游05","images/lvyou05.png",null,null);
insert into products values(null,7,"旅游06","images/lvyou06.png",null,null);
insert into products values(null,7,"旅游07","images/lvyou07.png",null,null);
insert into products values(null,7,"旅游08","images/lvyou08.png",null,null);
insert into products values(null,7,"宝马广告","images/baoma.png",null,null);
insert into products values(null,7,"诚信","images/chengxin.png",null,null);
insert into products values(null,7,"唇膏展示","images/chungao.png",null,null);
insert into products values(null,7,"打印机","images/dayinji01.png",null,null);
insert into products values(null,7,"打印机—豹子","images/dayinji02.png",null,null);
insert into products values(null,7,"感动中国","images/gandong.png",null,null);
insert into products values(null,7,"烘培学院","images/hongbei.png",null,null);
insert into products values(null,7,"宽容","images/kuanrong.png",null,null);
insert into products values(null,7,"路虎广告二","images/luhu01.png",null,null);
insert into products values(null,7,"路虎广告一","images/luhu02.png",null,null);
insert into products values(null,7,"乱世英雄","images/luanshi.png",null,null);
insert into products values(null,7,"旅游1","images/lvyou1.png",null,null);
insert into products values(null,7,"山沟","images/shangou.png",null,null);
insert into products values(null,7,"舍得","images/shede.png",null,null);
insert into products values(null,7,"设想未来","images/shexiang.png",null,null);
insert into products values(null,7,"摄影技法","images/sheying.png",null,null);
insert into products values(null,7,"太极","images/taiji.png",null,null);
insert into products values(null,7,"我与世界只差一个你-封面","images/woyushijie01.png",null,null);
insert into products values(null,7,"我与世界只差一个你-护封","images/woyushijie02.png",null,null);
insert into products values(null,7,"演唱会","images/yanchanghui.png",null,null);
insert into products values(null,7,"营养早餐","images/zaocan.png",null,null);
insert into products values(null,7,"影韵千秋","images/yinyun.png",null,null);
insert into products values(null,7,"油漆—葡萄","images/putao.png",null,null);
insert into products values(null,7,"油漆—珊瑚","images/shanhu.png",null,null);
insert into products values(null,7,"油漆—树叶","images/youqi_shuye.png",null,null);
insert into products values(null,7,"转角遇到爱","images/zhuanjiao.png",null,null);






