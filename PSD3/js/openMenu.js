$(document).ready(function() {
	$("#menu_button img").click(function() {
		$(".dropdown_menu").addClass("open");
	});
	$("#dropdown_close img").click(function() {
		$(".dropdown_menu").removeClass("open");
	});
});