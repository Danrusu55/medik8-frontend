$(document).ready(function() {

	/***************** Waypoints ******************/

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInRight');
	}, {
		offset: '75%'
	});

	/***************** Initiate Flexslider ******************/
	$('.flexslider').flexslider({
		animation: "slide"
	});

	/***************** Initiate Fancybox ******************/

	$('.single_image').fancybox({
		padding: 4,
	});

	/***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

	/***************** Nav Transformicon ******************/

	/* When user clicks the Icon */
	$('.nav-toggle').click(function() {
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('open');
		event.preventDefault();
	});
	/* When user clicks a link */
	$('.header-nav li a').click(function() {
		$('.nav-toggle').toggleClass('active');
		$('.header-nav').toggleClass('open');

	});

	/***************** Header BG Scroll ******************/

	$(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 20) {
				$('section.navigation').addClass('fixed');
				$('header').css({
					"border-bottom": "none",
					// "padding": "35px 0"
				});
				$('header .member-actions').css({
					"top": "26px",
				});
				$('header .navicon').css({
					"top": "34px",
				});
			} else {
				$('section.navigation').removeClass('fixed');
				$('header').css({
					// "padding": "20px 0"
				});
				$('header .member-actions').css({
					"top": "41px",
				});
				$('header .navicon').css({
					"top": "48px",
				});
			}
		});
	});


/***************** Content Blocks ******************/

  $(function() {
    $('.portal-content-2').hover(function() {
      $('.portal-content-2').toggleClass('content-hover');
      $('.portal-content-2-left').toggleClass('content-hover');
      $('.portal-content-2-right').toggleClass('content-hover-right');
      $(this).find('h3').toggleClass('content-hover-text');
      $(this).find('h3').toggleClass('content-text');
      $('.2_computers').attr('src', "images/block1_inventory.png");
    })
    $('.portal-content-1').hover(function() {
      $('.portal-content-1').toggleClass('content-hover');
      $('.portal-content-1-left').toggleClass('content-hover');
      $('.portal-content-1-right').toggleClass('content-hover-right');
      $(this).find('h3').toggleClass('content-hover-text');
      $(this).find('h3').toggleClass('content-text');
      $('.2_computers').attr('src', "images/block1_driver.png");
    })
    $('.portal-content-3').hover(function() {
      $('.portal-content-3').toggleClass('content-hover');
      $('.portal-content-3-right').toggleClass('content-hover');
      $('.portal-content-3-left').toggleClass('content-hover-left');
      $(this).find('h3').toggleClass('content-hover-text');
      $(this).find('h3').toggleClass('content-text');
      $('.2_computers').attr('src', "images/block1_patient.png");
    })
    $('.portal-content-4').hover(function() {
      $('.portal-content-4').toggleClass('content-hover');
      $('.portal-content-4-right').toggleClass('content-hover');
      $('.portal-content-4-left').toggleClass('content-hover-left');
      $(this).find('h3').toggleClass('content-hover-text');
      $(this).find('h3').toggleClass('content-text');
      $('.2_computers').attr('src', "images/block1_location.png");
    })
    $('.app-content-2').hover(function() {
      $('.app-content-2').toggleClass('app-hover');
      $('.app-content-2-left').toggleClass('app-hover');
      $('.app-content-2-right').toggleClass('app-hover-right');
      $(this).find('h3').toggleClass('content-hover-text');
      $(this).find('h3').toggleClass('content-text');
      $(this).find('p').toggleClass('content-p-text');
      $(this).find('p').toggleClass('content-p-hover-text');
      $('.3_iphone').attr('src', "images/block2_inventory.png");
    })
    $('.app-content-1').hover(function() {
      $('.app-content-1').toggleClass('app-hover');
      $('.app-content-1-left').toggleClass('app-hover');
      $('.app-content-1-right').toggleClass('app-hover-right');
      $(this).find('h3').toggleClass('content-hover-text');
      $(this).find('h3').toggleClass('content-text');
      $(this).find('p').toggleClass('content-p-text');
      $(this).find('p').toggleClass('content-p-hover-text');
      $('.3_iphone').attr('src', "images/block2_gps.png");
    })
    $('.app-content-3').hover(function() {
      $('.app-content-3').toggleClass('app-hover');
      $('.app-content-3-right').toggleClass('app-hover');
      $('.app-content-3-left').toggleClass('app-hover-left');
      $(this).find('h3').toggleClass('content-hover-text');
      $(this).find('h3').toggleClass('content-text');
      $(this).find('p').toggleClass('content-p-text');
      $(this).find('p').toggleClass('content-p-hover-text');
      $('.3_iphone').attr('src', "images/block2_delivery.png");
    })
    $('.app-content-4').hover(function() {
      $('.app-content-4').toggleClass('app-hover');
      $('.app-content-4-right').toggleClass('app-hover');
      $('.app-content-4-left').toggleClass('app-hover-left');
      $(this).find('h3').toggleClass('content-hover-text');
      $(this).find('h3').toggleClass('content-text');
      $(this).find('p').toggleClass('content-p-text');
      $(this).find('p').toggleClass('content-p-hover-text');
      $('.3_iphone').attr('src', "images/block2_patient.png");
    })
    $('#appleandroid').hover(function() {
      $(this).attr('src', "images/3_apple_android_hover.png");
    })
    $('#appleandroid').mouseout(function() {
      $(this).attr('src', "images/3_apple_android.png");
    })
    $('#fb').hover(function() {
      $(this).attr('src', "images/footer_fb_hover.png");
    })
    $('#fb').mouseout(function() {
      $(this).attr('src', "images/footer_fb.png");
    })
    $('#twitter').hover(function() {
      $(this).attr('src', "images/footer_twitter_hover.png");
    })
    $('#twitter').mouseout(function() {
      $(this).attr('src', "images/footer_twitter.png");
    })
    $('#insta').hover(function() {
      $(this).attr('src', "images/footer_insta_hover.png");
    })
    $('#insta').mouseout(function() {
      $(this).attr('src', "images/footer_insta.png");
    })
  });

  /***************** Block1 fonts *****

    $(function() {
      $('.block1 h4').hover.css('style:font-size:28px;');

    })


*************/

	/***************** Smooth Scrolling ******************/
	$(function() {

		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 2000);
					return false;
				}
			}
		});

	});

  $('.flexslider').flexslider({
          animation: "slide",  // slide or fade
          controlNav: false,
          animationLoop: false,
          slideshow: false
    });

}); /*** END OF FILE ****/
