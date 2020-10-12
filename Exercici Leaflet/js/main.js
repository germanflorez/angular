//Ubicacion del mapa Y zoom
let  mymap = L.map('mapid').setView([41.386872, 2.170084],16);
// icono del marcador
let iconMarker = L.icon({
    iconUrl: 'img/marcador.png',
    iconSize: [40, 40],
    iconAnchor: [10, 15]
}) 
//marcador restaurante
let markerRest = L.marker([41.387015,2.166085],{icon: iconMarker});
// ubicacion del marcador
let lat = 0 ;
let lng = 0 ;
let marker = L.marker({lat,lng});


//BOTON1
function marcador(){   
markerRest.addTo(mymap);
markerRest.bindPopup("<b>Restaurant Centfocs</b><br><br>Restaurante Mediterraneo<br>Carrer balmes, 16, 08007 Barcelona");
let popup = L.popup();
}

//BOTON2
function marcador2(){ 
    mymap.removeLayer(markerRest);
    mymap.on('click', onMapClick);
}
  
//Eventos
function onMapClick(e) {
    lat = e.latlng.lat;
    lng = e.latlng.lng;
    marker.addTo(mymap);
    marker.bindPopup("<b>MIS COORDENADAS SON:</b> <br> Latitud : " + lat + "<br> Longitud : " + lng ).openPopup();
    marker.setLatLng ([lat, lng]);
    mymap.setView([lat, lng], 18);
   
}

//LLamada al mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);