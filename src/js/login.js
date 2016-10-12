jQuery(function(){
	
	var falg1 = falg2 =false;
	//文本框值
	var $phone =$("#phone");
	
	var $div1 = $("#div1");
	$phone.on("blur",function(){
		var value = $(this).val();
		var isTrue =  /^[1][3-9]\d{9}$/.test(value);
		
		if(value.length==0){
			$div1.html("*手机号不能为空！").css("color","#555555");
			falg1=false;
			return;
			
		}
		if(isTrue){
			falg1 = true;
			console.log("true")
		}
		else{
			$div1.html("*您输入手机号码不符合规范！").css("color","#555555");
			falg1 = false;
		}
	})
	
	
	//密码
	var $pswd = $("#pswd")
	
	var $div2 = $("#div2");
	$pswd.on("blur",function(){
		var value = $(this).val();
		var isTrue = /^.{8,20}$/.test(value);
		if(value.length==0){
			$div2.html("*请输入8-20位字母和数字！");
			falg2=false;
			return;
		
		}
		if(isTrue){
			$div2.html("");
			falg2=true;
			
		}
		else{
			$div2.html("*密码请设为8-20位字母和数字！").css("color","#555555");
			falg2=false;
			
		}
	})


	
	//登录按钮
	var $btn = $("#btn");
	var $box = $("#box");
	$btn.on("click",function(){
		//获取cookie
		var $name = getCookie("username");
		var $pw = getCookie("password");
		if (falg1 && falg2){
			var $phone1 =$phone.val();
			var $pswd1 = $pswd.val();
			if ($phone1==$name && $pswd1==$pw) {
				window.location="../index.html";
				alert("你成功的登录了我");
			}else{
				$box.html("此账户未注册");
			}
			
		}
	})
	
	
});
