
jQuery(function(){
	
	/*-------------头部导航栏--------------*/
	var $Moonbasa_header_imgdiv = $(".Moonbasa_header_imgdiv");
	var index1 = 1;
	$Moonbasa_header_imgdiv.on("mouseenter","li","a",function(){
			index1 = $(this).index();
			index1=index1+1;
			$(this).find("a").css("background","url(img/160918195442h_0"+index1+".jpg) no-repeat 0 0");
		
	}).on("mouseleave","li","a",function(){
			index1 = $(this).index();
			index1=index1+1;
		$(this).find("a").css("background","url(img/160918195442_0"+index1+".jpg) no-repeat 0 0");
	})
	
	
	
	
	/*---------首页轮播图1-----------*/
	
	var $Shuffling_list = $(".Shuffling_list");
	var $Shuffling_div = $(".Shuffling_div");
	var index=0;
	var len = $Shuffling_list.find("li").length;
	//初始化
	move();
	//鼠标移上大图停止轮播
	$Shuffling_list.on("mouseenter",function(){
		clearInterval(timer);
		move();
	}).on("mouseleave",function(){
		move();
		timer = setInterval(moveing,3000);
	})
	//鼠标移上小图片图片切换
	$Shuffling_div.on("mouseenter","span",function(){
		index = $(this).index();
		clearInterval(timer);
		moveing();
		timer = setInterval(moveing,3000);
	})
	//定时器
	var timer = setInterval(moveing,3000);
	function moveing(){
		
		index++;
		move();
	}
	function move(){
		if (index<0) {
			index =len-1;
		}
		else if (index>len-1) {
			index =0;
		}
		$Shuffling_list.find("li").eq(index).animate({opacity:1}).siblings().animate({opacity:0});
		$Shuffling_div.find("span").eq(index-1).addClass("active").siblings().removeClass("active");
	}
	
	
	
	/*----------------轮播图上的鼠标移动事件----------------------*/
	
		var $cide_UL = $(".cide_UL");//显示的UL
		var $hide = $(".hide").children("li")//隐藏的li
		var $cide_div= $(".cide_div");
		$cide_UL.on("mouseenter","li",function(){
			//显示的li的移动事件
			index = $(this).index();//获取当前的li的下标
			$(this).css({"background":"#EC1077","color":"white"})
			$(this).find("a").css({"color":"white"})
			//$(this).find("div").css({"background":"url(img/icon_h"+index1+".png) no-repeat "});
			//隐藏的li的移动事件
			$.each($hide, function(idx,ele) {
				if (index==idx) {
					$(this).show();
				}
			});
			
		}).on("mouseleave","li",function(){
			index = $(this).index();//获取当前的li的下标
			//显示的li的移动事件
			$(this).css({"background":"white"})
			$(this).children("div").children("h3").children("a").css({"color":"black"})
			$(this).children("div").children("h4").children("a").css({"color":"#797979"})
			//$cide_div.css({"background":"url(img/icon_"+index1+".png) no-repeat "});
			//隐藏的li的移动事件
			$.each($hide, function(idx,ele) {
				if (index==idx) {		
					$(this).hide();
				}
			});
			
		})
	
	
	
	
	
	/*---------------鼠标移动事件--------------------*/
		var $brands_btn = $(".brands_btn");
		var $brands_right_picture = $(".brands_right_picture");
		var index2 =0;
		$brands_btn.on("mouseenter","span",function(){
			index2 = $(this).index();
			
			$(this).addClass("active1");
			$brands_right_picture.find("li").eq(index2).animate({opacity:1}).siblings().animate({opacity:0});
		}).on("mouseleave","span",function(){
			$(this).removeClass("active1");
			$brands_right_picture.find("li").eq(index2).animate({opacity:1}).siblings().animate({opacity:0});
		})

	
	
	/*------------每周新品轮播图----------------*/
	var $product_carousel =$(".product_carousel");//大图
		$product_carousel.pcarousel({
			type:"fade"
		});
		
	/*------------热销单款推荐----------------*/
	var $hotul = $(".hots");
	
		$hotul.pcarousel1({
			type:"x",
			buttons:false
		});
	
//	var $hot_div = $(".hot_div");
//	var hotidx = 0;
//	var hotindex_len = $hotul.find("li").length;
//	//初始化
//	move1();
//	//鼠标移上大图停止轮播
//	$hotul.on("mouseenter",function(){
//		clearInterval(timer);
//		move1();
//	}).on("mouseleave",function(){
//		move1();
//		timer = setInterval(moveing1,3000);
//	})
//	//鼠标移上小图片图片切换
//	$Shuffling_div.on("mouseenter","span",function(){
//		hotidx = $(this).index();
//		clearInterval(timer);
//		moveing1();
//		timer = setInterval(moveing1,3000);
//	})
//	//定时器
//	var timer = setInterval(moveing1,3000);
//	
//	function moveing1(){
//		console.log(hotidx)
//		hotidx++;
//		move1();
//	}
//	function move1(){
//		if (hotidx<0) {
//			hotidx =hotindex_len-1;
//		}
//		else if (hotidx>hotindex_len-1) {
//			hotidx =0;
//		}
//		$hotul.find("li").eq(hotidx).animate({opacity:1}).siblings().animate({opacity:0});
//		$hot_div.find("span").eq(hotidx-1).addClass("active").siblings().removeClass("active");
//	}	

})