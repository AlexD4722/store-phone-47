<?php
class Product
{
    public $id;
    public $name;
    public $description;
    public $initial_price;
    public $selling_price;
    // public ProductLine $product_line;
    public $quantity;
    public $id_product_line;
    public $images;
    public $color;
    public $capacity;
    public $status;
    public function __construct ($name, $desc, $init, $sell, $id_product_line, $qty, $img, $color, $capacity, $status)
    {
        $this->name = $name;
        $this->description = $desc;
        $this->initial_price = $init;
        $this->selling_price = $sell;
        $this->id_product_line = $id_product_line;
        $this->quantity = $qty;
        $this->images = $img;
        $this->color = $color;
        $this->capacity = $capacity;
        $this->status = $status;
    }
}


class ProductLine
{
    public $id;
    public $brand;
    public $product_type;
    public $status = 1;
    public function __construct($brand, $type)
    {
        $this->brand = $brand;
        $this->product_type = $type;
    }
}
?>