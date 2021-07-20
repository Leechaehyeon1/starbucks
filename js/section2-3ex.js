(function(window,document,$){
    var cnt=-1;
    // notice
    function noticeSlideFn(){
        cnt++;
        if(cnt>4){
            cnt=0;
        }
        $(".notice-list li").stop().animate({top:24},0).css({zIndex:2});
        $(".notice-list li").eq(cnt).stop().animate({top:0},0).css({zIndex:1}); 
        $(".notice-list li").eq(cnt+1>4?0:cnt).stop().animate({top:0},1000).css({zIndex:3});
    }

    setInterval(noticeSlideFn, 2500);

    // promotion
    $(".promotion-btn").on({
        click:  function(e){
            e.preventDefault();
            
            $(this).toggleClass("addUp");
            $("#section3").stop().slideToggle(500);
        }
    });


}(window,document,jQuery));