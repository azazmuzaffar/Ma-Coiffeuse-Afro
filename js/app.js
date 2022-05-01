/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>>>>>>> Start <<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */

(function () {
  var headings = ["Devenez <span>indépendant.e</span>,", "Poursuivez <span>votre passion</span>,", "Valorisez <span>votre talent</span>,"],
    i = 0;
  setInterval(function () {
    $("#headings").fadeOut(function () {
      $(this)
        .html(headings[(i = (i + 1) % headings.length)])
        .fadeIn();
    });
  }, 3000);
})();

var $slickEl = $(".timings");

$slickEl.slick({
  focusOnSelect: true,
  centerPadding: "0px",
  dots: false,
  arrows: true,
  prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  infinite: false,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>>>>>>>>> End <<<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */
