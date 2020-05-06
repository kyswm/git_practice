
$(function(){
  $("#js-toggleMenuBtn").on("click", function() {
    $("#js-toggleMenuContent").slideToggle().toggleClass('js-is-toggleMenuOpen');
    $("header").toggleClass('js-is-toggleMenuOpen');
  });
});
