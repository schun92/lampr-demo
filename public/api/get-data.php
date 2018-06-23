<?php
header('Access-Control-Allow-Origin: *');

$data = [
    [
        'name' => 'Bob',
        'course' => 'Math 201',
        'grade' => 98
    ],
    [
        'name' => 'Stan',
        'course' => 'English 95',
        'grade' => 82
    ],
    [
        'name' => 'Heather',
        'course' => 'Theoretical Physics',
        'grade' => 98
    ],
    [
        'name' => 'Laura',
        'course' => 'Comp Sci',
        'grade' => 87
    ]
];

$dataToSend = json_encode($data);

print($dataToSend);
