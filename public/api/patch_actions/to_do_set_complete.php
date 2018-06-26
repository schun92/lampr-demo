<?php

$id = $data['id'];
$complete = (int) $data['complete'];

$query = "UPDATE `items` SET complete=$complete WHERE id=$id";

print $query;

$result = mysqli_query($db, $query);

if(mysqli_affected_rows($db) > 0){
    $output['success'] = true;
    $output['updated-id'] = $id;
} else {
    $output['message'] = "Failed to update item with ID of: $id";
}
