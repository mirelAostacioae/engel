var $window    = $(window),
	$document  = $(document),
	$body      = $('body'),
	$header    = $('header');
(function(){
	$document.ready(function(){
		var today = new Date();
		var day = today.getDay();
		$('.list-days').find('li').eq(day-1).addClass('active')

		console.log(day)
		$('.header-button-menu').on('click', function(){
			$(this).find('div').toggleClass('open');
			$('.header-menu').stop().slideToggle();
		})
		$('.events-list').slick({
			dots: false,
			arrows: false,
			slidesToShow: 4,
			slidesToScroll: 1,
		})

		$('.instagram-wrap').slick({
			speed: 5000,
			autoplay: true,
			autoplaySpeed: 0,
			centerMode: true,
			cssEase: 'linear',
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			infinite: true,
			initialSlide: 1,
			arrows: false,
			buttons: false
		})
	});
})();