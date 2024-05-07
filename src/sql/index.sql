-- 创建数据库

CREATE DATABASE xl DEFAULT CHARACTER SET = 'utf8mb4';

USE xl;

-- 创建商品表

CREATE TABLE product (
    id INT PRIMARY KEY AUTO_INCREMENT, title VARCHAR(255), subtitle VARCHAR(255), current_price DECIMAL(5, 2), previous_price DECIMAL(5, 2), banner_path TEXT COMMENT '商品图片(多个)', detail_path TEXT COMMENT '商品详情图', freight TINYINT COMMENT '运费', is_delete TINYINT DEFAULT 0, createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 插入一条假数据

-- insert INTO
--     product(
--         title,
--         subtitle,
--         img_paths,
--         current_price,
--         previous_price,
--         freight
--     )
-- VALUES (
--         '糖心丑苹果',
--         '糖心丑苹果，不能只看外表，内心很甜',
--         'a.png,b.png',
--         28.88,
--         38.88,
--         9
--     );

-- 用户表

CREATE TABLE IF NOT EXISTS `users` (
    id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(30) NOT NULL UNIQUE, nick_name VARCHAR(255), password VARCHAR(70) NOT NULL, avatar_url VARCHAR(255), createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- labels 标签表

CREATE TABLE IF NOT EXISTS labels (
    id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(22), icon TEXT, is_delete TINYINT DEFAULT 0, createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 给product表添加外键 和labels关联起来

ALTER TABLE product ADD label_id INT;

ALTER TABLE product
ADD FOREIGN KEY (label_id) REFERENCES labels (id);

-- 创建购物车表
CREATE TABLE IF NOT EXISTS shopping_cart (
    id INT PRIMARY KEY AUTO_INCREMENT, user_id INT, product_id INT, specification TEXT COMMENT '规格', is_delete TINYINT DEFAULT 0, createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 订单表
CREATE TABLE IF NOT EXISTS order_detail (
    id INT PRIMARY KEY AUTO_INCREMENT, user_id INT, product_id INT, address_id INT, count INT DEFAULT 1, is_delete TINYINT DEFAULT 0, status TINYINT DEFAULT 0 COMMENT '状态 0 代发货 1待收货 2已签收', createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 地址表
CREATE TABLE IF NOT EXISTS address (
    id INT PRIMARY KEY AUTO_INCREMENT, user_id INT, phone VARCHAR(32), name VARCHAR(255), content TEXT, is_delete TINYINT DEFAULT 0, createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);