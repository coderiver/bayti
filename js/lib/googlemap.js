		var map;
		function initialize() {
		  var mapOptions = {
		    zoom: 16,
		    center: new google.maps.LatLng(26.21924, 50.60631),
		    disableDefaultUI: true
		  };
		  map = new google.maps.Map(document.getElementById('googlemap'),
		      mapOptions);

		var image = 'img/icons/arr.png';
		var myLatLng = new google.maps.LatLng(26.2172000, 50.6051021);
		var arr = new google.maps.Marker({
		      position: myLatLng,
		      map: map,
		      icon: image
		  });

		var infowindow = new google.maps.InfoWindow({
	         content: document.getElementById("address"),
	         disableAutoPan: false,
	         pixelOffset: new google.maps.Size(0, 0),
	         zIndex: null,
	         boxStyle: {
	            opacity: 0.75,
	            width: "240px"
	        },
	        closeBoxMargin: "0",
	        infoBoxClearance: new google.maps.Size(1, 1)
	    });

		google.maps.event.addDomListener(map, 'click', fullSize);
		google.maps.event.addListener(arr, 'click', function() {
		   infowindow.open(map,arr);
		 });

		}

		function fullSize() {
			window.open('https://www.google.ru/maps/place/Al+Safir/@26.2175641,50.6057794,18z/data=!4m2!3m1!1s0x0000000000000000:0xaeb2215080880fc2');
		}

		google.maps.event.addDomListener(window, 'load', initialize);