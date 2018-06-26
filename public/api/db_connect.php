<?php

require_once('../../config/db.php');

$db = mysqli_connect($host, $user, $password, $database);

if(!$db){
    $output['error'] = 'Error connecting to MySQL database: '.mysqli_connect_error();
    print json_encode($output);
    exit;
}
