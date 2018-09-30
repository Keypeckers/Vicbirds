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
$result = array();

$db = @new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
if ($db->connect_error) {
    die("Unable to connect database: " . $db->connect_error);
}

if (isset($_POST['opt'])) {
    if ($_POST['opt'] == 'Old') {
        $query = $db->query("SELECT * FROM bird_location WHERE type='Old'");
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

    }

    if ($_POST['opt'] == 'Kid') {
        $query = $db->query("SELECT * FROM bird_location WHERE type='Chick'");
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

    }

    if ($_POST['opt'] == 'Nest') {
        $query = $db->query("SELECT * FROM bird_location WHERE type='Egg'");
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

    }

    if ($_POST['opt'] == 'Week') {
        $query = $db->query("SELECT * FROM bird_location where DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= date(date)");
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

    }

    if ($_POST['opt'] == 'Month') {
        $query = $db->query("SELECT * FROM `bird_location` WHERE month(date)=month(now())");
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

    }

    if ($_POST['opt'] == 'Year') {
        $query = $db->query("SELECT * FROM `bird_location` WHERE year(date)=year(now())");
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

    }


} else {
    $query = $db->query("SELECT * FROM bird_location ");
    if ($query->num_rows > 0) {

        while ($userData = $query->fetch_assoc()) {
            // Add to XML document node

            array_push($result, $userData);
        }


    } else {
        $data['status'] = 'err';
        $data['result'] = '';
    }

//returns data as JSON format
    echo json_encode($result);

}


?>