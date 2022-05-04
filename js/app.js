/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>>>>>>> Start <<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */

/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>>>>>>> Navbar <<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */

/* Mobile Menu Open/Closed */
$(document).ready(function () {
  $("#menu.slide-bottom").click(function () {
    $(this).toggleClass("open");
    $(".navbar ul:first-of-type").slideToggle(250);
    $(".navbar").toggleClass("open");
  });
});

/* Mobile Menu Open/Closed Slide Right (Dashboard) */
$(document).ready(function () {
  $("#menu.slide-right").click(function () {
    $(this).toggleClass("open");
    $(".navbar.slide-right ul:first-of-type").animate({ width: "toggle" }, 200);
    $(".navbar").toggleClass("open");
  });
});

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    $(".-profile li img").click(function () {
      $(".-my-options").fadeToggle(200);
    });
  }
}

var x = window.matchMedia("(max-width: 1330px)");
myFunction(x);

$(".messages").animate({ scrollTop: $(".messages").prop("scrollHeight") }, 400);

/* $(".-profile").hover(function () {
  $(".-my-options").css("visibility", "visible");
  $(".-my-options").css("opacity", "1");
}); */

/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>>>>>>> Banner <<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */

/* Fade out and fade in the text... */
(function () {
  var headings = ["Devenez <br/> <span>indépendant.e</span>,", "Poursuivez <br/> <span>votre passion</span>,", "Valorisez <br/> <span>votre talent</span>,"],
    i = 0;
  setInterval(function () {
    $("#headings").fadeOut(function () {
      $(this)
        .html(headings[(i = (i + 1) % headings.length)])
        .fadeIn();
    });
  }, 3000);
})();

/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>>>>> Dashboard <<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */

/* Available timing Slick Slider */
var $slickEl = $(".timings");

$slickEl.slick({
  focusOnSelect: true,
  dots: false,
  arrows: true,
  prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  infinite: false,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1330,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>>>>>>>>> End <<<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */
