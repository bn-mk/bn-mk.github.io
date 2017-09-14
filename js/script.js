$(function(){

	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-sizer',
      gutter: 0
		}
	});

	$grid.imagesLoaded().progress( function() {
		$grid.isotope('layout');
	});

	$('.gallery').colorbox({rel: 'gallery',
		maxWidth: '100%',
		closeButton: false
	});
});
