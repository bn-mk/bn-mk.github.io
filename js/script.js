$(function(){
	var dir = "../img/";
	var fileextension = ".jpg";
	$.ajax({
		url: dir,
		success: function (data) {
			$(data).find("a:contains(" + fileextension + ")").each(function () {
				var filename = this.href.replace(window.location.host, "").replace("http://", "");
				$(".owl-carousel").append("<img src='" + dir + filename + "'>");
			});
		}
	});
	$(".owl-carousel").owlCarousel();
});