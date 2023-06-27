// Our Gallery Slider

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
	autoplay:true,
	autoplayTimeout:3000,
	navRewind:true,
	autoHeight:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

//Slider down page
$('.counter1').counterUp({
            delay: 5,
            time: 1000,
        });
		
// scroll top
    $(document).ready(function(){
		$("#scrolltop").hide();
		$(window).scroll(function(){
			var x=$(document).scrollTop();
			if(x>200){
				$("#scrolltop").show("slow");
			}
			else{
				$("#scrolltop").hide("slow");
			}
		});
        $("#scrolltop").click(function(){
			$(window).scrollTop(0);
		});
	});
