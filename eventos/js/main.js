/* -------------- ANIMACAO EFEITO BOTAO MENU -------------------- */
var anchor = document.getElementsByClassName("btn-menu");

[].forEach.call(anchor, function(anchor){
  var open = false;
  anchor.onclick = function(event){
    event.preventDefault();
    if(!open){
      this.classList.add('close');
      open = true;
    }
    else{
      this.classList.remove('close');
      open = false;
    }
  }
});


$(document).ready(function() {


	/* ===================================== PALESTRANTES ====================================== */
	/* ---------- BOTAO ATIVAR MENU ------------ */ 
    $(".btn-menu").click(function(event) {
        $(".menu").toggleClass("block");
        return false;
    });
 
  	
  	/* ===================================== PALESTRANTES ====================================== */
  	$('.lista-palestrantes li').eq(1).addClass('palestrante-active').find('.mask-blue').css('opacity', 0);
	$('.lista-palestrantes li').hover(function(){
		$(this).css('opacity', 1);
		$(this).addClass('palestrante-active');
		$(this).find('.mask-blue').animate({opacity: 0}, 200);
    }, function(){
    	$(this).removeClass('palestrante-active');
    	$(this).find('.mask-blue').animate({opacity: 1}, 200);
	});
	$('.lista-palestrantes').mouseleave(function(){
		$('.lista-palestrantes li').eq(1).addClass('palestrante-active').find('.mask-blue').css('opacity', 0);
	});
	/* ========================================================================================== */



	/* ===================================== PALESTRANTES ======================================= */
	$('.datas-programacao a').eq(0).addClass('aba-ativa');
	$('.aba').eq(0).css('display', 'block');

	$('.datas-programacao li a').click(function(){
		$('.datas-programacao a').removeClass('aba-ativa');
		$(this).addClass('aba-ativa');
		var aba = $(this).attr('href');
		$('.aba').css('display', 'none');
		$(aba).css('display', 'block');
		return false;
	});

	/* ========================================================================================== */



	/* ===================================== CAROUSEL JURADOS =================================== */
	$("#owl-example").owlCarousel({
  		items: 3,
    	itemsTablet: [990, 2],
    	itemsMobile: [479, 1],
    	navigation: true
	});
	/* ========================================================================================== */


	/* ======================================== FANCYBOX ======================================= */
	$(".item-carousel").fancybox({
		'width'				: 600,
		'autoScale'     	: false,
        'transitionIn'		: 'none',
		'transitionOut'		: 'none'
	});

	$("a[rel=example_group]").fancybox({
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'titlePosition' 	: 'over',
		'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) {
		    return '<span id="fancybox-title-over">Image ' +  (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
		}
	});
	/* ========================================================================================== */
 
});