$(document).ready(function () {
    // swiper
    const swiper = new Swiper(".swiper", {
        // Optional parameters
        // 左右切換slider(預設值)
        direction: "horizontal",
        speed: 700,
        loop: true,
        // 自動播放
        autoplay: {
          delay: 2000
        },
    
        // If we need pagination
        pagination: {
          el: ".swiper-pagination"
        },
    
        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
      });

      $('.list>li>a').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('.listDetail').slideToggle();
        $(this).parent().siblings().find('.listDetail').slideUp();
    });

    // backtotop
    function showBtnCondition() {
        if ($(this).scrollTop() > 200) {
            $('.backtotop').fadeIn();
            }else{
                $('.backtotop').fadeOut();
            }
        }
        $(window).scroll(showBtnCondition);
    $(".backtotop").click(function (e) {
        e.preventDefault();
        $("html,body").animate( {
            scrollTop: 0
          },
          500);
      });
});