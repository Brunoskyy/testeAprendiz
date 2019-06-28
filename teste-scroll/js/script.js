$(document).ready(function(){

	$(".btn-inicio").click(function(){
		$(this).hide();
		$(".foto-mentores li, .foto-mentores h1").css("position", "absolute");
		$(".foto-mentores h1").css({"text-align": "left", "margin-bottom": "0px"});
		$(".foto-mentores h1").animate({ "top": "+=10px" }, "slow");
		
		$(".foto-mentores li:first-of-type").animate({ "left": "0", "top": "+=60px" }, "slow");
		$(".foto-mentores li:nth-of-type(2)").delay(200).animate({ "left": "110px", "top": "+=60px" }, "slow");
		$(".foto-mentores li:nth-of-type(3)").delay(400).animate({ "left": "220px", "top": "+=60px" }, "slow");
		$(".foto-mentores li:nth-of-type(4)").delay(600).animate({ "left": "330px", "top": "+=60px" }, "slow");
		
		$(".content-mentores").delay(1000).fadeIn("slow");
		$('.conteudo').not("#1").addClass('hidden');
		$(".btn").css("pointer-events", "auto");
		$(".foto-mentores li:not(:first-of-type) a").addClass("add-mask");
	});

	$('.btn').click(function(e) {
		e.preventDefault();

		idElem = $(this).data('item');
		$('.conteudo').addClass('hidden');
		$('.conteudo .texto').removeClass('slideInUp');
		$('#' + idElem).removeClass('hidden');
		$('#' + idElem + " .texto").addClass('slideInUp');
		$('#' + idElem + " .imagem").addClass('zoomIn');
		$(".foto-mentores li a").not(this).addClass("add-mask");
		$(this).removeClass("add-mask");
	});

});