$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100 ) {
      $("header").addClass("header2");
      $(".bloque-inicio").addClass("bloque-inicio2");
    } else {
      $("header").removeClass("header2");
      $(".bloque-inicio").removeClass("bloque-inicio2");
    }
  });
});

