jQuery(function(){
	//input按钮移入事件
	var $btn = $("input");
	$btn.on("mouseenter",function(){
		$(this).css({"background":"#EB0067","color":"white"});
	}).on("mouseleave",function(){
		$(this).css({"background":"white","color":"#EB0067"});
	})
	
	
	//我的购物车
	var cook = getCookie("mytrade");
		cook = JSON.parse(cook);
	var countcook = getCookie("count");  //从cookie中获取商品数量
	var $maygoing_li = $(".maygoing_li");//获取我的ul
	var $ul = $("<ul/>").addClass("li_ul");//创建ul标签
	var clearing = $(".go3right").find("p"); //获取结算总数量和总价的标签
	var total_prices=0;  //总价
	var prices;  //单价
	var $img1 ;   //图片
	var trades;  //商品信息
	var quantitys;  //数量
	$.each(cook, function(idx,ele){      //遍历cookie
		
		$img1= ele.img;  //图片
		trades = ele.trade //信息
		prices = ele.price;  //单价
		quantitys=ele.quantity //数量
		total_prices = parseInt( ele.price)*parseInt( countcook); //总价
//		var $ul = $("<ul/>").addClass("li_ul");//创建ul标签
//		//第一个li,单选按钮，商品信息

//		var $li1 = $("<li/>").addClass("li_li"); 
//		var $ibt = $("<input/>").attr("type","checkbox").addClass("maygoing_bting").appendTo($li1);
//		var $img = $("<img/>").attr("src",ele.img).addClass("maygoing_img").appendTo($li1);
//		var $span = $("<span/>").addClass("maygoing_span1").html(ele.trade+"<br/>").appendTo($li1);
//		var $span1 = $("<span/>").html("品牌：韩伊儿 尺寸：L 颜色：宝蓝").addClass("maygoing_span2").appendTo($li1);
		
		//第二个li，单价
//		var $li2 = $("<li/>").addClass("li_li1"); 
//		var $span3 = $("<span/>").addClass("li_li1sp").html(ele.price).appendTo($li2);
		
		//第三个li，数量
//		var $li3 = $("<li/>").addClass("li_li2"); 
//		var $span4 = $("<span/>").addClass("li_li2sp1").html("-").appendTo($li3);
//		var $ibt1 = $("<input/>").addClass("li_li2bt").val(ele.quantity).appendTo($li3);
//		var $span5 = $("<span/>").addClass("li_li2sp2").html("+").appendTo($li3);
		
//		//第四个li，总价
//		var $li4 = $("<li/>").addClass("li_li3"); 
//		var $span6 = $("<span/>").addClass("li_li3sp").html(ele.price).appendTo($li4);
		
//		//第五个li，操作
//		var $li5 = $("<li/>").addClass("li_li4"); 
//		var $span7 = $("<span/>").addClass("li_li4sp1").html("修改<br/>").appendTo($li5);
//		var $span8 = $("<span/>").addClass("li_li4sp2").html("移除").appendTo($li5);
		
//		$li1.appendTo($ul);//把第一个li添加到ul
//		$li2.appendTo($ul);//把第二个li添加到ul
//		$li3.appendTo($ul);//把第三个li添加到ul
//		$li4.appendTo($ul);//把第四个li添加到ul
//		$li5.appendTo($ul);//把第五个li添加到ul
//		$ul.appendTo($maygoing_li);//把ul添加到页面的li上去
	});
	
			//第一个li,单选按钮
		var $li1 = $("<li/>").addClass("li_li"); 
		var $ibt = $("<input/>").attr("type","checkbox").addClass("maygoing_bting").appendTo($li1);
		var $img = $("<img/>").attr("src",$img1).addClass("maygoing_img").appendTo($li1);
		var $span = $("<span/>").addClass("maygoing_span1").html(trades+"<br/>").appendTo($li1);
		var $span1 = $("<span/>").html("品牌：韩伊儿 尺寸：L 颜色：宝蓝").addClass("maygoing_span2").appendTo($li1);
		
			//第二个li，单价
		var $li2 = $("<li/>").addClass("li_li1"); 
		var $span3 = $("<span/>").addClass("li_li1sp").html("￥"+prices).appendTo($li2);
		
			//第三个li，数量
		var $li3 = $("<li/>").addClass("li_li2"); 
		var $span4 = $("<span/>").addClass("li_li2sp1").html("-").appendTo($li3);
		var $ibt1 = $("<input/>").addClass("li_li2bt").val(countcook).appendTo($li3);
		var $span5 = $("<span/>").addClass("li_li2sp2").html("+").appendTo($li3);
		
			//第四个li，总价
		var $li4 = $("<li/>").addClass("li_li3"); 
		var $span6 = $("<span/>").addClass("li_li3sp").html("￥"+total_prices+".00").appendTo($li4);
		
			//第五个li，操作
		var $li5 = $("<li/>").addClass("li_li4"); 
		var $span7 = $("<span/>").addClass("li_li4sp1").html("修改<br/>").appendTo($li5);
		var $span8 = $("<span/>").addClass("li_li4sp2").html("移除").appendTo($li5);
	
		$li1.appendTo($ul);//把第一个li添加到ul
		$li2.appendTo($ul);//把第二个li添加到ul
		$li3.appendTo($ul);//把第三个li添加到ul
		$li4.appendTo($ul);//把第四个li添加到ul
		$li5.appendTo($ul);//把第五个li添加到ul
		$ul.appendTo($maygoing_li);//把ul添加到页面的li上去
	
			//创建商品数量总计和金额总计标签
		var $span9 = $("<span/>").addClass("clearing").html(parseInt( countcook)+"件").appendTo(clearing);
		var $trong = $("<strong/>").html("折后商品金额总计:").appendTo(clearing);
		var $span10 = $("<span/>").addClass("total").html("￥"+total_prices+".00").appendTo(clearing);
		
		
        	//点击移除cookie
		$span8.on("click",function(){
			removeCookie("mytrade");
			removeCookie("count");
			$ul.css("display","none");
			clearing.css("display","none");
		})
})
