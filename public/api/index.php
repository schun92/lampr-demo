<?php
header('Access-Control-Allow-Origin: *');

$output = [
    'success' => false
];

require_once('db_connect.php');

// echo '<pre> GET';
// print_r($_GET);
// echo '</pre>';

// echo '<pre> POST';
// print_r($_POST);
// echo '</pre>';

// parse_str(file_get_contents('php://input'), $data);

// echo '<pre> OTHER';
// print_r($data);
// echo '</pre>';

// print $_SERVER['REQUEST_METHOD'];

$method = $_SERVER['REQUEST_METHOD'];

$action = $_GET['action'];

switch($method){
    case 'GET':
        include_once("get_actions/$action.php");
        break;
    case 'POST':
        include_once("post_actions/$action.php");
        break;
    default: 
        $output['error'] = "Unknown request method: '$method'";
}

$encoded_data = json_encode($output);

print $encoded_data;
