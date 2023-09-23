<?php
class Database
{
    public $conn;
    public $pdo_stm;
    public $error = "";

    function __construct($servername, $database, $user, $pass)
    {
        $this->conn = NULL;
        $this->pdo_stm = NULL;
        try {
            $this->conn = new PDO("mysql:host=$servername;dbname=$database", $user, $pass);
            $this->conn->query("SET NAMES UTF8");
        } catch (PDOException $e) {
            $this->error = $e->getMessage();
        }
    }
    // Hàm set up kết nối, chạy khi khởi tạo class, lưu vào thuộc tính $conn. Nếu có lỗi thì lưu vào biến error
    // Tham số lần lượt là tên server của database, tên database, tên đăng nhập, password

    function SQLexec($sql, $param = NULL)
    {
        $result = FALSE;
        if ($this->conn == NULL) {
            return FALSE;
        }
        $this->pdo_stm = $this->conn->prepare($sql);
        if ($param == NULL) {
            $result = $this->pdo_stm->execute();
        } else {
            $result = $this->pdo_stm->execute($param);
        }
        return $result;
    }
    // Hàm thực thi câu lệnh sql trên kết nối $conn. Nếu thất bại hoặc không có kết nối trả về false
    // Tham số là câu lệnh sql và mảng các tham số
    function test_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    //Hàm kiểm tra dữ liệu nhập vào. Trả về dữ liệu an toàn.
}
?>