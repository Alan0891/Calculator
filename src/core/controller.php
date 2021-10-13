<?php 
namespace src\core;
class controller{
    public function view($view ,$data = []){
        extract($data);
        include '../public/views/'.$view.'.html';
    }
    public function includeView($view ,$data = []){
        extract($data);
        include '../public/views/tmp.html';
    }
    public function allView($view ,$data = []){
        extract($data);
        include '../public/views/'.$view.'.html';
    }
}