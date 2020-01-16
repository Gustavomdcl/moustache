export default class App {
	constructor(callback=function(){}){
		this.animation = 600;

		this.MenuOpener();
		this.BannerAnimation();
		this.SearchCheck();
		this.CarrosselInteraction();
		this.FormSetup();
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
	CarrosselInteraction(){
		$('.carrossel').each(function(i){
			let App = this;
			let $carrossel = $(this);
			let $nav = $carrossel.find('nav');
			App.current = 0;
			let count = 0;
			$carrossel.find('.vehicle').each(function(j){
				let $vehicle = $(this);
				$vehicle.addClass('vehicle-'+j);
				count++;
			}).promise().done(function(){
				(count==1)?null:$nav.css('visibility','initial');
				NavSetup($carrossel,$nav,count,App);
			});
		});
		function NavSetup($carrossel,$nav,count,App){
			let $ul = $nav.find('ul');
			$ul.empty();
			for (let i = 0; i < count; i++) {
				$ul.append(`<li><a class="nav-${i}" data-vehicle="${i}" href="#"></a></li>`);
				$carrossel.find('.nav-'+i).click(function(e){
					e.preventDefault();
					let vehicle = Number($(this).data('vehicle'));
					CarrosselNavigate($carrossel,vehicle,App);
				});
			}

			let $backward = $nav.find('.backward');
			$backward.click(function(e){
				e.preventDefault();
				if(App.current==0){
					CarrosselNavigate($carrossel,count-1,App);
				} else {
					CarrosselNavigate($carrossel,App.current-1,App);
				}
			});
			let $forward = $nav.find('.forward');
			$forward.click(function(e){
				e.preventDefault();
				if(App.current==count-1){
					CarrosselNavigate($carrossel,0,App);
				} else {
					CarrosselNavigate($carrossel,App.current+1,App);
				}
			});
			CarrosselNavigate($carrossel,App.current,App);
		}
		function CarrosselNavigate($carrossel,i,App){
			let $vehicle = $carrossel.find('.vehicle-'+i);
			$('.show').removeClass('show');
			$vehicle.addClass('show');

			let $nav = $carrossel.find('.nav-'+i);
			$('.active').removeClass('active');
			$nav.addClass('active');

			App.current = i;
		}
	}
	FormSetup(){
		$.extend($.validator.messages, {
			required: "*O campo é obrigatório",
			remote: "Ajuste o campo",
			email: "Insira um email válido."
		});
		var SPMaskBehavior = function (val) {
			return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
		}, spOptions = {
			onKeyPress: function(val, e, field, options) {
				field.mask(SPMaskBehavior.apply({}, arguments), options);
			}
		};

		$("#send-data").validate({
			errorPlacement: function(error, element) {
				element.closest('.form-value').find('.form-message').append(error);
			},
			rules: {
				zipcode: {
					minlength: 9
				},
				birthday: {
					minlength: 10
				},
				email: {
					email: true
				},
				phone: {
					minlength: 14
				}
			},
			messages: {
				zipcode: {
					minlength: "Insira no mínimo 8 números"
				},
				birthday: {
					minlength: "Sua data deve ser DD/MM/AAAA"
				},
				phone: {
					minlength: "Insira no mínimo 10 números"
				}
			},
			submitHandler: function(form) {
				loadingWait('open');
				form.submit();
			}
		});

		$('#phone').mask(SPMaskBehavior, spOptions);
		$('#zipcode').mask('00000-000', {reverse: true});
		$('#birthday').mask('00/00/0000', {reverse: true});
	}
}