<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=	AIzaSyBxt90DGVMjZzSTeJbM_AE4mEyEmM5ASnk&sensor=false"></script>


        <script type="text/javascript">

	// Create and Initialise the Map (required) our google map below

            google.maps.event.addDomListener(window, 'load', init);

            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

		var mapOptions = {

		     // How zoomed in you want the map to start at (always required)

                    zoom: 17,
                    scrollwheel: false,
                    // The latitude and longitude to center the map (always required)

                    center: new google.maps.LatLng(49.281312, -123.113013), // Vancouver, Pacific Center

                    // How you would like to style the map.
                    // This is where you would paste any style found on [Snazzy Maps][1].
                    // copy the Styles from Snazzy maps,  and paste that style info after the word "styles:"

                    styles:

                    [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7f75b5"
            },
            {
                "visibility": "on"
            }
        ]
    }
]

                     [{stylers:[{hue:'#2c3e50'},{saturation:250}]},{featureType:'road',elementType:'geometry',stylers:[{lightness:50},{visibility:'simplified'}]},{featureType:'road',elementType:'labels',stylers:[{visibility:'off'}]}]
                };



		var mapElement = document.getElementById('map');

                // Create the Google Map using out element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

		// Following section, you can create your info window content using html markup

                var contentString = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
                    'sandstone rock formation in the southern part of the '+
                    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
                    'south west of the nearest large town, Alice Springs; 450&#160;km '+
                    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
                    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
                    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
                    'Aboriginal people of the area. It has many springs, waterholes, '+
                    'rock caves and ancient paintings. Uluru is listed as a World '+
                    'Heritage Site.</p>'+
                    '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
                    'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
                    '(last visited June 22, 2009).</p>'+
                    '</div>'+
                    '</div>';


		// Define the image to use for the map marker (58 x 44 px)

                var image = 'http://uploads.webflow.com/537f700d5bb0a27f34444d0c/53b054015eb95f024f4d7c5e_map_marker.png';

		// Define the Lattitude and Longitude for the map location

                var myLatLng = new google.maps.LatLng(45.088530, -64.367951);

		// Define the map marker characteristics

                var mapMarker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: image,
                title:  'Frostbyte Interactive'

                });

               // Following Lines are needed if you use the Info Window to display content when map marker is clicked

		   var infowindow = new google.maps.InfoWindow({
                            content: contentString
                        });

	    	// Following line turns the marker, into a clickable button and when clicked, opens the info window

            	google.maps.event.addListener(mapMarker, 'click', function() {
                	infowindow.open(map, mapMarker);
            	});

}

</script>
