$(document).ready(function() {
    // Menu responsive
    $('.burger-icon').click(function() {
        $('nav').slideToggle();
    });

    var widthWindow = $(window).width();

    if (widthWindow < 991) {
        $('nav a').click(function() {
            $('nav').css({'display': 'none'});
        });
    }

    // Scroll suave hacia elementos con ID
    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
      }, 900);
        return false;
      }
    }
  });

});
