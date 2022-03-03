$(document).ready(function(){
	
    $(function(){
        $('#mobile-menu').slicknav();
    });

	new WOW().init();
    
	
	$('#owl1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
    
    $('#owl2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    

	
})