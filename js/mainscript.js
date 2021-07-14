$(function(){
	$('.header h1').hide().show(1500);
	$('.header h2').hide().show(2000);
	$('#vibfoot .pt14').click(function(){
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($('#vibfoot .pt14').text()).select();
		document.execCommand("copy");
		alert('The number is copied');
		$temp.remove();
	});
	$('.aboutme').typeIt({
		speed: 25,
		autoStart: false
	});
	$('aboutme').css({
		'text-decoration': 'underline'
	});
	$('.socblock #vk').click(function(){
		window.open('https://vk.com/alekseyscorpi', '_blank');
	});
	$('.socblock #tel').click(function(){
		window.open('https://tele.click/alekseyscorpi', '_blank');
	});
	$('.socblock #vib').click(function(){
		window.open('https://viber.click/79607254824', '_blank');
	});
	$('p.aboutme .ti-container').click(function(){
		$('html,body').animate({scrollTop:$('.workshead').offset().top+"px"},{duration:1E3});
	});
	$('#first a').click(function(e){
		if($('#firstimg').attr('src')!==$(this).attr('href')){
			$('#firstimg').hide().attr('src', $(this).attr('href')).fadeIn(500);
		}
		e.preventDefault();
	});
	$('#second a').click(function(e){
		if($('#secondimg').attr('src')!==$(this).attr('href')){
			$('#secondimg').hide().attr('src', $(this).attr('href')).fadeIn(500);
		}
		e.preventDefault();
	});
	$('#third a').click(function(e){
		if($('#thirdimg').attr('src')!==$(this).attr('href')){
			$('#thirdimg').hide().attr('src', $(this).attr('href')).fadeIn(500);
		}
		e.preventDefault();
	});
});