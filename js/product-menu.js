function rotateArrow() {

	/*quando o mouse focar no conteudo do botao dropdown*/
	$('.dropbtn').mouseover(function() {
		$('.arrow').css({'transform': 'rotate(180deg)', 'transition': 'all .20s ease-out'});
	});	

	$('.dropbtn').mouseout(function() {
		$('.arrow').css({'transform': 'rotate(360deg)', 'transition': 'all .20s ease-out'});
	});	


	/*quando o mouse focar no conteudo do dropdown */
	$('.dropdown-content').mouseover(function() {
		$('.arrow').css({'transform': 'rotate(180deg)', 'transition': 'all .20s ease-out'});
	});
	
	$('.dropdown-content').mouseout(function() {
		$('.arrow').css({'transform': 'rotate(360deg)', 'transition': 'all .20s ease-out'});
	});	
}

function showDropdown() {
	$('.dropbtn').mouseover(function() {
		$('.dropdown-content').css({'display':'block'});
	});

	$('.dropbtn').mouseout(function() {
		$('.dropdown-content').css({'display':'none'});
	});

	$('.dropdown-content').mouseover(function() {
		$('.dropdown-content').css({'display':'block'});
	});

	$('.dropdown-content').mouseout(function() {
		$('.dropdown-content').css({'display':'none'});
	});	

}


/*executando a funcao*/
showDropdown();
rotateArrow();