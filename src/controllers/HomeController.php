<?php 
namespace src\controllers;
use src\core\controller;
class HomeController extends controller{
    public function index(){
        $data = [];
        $this->includeView('calculator',$data);
    }
}