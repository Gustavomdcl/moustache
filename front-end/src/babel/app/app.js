export default class App {
	constructor(callback=function(){}){
		this.animation = 600;

		this.MenuOpener();
		this.BannerAnimation();
		this.SearchCheck();
	}
	MenuOpener(){
		let $opener = $('.menu-handler');
		let $menu = $('#header').find('nav');
		$opener.each(function(i){
			$(this).click(function(e){
				e.preventDefault();
				$menu.toggleClass('open');
			});
		});
	}
	BannerAnimation(){
		let App = this;
		let $lettering = $('.banner').find('.lettering');
		setTimeout(() => {
			$lettering.addClass('animate');
		}, App.animation);
	}
	SearchCheck(){
		let App = this;
		let $search = $('#search');
		let $input = $search.find('input');
		$search.submit(function(e){
			if($input.val()==''){
				e.preventDefault();
				$search.addClass('cancel');
				setTimeout(() => {
					$search.removeClass('cancel');
				}, App.animation);
			}
		});
	}
}