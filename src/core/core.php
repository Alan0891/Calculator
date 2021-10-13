<?php 
namespace src\core;
class core{
    private $controller;
    private $method;
    private $params = [];
    public function run(){
        $uri = explode('/public/index.php',URI);
        $uri = end($uri);
        if(isset($uri)){
            $uri = explode('/',$uri);
            array_shift($uri);
            if($uri[0] === 'public'){
                array_shift($uri);
                $this->controller = '\src\controllers\\'.ucfirst($uri[0]).'Controller';
                array_shift($uri);
                if(isset($uri)){
                    $this->method = $uri[0];
                    array_shift($uri);
                }
                if(count($uri)>0){
                    $this->params = $uri;
                }
            }
        }
        $c = new $this->controller();
         call_user_func_array([$c,$this->method],$this->params);
    }
}