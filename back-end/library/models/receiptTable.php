<?php
//Phải include file database, constants và receipt
class ReceiptTable extends Database
{
    public $data = NULL;

    public function __construct()
    {
        parent::__construct(DatabaseServerName, Database, Username, Password);
    }

    public function getReceipt($id = '', $date = '', $id_buyer = '', $stt = '')
    {
        $sql = 'SELECT * FROM receipt WHERE TRUE';
        $params = [];
        if ($id != '') {
            $sql .= ' AND id = ?';
            array_push($params, $id);
        }
        if ($date != '') {
            $sql .= ' AND DATE(date) = ?';
            array_push($params, $date);
        }
        if ($id_buyer != '') {
            $sql .= ' AND id_buyer = ?';
            array_push($params, $id_buyer);
        }
        if ($stt != '') {
            $sql .= ' AND `status` = ?';
            array_push($params, $stt);
        }
        if (count($params) > 0) {
            $result = $this->SQLexec($sql, $params);
        } else {
            $result = $this->SQLexec($sql);
        }
        $data = $this->pdo_stm->fetchAll();
        $this->data = [];
        foreach ($data as $row) {
            $one = new Receipt($row["id_buyer"], $row["status"]);
            $one->date = $row["date"];
            $one->id = $row["id"];
            array_push($this->data, $one);
        }
        return $result;
    }
    // Hàm lấy dữ liệu từ bảng receipt theo id, date, customer_id, status. Trả về true nếu thành công, trả về false nếu thất bại. Dữ liệu trả vào thuộc tính $data
    // Tham số là id, date, customer_id, status của receipt cần tìm.

    public function getRecentReceipt(int $number)
    {
        $sql = 'SELECT * FROM `receipt`
                ORDER BY `date` ASC 
                LIMIT ' . $number;
        $result = $this->SQLexec($sql);
        $data = $this->pdo_stm->fetchAll();
        $this->data = [];
        foreach ($data as $row) {
            $one = new Receipt($row["id_buyer"], $row["status"]);
            $one->id = $row["id"];
            $one->date = $row["date"];
            array_push($this->data, $one);
        }
        return $result;
    }
    // Hàm lấy dữ liệu từ bảng receipt theo date. Trả về true nếu thành công, trả về false nếu thất bại. Dữ liệu trả vào thuộc tính $data
    // Tham số là số receipt cần tìm.
    public function addReceipt(Receipt $re)
    {
        $sql = 'INSERT INTO receipt VALUES(null, null, ?, ?)';
        $params = [$re->id_buyer, $re->status];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    // Hàm thêm 1 receipt vào database. Trả về true nếu thành công, trả về false nếu thất bại.
    // Tham số là kiểu dữ liệu Receipt.
    public function editReceipt($id, Receipt $re)
    {
        $sql = 'UPDATE receipt
                SET date = ?, customer_id = ?, status = ?
                WHERE id = ?';
        $params = [$re->date, $re->customer_id, $re->status, $id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    // Hàm sửa 1 receipt trong database. Trả về true nếu thành công, trả về false nếu thất bại.
    // Tham số là id và kiểu dữ liệu Receipt.
    public function removeReceipt($id)
    {
        $sql = 'DELETE FROM receipt WHERE id=?';
        $params = [$id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    // Hàm xóa 1 receipt trong database. Trả về true nếu thành công, trả về false nếu thất bại.
    // Tham số là id.
    public function getReceiptLine($id = '', $rid = '', $pid = '')
    {
        $sql = 'SELECT * FROM receipt_line WHERE TRUE ';
        $params = [];
        if ($id != '') {
            $sql .= ' AND id = ?';
            array_push($params, $id);
        }
        if ($rid != '') {
            $sql .= ' AND receipt_id = ?';
            array_push($params, $rid);
        }
        if ($pid != '') {
            $sql .= ' AND product_id = ?';
            array_push($params, $pid);
        }
        if (count($params) > 0) {
            $result = $this->SQLexec($sql, $params);
        } else {
            $result = $this->SQLexec($sql);
        }
        $data = $this->pdo_stm->fetchAll();
        $arr = [];
        foreach ($data as $row) {
            $one = new ReceiptLine($row["product_id"], $row["quantity"], $row["receipt_id"]);
            $one->id = $row["id"];
            array_push($arr, $one);
        }
        $this->data = $arr;
        return $result;
    }
    // Hàm lấy dữ liệu từ bảng receipt_line theo id và/hoặc oid và/hoặc pid. Trả về true nếu thành công, trả về false nếu thất bại. Dữ liệu trả vào thuộc tính $data
    // Tham số là id, oid, pid của OL cần tìm.

    public function addReceiptLine(ReceiptLine $rl)
    {
        $sql = 'INSERT INTO receipt_line VALUES(NULL, ?, ?, ?)';
        $params = [$rl->product_id, $rl->quantity, $rl->receipt_id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    // Hàm thêm 1 OL vào database. Trả về true nếu thành công, trả về false nếu thất bại.
    // Tham số là product_id, quantity, order_id.
    public function editReceiptLine($id, ReceiptLine $rl)
    {
        $sql = 'UPDATE receipt_line
                SET product_id = ?, quantity = ?, color = ?, order_id = ?
                WHERE id = ?';
        $params = [$rl->product_id, $rl->quantity, $rl->color, $rl->order_id, $id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    // Hàm sửa 1 OL trong database. Trả về true nếu thành công, trả về false nếu thất bại.
    // Tham số là id, product_id, quantity, order_id.



    public function updateStatusReceipt($idReceipt, $status)
    {
        $sql = 'UPDATE `receipt` SET `status` = ? WHERE `receipt`.`id` = ?;';
        $params = [$status, $idReceipt];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }








    public function removeReceiptLine($id)
    {
        $sql = 'DELETE FROM receipt_line WHERE id=?';
        $params = [$id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    // Hàm xóa 1 OL trong database. Trả về true nếu thành công, trả về false nếu thất bại.
    // Tham số là id.
    public function getReceiptDetail($id = '', $date = '', $cid = '', $stt = '')
    {
        $sql = 'SELECT * FROM receipt WHERE TRUE';
        $params = [];
        if ($id != '') {
            $sql .= ' AND id = ?';
            array_push($params, (int) $id);
        }
        if ($date != '') {
            $sql .= ' AND date = ?';
            array_push($params, $date);
        }
        if ($cid != '') {
            $sql .= ' AND customer_id = ?';
            array_push($params, (int) $cid);
        }
        if ($stt != '') {
            $sql .= ' AND status = ?';
            array_push($params, $stt);
        }
        if (count($params) > 0) {
            $result = $this->SQLexec($sql, $params);
        } else {
            $result = $this->SQLexec($sql);
        }
        $data = $this->pdo_stm->fetchAll();
        $this->data = [];
        foreach ($data as $row) {
            $one = new Receipt($row["id"], $row["customer_id"], $row["status"]);
            $one->date = $row["date"];
            array_push($this->data, $one);
        }
        return $result;
    }
}

?>