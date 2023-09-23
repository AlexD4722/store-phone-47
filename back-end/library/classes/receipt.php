<?php
class Receipt
{
    public $id;
    public $date;
    public $id_buyer;
    public $status;
    public $lines = [];
    public function __construct($id_buyer, $status)
    {
        $this->id_buyer = $id_buyer;
        $this->status = $status;
    }

    public function addLine(ReceiptLine $rl)
    {
        array_push($this->lines, $rl);    
    }
    public function addLinesArray(array $arr)
    {
        $fail = [];
        $length = count($arr);
        for ($i = 0; $i < $length; $i++) {
            $this->addLine($arr[$i]);   
        }
        if (count($fail) > 0) {
            return $fail;
        }
        return true;
    }
}

class ReceiptLine
{
    public $id;
    public $product_id;
    public $quantity;
    public $receipt_id;

    public function __construct($product_id, $quantity, $receipt_id)
    {
        $this->product_id = $product_id;
        $this->quantity = $quantity;
        $this->receipt_id = $receipt_id;
    }
}
?>