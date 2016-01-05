$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
	  items: 1,
	  margin: 100,
	  stagePadding: 168,
	  mouseDrag: false,
	  dotsContainer: '#customDots',
	  onInitialized: customPager
  });
  $(".logos-carousel").owlCarousel({
	  loop: true,
	  items: 1,
	  dots: false,
	  nav: true,
	  navContainer: '#logosNav',
	  navText: ["", ""],
	  mouseDrag: false
  });
  $(".testimonials-carousel").owlCarousel({
	  items: 1,
	  dots: true,
	  dotsContainer: '#testimonialDots',
	  nav: false,
	  mouseDrag: false,
	  animateIn: 'fadeIn',
	  animateOut: 'fadeOut'
  });
});
function customPager() {
	//console.log("Hello World");
	$(".owl-item > .item").each(function(index) {
		//console.log("Whats up");
		var titleData = $(this).attr('title');
		//console.log(titleData);
		var paginationLinks = $('#customDots .owl-dot span');
		//console.log(paginationLinks);
		$(paginationLinks[index]).append(titleData);
	});
}