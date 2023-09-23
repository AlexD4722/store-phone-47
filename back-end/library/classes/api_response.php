<?php
class APIresponse {
    public string $result;
    public object $data;

    public function __construct(string $result){
        $this->result = $result;
        $this->data = new stdClass();
    }
}

?>