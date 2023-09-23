<?php
class BuyerTable extends Database
{
    public $data = NULL;
    public function __construct()
    {
        parent::__construct(DatabaseServerName, Database, Username, Password);
    }
    public function getBuyer($id = '', $id_account = "", $name = '', $phone = '', $address = "")
    {
        $sql = "SELECT * FROM buyer_list WHERE TRUE";
        $params = [];
        if ($id) {
            $sql .= " AND id = ?";
            array_push($params, $id);
        }
        if ($id_account) {
            $sql .= " AND id_account = ?";
            array_push($params, $id_account);
        }
        if ($name) {
            $sql .= " AND `name` = ?";
            array_push($params, $name);
        }
        if ($phone) {
            $sql .= " AND `phone` = ?";
            array_push($params, $phone);
        }
        if ($address) {
            $sql .= " AND address = ?";
            array_push($params, $address);
        }
        if (count($params)) {
            $result = $this->SQLexec($sql, $params);
        } else {
            $result = $this->SQLexec($sql);
        }
        if ($result) {
            $data = $this->pdo_stm->fetchAll();
            $arr = [];
            foreach ($data as $row) {
                $one = new Buyer($row["id"], $row["id_account"], $row["name"],  $row["phone"], $row["address"]);
                array_push($arr, $one);
            }
            $this->data = $arr;
        }
        return $result;
    }
    //hàm __construct dùng để kết nối với CSDL


    public function insertBuyer(Buyer $buyer)
    {
        $sql = "INSERT INTO `buyer_list`(`id`, `id_account`, `name`, `phone`, `address`) VALUES (?, ?, ?, ?, ?)";
        $params = [$buyer->id, $buyer->id_account, $buyer->name, $buyer->phone, $buyer->address];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }


    // public function deleteUser($id)
    // {
    //     $sql = "DELETE FROM account WHERE id=?";
    //     $params = [$id];
    //     $result = $this->SQLexec($sql, $params);
    //     return $result;
    // }
  
    // public function editUser($id, User $user)
    // {
    //     $sql = "UPDATE account SET username = ?, email = ?, cart = ?, wishlist = ?, user_type = ? WHERE id=?";
    //     $params = [$user->username, $user->email, json_encode($user->cart), json_encode($user->wishlist), $user->user_type, $id];
    //     $result = $this->SQLexec($sql, $params);
    //     return $result;
    // }

    // public function editUserPassword($id, $pass)
    // {
    //     $sql = "UPDATE account SET password = ? WHERE id = ?";
    //     $params = [$pass, $id];
    //     $result = $this->SQLexec($sql, $params);
    //     return $result;
    // }
    //   public function checkUser($username)
    // {
    //     $sql = "SELECT * FROM account WHERE username = ?";
    //     $params = [$username];
    //     $result = $this->SQLexec($sql, $params);
    //     $this->data = $this->pdo_stm->fetchAll();
    //     return $result;
    // }
}