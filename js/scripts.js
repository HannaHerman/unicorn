$('.featured-articles__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false
  });
  $('.clients__slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    variableWidth: true,
  });
  
$('.filtering').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
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

var filtered = false;

$('.js-filter').on('click', function(){
  if (filtered === false) {
    $('.filtering').slick('slickFilter',':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.filtering').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }
});
$('.blog__slider .container').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true
});