-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th8 24, 2023 lúc 05:07 AM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.2.0

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
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `inital_price` int(11) NOT NULL,
  `selling_price` int(11) NOT NULL,
  `product_line` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `images` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `capacity` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `inital_price`, `selling_price`, `product_line`, `images`, `quantity`, `color`, `capacity`, `status`) VALUES
(29, 'Iphone 14', '[\"- Screen : 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 128GB\"]', 825, 810, 'Iphone 14', 'Iphone14', 5, '[\"Red\",\"Black\",\"Violet\",\"Blue\",\"Gold\"]', '128GB', 1),
(30, 'Iphone 14', '[\"- Screen : 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 256GB\"]', 965, 940, 'Iphone 14', 'Iphone14', 5, '[\"Red\",\"Black\",\"Violet\",\"Blue\",\"Gold\"]', '256GB', 1),
(31, 'Iphone 14', '[\"- Screen : 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 512GB\"]', 1138, 1050, 'Iphone 14', 'Iphone14', 5, '[\"Red\",\"Black\",\"Violet\",\"Blue\",\"Gold\"]', '512GB', 1),
(32, 'Iphone 14 Plus', '[\"- Screen : 6.7 inch, Super Retina XDR, 2778 x 1284 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 128GB\"]', 930, 900, 'Iphone 14 Plus', 'Iphone14Plus', 5, '[\"Red\",\"Black\",\"Violet\",\"Blue\",\"Gold\"]', '128GB', 1),
(33, 'Iphone 14 Plus', '[\"- Screen : 6.7 inch, Super Retina XDR, 2778 x 1284 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 256GB\"]', 1034, 999, 'Iphone 14 Plus', 'Iphone14Plus', 5, '[\"Red\",\"Black\",\"Violet\",\"Blue\",\"Gold\"]', '256GB', 1),
(34, 'Iphone 14 Plus', '[\"- Screen : 6.7 inch, Super Retina XDR, 2778 x 1284 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 512GB\"]', 1282, 1199, 'Iphone 14 Plus', 'Iphone14Plus', 5, '[\"Red\",\"Black\",\"Violet\",\"Blue\",\"Gold\"]', '512GB', 1),
(35, 'Iphone 14 Pro', '[\"- Screen : 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 128GB\"]', 1051, 1001, 'Iphone 14 Pro', 'Iphone14Pro', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '128GB', 1),
(36, 'Iphone 14 Pro', '[\"- Screen : 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 256GB\"]', 1181, 1100, 'Iphone 14 Pro', 'Iphone14Pro', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '265GB', 1),
(37, 'Iphone 14 Pro', '[\"- Screen : 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 512GB\"]', 1434, 1300, 'Iphone 14 Pro', 'Iphone14Pro', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '512GB', 1),
(38, 'Iphone 14 Pro', '[\"- Screen : 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : T1B\"]', 1651, 1640, 'Iphone 14 Pro', 'Iphone14Pro', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '1TB', 1),
(39, 'Iphone 14 Pro Max', '[\"- Screen : 6.7 inch, Super Retina XDR, 2796 x 1290 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A16 Bionic\",\"Internal memory : 128GB\"]', 1151, 1111, 'Iphone 14 Pro Max', 'Iphone14ProMax', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '128GB', 1),
(40, 'Iphone 14 Pro Max', '[\"- Screen : 6.7 inch, Super Retina XDR, 2796 x 1290 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A16 Bionic\",\"Internal memory : 256GB\"]', 1268, 1222, 'Iphone 14 Pro Max', 'Iphone14ProMax', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '256GB', 1),
(41, 'Iphone 14 Pro Max', '[\"- Screen : 6.7 inch, Super Retina XDR, 2796 x 1290 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A16 Bionic\",\"Internal memory : 512GB\"]', 1543, 1530, 'Iphone 14 Pro Max', 'Iphone14ProMax', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '512GB', 1),
(42, 'Iphone 14 Pro Max', '[\"- Screen : 6.7 inch, Super Retina XDR, 2796 x 1290 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A16 Bionic\",\"Internal memory : 1TB\"]', 1803, 1790, 'Iphone 14 Pro Max', 'Iphone14ProMax', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '1TB', 1),
(43, 'Samsung Utra 22', '[\"- Screen : 6.1 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2340 Pixels\",\"- Rear camera : 50.0 MP + 12.0 MP + 10.0 MP\",\"Camera Selfie : 10.0 MP\",\"CPU : Snapdragon 8 Gen 1\",\"Internal memory : 128GB\"]', 543, 530, 'SamSungUtra22', 'SamsungUtra22', 3, '[\"Violet\",\"Black\",\"green\"]', '128GB', 1),
(44, 'Samsung Utra 23', '[\"- Screen : 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels\",\"- Rear camera : 200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Snapdragon 8 Gen 2\",\"Internal memory : 256GB\"]', 1130, 1111, 'SamsungUtra23', 'SamsungUtra23', 4, '[\"Cream\",\"Violet\",\"Black\",\"Green\"]', '256GB', 1),
(45, 'Samsung Utra 23', '[\"- Screen : 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels\",\"- Rear camera : 200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Snapdragon 8 Gen 2\",\"Internal memory : 512GB\"]', 1303, 1290, 'SamsungUtra23', 'SamsungUtra23', 4, '[\"Cream\",\"Violet\",\"Black\",\"Green\"]', '512 GB', 1),
(46, 'Samsung Utra 23', '[\"- Screen : 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels\",\"- Rear camera : 200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Snapdragon 8 Gen 2\",\"Internal memory : 1TB\"]', 1564, 1555, 'SamsungUtra23', 'SamsungUtra23', 4, '[\"Cream\",\"Violet\",\"Black\",\"Green\"]', '1TB', 1),
(47, 'IPad Gen 9', '[\"- Screen : 10.2 inch, IPS LCD, Liquid Retina HD, 2160 x 1620 Pixels\",\"- Rear camera : 8.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A13 Bionic\",\"Internal memory : 64GB\"]', 321, 315, 'IPadGen9', 'iPadGen9', 2, '[\"Grey\",\"White\"]', '64GB', 1),
(48, 'IPad Gen 9', '[\"- Screen : 10.2 inch, IPS LCD, Liquid Retina HD, 2160 x 1620 Pixels\",\"- Rear camera : 8.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A13 Bionic\",\"Internal memory : 256GB\"]', 477, 468, 'IPadGen9', 'iPadGen9', 2, '[\"Grey\",\"White\"]', '256GB', 1),
(49, 'IPad Gen 10', '[\"- Screen : 10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels\",\"- Rear camera : 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A14 Bionic\",\"Internal memory : 64GB\"]', 477, 468, 'IPad Gen 10', 'iPadGen10', 4, '[\"Pink\",\"Blue\",\"White\",\"Gold\"]', '64GB', 1),
(50, 'IPad Gen 10', '[\"- Screen : 10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels\",\"- Rear camera : 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A14 Bionic\",\"Internal memory : 256GB\"]', 651, 641, 'IPad Gen 10', 'iPadGen10', 4, '[\"Pink\",\"Blue\",\"White\",\"Gold\"]', '256GB', 1),
(51, 'Apple Watch Series 8', '[\"- Screen : 1.9 inch, Retina, 484 x 396 Pixels\",\"Connect : GPS + Cellular\",\"- Material : aluminum \",\"Size : 41mm\",\"Product weight : 42.3g\",\"Battery life : 18h\"]', 516, 502, 'Apple Watch Series 8', 'AppleWatchSeries8', 3, '[\"White\",\"Gold\",\"Black\"]', '32GB', 1),
(52, 'Apple Watch Series 8', '[\"- Screen : 1.9 inch, Retina, 484 x 396 Pixels\",\"Connect : GPS + Cellular\",\"- Material : aluminum \",\"Size : 45mm\",\"Product weight : 42.3g\",\"Battery life : 18h\"]', 825, 815, 'Apple Watch Series 8', 'AppleWatchSeries8', 3, '[\"White\",\"Gold\",\"Black\"]', '32GB', 1),
(53, 'Apple Watch Ultra', '[\"- Creen : 1.92 inch,LTPO OLED\",\"- Resolution 502 x 410 Pixels\",\"Battery life : 36h\",\"Type of SIM used : 1 eSIM\",\"Connect :GPS+Cellular\",\"material :Titanium\"]', 847, 839, 'Apple Watch Ultra', 'AppleWatchUltra', 3, '[\"Moss green\",\"White\",\"Orange\"]', '32GB', 1),
(54, 'Samsung Z Flip 4', '[\"- Main: 6.7 inch, extra: 1.9 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels\",\"- Rear camera :12.0 MP + 12.0 MP\",\"- Camera Selfie : 10.0 MP\",\"- CPU : Snapdragon 8+ Gen 1\",\"- Internal memory : 128GB\"]', 651, 640, 'Samsung Z Flip 4', 'SamsungZFlip4', 4, '[\"Violet\",\"Gold\",\"Blue\",\"Grey\"]', '128GB', 1),
(55, 'Samsung Z Flip 4', '[\"- Main: 6.7 inch, extra: 1.9 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels\",\"- Rear camera :12.0 MP + 12.0 MP\",\"- Camera Selfie : 10.0 MP\",\"- CPU : Snapdragon 8+ Gen 1\",\"- Internal memory : 256GB\"]', 782, 775, 'Samsung Z Flip 4', 'SamsungZFlip4', 3, '[\"Blue\",\"Gold\",\"Violet\"]', '256GB', 1),
(56, 'Xiaomi Not 12 Pro', '[\"- Screen: 6.7 inch, extra: 1.9 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels\",\"- Rear camera :12.0 MP + 12.0 MP\",\"- Camera Selfie : 10.0 MP\",\"- CPU : Snapdragon 8+ Gen 1\",\"- Internal memory : 128GB\"]', 190, 180, 'Xiaomi Not 12 Pro', 'XiaomiNot12Pro', 3, '[\"White\",\"Black\",\"Blue\"]', '128GB', 1),
(57, 'Xiaomi Redmi Not 12 Pro', '[\"- Main: 6.7 inch, extra: 1.9 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels\",\"- Rear camera :12.0 MP + 12.0 MP\",\"- Camera Selfie : 10.0 MP\",\"- CPU : Snapdragon 8+ Gen 1\",\"- Internal memory : 128GB\"]', 195, 188, 'Xiaomi Redmi Not 12 Pro', 'XiaomiRedmiNot12Pro', 3, '[\"Black\",\"Blue\",\"Green\"]', '128GB', 1),
(58, 'iPad Pro 11', '[\"- Screen: 11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels\",\"- Rear camera :12.0 MP + 10.0 MP\",\"- Camera Selfie : 12.0 MP\",\"- CPU : Apple M2\",\"- Internal memory : 128GB\"]', 890, 885, 'iPad Pro 11', 'iPadPro11', 2, '[\"Grey\",\"White\"]', '128GB', 1),
(59, 'iPad Pro 11', '[\"- Screen: 11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels\",\"- Rear camera :12.0 MP + 10.0 MP\",\"- Camera Selfie : 12.0 MP\",\"- CPU : Apple M2\",\"- Internal memory : 256GB\"]', 1016, 1001, 'iPad Pro 11', 'iPadPro11', 2, '[\"Grey\",\"White\"]', '256 GB', 1),
(60, 'iPad Pro 11', '[\"- Screen: 11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels\",\"- Rear camera :12.0 MP + 10.0 MP\",\"- Camera Selfie : 12.0 MP\",\"- CPU : Apple M2\",\"- Internal memory : 512GB\"]', 1016, 1001, 'iPad Pro 11', 'iPadPro11', 2, '[\"Grey\",\"White\"]', '512 GB', 1),
(62, 'Apple Watch Series 7', '[\"- Screen: 1.61 inch, LTPO OLED, 430 x 352 Pixels\",\"- Rear camera :12.0 MP + 12.0 MP\",\"- Battery life : 18h\",\"- Product weight : 39.7 g\",\"- Material:Stainless steel\",\"- Connect : Cellular\"]', 390, 380, 'Apple Watch Series 7', 'AppleWatchSeries7', 4, '[\"Red\",\"White\",\"Blue\",\"Black\"]', '32GB', 1),
(63, 'Iphone 13', '[\"- Screen : 6.1 inch, OLED, Super Retina XDR, 2532 x 1170 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\" - Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"- Internal memory : 256GB\"]', 730, 720, 'Iphone 13', 'Iphone13', 6, '[\"Red\",\"Pink\",\"Green\",\"White\",\"Blue\",\"Black\"]', '128GB', 1),
(64, 'Iphone 13', '[\"- Screen : 6.1 inch, OLED, Super Retina XDR, 2532 x 1170 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\" - Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"- Internal memory : 256GB\"]', 860, 850, 'Iphone 13', 'Iphone13', 6, '[\"Red\",\"Pink\",\"Green\",\"White\",\"Blue\",\"Black\"]', '256GB', 1),
(65, 'Iphone 13', '[\"- Screen : 6.1 inch, OLED, Super Retina XDR, 2532 x 1170 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\" - Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"- Internal memory : 512GB\"]', 999, 990, 'Iphone 13', 'Iphone13', 1, '[\"Black\"]', '512GB', 1),
(66, 'Iphone 13 Mini', '[\"- Screen : 5.4 inch, OLED, Super Retina XDR, 1080 x 2240 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\" - Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"- Internal memory : 128GB\"]', 825, 815, 'Iphone 13 Mini', 'Iphone13Mini', 6, '[\"Red\",\"White\",\"Green\",\"Blue\",\"Black\",\"Pink\"]', '128GB', 1),
(67, 'Iphone 13 Mini', '[\"- Screen : 5.4 inch, OLED, Super Retina XDR, 1080 x 2240 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\" - Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"- Internal memory : 256GB\"]', 869, 859, 'Iphone 13 Mini', 'Iphone13Mini', 6, '[\"Red\",\"White\",\"Green\",\"Blue\",\"Black\",\"Pink\"]', '256 GB', 1),
(68, 'Iphone 13 Mini', '[\"- Screen : 5.4 inch, OLED, Super Retina XDR, 1080 x 2240 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\" - Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"- Internal memory : 512GB\"]', 1130, 1120, 'Iphone 13 Mini', 'Iphone13Mini', 2, '[\"Black\",\"Green\"]', '512GB', 1),
(69, 'Lightning Charging Cable', '[\"-Connectivity: The Lightning charging cable has a dedicated Lightning connector for connecting to Apple devices and a USB-A or USB-C plug for connecting to a power source or computer.\",\"-Data transfer speed: Lightning charging cable can support data transfer rate up to USB 2.0, allowing for fast data transfer between device and computer.\",\"-Length: Lightning charging cables are typically about 1-2 meters in length. However, there are also cable versions of different lengths to suit your needs.\",\"-Material: Lightning charging cables are usually made of high-quality materials such as PVC or nylon with break-resistant coating, which increases the strength and durability of the cable.\",\"-Functions: The Lightning charging cable is not only used to charge devices, but can also be used to connect other accessories such as speakers, headphones, or connect to an adapter for use with devices that do not have Lightning port.\"]', 9, 8, 'Lightning Charging Cable', 'LightningChargingCable', 2, '[\"Black\",\"White\"]', '', 1),
(70, 'Magsafe Power Bank', '[\"-Input: Input voltage and current (e.g. 5V/2A, 9V/2A) - power bank recharge rate.\",\"-Output: Output voltage and current (eg 5V/2.4A) - device charging rate. Connectors: USB-A or USB-C, possibly including a Lightning port (for Apple devices).\",\"-Fast charging technology: Quick Charge.\",\"-Number of ports: 2.\",\"-Weight and dimensions: 15 x 5.\"]', 42, 40, 'Power bank Masafe', 'MagsafePowerBank', 3, '[\"Black\",\"Violet\",\"White\"]', '10000mAh', 1),
(73, 'Magsafe Wireless Charging', '[\"-Output power: Output voltage and current - 5W.\",\"-Connector: Wireless charging usually has a USB port.\",\"-Protection technology: Wireless charging can integrate protection features such as over-temperature protection, over-current protection, and over-voltage protection to ensure device and charging safety.\",\"-Compatibility: Wireless charging can be compatible with devices that support Qi wireless charging technology, including devices such as iPhone, Samsung Galaxy, and AirPods.\",\"-Weight and dimensions: 15 x 5 and 250g.\"]', 47, 45, 'Magsafe wireless charger', 'WirelessCharging', 1, '[\"Grey]', '', 1),
(74, 'Earphone AirPods 2', '[\"-Connectivity: The AirPods 2 wirelessly connect to the device via Bluetooth technology.\",\"-Weight: Each AirPods 2 headset weighs about 4 grams. Playtime: AirPods 2 headphones provide up to 5 hours of music time and up to 3 hours of talk time on a full charge. Charging time: AirPods 2 need about 15 minutes to charge enough for 3 hours of music or 2 hours of talk.\",\"-Charging box: The charging box that comes with the AirPods 2 helps to charge and store the headphones. The charging case can provide up to 24 hours of music time and up to 18 hours of talk time.\",\"-Sensors and controls: AirPods 2 have motion sensors and noise sensors to adjust volume and play music automatically when placed in your ears.\"]', 116, 114, 'Earphone AirPods 2', 'EarphoneAirPods2', 1, '[\"White\"]', '', 1),
(79, 'Earphone Beats Fit Pro True  Wireless Earbuds', '[\"-Connectivity: The BeatsFitProTrueWirelessEarbuds headphones connect wirelessly to the device via Bluetooth technology.\",\"-Weight: Each Beats Fit Pro True  Wireless Earbuds headset weighs about 4 grams. Playtime: Beats Fit Pro True  Wireless Earbuds headphones provide up to 5 hours of music time and up to 3 hours of talk time on a full charge. Charging time: Beats Fit Pro True  Wireless Earbuds need about 15 minutes to charge enough for 3 hours of music or 2 hours of talk.\",\"-Charging box: The charging box that comes with the AirPods 2 helps to charge and store the headphones. The charging case can provide up to 24 hours of music time and up to 18 hours of talk time.\",\"-Sensors and controls: Beats Fit Pro True  Wireless Earbuds have motion sensors and noise sensors to adjust volume and play music automatically when placed in your ears.\"]', 195, 190, 'Earphone Beats FitPro True Wireless Earbuds', 'EarphoneBeatsFitProTrueWirelessEarbuds', 1, '[\"Black\"]', '', 1),
(80, 'Earphone Beats Flex', '[\"-Connectivity: The BeatsFitProTrueWirelessEarbuds headphones connect wirelessly to the device via Bluetooth technology.\",\"-Weight: Each Beats Flex headset weighs about 4 grams. Playtime: Beats Flex headphones provide up to 5 hours of music time and up to 3 hours of talk time on a full charge. Charging time: Beats Flex need about 15 minutes to charge enough for 3 hours of music or 2 hours of talk.\",\"-Charging box: The charging box that comes with the AirPods 2 helps to charge and store the headphones. The charging case can provide up to 24 hours of music time and up to 18 hours of talk time.\",\"-Sensors and controls: Beats Flex have motion sensors and noise sensors to adjust volume and play music automatically when placed in your ears.\"]', 65, 63, 'Earphone Beats Flex', 'EarphoneBeatsFlex', 3, '[\"Black\",\"Blue\",\"Gold\"]', '', 1),
(81, 'Earphone Beats Studio 3 Wireless', '[\"-Connectivity: The Beats Studio 3 Wireless Earbuds headphones connect wirelessly to the device via Bluetooth technology.\",\"-Weight: Each Beats Flex headset weighs about 4 grams. Playtime: Beats Flex headphones provide up to 5 hours of music time and up to 3 hours of talk time on a full charge. Charging time: Beats Flex need about 15 minutes to charge enough for 3 hours of music or 2 hours of talk.\",\"-Charging box: The charging box that comes with the AirPods 2 helps to charge and store the headphones. The charging case can provide up to 24 hours of music time and up to 18 hours of talk time.\",\"-Sensors and controls: Beats Flex have motion sensors and noise sensors to adjust volume and play music automatically when placed in your ears.\"]', 78, 72, 'Earphone Beats Studio 3 Wireless', 'EarphoneBeatsStudio3Wireless', 4, '[\"Black\",\"Blue\",\"Grey\",\"White\"]', '', 1),
(82, 'Earphone Beats Studio Buds', '[\"-Connectivity: The Beats Studio 3 Wireless Earbuds headphones connect wirelessly to the device via Bluetooth technology.\",\"-Weight: Each Beats Flex headset weighs about 4 grams. Playtime: Beats Flex headphones provide up to 5 hours of music time and up to 3 hours of talk time on a full charge. Charging time: Beats Flex need about 15 minutes to charge enough for 3 hours of music or 2 hours of talk.\",\"-Charging box: The charging box that comes with the AirPods 2 helps to charge and store the headphones. The charging case can provide up to 24 hours of music time and up to 18 hours of talk time.\",\"-Sensors and controls: Beats Flex have motion sensors and noise sensors to adjust volume and play music automatically when placed in your ears.\"]', 102, 100, 'Earphone Beats Studio Buds', 'EarphoneBeatsStudioBuds', 5, '[\"Black\",\"Blue\",\"Pink\",\"Red\",\"White\"]', '', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_line`
--

CREATE TABLE `product_line` (
  `name` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `brand` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `product_type` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `product_line`
--

INSERT INTO `product_line` (`name`, `brand`, `product_type`, `status`) VALUES
('Apple Watch Series 7', 'Apple', 'SmartWatch', 1),
('Apple Watch Series 8', 'Apple', 'SmartWatch', 1),
('Apple Watch Ultra', 'Apple', 'SmartWatch', 1),
('Bluetooth Speaker PACK&GO LBS-02', 'Samsung', 'Accessories', 1),
('Earphone AirPods 2', 'Apple', 'Headphones', 1),
('Earphone Beats FitPro True Wireless Earbuds', 'Apple', 'Headphones', 1),
('Earphone Beats Flex', 'Apple', 'Headphones', 1),
('Earphone Beats Studio 3 Wireless', 'Apple', 'Headphones', 1),
('Earphone Beats Studio Buds', 'Apple', 'Headphones', 1),
('Harman Kardon Onyx Studio7 Bluetooth Speaker', 'Samsung', 'Accessories', 1),
('IPad Gen 10', 'Apple', 'Tablet', 1),
('iPad Pro 11', 'Apple', 'Tablet', 1),
('IPadGen9', 'Apple', 'Tablet', 1),
('Iphone 13', 'Apple', 'Phone', 1),
('Iphone 13 Mini', 'Apple', 'Phone', 1),
('Iphone 14', 'Apple', 'Phone', 1),
('Iphone 14 Plus', 'Apple', 'Phone', 1),
('Iphone 14 Pro', 'Apple', 'Phone', 1),
('Iphone 14 Pro Max', 'Apple', 'Phone', 1),
('Lightning Charging Cable', 'Samsung', 'Accessories', 1),
('Magsafe wireless charger', 'Samsung', 'Accessories', 1),
('Power bank Masafe', 'Samsung', 'Accessories', 1),
('Samsung Z Flip 4', 'Samsung', 'Phone', 1),
('SamSungUtra22', 'Samsung', 'Phone', 1),
('SamsungUtra23', 'Samsung', 'Phone', 1),
('Xiaomi Not 12 Pro', 'Xiaomi', 'Phone', 1),
('Xiaomi Redmi Not 12 Pro', 'Xiaomi', 'Phone', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `receipt`
--

CREATE TABLE `receipt` (
  `id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `customer_id` int(11) NOT NULL,
  `status` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `receipt_line`
--

CREATE TABLE `receipt_line` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `color` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `receipt_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `temporary_user`
--

CREATE TABLE `temporary_user` (
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `validation_code` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(50) NOT NULL,
  `wishlist` text NOT NULL,
  `cart` text NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `user_type`, `email`, `wishlist`, `cart`, `phone`, `address`) VALUES
(4, 'lamtran', 'e10adc3949ba59abbe56e057f20f883e', 'admin', 'lamtran@yahoo.com', '[{\"id\":48,\"name\":\"IPad Gen 9\",\"description\":[\"- Screen : 10.2 inch, IPS LCD, Liquid Retina HD, 2160 x 1620 Pixels\",\"- Rear camera : 8.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A13 Bionic\",\"Internal memory : 256GB\"],\"inital_price\":477,\"selling_price\":468,\"quantity\":2,\"images\":[\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/iPadGen9\\/iPadGen9 (1)-White.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/iPadGen9\\/iPadGen9 (1).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/iPadGen9\\/iPadGen9 (2).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/iPadGen9\\/iPadGen9 (2)_Grey.jpg\"],\"color\":[\"Grey\",\"White\"],\"capacity\":\"256GB\",\"status\":1},{\"id\":70,\"name\":\"Magsafe Power Bank\",\"description\":[\"-Input: Input voltage and current (e.g. 5V\\/2A, 9V\\/2A) - power bank recharge rate.\",\"-Output: Output voltage and current (eg 5V\\/2.4A) - device charging rate. Connectors: USB-A or USB-C, possibly including a Lightning port (for Apple devices).\",\"-Fast charging technology: Quick Charge.\",\"-Number of ports: 2.\",\"-Weight and dimensions: 15 x 5.\"],\"inital_price\":42,\"selling_price\":40,\"quantity\":3,\"images\":[\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/MagsafePowerBank\\/black.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/MagsafePowerBank\\/violet.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/MagsafePowerBank\\/white.jpg\"],\"color\":[\"Black\",\"Violet\",\"White\"],\"capacity\":\"10000mAh\",\"status\":1},{\"id\":74,\"name\":\"Earphone AirPods 2\",\"description\":[\"-Connectivity: The AirPods 2 wirelessly connect to the device via Bluetooth technology.\",\"-Weight: Each AirPods 2 headset weighs about 4 grams. Playtime: AirPods 2 headphones provide up to 5 hours of music time and up to 3 hours of talk time on a full charge. Charging time: AirPods 2 need about 15 minutes to charge enough for 3 hours of music or 2 hours of talk.\",\"-Charging box: The charging box that comes with the AirPods 2 helps to charge and store the headphones. The charging case can provide up to 24 hours of music time and up to 18 hours of talk time.\",\"-Sensors and controls: AirPods 2 have motion sensors and noise sensors to adjust volume and play music automatically when placed in your ears.\"],\"inital_price\":116,\"selling_price\":114,\"quantity\":1,\"images\":[\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/EarphoneAirPods2\\/white.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/EarphoneAirPods2\\/white2.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/EarphoneAirPods2\\/white3.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/EarphoneAirPods2\\/white4.jpg\"],\"color\":[\"White\"],\"capacity\":\"\",\"status\":1},{\"id\":55,\"name\":\"Samsung Z Flip 4\",\"description\":[\"- Main: 6.7 inch, extra: 1.9 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels\",\"- Rear camera :12.0 MP + 12.0 MP\",\"- Camera Selfie : 10.0 MP\",\"- CPU : Snapdragon 8+ Gen 1\",\"- Internal memory : 256GB\"],\"inital_price\":782,\"selling_price\":775,\"quantity\":3,\"images\":[\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/SamsungZFlip4\\/SamsungZFlip4 (1).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/SamsungZFlip4\\/SamsungZFlip4 (2).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/SamsungZFlip4\\/SamsungZFlip4 (3).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/SamsungZFlip4\\/SamsungZFlip4 (4).jpg\"],\"color\":[\"Blue\",\"Gold\",\"Violet\"],\"capacity\":\"256GB\",\"status\":1},{\"id\":38,\"name\":\"Iphone 14 Pro\",\"description\":[\"- Screen : 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : T1B\"],\"inital_price\":1651,\"selling_price\":1640,\"quantity\":4,\"images\":[\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (1).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (2).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (3).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (4).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (5).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (6).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (7).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (8).jpg\"],\"color\":[\"Black\",\"Violet\",\"Gold\",\"White\"],\"capacity\":\"1TB\",\"status\":1}]', '[{\"product\":{\"id\":35,\"name\":\"Iphone 14 Pro\",\"description\":[\"- Screen : 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 128GB\"],\"inital_price\":1051,\"selling_price\":1001,\"quantity\":4,\"images\":[\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (1).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (2).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (3).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (4).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (5).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (6).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (7).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (8).jpg\"],\"color\":[\"Black\",\"Violet\",\"Gold\",\"White\"],\"capacity\":\"128GB\",\"status\":1},\"quantity\":1},{\"product\":{\"id\":82,\"name\":\"Earphone Beats Studio Buds\",\"description\":[\"-Connectivity: The Beats Studio 3 Wireless Earbuds headphones connect wirelessly to the device via Bluetooth technology.\",\"-Weight: Each Beats Flex headset weighs about 4 grams. Playtime: Beats Flex headphones provide up to 5 hours of music time and up to 3 hours of talk time on a full charge. Charging time: Beats Flex need about 15 minutes to charge enough for 3 hours of music or 2 hours of talk.\",\"-Charging box: The charging box that comes with the AirPods 2 helps to charge and store the headphones. The charging case can provide up to 24 hours of music time and up to 18 hours of talk time.\",\"-Sensors and controls: Beats Flex have motion sensors and noise sensors to adjust volume and play music automatically when placed in your ears.\"],\"inital_price\":102,\"selling_price\":100,\"quantity\":5,\"images\":[\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/EarphoneBeatsStudioBuds\\/black.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/EarphoneBeatsStudioBuds\\/blue.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/EarphoneBeatsStudioBuds\\/pink.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/EarphoneBeatsStudioBuds\\/red.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/EarphoneBeatsStudioBuds\\/white.jpg\"],\"color\":[\"Black\",\"Blue\",\"Pink\",\"Red\",\"White\"],\"capacity\":\"\",\"status\":1},\"quantity\":1},{\"product\":{\"id\":67,\"name\":\"Iphone 13 Mini\",\"description\":[\"- Screen : 5.4 inch, OLED, Super Retina XDR, 1080 x 2240 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\" - Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"- Internal memory : 256GB\"],\"inital_price\":869,\"selling_price\":859,\"quantity\":6,\"images\":[\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone13Mini\\/Iphone13 (1)-Green.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone13Mini\\/Iphone13 (2)-Red.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone13Mini\\/Iphone13 (3)-Black.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone13Mini\\/Iphone13 (4)-Pink.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone13Mini\\/Iphone13 (5)-White.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone13Mini\\/Iphone13 (6)-Blue.jpg\"],\"color\":[\"Red\",\"White\",\"Green\",\"Blue\",\"Black\",\"Pink\"],\"capacity\":\"256 GB\",\"status\":1},\"quantity\":1},{\"product\":{\"id\":35,\"name\":\"Iphone 14 Pro\",\"description\":[\"- Screen : 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 128GB\"],\"inital_price\":1051,\"selling_price\":1001,\"quantity\":4,\"images\":[\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (1).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (2).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (3).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (4).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (5).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (6).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (7).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (8).jpg\"],\"color\":[\"Black\",\"Violet\",\"Gold\",\"White\"],\"capacity\":\"128GB\",\"status\":1},\"quantity\":1},{\"product\":{\"id\":80,\"name\":\"Earphone Beats Flex\",\"description\":[\"-Connectivity: The BeatsFitProTrueWirelessEarbuds headphones connect wirelessly to the device via Bluetooth technology.\",\"-Weight: Each Beats Flex headset weighs about 4 grams. Playtime: Beats Flex headphones provide up to 5 hours of music time and up to 3 hours of talk time on a full charge. Charging time: Beats Flex need about 15 minutes to charge enough for 3 hours of music or 2 hours of talk.\",\"-Charging box: The charging box that comes with the AirPods 2 helps to charge and store the headphones. The charging case can provide up to 24 hours of music time and up to 18 hours of talk time.\",\"-Sensors and controls: Beats Flex have motion sensors and noise sensors to adjust volume and play music automatically when placed in your ears.\"],\"inital_price\":65,\"selling_price\":63,\"quantity\":3,\"images\":[\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/EarphoneBeatsFlex\\/black.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/EarphoneBeatsFlex\\/blue.jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/EarphoneBeatsFlex\\/gold.jpg\"],\"color\":[\"Black\",\"Blue\",\"Gold\"],\"capacity\":\"\",\"status\":1},\"quantity\":1},{\"product\":{\"id\":38,\"name\":\"Iphone 14 Pro\",\"description\":[\"- Screen : 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : T1B\"],\"inital_price\":1651,\"selling_price\":1640,\"quantity\":4,\"images\":[\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (1).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (2).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (3).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (4).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (5).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (6).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (7).jpg\",\"http:\\/\\/localhost:2203\\/learning\\/store-phone\\/back-end\\/imgProduct\\/Iphone14Pro\\/iPhone14Pro (8).jpg\"],\"color\":[\"Black\",\"Violet\",\"Gold\",\"White\"],\"capacity\":\"1TB\",\"status\":1},\"quantity\":1}]', '', '');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_product_line` (`product_line`);

--
-- Chỉ mục cho bảng `product_line`
--
ALTER TABLE `product_line`
  ADD PRIMARY KEY (`name`);

--
-- Chỉ mục cho bảng `receipt`
--
ALTER TABLE `receipt`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

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
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT cho bảng `receipt`
--
ALTER TABLE `receipt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `receipt_line`
--
ALTER TABLE `receipt_line`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`product_line`) REFERENCES `product_line` (`name`);

--
-- Các ràng buộc cho bảng `receipt`
--
ALTER TABLE `receipt`
  ADD CONSTRAINT `receipt_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `receipt_line`
--
ALTER TABLE `receipt_line`
  ADD CONSTRAINT `receipt_line_ibfk_1` FOREIGN KEY (`receipt_id`) REFERENCES `receipt` (`id`),
  ADD CONSTRAINT `receipt_line_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
