
jQuery(function(){
	//数据请求
		var index =0;
	//点击隐藏显示
	var $select_dd = $(".select_dd");
	var $classBox = $select_dd.find("a:gt(9)");//前十个设计师
	var $classLast = $select_dd.next().next();//“更多”，标签
	$classBox.hide();
	$classLast.on("click",function(){
		if ($classBox.is(":hidden")) {
			$classBox.show();
			$classLast.html("收起");
		}else{
			$classBox.hide();
			$classLast.html("更多")
		}
	})
	
	//移入移除
	var this1 = $select_dd.find("a").html();
	$select_dd.on("mouseenter","a",function(){
		//var this1 = $select_dd.find("a").html();
		$(this).addClass("a1").html("");//.siblings().removeClass("a1").html(this1);
		
	}).on("mouseleave","a",function(){
		
		$(this).removeClass("a1").html(this1);
	})


		
		
		//数据请求
		var index =0;
		var $ax = $(".ax");
		jQuery.ajaxSetup({
			type:"get",
			url:"../data/details.json",
			dataType:'json',
			async:true,
			success:function(res){
				
				
				$.each(res, function(idx,ele) {  
				  var $dl = $("<dl/>").addClass("ax1");
				  //创建标签,大图、小图
				  var $img1 = $('<img src="'+ele.src+'"/>'). addClass("aximg");
				  var $img2 = $('<img src="'+ele.img+'"/>'). addClass("aximg1");
				  var $dt = $("<dt/>").addClass("axdt");
				  $dt.html($img1).appendTo($dl);
				  $img2.appendTo($dt).appendTo($dl);
				  
				  //创建span和a标签
				  var $span = $("<span/>"). addClass("axsp").html("￥"+ele.price+"<br />");
				  var $a1 = $("<a/>"). addClass("axa").html(ele.title+"<br />");
				  var $a2 = $("<a/>"). addClass("axa1").html(ele.commentCount);
				  var $dd = $("<dd/>").addClass("axdd");
				  var $dd1 = $("<dd/>").addClass("ax2")
				  $dd.html($span)
				  $a1.appendTo($dd);
				  $a2.appendTo($dd);
				  $dd.appendTo($dl);
				  $dd1.appendTo($dl);
				  $dl.appendTo($ax);
					  
					  //移入dl事件
					$dl.hover(function(){
						$(this).css({"border":"1px solid red"}).siblings().css({"border":"none"});
					})
				});
				
			}
		})
		$.ajax();

			// 懒加载效果
			// 给window绑定scroll事件，当差不多滚动到底部是加载更多内容
			$(window).on('scroll',function(){
				
					// 获取滚动条滚动过的距离
					var scrollTop = $(window).scrollTop();
	
					// 当差不多滚动到底部是加载更多内容
					if(scrollTop >= $(document).height() - $(window).height() - 100){
						index+=1;
						if (index>=5) {
							return ;
						}
						$.ajax();
						
					}
				
			})
			
			
})
