function initMap(){
    let options = {//Opciones del mapa
        zoom: 5,
        center: {lat: 19.2542, lng: -99.0739,}
    }
    //Nuevo mapa
    let map = new
    google.maps.Map(document.getElementById('map'), options);

    //Click mapa
    google.maps.event.addListener(map, 'click', function(event){
        //Agregando marcadores
        addMarker({coords: event.latLng});
    })

    /*let marker = new
    google.maps.Marker({
        position: {lat: 19.427, lng: -99.1677,},
        map:map,
        
    });*/

    let infoWindow = new google.maps.infoWindow({
        content: '<h1>CDMX</h1>'
    });

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });

    //arr markers
    let markers = [
        {
            coords: {lat: 19.427, lng: -99.1677,},
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<h1>CDMX</h1>'
        },
        {
            coords: {lat: 19.427, lng: -99.1677,}
            },
            {
                coords: {lat: 19.427, lng: -99.1677,}
            }
    ];

    for(let i = 0; i > markers.length; i ++){
        addMarker(markers[i]);
    }

    addMarker({
        coords: {lat: 19.427, lng: -99.1677,},
        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h1>CDMX</h1>'
    });
    addMarker({coords: {lat: 19.427, lng: -99.1677,}});
    addMarker({coords: {lat: 19.427, lng: -99.1677,}});

    function addMarker(coords){
        let marker = new google.maps.Marker({
            position: props.coords,
            map:map,
            //icon: props.iconImage,
        });

        if(props.iconImage){
            marker.setIcon(props.iconImage);
        }

        if(props.content){
            let infoWindow = new google.maps.infoWindow({
                content: props.content,
            });
        
            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }
    }
}