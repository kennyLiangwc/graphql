
CREATE TABLE `t_base_user` (
    `id` varchar(45) NOT NULL COMMENT 'id',
    `name` varchar(255) NOT NULL COMMENT '用户昵称',
    `country` varchar(255) DEFAULT NULL COMMENT '国家',
    `birthday` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '出生时间',
    `sex` tinyint(4) NOT NULL DEFAULT '0' COMMENT '性别\n0:默认\1:男\2:女',
    `createAt` datetime NOT NULL COMMENT '创建时间',
    `updateAt` datetime NOT NULL COMMENT '修改时间',
    `state` tinyint(4) NOT NULL DEFAULT '0' COMMENT '状态\n0:初始化\1:正常\n:-1下架',
    PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT='用户管理';

CREATE TABLE `t_kenny_book` (
    `id` varchar(45) NOT NULL COMMENT 'id',
    `name` varchar(255) NOT NULL COMMENT '书名',
    `publish` varchar(255) NOT NULL COMMENT '出版社',
    `state` tinyint(4) NOT NULL DEFAULT '0' COMMENT '状态\n0:初始化\1:正常\n:-1下架',
    `createUser` varchar(45) NOT NULL DEFAULT '0' COMMENT '创建人',
    `createAt` datetime NOT NULL COMMENT '创建时间',
    `updateAt` datetime NOT NULL COMMENT '修改时间',
    PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT='书籍管理';