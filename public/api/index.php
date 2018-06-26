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
        include_once("get_actions/$action.php");
        break;
    case 'POST':
        include_once("post_actions/$action.php");
        break;
    case 'DELETE':
        include_once("delete_actions/$action.php");
        break;
    case 'PATCH':
        $data = json_decode(file_get_contents('php://input'), true);
        include_once("patch_actions/$action.php");
        break;
    default: 
        $output['error'] = "Unknown request method: '$method'";
}

$encoded_data = json_encode($output);

print $encoded_data;
