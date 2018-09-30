var map, infoWindow, geocoder;
var add = 'address';
var markers = [];
var chicago = {lat: 41.85, lng: -87.65};

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


    controlText.innerHTML = '<select id="bird_select" name="selections" style="font-size: 18px;" onchange="mapSelection(this.options[this.options.selectedIndex].value)">\n' +
        '<option value="0">You want to see?</option>\n' +
        '<option value="1">All my families</option>\n' +
        '<option value="2">Adult birds</option>\n' +
        '<option value="3">Chicks</option>\n' +
        '<option value="4">Nests</option>\n' +
        '<option value="5">Spotted this Year</option>\n' +
        '<option value="6">Spotted this Month</option>\n' +
        '<option value="7">Spotted this Week</option>\n' +
        '</select>';
    controlUI.appendChild(controlText);


    // Setup the click event listeners: simply set the map to Chicago.


}

function mapSelection(v) {
    switch (v) {
        case '0':
            clearMarkers();
            break;

        case '1':
            clearMarkers();
            $('#loading').show();
            $.ajax({
                url: 'getData.php',
                type: 'post',
                dataType: 'json',
                data: 0,
                success: function (data) {
                    //alert(data.length);
                    for (var i = 0; i < data.length; i++) {
                        aa = data[i].lat;
                        bb = data[i].lng;
                        addMaker(aa, bb, data[i].type, data[i].date, data[i].area);
                    }

                },
                complete: function () {
                    $('#loading').hide();

                }
            });
            break;
        case '2':
            clearMarkers();
            $('#loading').show();
            var pd = 'opt=Old';
            $.ajax({
                url: 'getData.php',
                type: 'post',
                dataType: 'json',
                data: pd,
                success: function (data) {
                    //alert(data.length);
                    for (var i = 0; i < data.length; i++) {
                        aa = data[i].lat;
                        bb = data[i].lng;
                        addMaker(aa, bb, data[i].type, data[i].date, data[i].area);
                    }

                },
                complete: function () {
                    $('#loading').hide();
                }
            });
            break;
        case '3':
            clearMarkers();
            $('#loading').show();
            var pd = 'opt=Kid';
            $.ajax({
                url: 'getData.php',
                type: 'post',
                dataType: 'json',
                data: pd,
                success: function (data) {
                    //alert(data.length);
                    for (var i = 0; i < data.length; i++) {
                        aa = data[i].lat;
                        bb = data[i].lng;
                        addMaker(aa, bb, data[i].type, data[i].date, data[i].area);
                    }

                },
                complete: function () {
                    $('#loading').hide();
                }
            });
            break;
        case '4':
            clearMarkers();
            $('#loading').show();
            var pd = 'opt=Nest';
            $.ajax({
                url: 'getData.php',
                type: 'post',
                dataType: 'json',
                data: pd,
                success: function (data) {
                    //alert(data.length);
                    for (var i = 0; i < data.length; i++) {
                        aa = data[i].lat;
                        bb = data[i].lng;
                        addMaker(aa, bb, data[i].type, data[i].date, data[i].area);
                    }

                },
                complete: function () {
                    $('#loading').hide();
                }
            });
            break;
        case '5':
            clearMarkers();
            $('#loading').show();
            var pd = 'opt=Year';
            $.ajax({
                url: 'getData.php',
                type: 'post',
                dataType: 'json',
                data: pd,
                success: function (data) {
                    //alert(data.length);
                    for (var i = 0; i < data.length; i++) {
                        aa = data[i].lat;
                        bb = data[i].lng;
                        addMaker(aa, bb, data[i].type, data[i].date, data[i].area);
                    }

                },
                complete: function () {
                    $('#loading').hide();

                }
            });
            break;
        case '6':
            clearMarkers();
            $('#loading').show();
            var pd = 'opt=Month';
            $.ajax({
                url: 'getData.php',
                type: 'post',
                dataType: 'json',
                data: pd,
                success: function (data) {
                    //alert(data.length);
                    for (var i = 0; i < data.length; i++) {
                        aa = data[i].lat;
                        bb = data[i].lng;
                        addMaker(aa, bb, data[i].type, data[i].date, data[i].area);
                    }

                },
                complete: function () {
                    $('#loading').hide();
                }
            });
            break;
        case '7':
            clearMarkers();
            $('#loading').show();
            var pd = 'opt=Week';
            $.ajax({
                url: 'getData.php',
                type: 'post',
                dataType: 'json',
                data: pd,
                success: function (data) {
                    //alert(data.length);
                    for (var i = 0; i < data.length; i++) {
                        aa = data[i].lat;
                        bb = data[i].lng;
                        addMaker(aa, bb, data[i].type, data[i].date, data[i].area);
                    }

                },
                complete: function () {
                    $('#loading').hide();
                }
            });
            break;
    }

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
        zoomControl: false,
        gestureHandling: 'none',
        streetViewControl: false,
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


}

function reportLocation(aa, bb, dd, tt) {


    geocodeLatLng(geocoder, aa, bb, function (locationData) {

        // add=locationData;
        var pd = 'lat=' + aa + '&' + 'lng=' + bb + '&' + 'date=' + dd + '&' + 'type=' + tt + '&' + 'area=' + locationData;
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

$(function () {

    $("#all").click(function () {
        // alert(0);
        clearMarkers();
        $('#loading').show();
        $.ajax({
            url: 'getData.php',
            type: 'post',
            dataType: 'json',
            data: 0,
            success: function (data) {
                //alert(data.length);
                for (var i = 0; i < data.length; i++) {
                    aa = data[i].lat;
                    bb = data[i].lng;
                    addMaker(aa, bb, data[i].type, data[i].date, data[i].area);
                }

            },
            complete: function () {
                $('#loading').hide();
                $('html, body').animate({scrollTop: $('#map').offset().top}, 1000)

            }
        });
    });

    //

    $("#old").click(function () {
        // alert(0);
        clearMarkers();
        $('#loading').show();
        var pd = 'opt=Old';
        $.ajax({
            url: 'getData.php',
            type: 'post',
            dataType: 'json',
            data: pd,
            success: function (data) {
                //alert(data.length);
                for (var i = 0; i < data.length; i++) {
                    aa = data[i].lat;
                    bb = data[i].lng;
                    addMaker(aa, bb, data[i].type, data[i].date, data[i].area);
                }

            },
            complete: function () {
                $('#loading').hide();
                $('html, body').animate({scrollTop: $('#map').offset().top}, 1000)
            }
        });
    });

    $("#kid").click(function () {
        // alert(0);
        clearMarkers();
        $('#loading').show();
        var pd = 'opt=Kid';
        $.ajax({
            url: 'getData.php',
            type: 'post',
            dataType: 'json',
            data: pd,
            success: function (data) {
                //alert(data.length);
                for (var i = 0; i < data.length; i++) {
                    aa = data[i].lat;
                    bb = data[i].lng;
                    addMaker(aa, bb, data[i].type, data[i].date, data[i].area);
                }

            },
            complete: function () {
                $('#loading').hide();
                $('html, body').animate({scrollTop: $('#map').offset().top}, 1000)
            }
        });
    });

    $("#nest").click(function () {
        // alert(0);
        clearMarkers();
        $('#loading').show();
        var pd = 'opt=Nest';
        $.ajax({
            url: 'getData.php',
            type: 'post',
            dataType: 'json',
            data: pd,
            success: function (data) {
                //alert(data.length);
                for (var i = 0; i < data.length; i++) {
                    aa = data[i].lat;
                    bb = data[i].lng;
                    addMaker(aa, bb, data[i].type, data[i].date, data[i].area);
                }

            },
            complete: function () {
                $('#loading').hide();
                $('html, body').animate({scrollTop: $('#map').offset().top}, 1000)
            }
        });
    });

    $("#week").click(function () {
        // alert(0);
        clearMarkers();
        $('#loading').show();
        var pd = 'opt=Week';
        $.ajax({
            url: 'getData.php',
            type: 'post',
            dataType: 'json',
            data: pd,
            success: function (data) {
                //alert(data.length);
                for (var i = 0; i < data.length; i++) {
                    aa = data[i].lat;
                    bb = data[i].lng;
                    addMaker(aa, bb, data[i].type, data[i].date, data[i].area);
                }

            },
            complete: function () {
                $('#loading').hide();
                $('html, body').animate({scrollTop: $('#map').offset().top}, 1000)
            }
        });
    });

    $("#month").click(function () {
        // alert(0);
        clearMarkers();
        $('#loading').show();
        var pd = 'opt=Month';
        $.ajax({
            url: 'getData.php',
            type: 'post',
            dataType: 'json',
            data: pd,
            success: function (data) {
                //alert(data.length);
                for (var i = 0; i < data.length; i++) {
                    aa = data[i].lat;
                    bb = data[i].lng;
                    addMaker(aa, bb, data[i].type, data[i].date, data[i].area);
                }

            },
            complete: function () {
                $('#loading').hide();
                $('html, body').animate({scrollTop: $('#map').offset().top}, 1000)
            }
        });
    });

    $("#year").click(function () {
        // alert(0);
        clearMarkers();
        $('#loading').show();
        var pd = 'opt=Year';
        $.ajax({
            url: 'getData.php',
            type: 'post',
            dataType: 'json',
            data: pd,
            success: function (data) {
                //alert(data.length);
                for (var i = 0; i < data.length; i++) {
                    aa = data[i].lat;
                    bb = data[i].lng;
                    addMaker(aa, bb, data[i].type, data[i].date, data[i].area);
                }

            },
            complete: function () {
                $('#loading').hide();
                $('html, body').animate({scrollTop: $('#map').offset().top}, 1000)
            }
        });
    });

    $('#btn1').click(function () {
        $('html, body').animate({scrollTop: $('#select').offset().top}, 1000)
    });
});

function addMaker(aa, bb, c, tp, area) {
    var url = 'img/adult_pin_point.gif';
    if (c == 'Old') {
        url = 'img/adult_pin_point.gif';

    }
    if (c == 'Chick') {
        url = 'img/chick_pin_point.gif'
    }
    if (c == 'Egg') {
        url = 'img/egg_pin_point.gif'
    }
    var icon = {
        url: url,
        scaledSize: new google.maps.Size(45, 50),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };


    var infowindow = new google.maps.InfoWindow({
        content: area + " Location Report in " + tp
    });

    var point = new google.maps.LatLng(aa, bb);
    //geocodeLatLng(geocoder,aa,bb);
    var marker = new google.maps.Marker({
        position: point,
        map: map,
        title: 'There are cute Hooded Plovers',
        icon: icon
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
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




