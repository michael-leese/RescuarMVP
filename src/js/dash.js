//---------------------------------------------Dashboard Selector
var iconCard = document.querySelector('#icon');
var iconPerson = iconCard.querySelector('.card__person');
var iconMap = iconCard.querySelector('.card__map');
var dashCard = document.querySelector('#dashBoard');
var dashPerson = dashCard.querySelector('.contentPerson');
var dashMap = dashCard.querySelector('.contentMap');
var iconDetailsShown = false;

iconCard.addEventListener('click', function (event) {
    if (!iconDetailsShown) {
        iconDetailsShown = true;
        iconPerson.style.opacity = 0;
        iconMap.style.display = 'block';
        iconPerson.style.display = 'none';
        setTimeout(function () {
            iconMap.style.opacity = 1;
        }, 300);
        dashPerson.style.opacity = 0;
        dashMap.style.display = 'block';
        dashPerson.style.display = 'none';
        setTimeout(function () {
            dashMap.style.opacity = 1;
        }, 300);
    } else {
        iconDetailsShown = false;
        iconMap.style.opacity = 0;
        iconPerson.style.display = 'block';
        iconMap.style.display = 'none';
        setTimeout(function () {
            iconPerson.style.opacity = 1;
        }, 300);
        dashMap.style.opacity = 0;
        dashPerson.style.display = 'block';
        dashMap.style.display = 'none';
        setTimeout(function () {
            dashPerson.style.opacity = 1;
        }, 300);
    }
});

//---------------------------------------------------Missing Alert

var missingCard = document.querySelector('#missingBox');
var missingBtn = missingCard.querySelector('#AlertMissing');
var missingIcon = missingCard.querySelector('#AlertIcon');
var missingText = missingCard.querySelector('#missingOn-Off');
var missingAlert = false

missingBtn.addEventListener('click', function (event) {
    if (!missingAlert) {
        missingAlert = true;
        missingIcon.style.display = 'block';
        $("#AlertIcon").addClass("blinkMissing");
        missingText.innerHTML = 'OFF!'
        setTimeout(function () {
            $(".map:first-child").css({"display": "block", "opacity": "1"});
        }, 300);
    } else {
        missingAlert = false;
        missingIcon.style.display = 'none';
        $("#AlertIcon").removeClass("blinkMissing");
        missingText.innerHTML = 'ON!'
        setTimeout(function () {
            $(".map:first-child").css({"display": "none", "opacity": "0"});
        }, 300);
    }
});

//-------------------------------------------- MAP SCRIPT
var map;
var pos = {lat: 51.4194920, lng: -0.9680560};
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 15
    });

    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
  
        infoWindow.setPosition(pos);
        infoWindow.setContent('YOU ARE HERE!');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
var locations = [
    // Palmer Building Dummy Locations
    { lat: 51.440841, lng: -0.946079 },
    { lat: 51.441722, lng: -0.945599 },
    { lat: 51.442056, lng: -0.941372 },
    { lat: 51.440317, lng: -0.941715 },
    { lat: 51.440384, lng: -0.944011 },
    { lat: 51.439234, lng: -0.945256 },
    { lat: 51.440919, lng: -0.944548 },
    { lat: 51.442484, lng: -0.944226 },
    { lat: 51.441304, lng: -0.950637 },
    { lat: 51.441981, lng: -0.943371 },
    // Andover Dummy Locations
    { lat: 51.228516, lng: -1.466152 },
    { lat: 51.222933, lng: -1.471060 },
    { lat: 51.227845, lng: -1.476652 },
    { lat: 51.228524, lng: -1.467316 },
    { lat: 51.221883, lng: -1.475561 },
    { lat: 51.221306, lng: -1.470197 },
    { lat: 51.223416, lng: -1.460874 },
    { lat: 51.225183, lng: -1.462730 },
    { lat: 51.228966, lng: -1.468002 },
    { lat: 51.230453, lng: -1.467034 },
    // { lat: -42.734358, lng: 147.501315 },
    // { lat: -42.735258, lng: 147.438000 },
    // { lat: -43.999792, lng: 170.463352 }
]
