<?php

class TemporaryUserTable extends Database
{
    public $data = NULL;
    public function __construct()
    {
        parent::__construct(DatabaseServerName, Database, Username, Password);
    }

    public function getUser($username)
    {
        $sql = "SELECT * FROM temporary_user WHERE username = ?";
        $params = [$username];
        $result = $this->SQLexec($sql, $params);
        if ($result) {
            $data = $this->pdo_stm->fetchAll();
            $return = new stdClass();
            $return->username = $data[0]["username"];
            $return->password = $data[0]["password"];
            $return->email = $data[0]["email"];
            $return->phone = $data[0]["phone"];
            $return->address = $data[0]["address"];
            $return->validation_code = $data[0]["validation_code"];
            $this->data = $return;
        }
        return $result;
    }

    public function insertUser($username, $password, $email, $phone, $address, $validation_code)
    {
        $sql = "INSERT INTO temporary_user VALUES(?, ? ,? ,?, ?, ?)";
        $params = [$username, $password, $email, $phone, $address, $validation_code];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }

    public function deleteUser($username)
    {
        $sql = "DELETE FROM temporary_user WHERE username = ?";
        $params = [$username];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
}

?>