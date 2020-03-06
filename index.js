import Rellax from 'rellax';
('use strict');
document.addEventListener('DOMContentLoaded', start);

document.addEventListener('scroll', readScroll);


function start() {
	var rellax = new Rellax('.rellax');
	console.log('Connection between the DOM and the Script was successfull! Nice 😎');
	document.querySelector('.button_container').addEventListener('click', menuOpen);
	document.querySelectorAll('ul li a span').forEach((links) => {
		links.addEventListener('click', menuOpen);
	});

	document.addEventListener(
		'scroll',
		function() {
			let scrollTop = document.documentElement['scrollTop'] || document.body['scrollTop'];
			let scrollBottom =
				(document.documentElement['scrollHeight'] || document.body['scrollHeight']) -
				document.documentElement.clientHeight;
			let scrollPercent = scrollTop / scrollBottom * 100 + '%';
			document.getElementById('_progress').style.setProperty('--scroll', scrollPercent);
		},
		{ passive: true }
	);

}

function menuOpen() {
	document.querySelector('.button_container').classList.toggle('menu-open');
	document.querySelector('.menu').classList.toggle('open');
}

function readScroll() {
	let scrollPosY = window.pageYOffset;
	console.log(scrollPosY);

	scrollPosY >= 0 || scrollPosY < 701 ? linkChangeHome() : '';
	scrollPosY >= 701 ? portfolioLinkChange() : '';
	scrollPosY >= 3296 ? aboutLinkChange() : '';
	scrollPosY >= 2416 ? countStats() : '';
	
}

function linkChangeHome() {
	document.querySelector('.active').classList.remove('active');
	document.querySelector('.home-link').classList.add('active');
}

function portfolioLinkChange() {
	document.querySelector('.active').classList.remove('active');
	document.querySelector('.portfolio-link').classList.add('active');
}

function aboutLinkChange() {
	document.querySelector('.active').classList.remove('active');
	document.querySelector('.about-link').classList.add('active');
}


function countStats() {
	// number count for stats, using jQuery animate
	$('.counting').each(function() {
		var $this = $(this),
			countTo = $this.attr('data-count');

		$({ countNum: $this.text() }).animate(
			{
				countNum: countTo
			},
			{
				duration: 2000,
				easing: 'linear',
				step: function() {
					$this.text(Math.floor(this.countNum));
				},
				complete: function() {
					$this.text(this.countNum);
					//alert('finished');
				}
			}
		);
	});
}

