(function ($) {
  "use strict";
  // carousel code
  $(document).ready(function () {
    var owl = $(".product-carousel");
    owl.owlCarousel({
      autoplay: false,
      smartSpeed: 1500,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"><i>',
        '<i class="fa fa-angle-right" aria-hidden="true"><i>',
      ],
      margin: 10,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        960: {
          items: 4,
        },
        1200: {
          items: 6,
        },
      },
    });
    // owl.on("mousewheel", ".owl-stage", function (e) {
    //   if (e.deltaY > 0) {
    //     owl.trigger("next.owl");
    //   } else {
    //     owl.trigger("prev.owl");
    //   }
    //   e.preventDefault();
    // });
  });
})(jQuery);
