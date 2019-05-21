
const my_map = new Vue({
  el: "#init",

  data: {
    lat: "",
    lon: "",
    first_run: true
  },

  methods: {
    init_map: function(lat, lon) {
      this.first_run = false;

      if (lat == "" || lon == "") {
        this.lat = "";
        this.lon = "";
      } else {
        this.lat = lat;
        this.lon = lon;
      }

      show_map(parseFloat(this.lat), parseFloat(this.lon) )
      console.log(this.lat, this.lon);
    }
  }

})


function show_map(latitude, longitude) {
  const uluru = {lat: latitude, lng: longitude};

  // default map view with a marker
  var map_view = new google.maps.Map(
    document.getElementById('map_display'), {
      zoom: 18,
      center: uluru
    }
  );

  var marker = new google.maps.Marker( {
    position: uluru,
    map: map_view // add map obj here
  });

} // end of init_map


function mark_map(latitude, longitude) {
  var map_find, infoWindow;
  const uluru = {lat: latitude, lng: longitude};

  map_find = new google.maps.Map(document.getElementById("map_display"), {
    center: uluru,
    zoom: 18
  });
  infoWindow = new google.maps.InfoWindow;
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          //infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          //infoWindow.open(map_find);
          map_find.setCenter(pos);
          var marker_c = new google.maps.Marker( {
            position: pos,
            map: map_find // add map obj here
          });
          marker_c.addListener("click", function() {
            infoWindow.open(map_find, marker_c);
          });
      }, function() {
          handleLocationError(true, infoWindow, map_find.getCenter() );
      });
  } else {
      handleLocationError(false, infoWindow, map_find.getCenter() );
  }
} // end of mark_map


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation ?
      "Error: The Geolocation service FAILED!!!":
      "Error: Your browser doesn\'t support geolocation....."
  );
  infoWindow.open(map_find);
}
