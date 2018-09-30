//
// WHO YOU ARE SELECTION REACTION FUNCTION
//
var markers = [];

var glat = 0;
var glng = 0;
var selection = 'none';

var localImg = document.getElementById("localPeople");
var travellerImg = document.getElementById("traveller");


var isLocalSelected = false;
var isTravellerSelected = false;


// LOCAL IMAGE FUNCTION
// On hover, change to color version
localImg.onmouseover = function () {
    if (isLocalSelected == false) {
        localImg.src = "../wp-content/uploads/2018/09/local-hover.png";
    }
}


// On lost focus, change image back to original
localImg.onmouseout = function () {

    if (isLocalSelected == false) {
        localImg.src = "../wp-content/uploads/2018/09/local.png";
    }
}

// On click, change image, image set permenently to color version
localImg.onclick = function () {
    isLocalSelected = true;
    isTravellerSelected = false;


    localImg.src = "../wp-content/uploads/2018/09/local-hover.png";
    travellerImg.src = "../wp-content/uploads/2018/09/traveller.png";

    // Display the Come with section
    var x = document.getElementsByClassName("comeWith");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";

    }

    // Hide the Prefer to see section if currently display
    var y = document.getElementsByClassName("preferToSee");
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "None";

    }

    // Hide the map area
    var z = document.getElementsByClassName("suggestDestination");
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "None";

    }
    $('html, body').animate({scrollTop: $('.comeWith').offset().top}, 1000);


}

// TRAVELLER IMAGE FUNCTION
// On hover, change to color version
travellerImg.onmouseover = function () {
    if (isTravellerSelected == false) {
        travellerImg.src = "../wp-content/uploads/2018/09/traveller-hover.png";
    }
}


// On lost focus, change image back to original
travellerImg.onmouseout = function () {

    if (isTravellerSelected == false) {
        travellerImg.src = "../wp-content/uploads/2018/09/traveller.png";
    }
}

// On click, change image, image set permenently to color version
travellerImg.onclick = function () {
    isLocalSelected = false;
    isTravellerSelected = true;


    localImg.src = "../wp-content/uploads/2018/09/local.png";
    travellerImg.src = "../wp-content/uploads/2018/09/traveller-hover.png";

    var x = document.getElementsByClassName("comeWith");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "None";

    }

    var y = document.getElementsByClassName("preferToSee");
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "block";

    }

    // Hide the map area
    var z = document.getElementsByClassName("suggestDestination");
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "None";

    }

    $('html, body').animate({scrollTop: $('.preferToSee').offset().top}, 1000);

}


//
// WHO YOU WILL COME WITH SELECTION REACTION FUNCTION
//

var noPetImg = document.getElementById("noPet");
var withDogImg = document.getElementById("withDog");
var withHorseImg = document.getElementById("withHorse");


var isNoPetSelected = false;
var isWithDogSelected = false;
var isWithHorseSelected = false;


// NO PET
// On hover, change image to color version
noPetImg.onmouseover = function () {
    if (isNoPetSelected == false) {
        noPetImg.src = "../wp-content/uploads/2018/09/no-pet-hover.png";
    }
}


// On lost focus, change image back to original
noPetImg.onmouseout = function () {

    if (isNoPetSelected == false) {
        noPetImg.src = "../wp-content/uploads/2018/09/no-pet.png";
    }
}

// On click, change image, image set permenently to color version
noPetImg.onclick = function () {
    isNoPetSelected = true;
    isWithDogSelected = false;
    isWithHorseSelected = false;


    noPetImg.src = "../wp-content/uploads/2018/09/no-pet-hover.png";
    withDogImg.src = "../wp-content/uploads/2018/09/with-dog.png";
    withHorseImg.src = "../wp-content/uploads/2018/09/with-horse.png";

    // Display the map area
    var z = document.getElementsByClassName("suggestDestination");
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "block";

    }
    selection = 'noPet';

    initMap();
    clearMarkers();
    document.getElementById('right-panel').innerHTML = '';
    for (var i = 0; i < 8; i++) {
        var triangleCoords = [
            {lat: areas[i].lt.x, lng: areas[i].lt.y},
            {lat: areas[i].lb.x, lng: areas[i].lt.y},
            {lat: areas[i].rb.x, lng: areas[i].rb.y},
            {lat: areas[i].rt.x, lng: areas[i].rt.y}
        ];

        // Construct the polygon.
        var bermudaTriangle = new google.maps.Polygon({
            paths: triangleCoords,
            strokeColor: '#2cff1b',
            strokeOpacity: 0.5,
            strokeWeight: 2,
            fillColor: '#2cff1b',
            fillOpacity: 0.35
        });
        bermudaTriangle.setMap(map);
    }

    $('html, body').animate({scrollTop: $('.suggestDestination').offset().top}, 1000);

}

// WITH DOG
// On hover, change image to color version
withDogImg.onmouseover = function () {
    if (isWithDogSelected == false) {
        withDogImg.src = "../wp-content/uploads/2018/09/with-dog-hover.png";
    }
}


// On lost focus, change image back to original
withDogImg.onmouseout = function () {

    if (isWithDogSelected == false) {
        withDogImg.src = "../wp-content/uploads/2018/09/with-dog.png";
    }
}

// On click, change image, image set permenently to color version
withDog.onclick = function () {
    isNoPetSelected = false;
    isWithDogSelected = true;
    isWithHorseSelected = false;


    noPetImg.src = "../wp-content/uploads/2018/09/no-pet.png";
    withDogImg.src = "../wp-content/uploads/2018/09/with-dog-hover.png";
    withHorseImg.src = "../wp-content/uploads/2018/09/with-horse.png";

    // Display the map area
    var z = document.getElementsByClassName("suggestDestination");
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "block";

    }
    selection = 'withDog';
    initMap();
    clearMarkers()
    document.getElementById('right-panel').innerHTML = '';
    $('#loading').show();
    var pd = 'opt' + '=' + selection;
    var fl = [0, 0, 0, 0, 0, 0, 0, 0]
    $.ajax({
        url: 'getPoly.php',
        type: 'post',
        dataType: 'json',
        data: pd,
        success: function (data) {
            //alert(data.length);
            for (var i = 0; i < 3; i++) {
                id = data[i].id;
                rate = data[i].egg;
                // alert(rate);
                fl[data[i].id - 1] = 1;

                var triangleCoords = [
                    {lat: areas[data[i].id - 1].lt.x, lng: areas[data[i].id - 1].lt.y},
                    {lat: areas[data[i].id - 1].lb.x, lng: areas[data[i].id - 1].lt.y},
                    {lat: areas[data[i].id - 1].rb.x, lng: areas[data[i].id - 1].rb.y},
                    {lat: areas[data[i].id - 1].rt.x, lng: areas[data[i].id - 1].rt.y}
                ];

                // Construct the polygon.
                var bermudaTriangle = new google.maps.Polygon({
                    paths: triangleCoords,
                    strokeColor: '#2cff1b',
                    strokeOpacity: 0.5,
                    strokeWeight: 2,
                    fillColor: '#2cff1b',
                    fillOpacity: 0.35
                });
                bermudaTriangle.setMap(map);

                addMaker((areas[data[i].id - 1].lt.x + areas[data[i].id - 1].lb.x) / 2, (areas[data[i].id - 1].lt.y + areas[data[i].id - 1].rt.y) / 2, i, rate, 'Nest');
            }

            for (var i = 0; i < 8; i++) {
                if (fl[i] == 0) {
                    var triangleCoords = [
                        {lat: areas[i].lt.x, lng: areas[i].lt.y},
                        {lat: areas[i].lb.x, lng: areas[i].lt.y},
                        {lat: areas[i].rb.x, lng: areas[i].rb.y},
                        {lat: areas[i].rt.x, lng: areas[i].rt.y}
                    ];

                    // Construct the polygon.
                    var bermudaTriangle = new google.maps.Polygon({
                        paths: triangleCoords,
                        strokeColor: '#ff3100',
                        strokeOpacity: 0.5,
                        strokeWeight: 2,
                        fillColor: '#ff3100',
                        fillOpacity: 0.35
                    });
                    bermudaTriangle.setMap(map);
                }
            }


        },
        complete: function () {
            $('#loading').hide();
        }
    });


    $('html, body').animate({scrollTop: $('.suggestDestination').offset().top}, 1000);

}

// WITH HORSE
// On hover, change image to color version
withHorseImg.onmouseover = function () {
    if (isWithHorseSelected == false) {
        withHorseImg.src = "../wp-content/uploads/2018/09/with-horse-hover.png";
    }
}


// On lost focus, change image back to original
withHorseImg.onmouseout = function () {

    if (isWithHorseSelected == false) {
        withHorseImg.src = "../wp-content/uploads/2018/09/with-horse.png";
    }
}

// On click, change image, image set permenently to color version
withHorse.onclick = function () {
    isNoPetSelected = false;
    isWithDogSelected = false;
    isWithHorseSelected = true;


    noPetImg.src = "../wp-content/uploads/2018/09/no-pet.png";
    withDogImg.src = "../wp-content/uploads/2018/09/with-dog.png";
    withHorseImg.src = "../wp-content/uploads/2018/09/with-horse-hover.png";

    // Display the map area
    var z = document.getElementsByClassName("suggestDestination");
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "block";

    }

    selection = 'withHorse';
    initMap();
    clearMarkers()
    document.getElementById('right-panel').innerHTML = '';
    $('#loading').show();
    var pd = 'opt' + '=' + selection;
    var fl = [0, 0, 0, 0, 0, 0, 0, 0]
    $.ajax({
        url: 'getPoly.php',
        type: 'post',
        dataType: 'json',
        data: pd,
        success: function (data) {
            //alert(data.length);
            for (var i = 0; i < 3; i++) {
                id = data[i].id;
                rate = data[i].chick;
                // alert(rate);
                fl[data[i].id - 1] = 1;

                var triangleCoords = [
                    {lat: areas[data[i].id - 1].lt.x, lng: areas[data[i].id - 1].lt.y},
                    {lat: areas[data[i].id - 1].lb.x, lng: areas[data[i].id - 1].lt.y},
                    {lat: areas[data[i].id - 1].rb.x, lng: areas[data[i].id - 1].rb.y},
                    {lat: areas[data[i].id - 1].rt.x, lng: areas[data[i].id - 1].rt.y}
                ];

                // Construct the polygon.
                var bermudaTriangle = new google.maps.Polygon({
                    paths: triangleCoords,
                    strokeColor: '#2cff1b',
                    strokeOpacity: 0.5,
                    strokeWeight: 2,
                    fillColor: '#2cff1b',
                    fillOpacity: 0.35
                });
                bermudaTriangle.setMap(map);

                addMaker((areas[data[i].id - 1].lt.x + areas[data[i].id - 1].lb.x) / 2, (areas[data[i].id - 1].lt.y + areas[data[i].id - 1].rt.y) / 2, i, rate, 'Chick');
            }

            for (var i = 0; i < 8; i++) {
                if (fl[i] == 0) {
                    var triangleCoords = [
                        {lat: areas[i].lt.x, lng: areas[i].lt.y},
                        {lat: areas[i].lb.x, lng: areas[i].lt.y},
                        {lat: areas[i].rb.x, lng: areas[i].rb.y},
                        {lat: areas[i].rt.x, lng: areas[i].rt.y}
                    ];

                    // Construct the polygon.
                    var bermudaTriangle = new google.maps.Polygon({
                        paths: triangleCoords,
                        strokeColor: '#ff3100',
                        strokeOpacity: 0.5,
                        strokeWeight: 2,
                        fillColor: '#ff3100',
                        fillOpacity: 0.35
                    });
                    bermudaTriangle.setMap(map);
                }
            }


        },
        complete: function () {
            $('#loading').hide();
        }
    });
    $('html, body').animate({scrollTop: $('.suggestDestination').offset().top}, 1000);
}


//
// WHICH YOU MORE PREFER TO SEE COME WITH SELECTION REACTION FUNCTION
//

var nestImg = document.getElementById("nest");
var chickImg = document.getElementById("chick");
var adultImg = document.getElementById("adult");


var isNestSelected = false;
var isChickSelected = false;
var isAdultSelected = false;


// Nest
// On hover, change image to color version
nestImg.onmouseover = function () {
    if (isNestSelected == false) {
        nestImg.src = "../wp-content/uploads/2018/09/nest-hover.png";
    }
}


// On lost focus, change image back to original
nestImg.onmouseout = function () {

    if (isNestSelected == false) {
        nestImg.src = "../wp-content/uploads/2018/09/nest.png";
    }
}

// On click, change image, image set permenently to color version
nestImg.onclick = function () {
    isNestSelected = true;
    isChickSelected = false;
    isAdultSelected = false;


    nestImg.src = "../wp-content/uploads/2018/09/nest-hover.png";
    chickImg.src = "../wp-content/uploads/2018/09/chick.png";
    adultImg.src = "../wp-content/uploads/2018/09/adult.png";

    // Display the map area
    var z = document.getElementsByClassName("suggestDestination");
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "block";

    }
    selection = 'Nest';
    initMap();
    clearMarkers()
    document.getElementById('right-panel').innerHTML = '';
    $('#loading').show();
    var pd = 'opt' + '=' + selection;
    var fl = [0, 0, 0, 0, 0, 0, 0, 0]
    $.ajax({
        url: 'getPoly.php',
        type: 'post',
        dataType: 'json',
        data: pd,
        success: function (data) {
            //alert(data.length);
            for (var i = 0; i < 3; i++) {
                id = data[i].id;
                rate = data[i].egg;
                // alert(rate);
                fl[data[i].id - 1] = 1;

                var triangleCoords = [
                    {lat: areas[data[i].id - 1].lt.x, lng: areas[data[i].id - 1].lt.y},
                    {lat: areas[data[i].id - 1].lb.x, lng: areas[data[i].id - 1].lt.y},
                    {lat: areas[data[i].id - 1].rb.x, lng: areas[data[i].id - 1].rb.y},
                    {lat: areas[data[i].id - 1].rt.x, lng: areas[data[i].id - 1].rt.y}
                ];

                // Construct the polygon.
                var bermudaTriangle = new google.maps.Polygon({
                    paths: triangleCoords,
                    strokeColor: '#2cff1b',
                    strokeOpacity: 0.5,
                    strokeWeight: 2,
                    fillColor: '#2cff1b',
                    fillOpacity: 0.35
                });
                bermudaTriangle.setMap(map);

                addMaker((areas[data[i].id - 1].lt.x + areas[data[i].id - 1].lb.x) / 2, (areas[data[i].id - 1].lt.y + areas[data[i].id - 1].rt.y) / 2, i, rate, 'Nest');
            }

            for (var i = 0; i < 8; i++) {
                if (fl[i] == 0) {
                    var triangleCoords = [
                        {lat: areas[i].lt.x, lng: areas[i].lt.y},
                        {lat: areas[i].lb.x, lng: areas[i].lt.y},
                        {lat: areas[i].rb.x, lng: areas[i].rb.y},
                        {lat: areas[i].rt.x, lng: areas[i].rt.y}
                    ];

                    // Construct the polygon.
                    var bermudaTriangle = new google.maps.Polygon({
                        paths: triangleCoords,
                        strokeColor: '#ff3100',
                        strokeOpacity: 0.5,
                        strokeWeight: 2,
                        fillColor: '#ff3100',
                        fillOpacity: 0.35
                    });
                    bermudaTriangle.setMap(map);
                }
            }


        },
        complete: function () {
            $('#loading').hide();
        }
    });
    $('html, body').animate({scrollTop: $('.suggestDestination').offset().top}, 1000);

}

// Chick
// On hover, change image to color version
chickImg.onmouseover = function () {
    if (isChickSelected == false) {
        chickImg.src = "../wp-content/uploads/2018/09/chick-hover.png";
    }
}


// On lost focus, change image back to original
chickImg.onmouseout = function () {

    if (isChickSelected == false) {
        chickImg.src = "../wp-content/uploads/2018/09/chick.png";
    }
}

// On click, change image, image set permenently to color version
chickImg.onclick = function () {
    isNestSelected = false;
    isChickSelected = true;
    isAdultSelected = false;


    nestImg.src = "../wp-content/uploads/2018/09/nest.png";
    chickImg.src = "../wp-content/uploads/2018/09/chick-hover.png";
    adultImg.src = "../wp-content/uploads/2018/09/adult.png";

    // Display the map area
    var z = document.getElementsByClassName("suggestDestination");
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "block";

    }
    selection = 'Chick';
    initMap();
    clearMarkers()
    document.getElementById('right-panel').innerHTML = '';
    $('#loading').show();
    var pd = 'opt' + '=' + selection;
    var fl = [0, 0, 0, 0, 0, 0, 0, 0]
    $.ajax({
        url: 'getPoly.php',
        type: 'post',
        dataType: 'json',
        data: pd,
        success: function (data) {
            //alert(data.length);
            for (var i = 0; i < 3; i++) {
                id = data[i].id;
                rate = data[i].chick;
                // alert(rate);
                fl[data[i].id - 1] = 1;

                var triangleCoords = [
                    {lat: areas[data[i].id - 1].lt.x, lng: areas[data[i].id - 1].lt.y},
                    {lat: areas[data[i].id - 1].lb.x, lng: areas[data[i].id - 1].lt.y},
                    {lat: areas[data[i].id - 1].rb.x, lng: areas[data[i].id - 1].rb.y},
                    {lat: areas[data[i].id - 1].rt.x, lng: areas[data[i].id - 1].rt.y}
                ];

                // Construct the polygon.
                var bermudaTriangle = new google.maps.Polygon({
                    paths: triangleCoords,
                    strokeColor: '#2cff1b',
                    strokeOpacity: 0.5,
                    strokeWeight: 2,
                    fillColor: '#2cff1b',
                    fillOpacity: 0.35
                });
                bermudaTriangle.setMap(map);

                addMaker((areas[data[i].id - 1].lt.x + areas[data[i].id - 1].lb.x) / 2, (areas[data[i].id - 1].lt.y + areas[data[i].id - 1].rt.y) / 2, i, rate, 'Chick');
            }

            for (var i = 0; i < 8; i++) {
                if (fl[i] == 0) {
                    var triangleCoords = [
                        {lat: areas[i].lt.x, lng: areas[i].lt.y},
                        {lat: areas[i].lb.x, lng: areas[i].lt.y},
                        {lat: areas[i].rb.x, lng: areas[i].rb.y},
                        {lat: areas[i].rt.x, lng: areas[i].rt.y}
                    ];

                    // Construct the polygon.
                    var bermudaTriangle = new google.maps.Polygon({
                        paths: triangleCoords,
                        strokeColor: '#ff3100',
                        strokeOpacity: 0.5,
                        strokeWeight: 2,
                        fillColor: '#ff3100',
                        fillOpacity: 0.35
                    });
                    bermudaTriangle.setMap(map);
                }
            }


        },
        complete: function () {
            $('#loading').hide();
        }
    });
    $('html, body').animate({scrollTop: $('.suggestDestination').offset().top}, 1000);
}

// Adult
// On hover, change image to color version
adultImg.onmouseover = function () {
    if (isAdultSelected == false) {
        adultImg.src = "../wp-content/uploads/2018/09/adult-hover.png";
    }
}


// On lost focus, change image back to original
adultImg.onmouseout = function () {

    if (isAdultSelected == false) {
        adultImg.src = "../wp-content/uploads/2018/09/adult.png";
    }
}

// On click, change image, image set permenently to color version
adultImg.onclick = function () {
    isNestSelected = false;
    isChickSelected = false;
    isAdultSelected = true;


    nestImg.src = "../wp-content/uploads/2018/09/nest.png";
    chickImg.src = "../wp-content/uploads/2018/09/chick.png";
    adultImg.src = "../wp-content/uploads/2018/09/adult-hover.png";

    // Display the map area
    var z = document.getElementsByClassName("suggestDestination");
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "block";

    }
    selection = 'Adult';
    initMap();
    clearMarkers()
    document.getElementById('right-panel').innerHTML = '';
    $('#loading').show();
    var pd = 'opt' + '=' + selection;
    var fl = [0, 0, 0, 0, 0, 0, 0, 0]
    $.ajax({
        url: 'getPoly.php',
        type: 'post',
        dataType: 'json',
        data: pd,
        success: function (data) {
            //alert(data.length);
            for (var i = 0; i < 3; i++) {
                id = data[i].id;
                rate = data[i].old;
                // alert(rate);
                fl[data[i].id - 1] = 1;

                var triangleCoords = [
                    {lat: areas[data[i].id - 1].lt.x, lng: areas[data[i].id - 1].lt.y},
                    {lat: areas[data[i].id - 1].lb.x, lng: areas[data[i].id - 1].lt.y},
                    {lat: areas[data[i].id - 1].rb.x, lng: areas[data[i].id - 1].rb.y},
                    {lat: areas[data[i].id - 1].rt.x, lng: areas[data[i].id - 1].rt.y}
                ];

                // Construct the polygon.
                var bermudaTriangle = new google.maps.Polygon({
                    paths: triangleCoords,
                    strokeColor: '#2cff1b',
                    strokeOpacity: 0.5,
                    strokeWeight: 2,
                    fillColor: '#2cff1b',
                    fillOpacity: 0.35
                });
                bermudaTriangle.setMap(map);

                addMaker((areas[data[i].id - 1].lt.x + areas[data[i].id - 1].lb.x) / 2, (areas[data[i].id - 1].lt.y + areas[data[i].id - 1].rt.y) / 2, i, rate, 'Adult');
            }

            for (var i = 0; i < 8; i++) {
                if (fl[i] == 0) {
                    var triangleCoords = [
                        {lat: areas[i].lt.x, lng: areas[i].lt.y},
                        {lat: areas[i].lb.x, lng: areas[i].lt.y},
                        {lat: areas[i].rb.x, lng: areas[i].rb.y},
                        {lat: areas[i].rt.x, lng: areas[i].rt.y}
                    ];

                    // Construct the polygon.
                    var bermudaTriangle = new google.maps.Polygon({
                        paths: triangleCoords,
                        strokeColor: '#ff3100',
                        strokeOpacity: 0.5,
                        strokeWeight: 2,
                        fillColor: '#ff3100',
                        fillOpacity: 0.35
                    });
                    bermudaTriangle.setMap(map);
                }
            }


        },
        complete: function () {
            $('#loading').hide();
        }
    });
    $('html, body').animate({scrollTop: $('.suggestDestination').offset().top}, 1000);

}

///poly
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


///


/////////important!!! map functions

var directionsService;
var directionsDisplay;

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
        zoom: 10,
        mapTypeControl: false,
        mapTypeControlOptions: {
            mapTypeIds: ['Bird Map'
            ]
        }
    });


    map.mapTypes.set('Bird Map', styledMapType);
    map.setMapTypeId('Bird Map');

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
            // locationinfoWindow.open(map);
            // map.setCenter(pos);
            // map.setZoom(16);
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

    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;

}

function addMaker(aa, bb, cc, rr, tt) {
    /* var url = 'img/adult_pin_point.gif';
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
     };*/
    lb = '';
    if (cc == 0) {
        lb = '1';
    } else if (cc == 1) {
        lb = '2';
    } else {
        lb = '3';
    }


    var ct = " This rate of  " + tt + " in this area is " + rr;
    var infowindow = new google.maps.InfoWindow({
        content: ct
    });

    var point = new google.maps.LatLng(aa, bb);
    //geocodeLatLng(geocoder,aa,bb);
    var marker = new google.maps.Marker({
        position: point,
        map: map,
        label: {text: lb, color: "white"}
        //  title: 'There are cute Hooded Plovers',
        // icon: icon
    });

    infowindow.open(map, marker);
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('right-panel'));

    function calculateAndDisplayRoute(directionsService, directionsDisplay, des, current) {

        directionsService.route({
            origin: current,
            destination: des,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }

    marker.addListener('click', function () {


        var current = new google.maps.LatLng(glat, glng);
        var des = new google.maps.LatLng(this.getPosition().lat(), this.getPosition().lng());

        calculateAndDisplayRoute(directionsService, directionsDisplay, des, current);

        clearMarkers();


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