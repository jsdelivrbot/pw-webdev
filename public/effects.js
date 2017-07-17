$(document).ready(function(){
    var aboutScroll = 1;
    
    $(window).scroll(function(){
        if(aboutScroll == 1) {
            $("#aboutContent").hide();
            $("#aboutContent").fadeIn(3000);
            aboutScroll = 0;
        }
    });
});
