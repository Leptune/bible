$(document).ready(function() {
	// 写入圣经章节
	for (name in bible_data) {
		var obj = bible_data[name];
		if (!obj.old) {
			continue;
		}
		$('.bible-body-old').append('<li><h3>'+obj.abbr+'</h3><h5>'+name+'</h5></li>')
	}
	for (name in bible_data) {
		var obj = bible_data[name];
		if (obj.old) {
			continue;
		}
		$('.bible-body-new').append('<li><h3>'+obj.abbr+'</h3><h5>'+name+'</h5></li>')
	}
	$('.bible-body-old li:first').addClass('active');

	$("body").niceScroll();
	$(".bible-body").niceScroll();
	$(document).on('click', ".bible-header-juan-zhang li", function(event) {
		$(".bible-header-juan-zhang li.active").removeClass('active');
		$(this).addClass('active');
		$('.bible-body-juan,.bible-body-zhang').hide();
		$($(this).data('class')).show();
		if ($(this).is('.bible-header-zhang')) {
			var name = $(".bible-body-juan li.active h5").text();
			$('.bible-body-zhang').empty();
			for (var i = 1; i <= bible_data[name].count; i++) {
				$('.bible-body-zhang').append('<li><h5>'+i+'</h5></li>');
			}
			$('.bible-body-zhang li:first').addClass('active');
			$('.bible-header-title h4').text(name);
			$('.bible-foot').css('visibility', 'hidden');
		} else {
			$('.bible-header-title h4').text('圣经目录');
			$('.bible-foot').css('visibility', 'visible');
		}
	});
	$(document).on('click', ".bible-foot-type li", function(event) {
		$(".bible-foot-type li.active").removeClass('active');
		$(this).addClass('active');
		$('.bible-body-juan ul').hide();
		$($(this).data('class')).show();
	});
	$(document).on('click', ".bible-body-juan li", function(event) {
		$(".bible-body-juan li.active").removeClass('active');
		$(this).addClass('active');
		$('.bible-header-zhang').click();
	});
	$(document).on('click', ".bible-body-zhang li", function(event) {
		$(".bible-body-zhang li.active").removeClass('active');
		$(this).addClass('active');
	});
});
