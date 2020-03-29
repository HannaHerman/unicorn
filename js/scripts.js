// burger menu
$(document).ready(function () {
  $('.main-header__burger').click(function (event) {
    $('.main-header__burger,.main-header__nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

// scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// featured articles
$('.featured-articles__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  prevArrow: '.featured-articles__slick-prev',
  nextArrow: '.featured-articles__slick-next',
  responsive: [
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
    }
  ]
});
$('.featured-articles__slider').on('afterChange', function () {
  console.log($('.featured-articles__slider').slick('slickCurrentSlide'));
  var currentSlide = $('.featured-articles__slider').slick('slickCurrentSlide');
  if (currentSlide == 0) {
    $('.featured-articles__slick-prev').hide();
    $('.featured-articles__slick-next').show();
  }
  else if (currentSlide == 3) {
    $('.featured-articles__slick-next').hide();
    $('.featured-articles__slick-prev').show();
  }

  if (currentSlide > 0 && currentSlide < 3) {
    $('.featured-articles__slick-prev').show();
    $('.featured-articles__slick-next').show();
  }
});
$(document).ready(function () {
  var currentSlide = $('.featured-articles__slider').slick('slickCurrentSlide');
  if (currentSlide == 0) {
    $('.featured-articles__slick-prev').hide();
  }
  else if (currentSlide == 3) {
    $('.featured-articles__slick-next').hide();
  }
});

// clients
$('.clients__slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  infinite: false,
  prevArrow: '.clients__slick-prev',
  nextArrow: '.clients__slick-next',
  responsive: [
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});
$('.clients__slider').on('afterChange', function () {
  console.log($('.clients__slider').slick('slickCurrentSlide'));
  var currentSlide = $('.clients__slider').slick('slickCurrentSlide');
  if (currentSlide == 0) {
    $('.clients__slick-prev').hide();
    $('.clients__slick-next').show();
  }
  else if (currentSlide == 5) {
    $('.clients__slick-next').hide();
    $('.clients__slick-prev').show();
  }

  if (currentSlide > 0 && currentSlide < 5) {
    $('.clients__slick-prev').show();
    $('.clients__slick-next').show();
  }
});
$(document).ready(function () {
  var currentSlide = $('.clients__slider').slick('slickCurrentSlide');
  if (currentSlide == 0) {
    $('.clients__slick-prev').hide();
  }
  else if (currentSlide == 5) {
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
  centerMode: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        dots: false,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        dots: false,
      }
    }
  ]
});

var filtered = false;
var previousPram = '.all';

function filterSlides(filterParam) {
  if (previousPram.localeCompare(filterParam) != 0) {
    $('.portfolio__slider').slick('slickUnfilter');
    filtered = false;
  }

  if (filtered === false) {
    $('.portfolio__slider').slick('slickFilter', $(filterParam).parent().parent());
    filtered = true;
  } else {
    $('.portfolio__slider').slick('slickUnfilter');
    filtered = false;
  }
}

$('.view-art').on('click', function () {
  filterSlides('.art');
});

$('.view-mystery').on('click', function () {
  filterSlides('.mystery');
});

$('.view-illusion').on('click', function () {
  filterSlides('.illusion');
});

$('.view-travel').on('click', function () {
  filterSlides('.travel');
});

$('.view-paintings').on('click', function () {
  filterSlides('.paintings');
});

$('.view-all').on('click', function () {
  filterSlides('.all');
});

// blog
$('.blog-articles__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  infinite: false,
  prevArrow: '.blog-articles__slick-prev',
  nextArrow: '.blog-articles__slick-next',
  responsive: [
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
    }
  ]
});
$('.blog-articles__slider').on('afterChange', function () {
  console.log($('.blog-articles__slider').slick('slickCurrentSlide'));
  var currentSlide = $('.blog-articles__slider').slick('slickCurrentSlide');
  if (currentSlide == 0) {
    $('.blog-articles__slick-prev').hide();
    $('.blog-articles__slick-next').show();
  }
  else if (currentSlide == 3) {
    $('.blog-articles__slick-next').hide();
    $('.blog-articles__slick-prev').show();
  }

  if (currentSlide > 0 && currentSlide < 3) {
    $('.blog-articles__slick-prev').show();
    $('.blog-articles__slick-next').show();
  }
});
$(document).ready(function () {
  var currentSlide = $('.blog-articles__slider').slick('slickCurrentSlide');
  if (currentSlide == 0) {
    $('.blog-articles__slick-prev').hide();
  }
  else if (currentSlide == 3) {
    $('.blog-articles__slick-next').hide();
  }
});
