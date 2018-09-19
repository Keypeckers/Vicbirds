<?php
/**
 * Created by PhpStorm.
 * User: zhangshaojie
 * Date: 2018/9/5
 * Time: 下午6:00
 */


$dbHost = '13.55.145.246';
$dbUsername = 'birdlocation';
$dbPassword = 'birdlocation666';
$dbName = 'location';

$lat = $_POST['lat'];
$lng = $_POST['lng'];
$dd = $_POST['date'];
$tt = $_POST['type'];
$area = $_POST['area'];


$db = @new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
if ($db->connect_error) {
    die("Unable to connect database: " . $db->connect_error);
}


$query = "insert into bird_location(lat,lng,date,type,area)values('$lat','$lng','$dd','$tt','$area');";

$db->query($query);


echo $dd;

?>