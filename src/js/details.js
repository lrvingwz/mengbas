jQuery(function(){
	
/*-----------鼠标移入导航栏-------------*/
	var $dhl_mv = $(".dhl_mv");
	$dhl_mv.on("mouseenter","a",function(){
		$(this).css({"color":"#000","border-bottom":"3px solid black "}).siblings("a").css({"color":"#484946","border-bottom":"3px solid #fff"})
	})
	
/*--------放大镜-------*/
	var $box = $(".boxs");
	$box.xzoom({
		position:"right",
	});
	
	
/*--------商品小图鼠标移入事件-----------*/
	var $minUl = $("#minUl");	//小ul
	var $positul = $("#positul").find("li");  //大ul的li
	$minUl.on("mouseenter","li",function(){
		minli=$(this).index();
		console.log(minli)
		$(this).css("border","1px solid red").siblings().css("border","1px solid #ffffff")
		$positul.eq(minli-1).css("display","block").siblings().css("display","none")
})
	
//	$positul.on("mouseenter",function(){
//		
//		
//	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
			
/*----------点击商品数量加减事件-------------*/
	var i = 0;	
	var $quantity=$("#quantity");
	var $i2 = $(".i2");
	var $i0 = $(".i0");
		$i2.on("click",function(){
			i++;
		$quantity.html(i);
		
			
		})
		$i0.on("click",function(){
			if (i>=1) {
				i--;
				if (i==0) {
				i=0;
				}
			$quantity.html(i);
			}
		})
			


			
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
			$quantity1++;
		if (getCookie("mytrade")) {
			mytrade = JSON.parse(getCookie("mytrade"));
			var obj={"trade":$trade.html(),"price":$price.html(),"quantity":$quantity.html(),"img":$img.attr("src")}
			mytrade.push(obj);
			mytrade = JSON.stringify(mytrade);
		}else{
			var mytrade=[];
			var obj={"trade":$trade.html(),"price":$price.html(),"quantity":$quantity.html(),"img":$img.attr("src")}
			mytrade.push(obj);
			mytrade = JSON.stringify(mytrade);
		}
		
		var d = new Date("2016-10-20")
		addCookie("count",$quantity1,d);
		addCookie("mytrade",mytrade,d);
		alert("添加成功")
	})
		
		
		
	/*-------商品尺码鼠标点击切换事件---------*/
	 var $tix_ul =$(".tix_ul");
	 $tix_ul.on("click","li",function(){
	 	$(this).css({"border":"2px solid #E50065","color":"#E50065"}).siblings("li").css({"border":"2px solid #6A6A6A","color":"#6A6A6A"});
	 })
		

		
		
	/*-------商品详情鼠标点击切换事件---------*/
	 var $rht_dh =$(".rht_dhul");
	 $rht_dh.on("click","li",function(){
	 	$(this).css({"background":"#FFFEFF","border-top":"3px solid red"}).siblings("li").css({"background":"#E8E8E8","border-top":"3px solid #E8E8E8"});
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

