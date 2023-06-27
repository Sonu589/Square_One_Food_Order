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