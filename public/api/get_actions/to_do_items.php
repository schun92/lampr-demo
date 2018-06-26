<?php

$query = 'SELECT `id`, `title`, `complete` FROM items';

$result = mysqli_query($db, $query);

if(mysqli_num_rows($result)){
    while($row = mysqli_fetch_assoc($result)){
        $row['complete'] = (bool) $row['complete'];
        $output['listItems'][] = $row;
    }

    $output['success'] = true;
} else {
    $output['error'] = 'No to do items found';
}
