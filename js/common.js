head.ready(function() {

	// $('.link').hover(
	// 	function() {
	// 	$(this).next('.submenu').addClass('is-active');
	// 	}, function() {
	// 	$(this).next('.submenu').removeClass('is-active');
	// 	}
	// );

	//masonry
	var $container = $('.main__row');
	// initialize
	$container.masonry({
	  columnWidth: 415,
	  itemSelector: '.main__bl'
	});

});