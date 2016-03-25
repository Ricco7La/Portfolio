$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['home', 'about', 'works', 'contact'],
        scrollingSpeed: 1750,
        navigation: true,
        navigationTooltips: ['Home', 'About Me', 'Works', 'Contact']
    });
});

function initialize() {
  var myLatLong = new google.maps.LatLng(49.97366666666667,4.529833333333333);
  var mapProp = {
    center: myLatLong,
    zoom:17,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var infowindow = new google.maps.InfoWindow({
    content: 'Ma maison',
    maxWidth: 100
  });
  var marker = new google.maps.Marker({
    position: myLatLong,
    map: map,
    title: 'Ma maison'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}
google.maps.event.addDomListener(window, 'load', initialize);