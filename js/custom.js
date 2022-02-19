$(function(){
//Banner slider
$('.banner-content-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows:false,
  });
  //Service slider
  $('.service-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  });

  //Blog slider
  $('.blog-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    centerMode:true,
    centerPadding:false,
    prevArrow:'.left',
    nextArrow:'.right',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  //Brand slider
  $('.brand-main').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  });
  
  //Project
  $('.venobox').venobox();

  //MixitUp
  var containerEl = document.querySelector('.project-main');
  var mixer = mixitup(containerEl);

  //CounterUp js
  $('.counter').counterUp({
    delay: 10,
    time: 2000,
  });

});