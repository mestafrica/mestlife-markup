$(document).on('ready', function(){
	$('#feed-container').addClass('open');
	$(".mitem").on('click', function(){
		if ($(this).hasClass('is-active')) {return;}
		$(".mitem").each(function(i){
			$(this).removeClass('is-active');
		});
		$(this).addClass('is-active');
	})
})