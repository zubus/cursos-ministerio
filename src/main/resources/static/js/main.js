$(function() {
	'use strict';

	var window_width = $(window).width(),
		window_height = window.innerHeight,
		header_height = $('.default-header').height(),
		header_height_static = $('.site-header.static').outerHeight(),
		fitscreen = window_height - header_height;

	$('.fullscreen').css('height', window_height);
	$('.fitscreen').css('height', fitscreen);

	//------- Header Scroll Class  js --------//

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.default-header').addClass('header-scrolled');
		} else {
			$('.default-header').removeClass('header-scrolled');
		}
	});

	if ($('select')) {
		$('select').niceSelect();
	}

	$('.img-pop-up').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	// Search Toggle
	$('#search-input-box').hide();
	$('#search').on('click', function() {
		$('#search-input-box').slideToggle();
		$('#search-input').focus();
	});
	$('#close-search').on('click', function() {
		$('#search-input-box').slideUp(500);
	});

	// $('.navbar-nav>li>a').on('click', function(){
	//     $('.navbar-collapse').collapse('hide');
	// });

	//  Counter Js

	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	$('.play-btn').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$('.popuar-course-carusel').owlCarousel({
		items: 4,
		loop: true,
		autoplay: true,
		margin: 30,
		nav: true,
		stagePadding: 60,
		navText: [ "<< Anterior", "Siguiente >>" ],
		responsive: {
			0: {
				items: 1,
				stagePadding: 0
			},
			575: {
				items: 2,
				stagePadding: 0
			},
			768: {
				items: 2,
				stagePadding: 0
			},
			992: {
				items: 3,
				stagePadding: 0
			},
			1200: {
				items: 3,
				stagePadding: 60
			},
			1440: {
				items: 4,
				stagePadding: 60
			}
		}
	});

	$('.video-carousel').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		margin: 30,
		nav: true,
		dots: false,
		navText: [ "<img src='img/prev.png'>", "<img src='img/next.png'>" ]
	});

	$('.testi-slider').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		margin: 30,
		nav: true,
		navText: [ "<img src='img/prev.png'>", "<img src='img/next.png'>" ]
	});

	// Select all links with hashes
	$('.navbar-nav a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.on('click', function(event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate(
						{
							scrollTop: target.offset().top - 50
						},
						1000,
						function() {
							// Callback after animation
							// Must change focus!
							var $target = $(target);
							$target.focus();
							if ($target.is(':focus')) {
								// Checking if the target was focused
								return false;
							} else {
								$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
								$target.focus(); // Set focus again
							}
						}
					);
				}
			}
		});
});
