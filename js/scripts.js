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
  
// portfolio

$('.portfolio__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  infinite: true,
  centerMode: true
  });

var filtered = false;

$('.view-art').on('click', function() {
  $('.portfolio__slider').slick('slickFilter',$('.art').parent().parent());
  $('.active').removeClass('active');
  $('.view-art').addClass('active');
  filtered = true;
});

$('.view-mystery').on('click', function() {
  $('.portfolio__slider').slick('slickFilter',$('.mystery').parent().parent());
  $('.active').removeClass('active');
  $('.view-mystery').addClass('active');
  $('.view-art').addClass('inactive');
  $('.view-illusion').addClass('inactive');
  $('.view-travel').addClass('inactive');
  $('.view-paintings').addClass('inactive');
  filtered = true;
});

$('.view-illusion').on('click', function() {
  $('.portfolio__slider').slick('slickFilter',$('.illusion').parent().parent());
  $('.active').removeClass('active');
  $('.view-illusion').addClass('active');
  filtered = true;
});
$('.view-travel').on('click', function() {
  $('.portfolio__slider').slick('slickFilter',$('.travel').parent().parent());
  $('.active').removeClass('active');
  $('.view-travel').addClass('active');
  filtered = true;
});
$('.view-paintings').on('click', function() {
  $('.portfolio__slider').slick('slickFilter',$('.paintings').parent().parent());
  $('.active').removeClass('active');
  $('.view-paintings').addClass('active');
  filtered = true;
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