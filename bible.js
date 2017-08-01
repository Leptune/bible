$(document).ready(function() {
	$("body").niceScroll();
	$(".bible-body").niceScroll();
	$(".bible-chapter-type li").click(function(event) {
		$(".bible-chapter-type li.active").removeClass('active');
		$(this).addClass('active');
		$('.bible-articles,.bible-chapter-list').hide();
		$($(this).data('class')).show();
	});
	$(".bible-type li").click(function(event) {
		$(".bible-type li.active").removeClass('active');
		$(this).addClass('active');
		$('.bible-articles ul').hide();
		$($(this).data('class')).show();
	});
	$(".bible-articles li").click(function(event) {
		$(".bible-articles li.active").removeClass('active');
		$(this).addClass('active');
		$('.bible-chapter-li').click();
	});
	$(".bible-chapter-list li").click(function(event) {
		$(".bible-chapter-list li.active").removeClass('active');
		$(this).addClass('active');
	});
});
