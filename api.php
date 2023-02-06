<?php
// Require database connection
require 'connection.php';

$person_id = $_GET['person_id'];

// Query interests based on person id
// This information is returned and used in the AJAX get call used respectively in script.js'
queryInterests($conn, $person_id);

function queryInterests($conn, $person_id) {
    $sql = "SELECT p.name,"
        . " pi.interest_id,"
        . " h.name, i.name,"
        . " p.height, p.dob, p.id"
        . " FROM people p"
        . " JOIN person_interest pi ON p.id = pi.person_id"
        . " JOIN interests i ON pi.interest_id = i.id"
        . " JOIN hobby_interest hi ON hi.interest_id = i.id"
        . " JOIN hobbies h ON h.id = hi.hobby_id WHERE p.id = $person_id";

    $dataset = $conn->query($sql);
    $response = array();

    foreach($dataset as $data) {
        $response[] =  $data[3];
    }

    exit(json_encode($response));
}
