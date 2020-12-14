
// $("body").on('click', '[href*="#"]', function(e){
//   var fixed_offset = 100;
//     $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
//     e.preventDefault();
//     });

$( document ).ready(function() {
  $('.postcards__sider').slick({
    dots: false,
    infinite: true,  
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,    
          arrow: false             
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          arrow: false,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          arrow: false,
          slidesToScroll: 1
        }
      }    
    ]
  });
});