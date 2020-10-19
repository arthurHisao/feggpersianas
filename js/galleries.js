$(document).ready(function() {
    $('.image-link').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {enabled: true} /*Esta opção habilita as setinhas para trocar as imagens*/
    });
});