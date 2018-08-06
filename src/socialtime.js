function initMap(){
    let options = {//Opciones del mapa
        zoom: 5,
        center: {lat: 19.2542, lng: -99.0739,}
    }
    //Nuevo mapa
    let map = new
    google.maps.Map(document.getElementById('map'), options);

    let marker = new
    google.maps.Marker({
        position: {lat: 19.427, lng: -99.1677,},
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    let infoWindow = new google.maps.infoWindow({
        content: '<h1>CDMX</h1>'
    });

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    })
}