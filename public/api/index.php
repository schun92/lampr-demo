<?php

echo '<pre> GET';
print_r($_GET);
echo '</pre>';

echo '<pre> POST';
print_r($_POST);
echo '</pre>';

parse_str(file_get_contents('php://input'), $data);

echo '<pre> OTHER';
print_r($data);
echo '</pre>';

print $_SERVER['REQUEST_METHOD'];
