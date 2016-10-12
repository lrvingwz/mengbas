jQuery(function(){
	
	//鼠标移入导航栏
	var $dhl_mv = $(".dhl_mv");
	$dhl_mv.on("mouseenter","a",function(){
		$(this).css({"color":"#000","border-bottom":"3px solid black "}).siblings("a").css({"color":"#484946","border-bottom":"3px solid #fff"})
	})
	
	//放大镜
	var $box = $(".boxs");
	$box.xzoom({
		position:"right",
	});
	
	
			

			
/*--------购物车---------------*/
	//初始化
	var obj={};
	var mytrade=[];
	var index = 0;
	var $trade= $(".trade");        //商品
	var $price=	$(".price");		//价格
	var $quantity=$("#quantity");	//数量	
	var	$img=$(".box1");			//图片
	var $bt2 = $(".bt2");			//添加购物车按钮
	var $quantity1 = parseInt($("#quantity").html());//获取商品数量的初始值
	$bt2.on("click",function(){
			$quantity1 +=1;
		if (getCookie("mytrade")) {
			mytrade = JSON.parse(getCookie("mytrade"));
			var obj={"trade":$trade.html(),"price":$price.html(),"quantity":$quantity.html(),"img":$img.attr("src")}
			mytrade.push(obj);
			mytrade = JSON.stringify(mytrade);
			console.log("set")
		}else{
			var mytrade=[];
			var obj={"trade":$trade.html(),"price":$price.html(),"quantity":$quantity.html(),"img":$img.attr("src")}
			mytrade.push(obj);
			mytrade = JSON.stringify(mytrade);
			console.log("no-set")
		}
		
		
		var d = new Date("2016-10-20")
		addCookie("count",$quantity1,d);
		addCookie("mytrade",mytrade,d);
		alert("添加成功")
	})
		
})






/*		
		jQuery(function($){
				
				var size = 0;
				var goods_states;
                var $obj ={}
	
				//添加购物车
	
				 //加入购物袋
					//设置cookie 尺码
					$.each($oli, function() {
						$oli.on("click",function(){
							size = $(this).html();			
						})
					});
					//获取cookie 初始值
					if(getCookie("count")){
						$("#cuont_goods").html(getCookie("count"));
					}
					//获取span里面的值
					var $count1 = parseInt($("#cuont_goods").html());
					//加入购物袋  点击事件
		            $obtn1.on("click",function(){
		            	$count1+=1;
		                if(getCookie("goods_states")){
				                goods_states = JSON.parse(getCookie("goods_states"));
				                $obj = {"src":$oimg.attr("src"),"head":$oa.html()+$otit.html(),"price":$oprice.html(),"size":size};
				                goods_states.push($obj);
		                }else{
				                goods_states =[];
				                $obj = {"src":$oimg.attr("src"),"head":$oa.html()+$otit.html(),"price":$oprice.html(),"size":size};
				                goods_states.push($obj);
		                }
		            	
		            	//console.log(goods_states,JSON.stringify(goods_states));
		                //设置
						var d = new Date();
		    			d.setDate(d.getDate()+100);
		    			setCookies("count",$count1,d,"/");
		    			setCookies("goods_states",JSON.stringify(goods_states),d,"/");
		    		   $("#cuont_goods").html($count1);
					})
                   
			});
			
			
			//尺码的选择
			var $r_li = $("#HR_LIST li");
			
			$.each($r_li, function(idx,item) {
				$(this).on("click",function(){
					$(this).addClass("HR_active").siblings().removeClass("HR_active");
				})
			});
			
			
	
		});
*/

