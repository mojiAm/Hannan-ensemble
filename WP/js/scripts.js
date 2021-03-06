function validateText(str,len){
	return str.length >= len;
}

function validateEmail(str){
	var emailPattern = /^[a-z0-9+_%.-]+@(?:[a-z0-9-]+\.)+[a-z]{2,6}$/i ;

	return emailPattern.test(str);
}
(function($){
	$(function(){
	//-------------------------------- action menu ----------------
	window.onscroll=function(){
			var scrolled = $(window).scrollTop();
			//console.log(scrolled);
			if(scrolled < 31){
	
				$('header.action').animate({
	
					opacity : 0
	
				},350,null,function(){
	
					$('header.action').css({
	
						display : 'none'
	
					});
				});
	
				setTimeout(function(){
	
					$('header.normal').animate({
	
						opacity : 1
	
					},400);
	
				},500);
	
			}else{
	
				$('header.normal').css({
	
					opacity:0
				});
	
				$('header.action').animate({
						display : 'block'
	
					},0,'linear',function(){
	
						$(this).animate({
	
						 'opacity' : 1
	
						},170);
					});
	
			}
		};
		//==========================  MAIL VALIDATION ==========================
		$('form#contact').submit(function(){
			var feild, err=false;
	
			target = $('#name');
	
			if (validateText( target.val(), 3 )) {
	
				target.removeClass('err').addClass('ok');
	
			}else{
	
				target.removeClass('ok').addClass('err');
				err= true;
			}
	
			target = $('#email');
	
			if (validateEmail(target.val())) { 
	
				target.removeClass('err').addClass('ok');
			}else {
	
				target.removeClass('ok').addClass('err');
				err=true;
			}
	
			target = $('#message');
	
			if (validateText( target.val(), 7 )) {
	
				target.removeClass('err').addClass('ok');
	
			}else {
	
				target.removeClass('ok').addClass("err");
				err=true;
			}
	
			return !err;
		});
	
		//-------------------------- players -------------------------
	
		var faces       = $('div.players div'),
			faceBio = $('div.players div p');
	
			faces.each(function(){
	
			var that = this;
	
			$(this).mouseover(function(){
	
				//setTimeout(function(){
					$(that).animate({
	
						width : 910,
	
						'box-shadow' : 'inset 0 0 10px #444'
	
					},350);
					//},150);
				
			});
	
			$(this).mouseout(function(){
				$(that).animate({
	
					width:200,
					'box-shadow':'none'
	
				},300);
	
					
				
			});	
			
		});
	});
})(Zepto);