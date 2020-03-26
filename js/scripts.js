// featured articles
$('.featured-articles__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  prevArrow: '.featured-articles__slick-prev',
  nextArrow: '.featured-articles__slick-next',
  });
  $('.featured-articles__slider').on('afterChange', function(){
    console.log($('.featured-articles__slider').slick('slickCurrentSlide'));
    var currentSlide = $('.featured-articles__slider').slick('slickCurrentSlide');
  if(currentSlide==0)
  {
     $('.featured-articles__slick-prev').hide();
     $('.featured-articles__slick-next').show();
  }
  else if(currentSlide==3)
  {
  $('.featured-articles__slick-next').hide();
  $('.featured-articles__slick-prev').show();
  }
  
  if(currentSlide>0 && currentSlide<3)
  {
     $('.featured-articles__slick-prev').show();
     $('.featured-articles__slick-next').show();
  }
  });
  $(document).ready(function(){
  var currentSlide = $('.featured-articles__slider').slick('slickCurrentSlide');
  if(currentSlide==0)
  {
     $('.featured-articles__slick-prev').hide();
  }
  else if(currentSlide==3)
  {
  $('.featured-articles__slick-next').hide();
  }
  });
  
  // clients
  $('.clients__slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
    infinite: false,
  prevArrow: '.clients__slick-prev',
  nextArrow: '.clients__slick-next',
  });
  $('.clients__slider').on('afterChange', function(){
    console.log($('.clients__slider').slick('slickCurrentSlide'));
    var currentSlide = $('.clients__slider').slick('slickCurrentSlide');
  if(currentSlide==0)
  {
     $('.clients__slick-prev').hide();
     $('.clients__slick-next').show();
  }
  else if(currentSlide==6)
  {
  $('.clients__slick-next').hide();
  $('.clients__slick-prev').show();
  }
  
  if(currentSlide>0 && currentSlide<6)
  {
     $('.clients__slick-prev').show();
     $('.clients__slick-next').show();
  }
  });
  $(document).ready(function(){
  var currentSlide = $('.clients__slider').slick('slickCurrentSlide');
  if(currentSlide==0)
  {
     $('.clients__slick-prev').hide();
  }
  else if(currentSlide==6)
  {
  $('.clients__slick-next').hide();
  }
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

// blog
$('.blog-articles__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  infinite: false,
  prevArrow: '.blog-articles__slick-prev',
  nextArrow: '.blog-articles__slick-next',
});
$('.blog-articles__slider').on('afterChange', function(){
  console.log($('.blog-articles__slider').slick('slickCurrentSlide'));
  var currentSlide = $('.blog-articles__slider').slick('slickCurrentSlide');
if(currentSlide==0)
{
   $('.blog-articles__slick-prev').hide();
   $('.blog-articles__slick-next').show();
}
else if(currentSlide==3)
{
$('.blog-articles__slick-next').hide();
$('.blog-articles__slick-prev').show();
}

if(currentSlide>0 && currentSlide<3)
{
   $('.blog-articles__slick-prev').show();
   $('.blog-articles__slick-next').show();
}
});
$(document).ready(function(){
var currentSlide = $('.blog-articles__slider').slick('slickCurrentSlide');
if(currentSlide==0)
{
   $('.blog-articles__slick-prev').hide();
}
else if(currentSlide==3)
{
$('.blog-articles__slick-next').hide();
}
});