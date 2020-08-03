$(function(){

	// анимация мобильного меню

	$('.burger').on('click', function(){
		$('.mobile-menu__list').toggleClass('menu__hide');
		$('.burger').toggleClass('burger__hide');
		
		
 
	});

	$('.analysis__btn').on('click', function(){
		$('.analysis-form__feeld').toggleClass('feeld__hide');
	});

	$('.analysis__btn').on('click', function(event){
		event.preventDefault();
	});

	// Отключение кнопок отправления форм

	$('.social__btns').on('click', function(event){
		event.preventDefault();
	});


	$('.footer__form').on('click', function(event){
		event.preventDefault();
	});

	$('analysis-form__btn').on('click', function(event){
		event.preventDefault();
	});

	


	// анимация скролла
	
	$('.home__scroll').on('click', function(event) {
		let home = $('.providing-block').offset().top;
		
		 $('body,html').animate({scrollTop: home}, 1000);
		
		
	});

	$('.aboutus__scroll').on('click', function(event) {
		let aboutus = $('.aboutus-block').offset().top;
		
		 $('body,html').animate({scrollTop: aboutus}, 1000);
		
		
	});

	$('.approch__scroll').on('click', function(event) {
		let approch = $('.approch-block').offset().top;
		
		 $('body,html').animate({scrollTop: approch}, 1000);
		
		
	});

	$('.work__scroll').on('click', function(event) {
		let approch = $('.work-block').offset().top;
		
		 $('body,html').animate({scrollTop: approch}, 1000);
		
		
	});

	$('.consultation__scroll').on('click', function(event) {
		let analysis = $('.analysis-block').offset().top;
		$('body,html').animate({scrollTop: analysis}, 1000);
	});

	$('.scroll__top').on('click', function(event) {
		let scrTop = $('.menu-block').offset().top;
		$('body,html').animate({scrollTop: scrTop}, 1000);
	});

	$('.scroll__down').on('click', function(event) {
		let scrDown = $('.footer').offset().top;
		$('body,html').animate({scrollTop: scrDown}, 1000);
	})

	


});

	