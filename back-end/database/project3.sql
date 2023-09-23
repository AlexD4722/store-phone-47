-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th9 02, 2023 lúc 12:26 PM
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
(4, 'lamtran', 'e10adc3949ba59abbe56e057f20f883e', 'admin', 'lamtran@yahoo.com', '[]', '[]', '', 1, '2023-09-01 01:17:12'),
(10, 'vinh12345', 'e10adc3949ba59abbe56e057f20f883e', 'customer', 'vinhnt113thotang@gmail.com', '[]', '[]', '', 1, '2023-09-01 01:17:12');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `buyer_list`
--

CREATE TABLE `buyer_list` (
  `id` int(11) NOT NULL,
  `id_account` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(101, 'Lightning Charging Cable', '[\"[\\\"-Connectivity: The Lightning charging cable has a dedicated Lightning connector for connecting to Apple devices and a USB-A or USB-C plug for connecting to a power source or computer.\\\",\\\"-Data transfer speed: Lightning charging cable can support data transfer rate up to USB 2.0, allowing for fast data transfer between device and computer.\\\",\\\"-Length: Lightning charging cables are typically about 1-2 meters in length. However, there are also cable versions of different lengths to suit your needs.\\\",\\\"-Material: Lightning charging cables are usually made of high-quality materials such as PVC or nylon with break-resistant coating, which increases the strength and durability of the cable.\\\",\\\"-Functions: The Lightning charging cable is not only used to charge devices, but can also be used to connect other accessories such as speakers, headphones, or connect to an adapter for use with devices that do not have Lightning port.\\\"]\"]', 200, 185, 5, 'LightningChargingCable', 100, 'white', '', 1);

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
(8, 'xiaomi', 'phone', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `receipt`
--

CREATE TABLE `receipt` (
  `id` varchar(20) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_buyer` int(11) NOT NULL,
  `status` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `receipt_line`
--

CREATE TABLE `receipt_line` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `receipt_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  ADD KEY `index_id_account` (`id_account`);

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
-- AUTO_INCREMENT cho bảng `buyer_list`
--
ALTER TABLE `buyer_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT cho bảng `product_line`
--
ALTER TABLE `product_line`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `receipt_line`
--
ALTER TABLE `receipt_line`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;

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
  ADD CONSTRAINT `receipt_line_ibfk_3` FOREIGN KEY (`receipt_id`) REFERENCES `receipt` (`id`),
  ADD CONSTRAINT `receipt_line_ibfk_4` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
