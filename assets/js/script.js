(function($){
$(document).ready(function(){



    $('.hamburger-menu a').click(function(){
        

        let menuStatus = $('.menu').css('display');
        
        if(menuStatus == 'block'){
            $('.hamburger-menu a').html('<i class="fas fa-bars"></i>');
            
        }else if(menuStatus == 'none'){
            $('.hamburger-menu a').html('<i class="fas fa-times"></i>');
        };


        $('.menu').slideToggle();
    });




});
})(jQuery);