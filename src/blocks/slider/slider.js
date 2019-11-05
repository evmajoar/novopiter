if ( typeof $.fn.slick === 'function' ) {
  $( '.slider' ).each( function () {

    let $that = $( this );

    if ( $that.hasClass( 'partners__list' ) ) {
      $that.slick({
        mobileFirst: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: false,
        arrows: true,
        prevArrow: $( '.slider__button--prev' ),
        nextArrow: $( '.slider__button--next' ),
        dots: true,
        appendDots: $( '.slider__dots' ),
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