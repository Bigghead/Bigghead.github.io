 $(document).ready(function () {
      $(".button-collapse").sideNav();
      // all images loaded
      $('.wrapper').addClass('animated bounceInDown show');
      $('.top-nav').addClass('animated bounceInUp show');
      $('.parallax').parallax();
      $('ul.tabs').tabs('select_tab', 'tab_id',
        {
          onShow: function (tab) {
            $('.carousel').carousel();
          }
        });
      $('.about-mes').flowtype({
        minimum: 500,
        maximum: 1200,
        minFont: 16,
        maxFont: 24
      });

      $('a[href*=#]').click(function (event) {
        $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        event.preventDefault();
      });

      window.sr = ScrollReveal();
      sr.reveal('.port-item1', { duration: 2000, viewFactor: 0.3 }, 100);
      sr.reveal('.port-item2', { duration: 2000, viewFactor: 0.3 }, 100);
      sr.reveal('.port-item3', { duration: 2000, viewFactor: 0.3 }, 100);
      sr.reveal('.port-item4', { duration: 2000, viewFactor: 0.3 }, 100);
      sr.reveal('.port-item5', { duration: 2000, viewFactor: 0.3 }, 100);

    });