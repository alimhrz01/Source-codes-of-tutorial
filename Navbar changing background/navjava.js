$(window).scroll(function () {
  if ($(window).scrollTop() >= 150) {
    $(".header").css("background", "#FFF");
  } else {
    $(".header").css("background", "transparent");
  }
});
