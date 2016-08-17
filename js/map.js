var map;

function initMap() {
  var miUbicacion = {lat: 18.468345, lng: -69.849891};

  map = new google.maps.Map(document.getElementById('map'), {
    center: miUbicacion,
    zoom: 16
  });

  var marker = new google.maps.Marker({
    position: miUbicacion,
    map: map,
    title: 'El Grupo #3 estuvo aquí'
  });

}
