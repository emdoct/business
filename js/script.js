$(function(){

	$('.burger').on('click', function(){
		$('.mobile-menu__list').toggleClass('menu__hide');
		$('.burger').toggleClass('burger__hide');
		
		
 
	});

	$('.analysis__btn').on('click', function(event){
		event.preventDefault();
	});

	$('.analysis__btn').on('click', function(){
		$('.analysis-form__feeld').toggleClass('feeld__hide');
	});

	$('.home__scroll').on('click', function (event) {

	    	   let home = $(this).attr('href');
	    	   let top = $(home).offset().top;
	    	  $('body,html').animate({scrollTop: top}, 1000);
	    });



});

	