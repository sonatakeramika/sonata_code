 // Sticky Header
$(document).ready(function () {
	function updateScroll() {
	   if ($(window).scrollTop() >= 80) {
		  $(".navbar").addClass('sticky');
	   } else {
		  $(".navbar").removeClass("sticky");
	   }
	}
 
 
	$(function () {
	   $(window).scroll(updateScroll);
	   updateScroll();
	});
 });
 
 
 
 // menu icon changes
 $(document).ready(function () {
	$(".navbar-toggler").click(function () {
	   $(this).toggleClass("i-change");
	});
 });
 

 

//  $(document).ready(function () {
// 	$('.mobileMenu').click(function (event) {
// 		event.stopPropagation();
// 		$("aside").toggleClass("active");
// 	});
// 	$("aside").on("click", function (event) {
// 		event.stopPropagation();
// 	});
// });




// $(document).ready(function () {
// 	$(".mobileMenu").click(function () {
// 		$(".leftsidebar").addClass("active");
// 	});

// 	$(".mob-close").click(function () {
// 		$(".leftsidebar").removeClass("active");
// 	});
// });