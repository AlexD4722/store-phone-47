<?php
class ProductTable extends Database
{
    public $LinkServer = "../imgProduct/";
    public $data;
    function __construct()
    {
        parent::__construct(DatabaseServerName, Database, Username, Password);
    }
    // conditions to search
    // type
    // brand
    // price 
    function getProductList($name = '', $desc = '', $product_line = '', $limit = 0)
    {
        $sql = "SELECT * FROM product WHERE TRUE";
        $params = [];
        if ($name) {
            $sql .= " AND name LIKE ?";
            array_push($params, '%' . $name . '%');
        }
        if ($desc) {
            $sql .= " AND description = ?";
            array_push($params, $desc);
        }
        if ($product_line) {
            $sql .= " AND id_product_line = ?";
            array_push($params, $product_line);
        }
        if ($limit > 0) {
            $sql .= " LIMIT $limit";
        }
        if (count($params) > 0) {
            $result = $this->SQLexec($sql, $params);
        } else {
            $result = $this->SQLexec($sql);
        }
        $data = $this->pdo_stm->fetchAll();
        $this->data = [];
        if (count($data) > 0) {
            foreach ($data as $row) {
                $arrayFiles = [];
                $files = scandir($this->LinkServer . $row["images"]);
                for ($i = 0; $i < count($files); $i++) {
                    if ($files[$i] != "." && $files[$i] != "..") {
                        $files[$i] = "http://localhost:2203/learning/store-phone/back-end/imgProduct/" . $row["images"] . "/" . $files[$i];
                        array_push($arrayFiles, $files[$i]);
                    }
                }
                if ($row['status'] == "1") {
                    $obj = new Product($row['name'], json_decode($row['description']), $row['initial_price'], $row['selling_price'], $row['id_product_line'], $row['quantity'], $arrayFiles, $row['color'], $row['capacity'], $row['status']);
                    $obj->id = $row['id'];
                    array_push($this->data, $obj);
                }
            }
        }
        return $result;
    }
    // function getProductList() is used to get all suitable products 
    // parameters: $name, $desc, $product_line
    // return: boolean
    function searchItemExactly($name = '')
    {
        $sql = "SELECT * FROM product WHERE TRUE";
        $params = [];
        if ($name) {
            $sql .= " AND name LIKE ?";
            array_push($params, $name);
        }
        if (count($params) > 0) {
            $result = $this->SQLexec($sql, $params);
        } else {
            $result = $this->SQLexec($sql);
        }
        $data = $this->pdo_stm->fetchAll();
        $this->data = [];
        if (count($data) > 0) {
            foreach ($data as $row) {
                $arrayFiles = [];
                $files = scandir($this->LinkServer . $row["images"]);
                for ($i = 0; $i < count($files); $i++) {
                    if ($files[$i] != "." && $files[$i] != "..") {
                        $files[$i] = "http://localhost:2203/learning/store-phone/back-end/imgProduct/" . $row["images"] . "/" . $files[$i];
                        array_push($arrayFiles, $files[$i]);
                    }
                }
                if ($row['status'] == "1") {
                    $obj = new Product($row['name'], json_decode($row['description']), $row['initial_price'], $row['selling_price'], $row['id_product_line'], $row['quantity'], $arrayFiles, $row['color'], $row['capacity'], $row['status']);
                    $obj->id = $row['id'];
                    array_push($this->data, $obj);
                }
            }
        }
        return $result;
    }
    function getInfoProduct($limit = 1, $random = "false")
    {
        $params = [];
        $sql = "SELECT * FROM product WHERE TRUE";
        if ($random) {
            $sql .= " ORDER BY RAND()";
        }
        if ($limit > 0) {
            $sql .= " LIMIT $limit";
        }
        if (count($params) > 0) {
            $result = $this->SQLexec($sql, $params);
        } else {
            $result = $this->SQLexec($sql);
        }
        $this->data = [];
        $data = $this->pdo_stm->fetchAll();
        if (count($data) > 0) {
            foreach ($data as $row) {
                $arrayFiles = [];
                $files = scandir($this->LinkServer . $row["images"]);
                for ($i = 0; $i < count($files); $i++) {
                    if ($files[$i] != "." && $files[$i] != "..") {
                        $files[$i] = "http://localhost:2203/learning/store-phone/back-end/imgProduct/" . $row["images"] . "/" . $files[$i];
                        array_push($arrayFiles, $files[$i]);
                    }
                }
                if ($row['status'] == "1") {
                    $obj = new Product($row['name'], json_decode($row['description']), $row['initial_price'], $row['selling_price'], $row['id_product_line'], $row['quantity'], $arrayFiles, $row['color'], $row['capacity'], $row['status']);
                    $obj->id = $row['id'];
                    array_push($this->data, $obj);
                }
            }
        }
        return $result;
    }

    function getProductById($id)
    {
        $sql = "SELECT * FROM product WHERE `id`= ? ";
        $params = [$id];
        $result = $this->SQLexec($sql, $params);
        $data = $this->pdo_stm->fetch();
        $this->data = [];
        if ($data) {
            $arrayFiles = [];
            $files = scandir($this->LinkServer . $data["images"]);
            for ($i = 0; $i < count($files); $i++) {
                if ($files[$i] != "." && $files[$i] != "..") {
                    $files[$i] = "http://localhost:2203/learning/store-phone/back-end/imgProduct/" . $data["images"] . "/" . $files[$i];
                    array_push($arrayFiles, $files[$i]);
                }
            }
            $product = new Product($data['name'], json_decode($data['description']), $data['initial_price'], $data['selling_price'], $data['id_product_line'],$data['quantity'], $arrayFiles , $data['color'], $data['capacity'], $data['status']);
            $this->data = $product;
        }
        return $result;
    }

    function addProduct(Product $p)
    {
        $sql = "INSERT INTO `product`(`id`, `name`, `description`, `initial_price`, `selling_price`, `id_product_line`, `images`, `quantity`, `color`, `capacity`, `status`) VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $data = [
            $p->name,
            json_encode($p->description),
            $p->initial_price,
            $p->selling_price,
            $p->id_product_line,
            $p->images,
            $p->quantity,
            $p->color,
            $p->capacity,
            $p->status
        ];
        $result = $this->SQLexec($sql, $data);
        return $result;
    }
    // function addProduct() is used to insert a data into the list Product 
    // parameters: Product object
    // return: boolean

    function removeProduct($id)
    {
        $sql = "DELETE FROM product WHERE id=?";
        $data = [$id];
        $result = $this->SQLexec($sql, $data);
        return $result;
    }
    // function removeProduct() is used to delete a data from the list Product 
    // parameters: $id
    // return: boolean
    function editProduct($id, Product $p)
    {
        $sql = "UPDATE `product` SET `name`= ?,`description`= ?,`initial_price`= ?,`selling_price`= ?,`id_product_line`= ?,`images`= ?,`quantity`= ?, `color` = ?, `capacity` = ?, `status` = ? WHERE `id` = ?";

        $data = [
            $p->name,
            json_encode($p->description),
            $p->initial_price,
            $p->selling_price,
            $p->id_product_line,
            $p->images,
            $p->quantity,
            $p->color,
            $p->capacity,
            $p->status,
            $id
        ];
        $result = $this->SQLexec($sql, $data);
        return $result;
    }
    // function editProduct() is used to update a data from the list Product 
    // parameters: $id, $name, $description, $initial_price, selling_price, $product_line, $images, $quantity, id_old
    // return: boolean
    function getProductLineList()
    {
        $sql = "SELECT * FROM product_line WHERE TRUE";
        $result = $this->SQLexec($sql);
        if ($result == false) {
            return false;
        } else {
            $data = $this->pdo_stm->fetchAll();
            $this->data = [];
            if (count($data) > 0) {
                foreach ($data as $row) {
                    $obj = new ProductLine($row['brand'], $row['product_type']);
                    $obj->id = $row['id'];
                    $obj->status = $row['status'];
                    array_push($this->data, $obj);
                }
            }
            return true;
        }
    }
    // function getProductLineList() is used to get all data list of product 
    // parameters: $name=''
    // return: boolean

    function addProductLine(ProductLine $pl)
    {
        $sql = "INSERT INTO `product_line`(`id`, `brand`, `product_type`, `status`) VALUES ( ?, ?, ?, 1)";
        $data = [
            $pl->id,
            $pl->brand,
            $pl->product_type
        ];
        $result = $this->SQLexec($sql, $data);
        return $result;
    }
    // function addProductLine() is used to insert a data into the list Product 
    // parameters: object type ProductLine
    // return: boolean

    function removeProductLine($id)
    {
        $sql = "DELETE FROM `product_line` WHERE `id`=? ";
        $data = [$id];
        $result = $this->SQLexec($sql, $data);
        return $result;
    }
    // function removeData() is used to delete a data from the list Product 
    // parameters: $name
    // return: boolean

    function editProductLine(
        $old_id,
        ProductLine $pl
    ) {
        $sql = "UPDATE `product_line` SET `id`=?,`brand`=?,`product_type`=? WHERE `id` = ?";

        $data = [
            $pl->id,
            $pl->brand,
            $pl->product_type,
            $old_id,
        ];
        $result = $this->SQLexec($sql, $data);
        return $result;
    }
    // function editProductLine() is used to update a data from the list Product 
    // parameters: $old_name, $pl
    // return: boolean

    function filter(
        $filter_type,
        $brand = '',
        $startPrice = '',
        $endPrice = '',
        $keyWord = '',
        $upDown = ''
    ) {
        $params = [];
        $sql = "SELECT * FROM product JOIN product_line on product.id_product_line = product_line.id WHERE TRUE";
        $n = count($filter_type->Categories);
        if ($filter_type->Categories[0]) {
            $sql .= " AND`product_type` like ?";
            array_push($params, $filter_type->Categories[0]);
        }
        for ($i = 1; $i < $n; $i++) {
            if ($filter_type->Categories[$i]) {
                $sql .= " OR `product_type` like ?";
                array_push($params, $filter_type->Categories[$i]);
            }
        }
        $m = count($filter_type->Brand);
        if ($filter_type->Brand[0]) {
            $sql .= " AND`brand` like ?";
            array_push($params, $filter_type->Brand[0]);
        }
        for ($i = 1; $i < $m; $i++) {
            if ($filter_type->Brand[$i]) {
                $sql .= " OR `brand` like ?";
                array_push($params, $filter_type->Brand[$i]);
            }
        }
        if ($filter_type->SortPriceStart && $filter_type->SortPriceEnd) {
            $sql .= " AND `selling_price` BETWEEN ? AND ? ";
            array_push($params, $filter_type->SortPriceStart);
            array_push($params, $filter_type->SortPriceEnd);
        }
        if (count($params) > 0) {
            $result = $this->SQLexec($sql, $params);
        } else {
            $result = $this->SQLexec($sql);
        }
        $this->data = [];
        $data = $this->pdo_stm->fetchAll();
        if (count($data) > 0) {
            foreach ($data as $row) {
                $arrayFiles = [];
                $files = scandir($this->LinkServer . $row["images"]);
                for ($i = 0; $i < count($files); $i++) {
                    if ($files[$i] != "." && $files[$i] != "..") {
                        $files[$i] = "http://localhost:2203/learning/store-phone/back-end/imgProduct/" . $row["images"] . "/" . $files[$i];
                        array_push($arrayFiles, $files[$i]);
                    }
                }
                if ($row['status'] == "1") {
                    $obj = new Product($row['name'], json_decode($row['description']), $row['initial_price'], $row['selling_price'], $row['id_product_line'], $row['quantity'], $arrayFiles, $row['color'], $row['capacity'], $row['status']);
                    $obj->id = $row['id'];
                    array_push($this->data, $obj);
                }
            }
        }
        return $result;
    }
    // // function filter() is used to get all data list of product 
    // // parameters: 
    // // return: boolean

}