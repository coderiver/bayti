head.ready(function() {

	//menu
	$('.menus').click(function() {
		$(this).next('.submenu').toggleClass('is-active');
		$(this).toggleClass('is-shown');
		return false;
		}
	);

	$('html').click(function() {
		if($('.submenu').hasClass('is-active')) {
			$('.submenu').removeClass('is-active');
			$('.link').removeClass('is-shown');
		}
		if($('.menu').hasClass('is-active')) {
			$('.menu').removeClass('is-active');
		}
	});

	//menu mobile
	$('.ico_menu').click(function(event) {
		$('.menu').toggleClass('is-active');
		return false;
	});

	//isotope fluid grid
	(function ($) {
		var $container = $('.main__row'),
			colWidth = function () {
				var w = $container.width(),
					columnNum = 1,
					columnWidth = 0;
				if (w > 1260) {
					columnNum  = 4;
				} else if (w > 880) {
					columnNum  = 3;
				} else if (w > 600) {
					columnNum  = 2;
				} else if (w > 300) {
					columnNum  = 1;
				}
				columnWidth = Math.floor(w/columnNum);
				$container.find('.main__bl').each(function() {
					var $item = $(this),
						multiplier_w = $item.attr('class').match(/main_bl-w(\d)/),
						multiplier_h = $item.attr('class').match(/main_bl-h(\d)/),
						width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
						height = multiplier_h ? columnWidth*multiplier_h[1] : columnWidth;
					$item.css({
						width: width,
						height: height
					});
				});
				return columnWidth;
			},
			isotope = function () {
				$container.isotope({
					resizable: false,
					itemSelector: '.main__bl',
					masonry: {
						columnWidth: colWidth(),
					}
				});
			};
		isotope();
		$(window).smartresize(isotope);
		$(window).on('load', function(event) {
			$('.main__row').isotope('layout');
		});
	}(jQuery));

	//google map
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


});