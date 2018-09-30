var map, infoWindow, geocoder;
var add = 'address';
var markers = [];
var glat = 0;
var glng = 0;
var dd = '';
var opt = 'none';
var usadd = '';

function CenterControl(controlDiv, map) {

    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.margin = '8px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to see the birds';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '18px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';


    controlText.innerHTML = '<input  id="userAddress" onchange="changeAdd(this.value)"><a id="usdBtn" onclick="codeAddress()" style="text-decoration: none; color:black;">Search</a>';
    controlUI.appendChild(controlText);


    // Setup the click event listeners: simply set the map to Chicago.


}

function changeAdd(d) {
    usadd = d;

}


function initMap() {
    geocoder = new google.maps.Geocoder();


    var styledMapType = new google.maps.StyledMapType(
        [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#263c3f"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6b9a76"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#38414e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#212a37"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9ca5b3"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#1f2835"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#f3d19c"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2f3948"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#515c6d"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            }
        ], {name: 'Bird Map'}
    )
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -38.667, lng: 143.604},
        zoom: 11,
        mapTypeControl: false,
        mapTypeControlOptions: {
            mapTypeIds: ['Bird Map'
            ]
        }
    });


    map.mapTypes.set('Bird Map', styledMapType);
    map.setMapTypeId('Bird Map');
    var centerControlDiv = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv, map);

    centerControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv);

    var locationinfoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude

            };

            glat = pos.lat;
            glng = pos.lng;

            locationinfoWindow.setPosition(pos);
            locationinfoWindow.setContent('Your current location');
            locationinfoWindow.open(map);
            map.setCenter(pos);
            map.setZoom(16);
        }, function () {
            handleLocationError(true, locationinfoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, locationinfoWindow, map.getCenter());
    }


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }

    google.maps.event.addListener(map, 'click', function (event) {

        clearMarkers();
        if (check() == true) {
            //alert('Yes');
            var lat = event.latLng.lat();
            var lng = event.latLng.lng();
            glat = lat;
            glng = lng;


            addMaker(lat, lng);
            // reportLocation(lat,lng);


        } else {
            //alert('No');
        }
    });


}

function codeAddress() {
    var address = document.getElementById('userAddress').value + ' Australia';
    geocoder.geocode({'address': address}, function (results, status) {
        if (status == 'OK') {
            map.setCenter(results[0].geometry.location);
        } else {
            alert('You entered a invalid address!');
        }
    });
}

function reportLocation(aa, bb, dd, tt) {


    geocodeLatLng(geocoder, aa, bb, function (locationData) {
        var pl = 0;

        $('#loading').show();
        for (var i = 0; i < areas.length; i++) {
            if (checkRectangle(aa, bb, areas[i].lt.x, areas[i].lt.y, areas[i].rb.x, areas[i].rb.y) == true) {
                pl = i + 1;
            }
        }

        // add=locationData;
        var pd = 'lat=' + aa + '&' + 'lng=' + bb + '&' + 'date=' + dd + '&' + 'type=' + tt + '&' + 'area=' + locationData + '&' + 'poly=' + pl;
        // alert(pd);
        $.ajax({
            url: 'postData.php',
            type: 'post',
            data: pd,
            success: function (data) {
                //alert(data);
                alert('report successful')

            },
            complete: function () {
                $('#loading').hide();
                window.location.reload();

            }

        });
    });


}

function check() {
    if (window.confirm('Do you want to report this area?')) {
        //alert("确定");
        return true;
    } else {
        //alert("取消");
        return false;
    }
}


function getLocation() {
    $('#loading').show();
    infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude

            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Your current location.');
            infoWindow.open(map);
            map.setCenter(pos);
            map.setZoom(16);
            $('#loading').hide();
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);

}


function addMaker(aa, bb) {
    var url = 'img/report_point.gif';
    var icon = {
        url: url,
        scaledSize: new google.maps.Size(20, 20),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };
    var point = new google.maps.LatLng(aa, bb);
    marker = new google.maps.Marker({
        position: point,
        map: map,
        title: 'Report this area!',
        icon: icon
    });
    markers.push(marker);
}


function addMaker2(location) {
    var url = 'img/report_point.gif';
    var icon = {
        url: url,
        scaledSize: new google.maps.Size(20, 20),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };
    marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Report this area!',
        icon: icon
    });
    markers.push(marker);
}


function clearMarkers() {
    setMapOnAll(null);
}

function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}


function geocodeLatLng(geocoder, aa, bb, callback) {
    var latlng = {lat: parseFloat(aa), lng: parseFloat(bb)};
    if (geocoder) {
        geocoder.geocode({'location': latlng}, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    //console.log(results[0].formatted_address);
                    callback(results[0].formatted_address);


                } else {
                    //  console.log('No add');
                    // window.add =('No results found');
                    callback('No add');

                }
            } else {
                // console.log('no');
                // window.add=('Geocoder failed due to: ' + status);
                callback('no add')

            }
        });
    }

}

dd = getNow();

function getNow() {
    var now = new Date();
    var nm = now.getMonth() + 1;
    var nd = now.getDate();
    var ny = now.getFullYear();

    return ny + '-' + nm + '-' + nd;

}

function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;
    var d = dd.getDate();
    return d + "/" + m + "/" + y;
}

var element = document.getElementById("myCalendar");
var myCalendar = jsCalendar.new(element, "now", {
    "monthFormat": "month YYYY",
    "dayFormat": "DDD"

});

myCalendar.max(GetDateStr(0));

myCalendar.onDateClick(function (event, date) {

    myCalendar.set(date);
    var time = new Date(date);
    var now = new Date();
    var nm = now.getMonth() + 1;
    var nd = now.getDate();
    var ny = now.getFullYear();

    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();


    if (y <= ny && m <= nm && d <= nd) {
        dd = y + '-' + m + '-' + d;
    }
    console.log(dd);

});


/////////////////////////////////


//
// IMAGE SELECTION REACTION FUNCTION
//
// On hover, change image
var spottedNest = document.getElementById("spottedNest");
var spottedChick = document.getElementById("spottedChick");
var spottedAdult = document.getElementById("spottedAdult");

var isNestSelected = false;
var isChickSelected = false;
var isAdultSelected = false;

// SPOTTED NEST FUNCTION
spottedNest.onmouseover = function () {
    if (isNestSelected == false) {
        spottedNest.src = "../wp-content/uploads/2018/09/spottedNestHover.png";
    }
}


// On lost focus, change image back to original
spottedNest.onmouseout = function () {

    if (isNestSelected == false) {
        spottedNest.src = "../wp-content/uploads/2018/09/spottedNest.png";
    }
}

// On click, change image, set type = nest
spottedNest.onclick = function () {
    isNestSelected = true;
    isChickSelected = false;
    isAdultSelected = false;

    spottedNest.src = "../wp-content/uploads/2018/09/spottedNestSelected.png";
    spottedChick.src = "../wp-content/uploads/2018/09/spottedChick.png";
    spottedAdult.src = "../wp-content/uploads/2018/09/spottedAdult.png";
    $('html, body').animate({scrollTop: $('#map').offset().top}, 1000);
    opt = 'Egg';

}

// SPOTTED CHICK FUNCTION
spottedChick.onmouseover = function () {

    if (isChickSelected == false) {
        spottedChick.src = "../wp-content/uploads/2018/09/spottedChickHover.png";
    }
}


// On lost focus, change image back to original
spottedChick.onmouseout = function () {
    if (isChickSelected == false) {
        spottedChick.src = "../wp-content/uploads/2018/09/spottedChick.png";
    }
}

// On click, change image, set type = nest
spottedChick.onclick = function () {

    isNestSelected = false;
    isChickSelected = true;
    isAdultSelected = false;

    spottedNest.src = "../wp-content/uploads/2018/09/spottedNest.png";
    spottedChick.src = "../wp-content/uploads/2018/09/spottedChickSelected.png";
    spottedAdult.src = "../wp-content/uploads/2018/09/spottedAdult.png";
    $('html, body').animate({scrollTop: $('#map').offset().top}, 1000);
    opt = 'Chick';
    //TODO


}

// SPOTTED ADULT FUNCTION
spottedAdult.onmouseover = function () {
    if (isAdultSelected == false) {
        spottedAdult.src = "../wp-content/uploads/2018/09/spottedAdultHover.png";
    }
}


// On lost focus, change image back to original
spottedAdult.onmouseout = function () {
    if (isAdultSelected == false) {
        spottedAdult.src = "../wp-content/uploads/2018/09/spottedAdult.png";
    }
}

// On click, change image, set type = nest
spottedAdult.onclick = function () {

    isNestSelected = false;
    isChickSelected = false;
    isAdultSelected = true;

    spottedNest.src = "../wp-content/uploads/2018/09/spottedNest.png";
    spottedChick.src = "../wp-content/uploads/2018/09/spottedChick.png";
    spottedAdult.src = "../wp-content/uploads/2018/09/spottedAdultSelected.png";
    $('html, body').animate({scrollTop: $('#map').offset().top}, 1000);
    opt = 'Old';
    //TODO


}

//
// CONFIRM SHARE BUTTON REACTION FUNCTION
//
// On hover, change image
var confirmShare = document.getElementById("confirmShare");
confirmShare.onmouseover = function () {
    confirmShare.src = "../wp-content/uploads/2018/09/confirmShareHover.png";
}


// On lost focus, change image back to original
confirmShare.onmouseout = function () {
    confirmShare.src = "../wp-content/uploads/2018/09/confirmShare.png";
}

// On click, load all data and plot on map
confirmShare.onclick = function () {
    // Load all data
    if (opt == 'none') {
        alert('Please select a type of bird');
        $('html, body').animate({scrollTop: $('#whatDidYouSee').offset().top}, 1000);
    } else if (dd == 'none') {
        alert('Please pick a date');
    } else if (glat == 0 && glng == 0) {
        alert('Please pick a location')
    } else {

        $.ajax({
            url: 'updatePoly.php',
            type: 'post',
            data: 0,
            success: function (data) {
                //alert(data);
                console.log('updated');

            },
            complete: function () {

            }

        });

        reportLocation(glat, glng, dd, opt);
    }


}


//////////poly

var p1 = {
    lt: {
        x: -38.66753,
        y: 143.13982
    },
    lb: {
        x: -38.79394,
        y: 143.13982
    },
    rb: {
        x: -38.79394,
        y: 143.25518
    },
    rt: {
        x: -38.66753,
        y: 143.25518

    }

};
//
var p2 = {
    lt: {
        x: -38.70398,
        y: 143.25518
    },
    lb: {
        x: -38.79394,
        y: 143.25518
    },
    rb: {
        x: -38.79394,
        y: 143.38976
    },
    rt: {
        x: -38.70398,
        y: 143.38976

    }

};
//
var p3 = {
    lt: {
        x: -38.70398,
        y: 143.38976
    },
    lb: {
        x: -38.90738,
        y: 143.38976
    },
    rb: {
        x: -38.90738,
        y: 143.53396
    },
    rt: {
        x: -38.70398,
        y: 143.53396

    }

};
//
var p4 = {
    lt: {
        x: -38.71791,
        y: 143.53396
    },
    lb: {
        x: -38.87738,
        y: 143.53396
    },
    rb: {
        x: -38.87738,
        y: 143.65481
    },
    rt: {
        x: -38.71791,
        y: 143.65481

    }

};
//
var p5 = {
    lt: {
        x: -38.66791,
        y: 143.65481
    },
    lb: {
        x: -38.77683,
        y: 143.65481
    },
    rb: {
        x: -38.77683,
        y: 143.77566
    },
    rt: {
        x: -38.66791,
        y: 143.77566

    }

};
//
var p6 = {
    lt: {
        x: -38.65639,
        y: 143.77566
    },
    lb: {
        x: -38.77683,
        y: 143.77566
    },
    rb: {
        x: -38.77683,
        y: 143.84157
    },
    rt: {
        x: -38.65639,
        y: 143.84157

    }

};
//
var p7 = {
    lt: {
        x: -38.57639,
        y: 143.84175
    },
    lb: {
        x: -38.69431,
        y: 143.84175
    },
    rb: {
        x: -38.69431,
        y: 143.93358
    },
    rt: {
        x: -38.57639,
        y: 143.93358

    }

};
//
var p8 = {
    lt: {
        x: -38.52639,
        y: 143.93358
    },
    lb: {
        x: -38.66431,
        y: 143.93358
    },
    rb: {
        x: -38.66431,
        y: 144.00225
    },
    rt: {
        x: -38.52693,
        y: 144.00225

    }

};


var areas = [p1, p2, p3, p4, p5, p6, p7, p8];

function checkRectangle(x, y, x1, y1, x2, y2) {
    x = Math.abs(x);
    x1 = Math.abs(x1);
    x2 = Math.abs(x2);
    return x >= x1 && x <= x2 && y >= y1 && y <= y2;
}

//alert(checkRectangle(-38.59102,143.96235,p8.lt.x,p8.lt.y,p8.rb.x,p8.rb.y));