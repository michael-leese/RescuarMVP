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
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.21135, lng: -1.478350 },
        zoom: 15
    });

    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
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

    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
var locations = [
    { lat: 51.199320, lng: -1.479350 },
    { lat: 51.209820, lng: -1.478450 },
    { lat: 51.218720, lng: -1.46650 },
    // { lat: -33.848588, lng: 151.209834 },
    // { lat: -33.851702, lng: 151.216968 },
    // { lat: -34.671264, lng: 150.863657 },
    // { lat: -35.304724, lng: 148.662905 },
    // { lat: -36.817685, lng: 175.699196 },
    // { lat: -36.828611, lng: 175.790222 },
    // { lat: -37.750000, lng: 145.116667 },
    // { lat: -37.759859, lng: 145.128708 },
    // { lat: -37.765015, lng: 145.133858 },
    // { lat: -37.770104, lng: 145.143299 },
    // { lat: -37.773700, lng: 145.145187 },
    // { lat: -37.774785, lng: 145.137978 },
    // { lat: -37.819616, lng: 144.968119 },
    // { lat: -38.330766, lng: 144.695692 },
    // { lat: -39.927193, lng: 175.053218 },
    // { lat: -41.330162, lng: 174.865694 },
    // { lat: -42.734358, lng: 147.439506 },
    // { lat: -42.734358, lng: 147.501315 },
    // { lat: -42.735258, lng: 147.438000 },
    // { lat: -43.999792, lng: 170.463352 }
]
