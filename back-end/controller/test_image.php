<?php

require_once("../library/classes/product.php");
require_once("../library/models/productTable.php");

$PT = new ProductTable();
$result = $PT->getInfoProduct(0, true);

?>