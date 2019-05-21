
const my_map = new Vue({
  el: "#init",

  data: {
    lat: "",
    lon: ""
  },

  methods: {
    initMap: function() {
      console.log(lat)
      const map_dis = new google.maps.Map(
        document.getElementById("map_display"), {
          center: {
            lat: this.lat,
            lng: this.lon
          }
      });

    }
  }

})
