$(document).ready(function(){
$('.slider').slick({
  centerMode: true,
  infinite: false,
  slidesToShow: 3,
  arrows: true,
  initialSlide: 1,
  centerPadding: '0px',
  prevArrow: $('.article-prev'),
  nextArrow: $('.article-next'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});
