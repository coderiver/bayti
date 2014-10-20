head.ready(function() {

	var onIndexPage = window.location.href.indexOf("index.html") != -1;
	var onInnerPage = window.location.href.indexOf("index.html") != 1;

	// //menu
	// $('.menus').click(function() {
	// 	$(this).next('.submenu').toggleClass('is-active');
	// 	$(this).toggleClass('is-shown');
	// 	return false;
	// 	}
	// );

	// $('html').click(function() {
	// 	if($('.submenu').hasClass('is-active')) {
	// 		$('.submenu').removeClass('is-active');
	// 		$('.link').removeClass('is-shown');
	// 	}
	// 	if($('.menu').hasClass('is-active')) {
	// 		$('.menu').removeClass('is-active');
	// 	}
	// });

	//menu mobile
	$('.ico_menu').click(function(event) {
		$('.menu').toggleClass('is-active');
		return false;
	});

	if (onIndexPage) {
	//isotope fluid grid
	(function ($) {
		var $container = $('.main__row'),
			colWidth = function () {
				var w = $container.width(),
					columnNum = 1,
					columnWidth = 0;
				if (w > 1260) {
					columnNum  = 4;
				} else if (w > 700) {
					columnNum  = 3;
				} else if (w > 600) {
					columnNum  = 1;
				}
				columnWidth = Math.floor(w/columnNum);
				$container.find('.main__bl').each(function() {
					var $item = $(this),
						multiplier_w = $item.attr('class').match(/main_bl-w(\d)/),
						multiplier_h = $item.attr('class').match(/main_bl-h(\d)/),
						width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth;
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
					},
					animationEngine: 'best-available'
				});
			};
		isotope();
		$(window).smartresize(isotope);
	}(jQuery));

	} else if (onInnerPage) {
		//isotope fluid grid
		(function ($) {
			var $container = $('.main__row'),
				colWidth = function () {
					var w = $container.width(),
						columnNum = 1,
						columnWidth = 0;
					if (w > 900) {
						columnNum  = 4;
					} else if (w > 600) {
						columnNum  = 2;
					} else if (w > 400) {
						columnNum  = 1;
					}
					columnWidth = Math.floor(w/columnNum);
					$container.find('.main__bl').each(function() {
						var $item = $(this),
							multiplier_w = $item.attr('class').match(/main_bl-w(\d)/),
							multiplier_h = $item.attr('class').match(/main_bl-h(\d)/),
							width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth;
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
						},
						animationEngine: 'best-available'
					});
				};
			isotope();
			$(window).smartresize(isotope);
		}(jQuery));
	}

});