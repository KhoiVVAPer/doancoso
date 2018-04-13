$(function() {
	$('.slide-image-item img').hover(function() {
		$('.pre-btn').addClass('previous-active');
		$('.next-btn').addClass('next-active');
	});
	$('.content-page').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('.pre-btn').removeClass('previous-active');
		$('.next-btn').removeClass('next-active');
	});

	var stop = false;
	var cdSlide = setInterval(function(){
		$('.next-btn').trigger('click');
	},3000);

	$('.next-btn').click(function(event) {
		/* Act on the event */
		var $next = $('.slide-image-item.active').next();
		if($next.index() < 0){
			$next = $('.slide-image-item:nth-child(1)');
		}
		$('.slide-image-item.active').addClass('movetoleft').one('webkitAnimationEnd', function(event) {
			/* Act on the event */
			$('.movetoleft').removeClass('movetoleft');
		});
		$next.addClass('goinright').one('webkitAnimationEnd', function(event) {
			/* Act on the event */
			$('.slide-image-item.active').removeClass('active');
			$('.goinright').addClass('active').removeClass('goinright');
		});
	});
	$('.pre-btn').click(function(event) {
		/* Act on the event */
		var $pre = $('.slide-image-item.active').prev();
		if($pre.index() < 0){
			$pre = $('.slide-image-item:last-child');
		}
		$('.slide-image-item.active').addClass('movetoright').one('webkitAnimationEnd', function(event) {
			/* Act on the event */
			$('.movetoright').removeClass('movetoright');
		});
		$pre.addClass('goinleft').one('webkitAnimationEnd', function(event) {
			/* Act on the event */
			$('.slide-image-item.active').removeClass('active');
			$('.goinleft').addClass('active').removeClass('goinleft');
		});
	});
	$('.next-btn img').click(function(event) {
		/* Act on the event */
		clearInterval(cdSlide);
	});
	$('.list-nav a').click(function(event) {
		$('.list-nav a').removeClass('active');
		$(this).addClass('active');
	});
});