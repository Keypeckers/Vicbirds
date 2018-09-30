<?php
/**
 * Created by PhpStorm.
 * User: zhangshaojie
 * Date: 2018/9/5
 * Time: 下午3:03
 */

$dbHost = '13.55.145.246';
$dbUsername = 'birdlocation';
$dbPassword = 'birdlocation666';
$dbName = 'location';
$opt = $_POST['opt'];
$result = array();
$query = null;
$db = @new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
if ($db->connect_error) {
    die("Unable to connect database: " . $db->connect_error);
}

if ($opt == 'withDog') {
    $query = $db->query("SELECT egg,id FROM `polyData` where id>0 ORDER BY egg ASC");
}

if ($opt == 'withHorse') {
    $query = $db->query("SELECT chick,id FROM `polyData` where id>0 ORDER BY chick ASC");
}

if ($opt == 'Nest') {
    $query = $db->query("SELECT egg,id FROM `polyData` where id>0 ORDER BY egg DESC");
}

if ($opt == 'Chick') {
    $query = $db->query("SELECT chick,id FROM `polyData` where id>0 ORDER BY chick DESC");
}

if ($opt == 'Adult') {
    $query = $db->query("SELECT old,id FROM `polyData` where id>0 ORDER BY old DESC");
}

if ($query->num_rows > 0) {

    while ($userData = $query->fetch_assoc()) {
        // Add to XML document node

        array_push($result, $userData);
    }


} else {
    $data['status'] = 'err';
    $data['result'] = '';
}


echo json_encode($result);