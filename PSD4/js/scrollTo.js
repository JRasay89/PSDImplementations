$(document).ready(function(){
	//On scroll change current active link
	$(document).on("scroll", onScroll);
	$('.menu_link a[href^="#"]').click(function(e) {
		if ($(this).hasClass("current_active")) {
			console.log("True!");
		}
	    //Prevent default action of anchor
		e.preventDefault();
        $(document).off("scroll");
		
		$("#nav_menu .menu_link a").each(function () {
            $(this).removeClass('current_active');
        });
		//Check if the down button was press
		if ($(this).children().length > 0) {
			$('#nav_menu .menu_link a[href="#about"]').addClass("current_active");
		}
		else {
			$(this).addClass('current_active');
		}
		$(this).blur(); //Unselect anchor
	    var target = this.hash;
	    var $target = $(target);
		
	    $("html, body").stop().animate({
	        "scrollTop": ($target.offset().top - 80)
	    }, 900, "swing", function() {
			$(document).on("scroll", onScroll);
		});
	});
});

function onScroll(event) {
	var scrollPos = $(document).scrollTop();
	//console.log(scrollPos);
	if (scrollPos >= 768) {
		$("#nav_menu .menu_link a").each(function() {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			//7216
			if (currLink.attr("href") == "#pricing") {
				if (!(currLink.hasClass("current_active") && scrollPos < 7216)) {
				}
			}
			//console.log(currLink.attr("href"));
			//console.log(refElement.position().top)
			if ((refElement.position().top - 80) <= scrollPos && 
			    (refElement.position().top + refElement.height() - 80) > scrollPos) {
						$("#nav_menu .menu_link a").removeClass("current_active");
						currLink.addClass("current_active");
			}
			else if (scrollPos >= 4258 && scrollPos < 7216) {
				//Keep pricing link active if scroll position is between the given numbers
				if (currLink.attr("href") == "#pricing") {
					$("#nav_menu .menu_link a").removeClass("current_active");
					currLink.addClass("current_active");
				}				
			}
			else{
				currLink.removeClass("current_active");
			}
		});
	}
	else {
		$("#nav_menu .menu_link a").each(function() {
			var currLink = $(this);
			if(currLink.hasClass("current_active")) {
				currLink.removeClass("current_active");
			}
		});
	}
}