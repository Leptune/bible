
var player = plyr.setup();

$(document).ready(function() {
	// 写入圣经章节
	for (name in bible_data) {
		var obj = bible_data[name];
		if (!obj.old) {
			continue;
		}
		$('.bible-body-old').append('<li><h3>'+obj.abbr+'</h3><h5>'+name+'</h5></li>')
	}
	for (var i = 0; i < 4; i++) {
		$('.bible-body-old').append('<li><h3>&nbsp;</h3><h5>&nbsp;</h5></li>')
	}
	for (name in bible_data) {
		var obj = bible_data[name];
		if (obj.old) {
			continue;
		}
		$('.bible-body-new').append('<li><h3>'+obj.abbr+'</h3><h5>'+name+'</h5></li>')
	}
	for (var i = 0; i < 4; i++) {
		$('.bible-body-new').append('<li><h3>&nbsp;</h3><h5>&nbsp;</h5></li>')
	}
	$('.bible-body-old li:first').addClass('active');

	$("body").niceScroll();
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
			var index = $('.bible-body-juan li.active').data('zhang');
			if (index) {
				$('.bible-body-zhang li:eq('+(+index-1)+')').addClass('active');
				$('.bible-foot-tips').text('('+name+'第'+index+'章)');
			} else {
				$('.bible-foot-tips').text('('+name+')');
			}
		}
		$('.bible-foot-type').toggle();
		$('.bible-foot-tips').toggle();
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
		var name = $('.bible-body-juan li.active h5').text();
		var index = $(this).find('h5').text();
		$('.bible-body-juan li.active').data('zhang', index);
		$('.bible-foot-tips').text('('+name+'第'+index+'章)');
	    player[0].source({
		    type: 'audio',
		    sources: 'http://otzkd2ox3.bkt.clouddn.com/'+name+'第'+index+'章.mp3'
		});
	    player[0].play();
	});
});
