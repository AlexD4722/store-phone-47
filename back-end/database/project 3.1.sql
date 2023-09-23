-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th9 05, 2023 lúc 08:44 PM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `project`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `buyer_list`
--

CREATE TABLE `buyer_list` (
  `id` varchar(10) NOT NULL,
  `id_account` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `buyer_list`
--

INSERT INTO `buyer_list` (`id`, `id_account`, `name`, `phone`, `address`) VALUES
('0AFKxnX8MQ', 5, 'AlexD55555', '0912646280', 'tho tang'),
('9gwjUcKnlE', 5, 'john cena', '0987318235', 'Tho tang City'),
('DBoHVaktgZ', 10, 'dasdas', '0912646280', 'dasdas'),
('dzVmkeBVAJ', 10, 'check', '0192319231', 'Thi trang tho tang'),
('f61kXWKSm3', 5, 'AlexD55555', '0912646280', 'tho tang'),
('GHWSMRn9t3', 10, 'AlexD', '0123456789', 'dasdasdas'),
('k0kWSy3KgF', 10, 'asdasd', '0123123832', 'dasdsa'),
('KHT5eXkScl', 5, 'testcheck', '0912391238', 'Thotangctvtvp'),
('LTq4vu7rB3', 5, 'dasdas', '0912846280', 'dasd'),
('ovnsZS1ZYA', 10, 'tuanvinh', '0912646280', 'dasdsa'),
('RqQ1keVBzm', 10, 'AlexDDDDDDD', '0123456789', 'thotangcitytest'),
('SplBstiOEx', 10, 'AlexD', '0123456789', 'dasdsa'),
('tnpQvJY8Wu', 10, 'tuanvinh', '0123456789', 'test2'),
('UfHnHA9T9a', 10, 'AlexD', '0912646280', 'test'),
('VDSndt6Xtq', 10, 'nguyen tuan vinh', '0912646280', 'thotang vt vp'),
('xq2CjdLGa4', 5, 'text12345', '0912391239', 'test'),
('xxEmzvaz2Z', 10, 'tuanvinh', '0912646280', 'dasdsa');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `buyer_list`
--
ALTER TABLE `buyer_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_buyer` (`id_account`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `buyer_list`
--
ALTER TABLE `buyer_list`
  ADD CONSTRAINT `buyer_list_ibfk_1` FOREIGN KEY (`id_account`) REFERENCES `account` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
