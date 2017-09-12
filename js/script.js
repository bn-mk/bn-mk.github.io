$(function(){

	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-sizer'
		}
	});

	// $grid.imagesLoaded().progress( function() {
	// 	$grid.isotope('layout');
	// });

	$('.gallery').colorbox({rel: 'gallery', 
		maxWidth: '800px',
		closeButton: false
	});
});