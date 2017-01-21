console.clear();

$(document).ready(function() {
	$('.title')
		.velocity({ opacity: [1, 'ease'], fontSize: [parseInt($('.title').css('font-size')) + 10, 'spring']}, { duration: 2000 })
})
