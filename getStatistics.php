
<?php

// put your code here
include('dbFunctions.php');

$statistic = Array();

$query = "SELECT * FROM statistics ORDER BY id";
$result = mysqli_query($link, $query);

while ($row = mysqli_fetch_assoc($result)) {
    $statistic[] = $row;
}

echo json_encode($statistic);
?>

