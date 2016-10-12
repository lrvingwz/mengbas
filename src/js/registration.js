jQuery(function(){
	
	var $input_1 = $(".input_1");
	var $div = $input_1.find("div");
	var falg1=falg2=falg3=falg4=falg5=false;
	//验证邮箱
	$input_1.on("blur","input",function(){
		var value1 = $(this).val();
		var isTrue = /^\w+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(value1);
		if(isTrue){
		}
		else{
			$div.html("*您输入的邮箱不符合规范").css("color","#555555");
			
		}
	})
	
	//验证手机号码
	var $input_2 = $(".input_2");
	var $div1 = $input_2.find("div");
	$input_2.on("blur","input",function(){
		var value1 = $(this).val();
		var isTrue =  /^[1][3-9]\d{9}$/.test(value1);
		if(value1.length==0){
			$div1.html("邮箱或手机号至少填一个！").css("color","#555555");
			falg2 =false;
			return;
			
		}
		if(isTrue){
			falg2=true;
			
		}
		else{
			$div1.html("*您输入手机号码不符合规范").css("color","#555555");
			falg2 = false;
			
		}
	})
	
	//验证密码
	var $input_3 = $(".input_3");
	var $div2 = $input_3.find("div");
	$input_3.on("blur","input",function(){
		var value1 = $(this).val();
		var isTrue = /^.{8,20}$/.test(value1);
		if(value1.length==0){
			
			$div2.html("*请输入8-20位字母和数字！");
			falg3=false;
			return;
			
		}
		if(isTrue){
			$div2.html("");
			falg3=true;
			
		}
		else{
			$div2.html("*密码请设为8-20位字母和数字！").css("color","#555555");
			falg3=false;
			
		}
	})
	
	//验证2次输入的密码是否一致
	var $input_4 = $(".input_4");
	var $div3 = $input_4.find("div");
	$input_4.on("blur","input",function(){							
		var value1 = $input_3.find("input").val();
		var value2 = $input_4.find("input").val();
		if ( value2.length==0 )
		{
			
			$div3.html("*请再次输入密码！").css("color","#555555");
			falg4=false;
			return;
		}
		if ( value1 == value2 )
		{
			
			falg4=true;
			
		}
		else
		{
			$div3.html("*两次输入的密码不一致").css("color","#555555");
			falg4=false;
			
		}
	})
	
	//随机生成4位数验证码
	var $div_span = $(".div_span");
	var $div_span1 = $div_span.find("span");
	$div_span.on("click","a",function(){
		var str = "";									//定义空字符串 str 用于存放生成的验证码
		for(var i=0;i<4 ;i++ )							//循环4次生成4位的验证码(循环几次就生成几位)
		{
			var Numb = parseInt( Math.random()*11 );	//随机生成0至11的随机数，共12种情况，分每4种情况为一组
			if (Numb>=0 && Numb<=3)						//Num在 0 —— 3 范围内时，生成一个数字字符
			{
				str += parseInt( Math.random()*9 );		//随机得到0到9这10个数字中的任意一个
			}								//如果乘数[指的是9]>=10的话随机生成的字符就会是2位，最终的字符为5位
			else if( Numb>=4 && Numb<=7 )				//Num在 4 —— 7 范围内时，生成一个大写字母字符
			{
				str += String.fromCharCode( parseInt(Math.random()*26) + 65 );//乘26是共有26个字母，65是大写A的编码
			}
			else if( Numb>=8 && Numb<=11 )				//Num在 8 —— 11 范围内时，生成一个小写字母字符
			{
				str += String.fromCharCode( parseInt(Math.random()*26) + 97 );//97是小写a的编码
			}
		}
		$div_span1.html(str).css("color","balck");
	})
	
	//验证 验证码
	//获得焦点时查看验证码是否已经生成
	var $input_span=$div_span.find("input");
	var $a = $div_span.find("span");
	var $div4 = $div_span.find("div");
	//验证是否正确输入验证码
	$div_span.on("blur","input",function(){
		var str1 = $input_span.val();
		var str1_a = $a.html();
		if(str1.length==0){
			
			$div4.html("*请输入验证码");
			falg5=false;
			return;
		}
		if ( str1!=str1_a )
		{
			$div4.html("*验证码输入错误，请核对后再输入。")
			falg5=false;
		
		}
		else
		{
			falg5=true;
			
		}	
	})
	
	/*---------添加cookie----------*/
	var $checkbox1 = $("#checkbox1");
	var $oUsname = $("#fone");
	var $oPasword = $("#psw");
	//验证表单是否已全部通过验证
	var $div_btn = $(".div_btn");
	var $div5 = $div_btn.find("div");
	$div_btn.on("click","input",function(){
		var usname = $oUsname.val();//账户值
		var pasword = $oPasword.val();//密码值
		if ($checkbox1[0].checked ==true) {
		
			falg1 = true;
			//设置cookie
			var d = new Date();
			d.setDate(d.getDate()+10);
			setCookie("username",usname,d);
			setCookie("password",pasword,d);	
			
			//判断是否通过
			if (falg2 && falg3 && falg4 &&falg5 &&falg1) {
				window.location="../index.html";
				alert("注册成功");
			}else{
				
				$div5.html("*请完善信息！");
				return false;
			}
		}else{
			falg1=false;	
			$div5.html("未同意注册条款");
			console.log("false")
		}
		
	})
		
})
