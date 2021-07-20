;(function(window, document, $, undefined){

    var t = 0;

    setTimeout(init,100);

    function init(){
        $('#section8 .img').stop().animate({marginTop:100,opacity:0},1000, function(){
            $(this).stop().animate({marginTop:0,opacity:1},2000);
        });
        $('#section8 .s8-title01').stop().animate({left:560+1000,opacity:0}, 1000, function(){
            $('#section8 .s8-title01').stop().animate({left:560,opacity:1}, 2500);
        });
        $('#section8 .s8-title02').stop().animate({left:535+1000,opacity:0}, 1000, function(){
            $('#section8 .s8-title02').stop().animate({left:535,opacity:1}, 2700);
        });
    }

    function formatFn(){
        $('#section8 .img').stop().animate({marginTop:100,opacity:0},1000);
        $('#section8 .s8-title01').stop().animate({left:560+1000,opacity:0}, 1000);
        $('#section8 .s8-title02').stop().animate({left:535+1000,opacity:0}, 1000);
    }
    function animateFn(){
        $('#section8 .img').stop().animate({marginTop:0,opacity:1},2000);
        $('#section8 .s8-title01').stop().animate({left:560,opacity:1}, 2500);
        $('#section8 .s8-title02').stop().animate({left:535,opacity:1}, 2700);
    }

    $(window).scroll(function(){
        if( $(this).scrollTop() < $('#section7').offset().top ){
            if( t == 1 ){
                t = 0;
                formatFn();
            }
        }
        if( $(this).scrollTop() >= $('#section7').offset().top ){
            if( t == 0 ){
                t = 1;
                animateFn();
            }
        }
    });

})(window, document, jQuery);