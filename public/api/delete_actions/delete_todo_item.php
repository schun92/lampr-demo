<?php

$id = $_GET['id'];

$query = "DELETE FROM `items` WHERE id=$id";

$result = mysqli_query($db, $query);

if(mysqli_affected_rows($db) > 0){
    $output['success'] = true;
    $output['deletedId'] = $id;
} else {
    $output['error'] = "Item with id: $id, not deleted";
}
