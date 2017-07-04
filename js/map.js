$(document).ready(function() {});

function initialize() {
    var myLatlng1 = new google.maps.LatLng(-33.919812, 18.424289);
    var mapOptions = {
        zoom: 18,
        center: myLatlng1,
        scrollwheel: false
    };

    var map = new google.maps.Map(document.getElementById('map1'),
        mapOptions);

    var contentString1 = 'Crave St Georges Mall'

    var infowindow = new google.maps.InfoWindow({});

    var marker1 = new google.maps.Marker({
        position: myLatlng1,
        map: map,
        title: 'Crave St Georges Mall'
    });
    google.maps.event.addListener(marker1, 'click', function initialize() {
        infowindow.close(); //hide the infowindow
        infowindow.setContent(contentString1); //update the content for this marker
        infowindow.open(map, marker1);

    });

    var myLatlng2 = new google.maps.LatLng(-33.885335, 18.521480);
    var mapOptions2 = {
        zoom: 18,
        center: myLatlng2,
        scrollwheel: false
    };

    var map2 = new google.maps.Map(document.getElementById('map2'),
        mapOptions2);

    var contentString2 = 'Crave Century City'

    var infowindow = new google.maps.InfoWindow({});

    var marker2 = new google.maps.Marker({
        position: myLatlng2,
        map: map2,
        title: 'Crave Century City'
    });
    google.maps.event.addListener(marker2, 'click', function initialize() {
        infowindow.close(); //hide the infowindow
        infowindow.setContent(contentString2); //update the content for this marker
        infowindow.open(map2, marker2);

    });
}