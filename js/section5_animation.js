;(function(window, document, $, undefined){
    
    var toggle = 0;

    setTimeout(init, 100);

    function init(){
        $('#section5 .left') .stop().animate({left: -1000}, 1000, function(){
            $('#section5 .left') .stop().animate({left: 0}, 2000);
        });
        $('#section5 .right').stop().animate({right:-1000}, 1000, function(){
            $('#section5 .right').stop().animate({right:0}, 2000);
        });
    }

    function s5AnimationFormatFn(){
        $('#section5 .left') .stop().animate({left: -1000}, 1000);
        $('#section5 .right').stop().animate({right:-1000}, 1000);
    }

    function s5AnimationFn(){
        $('#section5 .left') .stop().animate({left: 0}, 2000);
        $('#section5 .right').stop().animate({right:0}, 2000);
    }

    $(window).scroll(function(){
        if( $(this).scrollTop() < 400 ){
            if( toggle == 1){
                toggle = 0;
                s5AnimationFormatFn();
            } 
        }
        if( $(this).scrollTop() >= 400 ){
            if( toggle == 0){
                toggle = 1;
                s5AnimationFn();
            } 
        }
    });

})(window, document, jQuery);