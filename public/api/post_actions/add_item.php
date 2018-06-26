<?php

$title = $_POST['title'];
$details = $_POST['details'];

if(!$title){
    $output['errors'][] = 'No title found';
}

if(!$details){
    $output['errors'][] = 'No details found';
}

if(empty($output['errors'])){
    $query = "INSERT INTO `items` (`title`, `details`) VALUES ('$title', '$details')";
    
    $result = mysqli_query($db, $query);

    if(mysqli_affected_rows($db) === 1){
        $output['success'] = true;
        $output['id'] = mysqli_insert_id($db);
        $output['message'] = 'Successfully added new to do item';
    } else {
        $output['error'] = 'Error adding to do item';
    }
}
