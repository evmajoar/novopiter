var $slider = $( '.slider' );

if ( typeof $.fn.slick === 'function' ) {
  $slider.each( function () {

    let $that = $( this );

    // Отзывы
    if ( $that.hasClass( 'presentation__list' ) ) {
      $that.slick({
        mobileFirst: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        arrows: true,
        prevArrow: $( '.presentation__arrow--prev' ),
        nextArrow: $( '.presentation__arrow--next' ),
        dots: true,
        appendDots: $( '.presentation__dots' ),
        lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 1200,
            settings: 'unslick'
          }
        ]
      });

      // $that.find( '.slick-current' ).index();
      // console.log($that.find( '.slick-current' ).index());
    }

    // Отзывы
    if ( $that.hasClass( 'reviews__list' ) ) {
      $that.slick({
        mobileFirst: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        arrows: true,
        prevArrow: $( '.reviews__arrow--prev' ),
        nextArrow: $( '.reviews__arrow--next' ),
        dots: true,
        appendDots: $( '.reviews__dots' ),
        lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      });
    }

    // Партнёры
    if ( $that.hasClass( 'partners__list' ) ) {
      $that.slick({
        mobileFirst: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable: false,
        arrows: true,
        prevArrow: $( '.partners__arrow--prev' ),
        nextArrow: $( '.partners__arrow--next' ),
        dots: true,
        appendDots: $( '.partners__dots' ),
        lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 6
            }
          }
        ]
      });
    }

  } );
}

$slider.css('visibility', 'visible');