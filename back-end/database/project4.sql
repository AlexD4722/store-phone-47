-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th9 08, 2023 lúc 09:41 AM
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
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `username` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(50) NOT NULL,
  `wishlist` text NOT NULL,
  `cart` text NOT NULL,
  `verification_code` varchar(6) NOT NULL,
  `is_verified` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`id`, `username`, `password`, `user_type`, `email`, `wishlist`, `cart`, `verification_code`, `is_verified`, `created_at`) VALUES
(4, 'lamtran', 'e10adc3949ba59abbe56e057f20f883e', 'admin', 'lamtran@yahoo.com', '[]', '[{\"product\":{\"id\":\"95\",\"name\":\"IPad Gen 10\",\"description\":[\" Screen : 10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels\",\" Rear camera : 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A14 Bionic\",\"Internal memory : 64GB\"],\"initial_price\":\"1500\",\"selling_price\":\"1399\",\"quantity\":\"50\",\"id_product_line\":\"7\",\"images\":[\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/iPadGen10\\/iPadGen10 (1)-Gold.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/iPadGen10\\/iPadGen10 (2)-White.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/iPadGen10\\/iPadGen10 (3)-Blue.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/iPadGen10\\/iPadGen10 (4)-Pink.jpg\"],\"color\":\"black\",\"capacity\":\"512gb\",\"status\":\"1\"},\"quantity\":1,\"totalPrice\":1399}]', '', 1, '2023-09-01 01:17:12'),
(5, 'guest', '', 'guest', '', '', '', '', 0, '2023-09-05 07:57:54'),
(10, 'vinh12345', 'e10adc3949ba59abbe56e057f20f883e', 'customer', 'vinhnt113thotang@gmail.com', '[]', '[]', '', 1, '2023-09-01 01:17:12');

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
('0atOxrD8ES', 10, 'nguyenTuanvinh', '0912341231', 'Thi tran tho tang vinh tuong vinh phuc'),
('5ngPl4G7v9', 5, 'tuanvinhnguyen', '0192381232', 'thotang City'),
('7urSkZyi5E', 5, 'tuanvinhnguyen', '0192381232', 'thotang City'),
('9gwjUcKnlE', 5, 'john cena', '0987318235', 'Tho tang City'),
('DBoHVaktgZ', 10, 'dasdas', '0912646280', 'dasdas'),
('dzVmkeBVAJ', 10, 'check', '0192319231', 'Thi trang tho tang'),
('E0E89g5A1L', 5, 'dasdas', '0912931293', 'asdsadas'),
('f61kXWKSm3', 5, 'AlexD55555', '0912646280', 'tho tang'),
('fXlv9NT3bh', 10, 'nguyen tuan vinh', '0912312312', 'aaaaaaaaaaaaaaaaaaaaaaaaa'),
('GDteczu3xE', 5, 'tuanvinhnguyen', '0192381232', 'thotang City'),
('GHWSMRn9t3', 10, 'AlexD', '0123456789', 'dasdasdas'),
('GJVK8Cant8', 5, 'tuanvinhnguyen', '0192381232', 'thotang City'),
('IjEnvdBe7J', 5, 'nguyen tuan vinh', '0192391238', 'Thi Tran Tho Tang'),
('k0kWSy3KgF', 10, 'asdasd', '0123123832', 'dasdsa'),
('k29RuP2SHK', 5, 'nguyentuanvinh', '0987123781', 'Thotang Vinh Tuong Vinh Phuc'),
('KHT5eXkScl', 5, 'testcheck', '0912391238', 'Thotangctvtvp'),
('LTq4vu7rB3', 5, 'dasdas', '0912846280', 'dasd'),
('nRxSm7JVCD', 5, 'nguyen tuan vinh', '0912381273', 'thi trang tho tang'),
('oF9bZ6zB1l', 5, 'tuanvinhnguyen', '0192381232', 'thotang City'),
('OTi9gj77j1', 5, 'dasdas', '0912931293', 'asdsadas'),
('ovnsZS1ZYA', 10, 'tuanvinh', '0912646280', 'dasdsa'),
('RqQ1keVBzm', 10, 'AlexDDDDDDD', '0123456789', 'thotangcitytest'),
('RyZ5hiO1Bx', 5, 'tuanvinhnguyen', '0192381232', 'thotang City'),
('SplBstiOEx', 10, 'AlexD', '0123456789', 'dasdsa'),
('tnpQvJY8Wu', 10, 'tuanvinh', '0123456789', 'test2'),
('UfHnHA9T9a', 10, 'AlexD', '0912646280', 'test'),
('v9BUukAb1l', 5, 'tuanvinhnguyen', '0192381232', 'thotang City'),
('VDSndt6Xtq', 10, 'nguyen tuan vinh', '0912646280', 'thotang vt vp'),
('wamTPdRrwL', 5, 'tuanvinhnguyen', '0192381232', 'thotang City'),
('xq2CjdLGa4', 5, 'text12345', '0912391239', 'test'),
('xxEmzvaz2Z', 10, 'tuanvinh', '0912646280', 'dasdsa'),
('ymODo70Q3e', 5, 'phuong nguyen', '0912381293', 'thotangcity');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `initial_price` int(11) NOT NULL,
  `selling_price` int(11) NOT NULL,
  `id_product_line` int(11) NOT NULL,
  `images` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `capacity` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `initial_price`, `selling_price`, `id_product_line`, `images`, `quantity`, `color`, `capacity`, `status`) VALUES
(85, 'Iphone 14 Pro Max', '[\"Screen : 6.7 inch, Super Retina XDR, 2796 x 1290 Pixels\",\"Rear camera : 48.0 MP + 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A16 Bionic Internal memory : 128GB\"]', 1500, 1350, 1, 'Iphone14ProMax', 50, 'blue', '125GB', 1),
(86, 'Samsung Utra 23', '[\"Screen : 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels\",\" Rear camera : 200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Snapdragon 8 Gen 2\",\"Internal memory : 256GB\"]', 1000, 980, 2, 'SamsungUtra23', 30, 'black', '256gb', 1),
(87, 'Iphone 14 Pro Max', '[\"Screen : 6.7 inch, Super Retina XDR, 2796 x 1290 Pixels\",\"Rear camera : 48.0 MP + 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A16 Bionic Internal memory : 128GB\"]', 1600, 1450, 1, 'Iphone14ProMax', 35, 'white', '256gb', 1),
(88, 'Samsung Utra 23', '[\"Screen : 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels\",\" Rear camera : 200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Snapdragon 8 Gen 2\",\"Internal memory : 256GB\"]', 980, 850, 2, 'SamsungUtra23', 35, 'white', '128gb', 1),
(89, 'Xiaomi Not 12 Pro', '[\" Screen: 6.7 inch, extra: 1.9 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels\",\"- Rear camera :12.0 MP + 12.0 MP\",\" Camera Selfie : 10.0 MP\",\" CPU : Snapdragon 8+ Gen 1\",\" Internal memory : 128GB\"]', 1110, 1035, 8, 'XiaomiNot12Pro', 55, 'black', '128gb', 1),
(90, 'Samsung Utra 23', '[\"Screen : 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels\",\" Rear camera : 200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Snapdragon 8 Gen 2\",\"Internal memory : 256GB\"]', 1200, 1135, 2, 'SamsungUtra23', 25, 'black', '512gb', 1),
(95, 'IPad Gen 10', '[\" Screen : 10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels\",\" Rear camera : 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A14 Bionic\",\"Internal memory : 64GB\"]', 1500, 1399, 7, 'iPadGen10', 50, 'black', '512gb', 1),
(96, 'IPad Gen 10', '[\" Screen : 10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels\",\" Rear camera : 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A14 Bionic\",\"Internal memory : 64GB\"]', 1500, 1399, 7, 'iPadGen10', 50, 'black', '218gb', 1),
(97, 'IPad Gen 10', '[\" Screen : 10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels\",\" Rear camera : 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A14 Bionic\",\"Internal memory : 64GB\"]', 1500, 1399, 7, 'iPadGen10', 50, 'black', '1TB', 1),
(98, 'Earphone Beats Flex', '[\"[\\\"-Connectivity: The BeatsFitProTrueWirelessEarbuds headphones connect wirelessly to the device via Bluetooth technology.\\\",\\\"-Weight: Each Beats Flex headset weighs about 4 grams. Playtime: Beats Flex headphones provide up to 5 hours of music time and up to 3 hours of talk time on a full charge. Charging time: Beats Flex need about 15 minutes to charge enough for 3 hours of music or 2 hours of talk.\\\",\\\"-Charging box: The charging box that comes with the AirPods 2 helps to charge and store the headphones. The charging case can provide up to 24 hours of music time and up to 18 hours of talk time.\\\",\\\"-Sensors and controls: Beats Flex have motion sensors and noise sensors to adjust volume and play music automatically when placed in your ears.\\\"]\"]', 500, 499, 3, 'EarphoneBeatsFlex', 100, 'black', '', 1),
(99, 'Earphone Beats Flex', '[\"[\\\"-Connectivity: The BeatsFitProTrueWirelessEarbuds headphones connect wirelessly to the device via Bluetooth technology.\\\",\\\"-Weight: Each Beats Flex headset weighs about 4 grams. Playtime: Beats Flex headphones provide up to 5 hours of music time and up to 3 hours of talk time on a full charge. Charging time: Beats Flex need about 15 minutes to charge enough for 3 hours of music or 2 hours of talk.\\\",\\\"-Charging box: The charging box that comes with the AirPods 2 helps to charge and store the headphones. The charging case can provide up to 24 hours of music time and up to 18 hours of talk time.\\\",\\\"-Sensors and controls: Beats Flex have motion sensors and noise sensors to adjust volume and play music automatically when placed in your ears.\\\"]\"]', 500, 499, 3, 'EarphoneBeatsFlex', 100, 'white', '', 1),
(100, 'Lightning Charging Cable', '[\"[\\\"-Connectivity: The Lightning charging cable has a dedicated Lightning connector for connecting to Apple devices and a USB-A or USB-C plug for connecting to a power source or computer.\\\",\\\"-Data transfer speed: Lightning charging cable can support data transfer rate up to USB 2.0, allowing for fast data transfer between device and computer.\\\",\\\"-Length: Lightning charging cables are typically about 1-2 meters in length. However, there are also cable versions of different lengths to suit your needs.\\\",\\\"-Material: Lightning charging cables are usually made of high-quality materials such as PVC or nylon with break-resistant coating, which increases the strength and durability of the cable.\\\",\\\"-Functions: The Lightning charging cable is not only used to charge devices, but can also be used to connect other accessories such as speakers, headphones, or connect to an adapter for use with devices that do not have Lightning port.\\\"]\"]', 200, 180, 5, 'LightningChargingCable', 100, 'black', '', 1),
(101, 'Lightning Charging Cable', '[\"[\\\"-Connectivity: The Lightning charging cable has a dedicated Lightning connector for connecting to Apple devices and a USB-A or USB-C plug for connecting to a power source or computer.\\\",\\\"-Data transfer speed: Lightning charging cable can support data transfer rate up to USB 2.0, allowing for fast data transfer between device and computer.\\\",\\\"-Length: Lightning charging cables are typically about 1-2 meters in length. However, there are also cable versions of different lengths to suit your needs.\\\",\\\"-Material: Lightning charging cables are usually made of high-quality materials such as PVC or nylon with break-resistant coating, which increases the strength and durability of the cable.\\\",\\\"-Functions: The Lightning charging cable is not only used to charge devices, but can also be used to connect other accessories such as speakers, headphones, or connect to an adapter for use with devices that do not have Lightning port.\\\"]\"]', 200, 185, 5, 'LightningChargingCable', 100, 'white', '', 1),
(102, 'Apple Watch Ultra', '[\"[\\\"- Creen : 1.92 inch,LTPO OLED\\\",\\\"- Resolution 502 x 410 Pixels\\\",\\\"Battery life : 36h\\\",\\\"Type of SIM used : 1 eSIM\\\",\\\"Connect :GPS+Cellular\\\",\\\"material :Titanium\\\"]\"]', 803, 683, 9, 'AppleWatchUltra', 70, 'red', '', 1),
(103, 'Apple Watch Ultra', '[\"[\\\"- Creen : 1.92 inch,LTPO OLED\\\",\\\"- Resolution 502 x 410 Pixels\\\",\\\"Battery life : 36h\\\",\\\"Type of SIM used : 1 eSIM\\\",\\\"Connect :GPS+Cellular\\\",\\\"material :Titanium\\\"]\"]', 802, 682, 9, 'AppleWatchUltra', 70, 'blue', '', 1),
(104, 'Apple Watch Ultra', '[\"[\\\"- Creen : 1.92 inch,LTPO OLED\\\",\\\"- Resolution 502 x 410 Pixels\\\",\\\"Battery life : 36h\\\",\\\"Type of SIM used : 1 eSIM\\\",\\\"Connect :GPS+Cellular\\\",\\\"material :Titanium\\\"]\"]', 801, 681, 9, 'AppleWatchUltra', 70, 'black', '', 1),
(105, 'Apple Watch Ultra', '[\"[\\\"- Creen : 1.92 inch,LTPO OLED\\\",\\\"- Resolution 502 x 410 Pixels\\\",\\\"Battery life : 36h\\\",\\\"Type of SIM used : 1 eSIM\\\",\\\"Connect :GPS+Cellular\\\",\\\"material :Titanium\\\"]\"]', 805, 685, 9, 'AppleWatchUltra', 70, 'white', '', 1),
(106, 'Apple Watch Series 8', '[\"[\\\"- Screen : 1.9 inch, Retina, 484 x 396 Pixels\\\",\\\"Connect : GPS + Cellular\\\",\\\"- Material : aluminum \\\",\\\"Size : 41mm\\\",\\\"Product weight : 42.3g\\\",\\\"Battery life : 18h\\\"]\"]', 980, 930, 9, 'AppleWatchSeries8', 55, '', '32gb', 1),
(107, 'Apple Watch Series 8', '[\"[\\\"- Screen : 1.9 inch, Retina, 484 x 396 Pixels\\\",\\\"Connect : GPS + Cellular\\\",\\\"- Material : aluminum \\\",\\\"Size : 41mm\\\",\\\"Product weight : 42.3g\\\",\\\"Battery life : 18h\\\"]\"]', 1050, 1000, 9, 'AppleWatchSeries8', 55, '', '64gb', 1),
(108, 'Apple Watch Series 8', '[\"[\\\"- Screen : 1.9 inch, Retina, 484 x 396 Pixels\\\",\\\"Connect : GPS + Cellular\\\",\\\"- Material : aluminum \\\",\\\"Size : 41mm\\\",\\\"Product weight : 42.3g\\\",\\\"Battery life : 18h\\\"]\"]', 1200, 1050, 9, 'AppleWatchSeries8', 55, '', '128gb', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_line`
--

CREATE TABLE `product_line` (
  `id` int(11) NOT NULL,
  `brand` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `product_type` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `product_line`
--

INSERT INTO `product_line` (`id`, `brand`, `product_type`, `status`) VALUES
(1, 'apple', 'phone', 1),
(2, 'samsung', 'phone', 1),
(3, 'beast', 'headphones', 1),
(4, 'apple', 'headphones', 1),
(5, 'samsung', 'accessories', 1),
(7, 'apple', 'tablet', 1),
(8, 'xiaomi', 'phone', 1),
(9, 'apple', 'smartwatch', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `receipt`
--

CREATE TABLE `receipt` (
  `id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_buyer` varchar(10) NOT NULL,
  `status` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `receipt`
--

INSERT INTO `receipt` (`id`, `date`, `id_buyer`, `status`) VALUES
(56, '2023-09-06 11:36:18', 'UfHnHA9T9a', '0'),
(57, '2023-09-05 11:44:37', 'tnpQvJY8Wu', '0'),
(58, '2023-09-06 11:33:24', 'ovnsZS1ZYA', '0'),
(59, '2023-09-05 11:46:30', 'xxEmzvaz2Z', '0'),
(60, '2023-09-06 11:40:04', 'dzVmkeBVAJ', '-1'),
(61, '2023-09-06 11:41:42', 'SplBstiOEx', '-1'),
(62, '2023-09-06 11:44:23', 'k0kWSy3KgF', '-1'),
(63, '2023-09-06 11:39:27', 'DBoHVaktgZ', '-1'),
(64, '2023-09-05 11:57:33', 'LTq4vu7rB3', '0'),
(65, '2023-09-05 16:54:44', 'GHWSMRn9t3', '2'),
(66, '2023-09-06 11:29:46', '0AFKxnX8MQ', '1'),
(67, '2023-09-05 12:01:25', 'f61kXWKSm3', '0'),
(68, '2023-09-05 12:02:39', '9gwjUcKnlE', '0'),
(69, '2023-09-05 12:05:19', 'VDSndt6Xtq', '0'),
(70, '2023-09-05 12:07:15', 'KHT5eXkScl', '0'),
(71, '2023-09-05 12:09:01', 'xq2CjdLGa4', '0'),
(72, '2023-09-05 12:09:57', 'RqQ1keVBzm', '0'),
(73, '2023-09-06 11:43:38', '0atOxrD8ES', '-1'),
(74, '2023-09-06 11:45:17', 'k29RuP2SHK', '0'),
(75, '2023-09-06 11:59:15', 'oF9bZ6zB1l', '0'),
(76, '2023-09-06 12:00:05', 'GJVK8Cant8', '0'),
(77, '2023-09-06 12:00:07', '5ngPl4G7v9', '0'),
(78, '2023-09-06 12:00:07', 'RyZ5hiO1Bx', '0'),
(79, '2023-09-06 12:00:07', 'GDteczu3xE', '0'),
(80, '2023-09-06 12:00:07', 'v9BUukAb1l', '0'),
(81, '2023-09-06 12:00:07', '7urSkZyi5E', '0'),
(82, '2023-09-06 12:00:07', 'wamTPdRrwL', '0'),
(83, '2023-09-06 12:00:26', 'E0E89g5A1L', '0'),
(84, '2023-09-06 12:03:40', 'OTi9gj77j1', '0'),
(85, '2023-09-06 12:04:05', 'ymODo70Q3e', '0'),
(86, '2023-09-08 07:25:24', 'nRxSm7JVCD', '0'),
(87, '2023-09-08 07:26:54', 'IjEnvdBe7J', '0'),
(88, '2023-09-08 07:31:14', 'fXlv9NT3bh', '0');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `receipt_line`
--

CREATE TABLE `receipt_line` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `receipt_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `receipt_line`
--

INSERT INTO `receipt_line` (`id`, `product_id`, `quantity`, `receipt_id`) VALUES
(280, 95, 1, 56),
(281, 96, 1, 56),
(282, 95, 1, 57),
(283, 96, 1, 57),
(284, 95, 1, 58),
(285, 96, 1, 58),
(286, 95, 1, 59),
(287, 96, 1, 59),
(288, 95, 1, 60),
(289, 96, 1, 60),
(290, 95, 1, 61),
(291, 96, 1, 61),
(292, 95, 1, 62),
(293, 96, 1, 62),
(294, 95, 1, 63),
(295, 96, 1, 63),
(296, 95, 1, 64),
(297, 96, 1, 64),
(298, 98, 1, 65),
(299, 86, 1, 66),
(300, 86, 1, 67),
(301, 102, 1, 68),
(302, 103, 1, 68),
(303, 104, 1, 68),
(304, 98, 1, 69),
(305, 99, 1, 69),
(306, 102, 1, 70),
(307, 103, 1, 70),
(308, 104, 1, 70),
(309, 102, 1, 71),
(310, 86, 1, 72),
(311, 100, 3, 73),
(312, 86, 1, 73),
(313, 90, 1, 73),
(314, 88, 1, 73),
(315, 106, 1, 74),
(316, 107, 1, 74),
(317, 108, 1, 74),
(318, 100, 1, 75),
(319, 98, 1, 83),
(320, 100, 1, 85),
(321, 86, 1, 86),
(322, 100, 1, 87),
(323, 101, 1, 87),
(324, 98, 1, 88),
(325, 99, 1, 88);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `temporary_user`
--

CREATE TABLE `temporary_user` (
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` int(11) NOT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `validation_code` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `buyer_list`
--
ALTER TABLE `buyer_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_buyer` (`id_account`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_product_line` (`id_product_line`);

--
-- Chỉ mục cho bảng `product_line`
--
ALTER TABLE `product_line`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `receipt`
--
ALTER TABLE `receipt`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`id_buyer`);

--
-- Chỉ mục cho bảng `receipt_line`
--
ALTER TABLE `receipt_line`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `order_id` (`receipt_id`);

--
-- Chỉ mục cho bảng `temporary_user`
--
ALTER TABLE `temporary_user`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- AUTO_INCREMENT cho bảng `product_line`
--
ALTER TABLE `product_line`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `receipt`
--
ALTER TABLE `receipt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT cho bảng `receipt_line`
--
ALTER TABLE `receipt_line`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=326;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `buyer_list`
--
ALTER TABLE `buyer_list`
  ADD CONSTRAINT `buyer_list_ibfk_1` FOREIGN KEY (`id_account`) REFERENCES `account` (`id`);

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`id_product_line`) REFERENCES `product_line` (`id`);

--
-- Các ràng buộc cho bảng `receipt`
--
ALTER TABLE `receipt`
  ADD CONSTRAINT `receipt_ibfk_1` FOREIGN KEY (`id_buyer`) REFERENCES `buyer_list` (`id`);

--
-- Các ràng buộc cho bảng `receipt_line`
--
ALTER TABLE `receipt_line`
  ADD CONSTRAINT `receipt_line_ibfk_4` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `receipt_line_ibfk_5` FOREIGN KEY (`receipt_id`) REFERENCES `receipt` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
