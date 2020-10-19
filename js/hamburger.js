    function menu() {
        $('.menu-btn').on('click', function(event) {
            if(!($('.menu-btn').hasClass('open'))) {
                $('.menu-btn').toggleClass('open');
                $('.bar').css({'transform': 'translateY(520px)'});
                event.stopPropagation(); // evita que o menu continue existindo apos fechar   
                $('.transparent-div').css({'display': 'block'});
            } else {
                $('.bar').css({'transform': 'translateX(0px)'}); 
                $('.transparent-div').css({'display': 'none'});
                $('.menu-btn').toggleClass('open');
            }
        });  

        
        $('.transparent-div').click(function() {
            $('.bar').css({'transform': 'translateX(0px)'}); 
            $('.menu-btn').toggleClass('open');
            $('.transparent-div').css({'display': 'none'});

        });
    };

    // executando a funcao
    menu();