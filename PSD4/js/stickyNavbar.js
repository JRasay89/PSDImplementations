$(document).ready(function(){
	//console.log("Hello World");
	$(window).scroll(function() {
		if ($(document).scrollTop() >= 768) {
			$("#navbar").addClass("sticky");
		}
		else {
			$("#navbar").removeClass("sticky");
		}
	});
});