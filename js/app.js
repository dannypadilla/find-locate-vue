
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
      // populate the map with lat/lon data
      show_map(parseFloat(this.lat), parseFloat(this.lon) )
      console.log(this.lat, this.lon);
    }
  }

})

// show interactive google map
function show_map(latitude, longitude) {
  const uluru = {lat: latitude, lng: longitude};

  // default map view with a marker
  const map_view = new google.maps.Map(
    document.getElementById('map_display'), {
      zoom: 15,
      center: uluru
    }
  );

  const marker = new google.maps.Marker( {
    position: uluru,
    map: map_view // add map obj here
  });

} // end of show_map


// error handle from google
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation ?
      "Error: The Geolocation service FAILED!!!":
      "Error: Your browser doesn\'t support geolocation....."
  );
  infoWindow.open(map_find);
}
