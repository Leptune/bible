
var player = plyr.setup();

$(document).ready(function() {
	// 写入圣经章节
	for (name in bible_data) {
		var obj = bible_data[name];
		if (!obj.old) {
			continue;
		}
		$('.bible-body-old').append('<li><h4>'+obj.abbr+'</h4><h5>'+name+'</h5></li>')
	}
	for (var i = 0; i < 5; i++) {
		$('.bible-body-old').append('<li class="no"><h4>&nbsp;</h4><h5>&nbsp;</h5></li>')
	}
	for (name in bible_data) {
		var obj = bible_data[name];
		if (obj.old) {
			continue;
		}
		var style = '';
		if (name == '帖撒罗尼迦前书' || name == '帖撒罗尼迦后书') {
			style = " style='line-height:inherit;'";
		}
		$('.bible-body-new').append('<li><h4>'+obj.abbr+'</h4><h5'+style+'>'+name+'</h5></li>')
	}
	for (var i = 0; i < 5; i++) {
		$('.bible-body-new').append('<li class="no"><h4>&nbsp;</h4><h5>&nbsp;</h5></li>')
	}
	$('.bible-body-old li:first').addClass('active');

	$('body').niceScroll();
	$(document).on('click', ".bible-header-juan-zhang li", function(event) {
		if ($(this).is('.active')) {
			return false;
		}
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
			var tmpCount = bible_data[name].count%5;
			if (!tmpCount) {
				tmpCount = 5;
			} else {
				tmpCount = 10 - tmpCount;
			}
			for (var i = 0; i < tmpCount; i++) {
				$('.bible-body-zhang').append('<li class="no"><h5>&nbsp;</h5></li>')
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
		$('body').getNiceScroll().resize();
	});
	$(document).on('click', ".bible-foot-type li", function(event) {
		$(".bible-foot-type li.active").removeClass('active');
		$(this).addClass('active');
		$('.bible-body-juan ul').hide();
		$($(this).data('class')).show();
		$('body').getNiceScroll().resize();
	});
	$(document).on('click', ".bible-body-juan li", function(event) {
		if ($(this).is('.no')) {
			return false;
		}
		$(".bible-body-juan li.active").removeClass('active');
		$(this).addClass('active');
		$('.bible-header-zhang').click();
		$('body').getNiceScroll().resize();
	});
	$(document).on('click', ".bible-body-zhang li", function(event) {
		if ($(this).is('.no')) {
			return false;
		}
		$(".bible-body-zhang li.active").removeClass('active');
		$(this).addClass('active');
		var name = $('.bible-body-juan li.active h5').text();
		var index = $(this).find('h5').text();
		$('.bible-body-juan li.active').data('zhang', index);
		$('.bible-foot-tips').text('('+name+'第'+index+'章)');
		$('body').getNiceScroll().resize();
	    player[0].source({
		    type: 'audio',
		    sources: 'http://otzkd2ox3.bkt.clouddn.com/'+name+'第'+index+'章.mp3'
		});
	    player[0].play();
	});
});
