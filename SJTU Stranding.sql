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

drop table if exists `user`;
create table `user` (
    `user_id` int not null auto_increment,
    `nickname` varchar(255) not null,
    `telephone` varchar(255) not null,
    `email`  varchar(255) not null,
    `address` varchar(255) not null,
    `score` double not null,
    `avatar` varchar(255),
    `qq` varchar(255),
    `description` varchar(255),

    primary key (`user_id`),
    foreign key (`user_id`) references `user_auth` (`user_id`)
) engine=InnoDB default charset=utf8;

insert into `user` values (1, '管理员', '123456789', '13169703137@163.com', 'SJTU', 5.0, 'http://img3m9.ddimg.cn/12/36/1546133799-1_w_1.jpg', '123456789', '我是管理员！');
insert into `user` values (2, 'ILoLy', '15017640364', 'iloly10@sjtu.edu.cn', 'SJTU-X12', 4.8, 'http://img3m7.ddimg.cn/48/0/24106647-1_w_6.jpg', '3440233385', '我是用户zyc！');
insert into `user` values (3, 'high', '12345678', 'gzm@sjtu.edu.cn', 'SJTU-D18', 1.8, 'http://img3m6.ddimg.cn/32/30/1204489076-1_w_1.jpg', '123456789', '我是用户gzm！');


drop table if exists `item`;
create table `item` (
    `item_id` int not null auto_increment,
    `user_id` int not null,
    `state` smallint not null default 0 comment '0待交易，1已交易',
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
insert into `item` values (1, 2, 1, '小王子', 'http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg', 2, '99成新《小王子》两本', '书', '', '');
insert into `item` values (2, 2, 0, '大王子', 'http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg', 5, '9成新《大王子》五本', '二手', '书', '');
insert into `item` values (3, 2, 0, '老王子', 'http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg', 7, '8成新《老王子》七本', '书', '老东西', '爆金币');
insert into `item` values (4, 2, 0, '深入理解计算机系统', 'http://img3m7.ddimg.cn/48/0/24106647-1_w_6.jpg', 12, '第三版重磅上市！', '书', 'cs', 'se');
insert into `item` values (5, 2, 0, 'Effective C++', 'http://img3m6.ddimg.cn/96/25/21000966-1_u_12.jpg', 120, '通向C++精微奥妙之门', '书', 'c++', 'se');

drop table if exists `order`;
create table `order` (
    `order_id` int not null auto_increment,
    `item_id` int not null,
    `user_id` int not null,
    `buyer` int not null,
    `state` smallint not null comment '0进行中，1交易完成，2拒绝，3取消',
    `time` timestamp not null,
    primary key (`order_id`),
    foreign key (`item_id`) references `item` (`item_id`),
    foreign key (`user_id`) references `user_auth` (`user_id`),
    foreign key (`buyer`) references `user_auth` (`user_id`)
) engine=InnoDB default charset=utf8;
insert into `order` values (1, 1, 2, 3, 1, '2023-4-20 10:00:00.00');
insert into `order` values (2, 2, 2, 3, 2, '2023-4-20 10:00:00.00');
insert into `order` values (2, 2, 2, 3, 3, '2023-4-20 10:00:00.00');

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
insert into `community` values (1, '书籍', 'http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg');
insert into `community` values (2, '汽车', 'http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg');
insert into `community` values (3, '黑人', 'http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg');


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