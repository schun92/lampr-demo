<?php
header('Access-Control-Allow-Origin: *');

$output = [
    'success' => false
];

require_once('db_connect.php');

$method = $_SERVER['REQUEST_METHOD'];

$action = $_GET['action'];

switch($method){
    case 'GET':
        $path = "get_actions/";
        break;
    case 'POST':
        $path = "post_actions/";
        break;
    case 'DELETE':
        $path = "delete_actions/";
        break;
    case 'PATCH':
        $data = json_decode(file_get_contents('php://input'), true);
        $path = "patch_actions/";
        break;
    default: 
        $output['error'] = "Unknown request method: '$method'";
}

if(empty($output['error'])){
    $path = $path."$action.php";

    if(is_file($path)){
        include_once($path);
    } else {
        $output['error'] = "Unknown action: '$action'";
    }
}

$encoded_data = json_encode($output);

print $encoded_data;
