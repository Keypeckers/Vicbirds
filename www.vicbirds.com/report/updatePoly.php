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


$db = @new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
if ($db->connect_error) {
    die("Unable to connect database: " . $db->connect_error);
}


$db->query($query);

$px = 0;
for ($px = 0; $px <= 8; $px++) {
    $query = $db->query("select count(*) AS count from bird_location;");
    $data = $query->fetch_assoc();
    $query2 = $db->query("select count(*) AS count from bird_location where TYPE ='Old' and poly='$px';");
    $old = $query2->fetch_assoc();
    $query3 = $db->query("select count(*) AS count from bird_location where TYPE ='Chick' and poly='$px';");
    $chick = $query3->fetch_assoc();
    $query4 = $db->query("select count(*) AS count from bird_location where TYPE ='Egg' and poly='$px';");
    $egg = $query4->fetch_assoc();
    $oldrate = round($old['count'] / $data['count'], 3);
    $chickrate = round($chick['count'] / $data['count'], 3);
    $eggrate = round($egg['count'] / $data['count'], 3);

    $qry = "UPDATE polyData SET old='$oldrate' WHERE id='$px';";
    $db->query($qry);

    $qry2 = "UPDATE polyData SET chick='$chickrate' WHERE id='$px';";
    $db->query($qry2);

    $qry3 = "UPDATE polyData SET egg='$eggrate' WHERE id='$px';";
    $db->query($qry3);


}

?>