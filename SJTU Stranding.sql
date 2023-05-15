use SJTU_Stranding;
SET FOREIGN_key_CHECKS=0;

drop table if exists `user_auth`;
create table `user_auth` (
    `user_id` int not null auto_increment,
    `username` varchar(255) not null,
    `password` varchar(255) not null,
    `type` smallint not null comment '1管理员，0普通用户，-1被禁用',
    primary key (`user_id`)
) engine=InnoDB default charset=utf8;

insert into `user_auth` values (1, 'root', '123456', 1);
insert into `user_auth` values (2, 'zyc', '123456', 0);
insert into `user_auth` values (3, 'gzm', '123456', 0);
insert into `user_auth` values (4, 'zby', '123456', 0);
insert into `user_auth` values (5, 'cr', '123456', 0);
insert into `user_auth` values (6, 'chp', '123456', 0);

drop table if exists `user`;
create table `user` (
    `user_id` int not null auto_increment,
    `nickname` varchar(255) not null,
    `telephone` varchar(255) not null,
    `email`  varchar(255) not null,
    `address` varchar(255) not null,
    `avatar` varchar(255),
    `qq` varchar(255),
    `score` double not null default 0,
    `number` int not null default 0,
    `sum_score` double not null default 0,
    `description` varchar(255),
    primary key (`user_id`),
    foreign key (`user_id`) references `user_auth` (`user_id`)
) engine=InnoDB default charset=utf8;

insert into `user` values (1, '管理员', '123456789', '13169703137@163.com', 'SJTU', 'https://i.postimg.cc/YS01Ljrj/gzm.jpg', '123456789', 0, 0, 0, '我是管理员！');
insert into `user` values (2, 'ILoLy', '15017640364', 'iloly10@sjtu.edu.cn', 'SJTU-X12', 'https://i.postimg.cc/Bvz2Tsbp/zyc.jpg', '3440233385', 0, 0, 0, '我是用户zyc！');
insert into `user` values (3, '高治铭', '12345678', 'gzm@sjtu.edu.cn', 'SJTU-D18', 'https://i.postimg.cc/YS01Ljrj/gzm.jpg', '2643917629', 0, 0, 0, '我是用户gzm！');
insert into `user` values (4, '伟大的臧斌宇', '021-34207408', 'byzang@sjtu.edu.cn', '软件学院1312室', 'https://i.postimg.cc/3RpsCSL4/image.png', '123456789', 0, 0, 0, '我是软件学院院长臧斌宇！');
insert into `user` values (5, '英俊的陈榕', '021-34204789', 'rongchen@sjtu.eud.cn', '软件学院3402室', 'https://i.postimg.cc/cCSVDRjD/image.jpg', '123456789', 0, 0, 0, '我是软件学院教授陈榕！');
insert into `user` values (6, '苗条的陈昊鹏', '021-34204124', 'chen-hp@sjtu.edu.cn', '软件学院1111室', 'https://i.postimg.cc/7Lpvz8Nr/image.jpg', '123456789', 0, 0, 0, '我是软件学院副教授陈昊鹏！');


drop table if exists `item`;
create table `item` (
    `item_id` int not null auto_increment,
    `user_id` int not null,
    `state` smallint not null default 0 comment '0未交易，1已交易',
    `name` varchar(255) not null,
    `image` varchar(255) not null,
    `number` int not null,
    `description` varchar(255) not null,
    `tag1` varchar(255) default '',
    `tag2` varchar(255) default '',
    `tag3` varchar(255) default '',
    primary key (`item_id`),
    foreign key (`user_id`) references `user_auth` (`user_id`)
) engine=InnoDB default charset=utf8;
insert into `item` values (1, 2, 1, '小王子', 'http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg', 2, '99成新《小王子》两本', '图书', '', '');
insert into `item` values (2, 2, 0, '大王子', 'http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg', 5, '9成新《大王子》五本', '教育', '图书', '');
insert into `item` values (3, 2, 0, '老王子', 'http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg', 7, '8成新《老王子》七本', '图书', '', '教育');
insert into `item` values (4, 3, 0, '深入理解计算机系统', 'http://img3m7.ddimg.cn/48/0/24106647-1_w_6.jpg', 12, '第三版重磅上市！', '图书', '数码', '');
insert into `item` values (5, 2, 0, 'Effective C++', 'http://img3m6.ddimg.cn/96/25/21000966-1_u_12.jpg', 120, '通向C++精微奥妙之门', '图书', '数码', '教育');

drop table if exists `order`;
create table `order` (
    `order_id` int not null auto_increment,
    `item_id` int not null,
    `user_id` int not null,
    `buyer` int not null,
    `score` double default 0,
    `state` smallint not null comment '0进行中，1交易完成，2拒绝，3取消',
    `time` timestamp not null,
    primary key (`order_id`),
    foreign key (`item_id`) references `item` (`item_id`),
    foreign key (`user_id`) references `user_auth` (`user_id`),
    foreign key (`buyer`) references `user_auth` (`user_id`)
) engine=InnoDB default charset=utf8;
insert into `order` values (1, 1, 2, 3, 0, 1, '2023-4-20 10:00:00.00');
insert into `order` values (2, 2, 2, 3, 0, 2, '2023-4-20 10:00:00.00');
insert into `order` values (3, 3, 2, 3, 0, 3, '2023-4-20 10:00:00.00');
insert into `order` values (4, 4, 3, 2, 0, 0, '2023-4-20 10:00:00.00');

drop table if exists `favorite`;
create table `favorite` (
    `favorite_id` int not null auto_increment,
    `user_id` int not null,
    `item_id` int not null,
    primary key (`favorite_id`),
    foreign key (`user_id`) references `user_auth` (`user_id`),
    foreign key (`item_id`) references `item` (`item_id`)
) engine=InnoDB default charset=utf8;
insert into `favorite` values (1, 2, 2);

drop table if exists `chat`;
create table `chat` (
    `chat_id` int not null auto_increment,
    `sender` int not null,
    `receiver` int not null,
    primary key (`chat_id`),
    foreign key (`sender`) references `user_auth` (`user_id`),
    foreign key (`receiver`) references `user_auth` (`user_id`)
) engine=InnoDB default charset=utf8;
insert into `chat` values (1, 2, 3);
insert into `chat` values (2, 1, 2);

drop table if exists `chat_info`;
create table `chat_info` (
    `chat_info_id` int not null auto_increment,
    `chat_id` int not null,
    `sender` int not null,
    `receiver` int not null,
    `dialog` varchar(1023) not null,
    `time` timestamp not null,
    primary key (`chat_info_id`),
    foreign key (`chat_id`) references `chat` (`chat_id`),
    foreign key (`sender`) references `user_auth` (`user_id`),
    foreign key (`receiver`) references `user_auth` (`user_id`)
) engine=InnoDB default charset=utf8;
insert into `chat_info` values (1, 1, 2, 3, '你好，大高。', '2023-4-20 09:00:00.00');
insert into `chat_info` values (2, 1, 3, 2, '你好，大郑。', '2023-4-20 09:10:00.00');
insert into `chat_info` values (3, 1, 3, 2, '我想买《老王子》', '2023-4-20 09:20:00.00');
insert into `chat_info` values (4, 1, 2, 3, '《老王子》被禁用了。', '2023-4-20 09:30:00.00');
insert into `chat_info` values (5, 1, 3, 2, '我想买《大王子》', '2023-4-20 09:20:00.00');
insert into `chat_info` values (6, 2, 2, 1, '你好，管理员。', '2023-4-20 09:00:00.00');
insert into `chat_info` values (7, 2, 1, 2, '你好，大郑。', '2023-4-20 09:10:00.00');

drop table if exists `community`;
create table `community` (
    `community_id` int not null auto_increment,
    `name` varchar(255) not null,
    `image` varchar(255),
    primary key (`community_id`)
) engine=InnoDB default charset=utf8;
insert into `community` values (1, '图书', 'https://i.postimg.cc/nhkfND2M/image.jpg');
insert into `community` values (2, '数码', 'https://i.postimg.cc/xCsrqDhQ/image.jpg');
insert into `community` values (3, '电器', 'https://i.postimg.cc/XvSn0WSD/image.png');
insert into `community` values (4, '办公', 'https://i.postimg.cc/NMQY5x06/image.jpg');
insert into `community` values (5, '运动', 'https://i.postimg.cc/gjrCZtbZ/image.jpg');
insert into `community` values (6, '食品', 'https://i.postimg.cc/W1rP8yFm/image.jpg');
insert into `community` values (7, '医药', 'https://i.postimg.cc/vTjpL7GS/image.jpg');
insert into `community` values (8, '衣物', 'https://i.postimg.cc/cJBGy8cr/image.jpg');
insert into `community` values (9, '玩具', 'https://i.postimg.cc/G23wchMz/image.jpg');
insert into `community` values (10, '清洁', 'https://i.postimg.cc/C51g4Lkd/image.jpg');
insert into `community` values (11, '生活', 'https://i.postimg.cc/gjTPtFHs/image.jpg');
insert into `community` values (12, '出行', 'https://i.postimg.cc/nhQn5z5D/image.jpg');
insert into `community` values (13, '宠物', 'https://i.postimg.cc/28tz2vHY/image.jpg');
insert into `community` values (14, '文娱', 'https://i.postimg.cc/fbNQrvmG/image.jpg');
insert into `community` values (15, '教育', 'https://i.postimg.cc/FKyNr6hF/image.jpg');
insert into `community` values (16, '工具', 'https://i.postimg.cc/3rS7xmQG/image.jpg');
insert into `community` values (17, '其他', 'https://i.postimg.cc/fTVstyMr/image.jpg');

drop table if exists `post`;
create table `post` (
    `post_id` int not null auto_increment,
    `community_id` int not null,
    `user_id` int not null,
    `info` varchar(1023) not null,
    `time` timestamp not null,
    primary key (`post_id`),
    foreign key (`community_id`) references `community` (`community_id`),
    foreign key (`user_id`) references `user_auth` (`user_id`)
) engine=InnoDB default charset=utf8;

insert into `post` values (1, 1, 3, '重金收购《小王子》一本！', '2023-4-20 09:00:00.00');
insert into `post` values (2, 1, 3, '高价回收《大王子》两本！', '2023-4-20 09:10:00.00');
insert into `post` values (3, 1, 2, '低价出手《老王子》两本', '2023-4-20 09:20:00.00');


drop table if exists `subscribe`;
create table `subscribe` (
    `subscribe_id` int not null auto_increment,
    `user_id` int not null,
    `community_id` int not null,
    primary key (`subscribe_id`),
    foreign key (`user_id`) references `user_auth` (`user_id`),
    foreign key (`community_id`) references `community` (`community_id`)
) engine=InnoDB default charset=utf8;
insert into `subscribe` values (1, 2, 1);
insert into `subscribe` values (2, 3, 1);
insert into `subscribe` values (3, 2, 2);