$(function(){
	// $(".owl-carousel").owlCarousel({
	// 	items: 1,
	// 	loop: true,
	// 	center: true,
	// 	lazyLoad: true,
	// 	dots: false
	// });

	$('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-sizer'
		}
	});
	$grid.imagesLoaded().progress( function() {
		$grid.isotope('layout');
	});
});