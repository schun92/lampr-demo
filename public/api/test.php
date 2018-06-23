<?php
header('Access-Control-Allow-Origin: *');

$output = [
    'success' => false
];

if(empty($_POST)){
    $output['message'] = 'No data received';
} else {
    $output['echo'] = $_POST;
    $output['success'] = true;
}

$encodedData = json_encode($output);

print($encodedData);
