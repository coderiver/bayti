head.ready(function() {

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
				} else if (w > 300) {
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
					// animationEngine: 'best-available'
				});
			};
		isotope();
		$(window).smartresize(isotope);
	}(jQuery));

	(function ($) {
		var $container = $('.example'),
			colWidth = function () {
				var w = $container.width(),
					columnNum = 1,
					columnWidth = 0;
				if (w > 1200) {
					columnNum  = 5;
				} else if (w > 900) {
					columnNum  = 4;
				} else if (w > 600) {
					columnNum  = 3;
				} else if (w > 300) {
					columnNum  = 2;
				}
				columnWidth = Math.floor(w/columnNum);
				$container.find('.item').each(function() {
					var $item = $(this),
						multiplier_w = $item.attr('class').match(/item-w(\d)/),
						multiplier_h = $item.attr('class').match(/item-h(\d)/),
						width = multiplier_w ? columnWidth*multiplier_w[1]-4 : columnWidth-4,
						height = multiplier_h ? columnWidth*multiplier_h[1]*0.5-4 : columnWidth*0.5-4;
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
					itemSelector: '.item',
					masonry: {
						columnWidth: colWidth(),
						gutterWidth: 4
					}
				});
			};
		isotope();
		$(window).smartresize(isotope);
	}(jQuery));

});