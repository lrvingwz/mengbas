jQuery(function(){
	
		/*-------------头部导航栏--------------*/
	var $Moonbasa_header_imgdiv = $(".Moonbasa_header_imgdiv");
	var index1 = 1;
	$Moonbasa_header_imgdiv.on("mouseenter","li","a",function(){
			index1 = $(this).index();
			index1=index1+1;
			$(this).find("a").css("background","url(../img/160918195442h_0"+index1+".jpg) no-repeat 0 0");
		
	}).on("mouseleave","li","a",function(){
			index1 = $(this).index();
			index1=index1+1;
		$(this).find("a").css("background","url(../img/160918195442_0"+index1+".jpg) no-repeat 0 0");
	})
})
