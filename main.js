$(document).ready(function(){
	$('.carousel').carousel({'interval':100});
	/*$('button').click(function(){
		$('.hide').hide();

	});
	$('button').click(function(){
		$('ul li:nth-child(3)').hide();
		$('[href="www.google.com"]').hide();

	});
	$('p').dblclick(function(){
		$(this).hide();

	});
	$('p').mouseenter(function(){
		alert('hi');

	});
	$('p').hover(function(){
		alert('hi');

	},
	function(){
		alert('bye');
	});*/
	$('input').focus(function(){
		$(this).css({'background':'#ccc','border':'2px solid black'});
	});
	/*$('p').on({
		mouseenter:function(){
			$(this).css("background","red");
		},
		mouseleave:function(){
			$(this).css('background','green');
		},
		click:function(){
			$(this).css('background','yellow');
		}
	});
	$('.hide').click(function(){
		$('p').hide('slow');
	});
	$('.show').click(function(){
		$('p').show(1000);
	});*/
	$('.toggle').click(function(){
		$('span').toggle(1000,function(){
			alert('Done!');
		});
	});
	$('.readmore').click(function(){
		$('span').fadeIn();
	});
	$(".readmore").click(function(){
		$(".box1").fadeIn();
		$(".box2").fadeIn();
	});
	$(".readmore").dblclick(function(){
		$(".box1").fadeTo('slow',0.3);
	});
	$(".readmore").click(function(){
		$(".box3").fadeToggle(2000);
	});
	$('.btn').click(function(){
		$('.lorem').slideDown(2000);
	});
	$('.btn1').click(function(){
		$('.lorem').stop();
	})
	$('.animation').click(function(){
		$('.box4').animate({width:'300px'},'slow').animate({left:'200px'},'slow').animate({fontSize:'30px'})
		.height(300); 
	});
	$('#btn1').click(function(){
		alert("Text:" + $('.lorem1').text());
	});
	$('#btn2').click(function(){
		alert($('#anik').val());
	});
	$('#btn3').click(function(){
		alert($('#link').attr('href'));
		$('#link').attr('href','https://frodevelop.epizy.com')
	});
	$('#btn4').click(function(){
		$('#lorem1').text("Anik");
		$('#lorem1').append(" Barua");
		$('#lorem1').prepend("Mr.");
	});
	$('#btn5').click(function(){
		$('#lorem2').html("<h2>Hello</h2>");
	});
	$('#btn6').click(function(){
		$('#lorem3').val("comment");
		$('img').before("musume image")
	});
	$('.btn7').click(function(){
		$('#lorem4').empty();/*$('#lorem4').empty();*/
		$('#lorem1').addClass("lorem2");
		$('#lorem4').removeClass("lorem5");
	});
	$("span").parent().css({"color":"red","border":"2px solid yellow"});
	$("span").parents("ul").css({"color":"red","border":"2px solid green"});
	$("div").children().css({"color":"red","border":"2px solid green"});
	$('div').find('span').css({"color":"gray","border":"2px solid red"});
	$('span').siblings('h3').css({"color":"blue"});

});