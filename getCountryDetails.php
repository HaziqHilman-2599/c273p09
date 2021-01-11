
<?php

// put your code here
include('dbFunctions.php');

$statistic = Array();
if (isset($_GET['id'])) {


    $id = $_GET['id'];

    $query = "SELECT * FROM statistics WHERE id = '$id' ORDER BY id";
    $result = mysqli_query($link, $query);

    $response = mysqli_fetch_assoc($result);
        
    

    echo json_encode($response);
}
?>
