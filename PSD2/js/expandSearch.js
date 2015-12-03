$(document).ready(function() {
	$("#search_icon").click(function() {
		$(".search").toggleClass("expanded");
		if ($(".search").hasClass("expanded")) {
			$(".search").focus();
		}	
	});
});