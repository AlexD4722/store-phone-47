<?php
class User
{
    public $id;
    public $username;
    public $password;
    public $email;
    public $user_type;
    public $wishlist;
    public $cart;
    public $verification_code;
    public $is_verified;
    public  $created_at;

    public function __construct($username, $password, $user_type = "", $email, $wishlist = [], $cart = [], $verification_code, $is_verified)
    {   
        $this->username = $username;
        $this->password = $password;
        $this->email = $email;
        $this->user_type = $user_type;
        $this->wishlist = $wishlist;
        $this->cart = $cart;
        $this->verification_code = $verification_code;
        $this->is_verified = $is_verified;
    }
}

?>