
$(function(){
  $("#js-toggleMenuBtn").on("click", function() {
    $("#js-toggleMenuContent").slideToggle().toggleClass('js-is-toggleMenuOpen');
    $("header").toggleClass('js-is-toggleMenuOpen');
  });
});

// スクロールでフェードイン
$(window).scroll(function (){
  $('.fadein').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).addClass('scrollin');
          }
      });
  });
