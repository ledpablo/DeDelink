function iniciarMap(){
    var coord = {lat:40.4565072 ,lng: -3.6504534};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}