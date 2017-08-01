function load_player() {
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++) {
        if( scripts[i].src && scripts[i].src.match(/initaudioplayer-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#amazingaudioplayer-1").amazingaudioplayer({
        jsfolder:jsFolder,
        skinsfoldername:"",
        tracklistarrowimage:"asserts/tracklistarrow-48-16-1.png",
        timeformatlive:"%CURRENT% / LIVE",
        volumeimagewidth:24,
        barbackgroundimage:"",
        tracklistarrowimageheight:16,
        showtime:true,
        titleinbarwidth:80,
        showprogress:true,
        random:false,
        titleformat:"%TITLE%",
        height:600,
        loopimage:"asserts/loop-24-24-2.png",
        prevnextimage:"asserts/prevnext-24-24-1.png",
        showinfo:false,
        imageheight:100,
        skin:"BarWhiteWithPlaylist",
        responsive:true,
        loopimagewidth:24,
        showstop:false,
        prevnextimageheight:24,
        infoformat:"By %ARTIST% %ALBUM%<br />%INFO%",
        tracklistbackgroundimage:"",
        showloading:false,
        forcefirefoxflash:false,
        tracklistscroll:true,
        preloadaudio:false,
        showvolumebar:true,
        imagefullwidth:false,
        width:300,
        showimage:false,
        showloop:true,
        volumeimage:"asserts/volume-24-24-2.png",
        playpauseimagewidth:24,
        loopimageheight:24,
        tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",
        prevnextimagewidth:24,
        titleinbarwidthmode:"fixed",
        forceflash:false,
        tracklistarrowimagewidth:48,
        playpauseimageheight:24,
        showbackgroundimage:false,
        stopimage:"asserts/stop-24-24-1.png",
        showvolume:true,
        playpauseimage:"asserts/playpause-24-24-1.png",
        forcehtml5:false,
        showprevnext:true,
        backgroundimage:"",
        loadingformat:"Loading...",
        progressheight:8,
        showtracklistbackgroundimage:false,
        titleinbarscroll:true,
        showtitle:false,
        defaultvolume:100,
        showtitleinbar:false,
        heightmode:"auto",
        titleinbarformat:"%TITLE%",
        showtracklist:true,
        stopimageheight:24,
        volumeimageheight:24,
        stopimagewidth:24,
        volumebarheight:80,
        noncontinous:false,
        stopotherplayers:true,
        showbarbackgroundimage:false,
        volumebarpadding:8,
        imagewidth:100,
        timeformat:"%CURRENT% / %DURATION%",
        autoplay:false,
        fullwidth:false,
        loop:0,
        tracklistitem:100
    });
    $('.amazingaudioplayer-mark').parent().remove();
    $('.bible-player').niceScroll();
}

$(document).ready(function() {
    load_player();
	$(".bible-body").niceScroll();
	$(document).on('click', '.bible-header .item', function(e) {
		$('.bible-header .item.active').removeClass('active');
		$(this).addClass('active');
		$('.bible-article').hide();
		$($(this).data('class')).show();
	});
    $(document).on('click', '.bible-item', function(e) {
        var chapters = $(this).data('chapters');
        var name = $(this).find('.bible-chapter').text();
        var abbr = $(this).find('.bible-chapter-abbr').text();
        var mp3name;
        $('.bible-player').empty();
        var obj = $('\
            <div id="amazingaudioplayer-1">\
                <ul class="amazingaudioplayer-audios" style="display:none;">\
                </ul>\
            </div>');
        for (var i = 1; i <= chapters; i++) {
            mp3name = name+'第'+i+'章';
            obj.find('.amazingaudioplayer-audios').append('\
                <li data-artist="" data-title="'+mp3name+'" data-album="" data-info="" data-image="" data-duration="0">\
                    <div class="amazingaudioplayer-source" data-src="http://otzkd2ox3.bkt.clouddn.com/'+mp3name+'.mp3" data-type="audio/mpeg" />\
                </li>\
            ');
        }
        $('.bible-player').append(obj);
        load_player();
    });
});
