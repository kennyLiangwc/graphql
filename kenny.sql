CREATE TABLE `t_base_user` (
    `id` varchar(45) NOT NULL COMMENT 'id',
    `name` varchar(255) NOT NULL COMMENT '用户昵称',
    `country` varchar(255) DEFAULT NULL COMMENT '国家',
    `birthday` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '出生时间',
    `sex` tinyint(4) NOT NULL DEFAULT '0' COMMENT '性别\n0:默认\1:男\2:女',
    `createAt` datetime NOT NULL COMMENT '创建时间',
    `updateAt` datetime NOT NULL COMMENT '修改时间'
) ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT='用户管理';