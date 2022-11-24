/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>>>>>>> Start <<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */

$(document).ready(function() {
  $('#select').niceSelect();

  let selected = $(".nice-select .list .option.selected").attr('data-value');
  selected = parseInt(selected);
  let btn = $(".form-connexion .btn");

  if (selected > 0)  {
    btn.removeClass("disabled");
  } else {
    btn.addClass("disabled");
  }

  $(".nice-select .list .option").click(function(){
    let selected = $(this).attr('data-value');
    let btn = $(".form-connexion .btn");
  
    selected = parseInt(selected);
    
    if (selected > 0)  {
      btn.removeClass("disabled");
    } else {
      btn.addClass("disabled");
    }
  });
});



